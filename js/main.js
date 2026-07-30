/* Burger Coffee — interactions & immersive motion */

(() => {
  "use strict";

  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const yearEl = document.getElementById("year");
  const legalLink = document.querySelector('a[href="#mentions"]');
  const legalDialog = document.getElementById("mentions");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Cinematic hero reels (videos + photos) ---------- */
  const heroSlides = Array.from(document.querySelectorAll(".hero__slide"));
  const heroFallback = document.getElementById("heroFallback");
  const heroReels = document.getElementById("heroReels");
  let heroIndex = 0;
  let heroFailed = 0;
  let photoTimer = null;

  const loadHeroVideo = (video) => {
    if (video.dataset.loaded === "1") return Promise.resolve(video);
    return new Promise((resolve, reject) => {
      const src = video.dataset.src;
      if (!src) return reject(new Error("missing src"));
      const onReady = () => {
        video.dataset.loaded = "1";
        cleanup();
        resolve(video);
      };
      const onError = () => {
        cleanup();
        reject(new Error("video error"));
      };
      const cleanup = () => {
        video.removeEventListener("loadeddata", onReady);
        video.removeEventListener("canplay", onReady);
        video.removeEventListener("error", onError);
      };
      video.addEventListener("loadeddata", onReady, { once: true });
      video.addEventListener("canplay", onReady, { once: true });
      video.addEventListener("error", onError, { once: true });
      video.src = src;
      video.load();
    });
  };

  const activateSlide = (index) => {
    heroSlides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle("is-active", active);
      if (slide.tagName === "VIDEO" && !active) {
        slide.pause();
        try { slide.currentTime = 0; } catch (_) { /* ignore */ }
      }
    });
    heroIndex = index;
  };

  const playHeroAt = async (index) => {
    if (!heroSlides.length) return;
    clearTimeout(photoTimer);
    const next = (index + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[next];

    if (slide.tagName === "IMG") {
      activateSlide(next);
      const duration = Number(slide.dataset.duration || 5000);
      photoTimer = setTimeout(() => playHeroAt(next + 1), duration);
      return;
    }

    try {
      await loadHeroVideo(slide);
      activateSlide(next);
      await slide.play();
    } catch (_) {
      heroFailed += 1;
      if (heroFailed >= heroSlides.length) startHeroImageFallback();
      else playHeroAt(next + 1);
    }
  };

  const startHeroImageFallback = () => {
    if (!heroFallback) return;
    clearTimeout(photoTimer);
    heroReels?.setAttribute("hidden", "");
    heroFallback.hidden = false;
    const frames = Array.from(heroFallback.querySelectorAll("img"));
    let i = 0;
    frames[0]?.classList.add("is-active");
    setInterval(() => {
      frames[i]?.classList.remove("is-active");
      i = (i + 1) % frames.length;
      frames[i]?.classList.add("is-active");
    }, 4200);
  };

  if (heroSlides.length) {
    heroSlides.forEach((slide) => {
      if (slide.tagName === "VIDEO") {
        slide.addEventListener("ended", () => playHeroAt(heroIndex + 1));
      }
    });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData;
    if (reduceMotion || saveData) startHeroImageFallback();
    else playHeroAt(0);
  }

  /* ---------- Header scroll state ---------- */
  const onScrollHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Mobile nav ---------- */
  const closeNav = () => {
    navMenu?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  navToggle?.addEventListener("click", () => {
    const open = navMenu?.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Hero reveals immediately for "wow" first paint
  requestAnimationFrame(() => {
    document.querySelectorAll(".hero [data-reveal]").forEach((el) => {
      el.classList.add("is-visible");
    });
  });

  /* ---------- Stat counters ---------- */
  const animateCount = (el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ---------- Menu filters ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter || "all";

      filterBtns.forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });

      menuCards.forEach((card, index) => {
        const category = card.dataset.category;
        const show = filter === "all" || category === filter;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          card.classList.remove("is-visible");
          card.style.setProperty("--delay", `${index * 50}ms`);
          requestAnimationFrame(() => card.classList.add("is-visible"));
        }
      });
    });
  });

  /* ---------- Reviews auto slider ---------- */
  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  const slides = track ? Array.from(track.children) : [];
  let slideIndex = 0;
  let autoTimer;

  const goToSlide = (index) => {
    if (!track || !slides.length) return;
    slideIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dotsWrap?.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === slideIndex);
      dot.setAttribute("aria-selected", i === slideIndex ? "true" : "false");
    });
  };

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Avis ${i + 1}`);
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => {
        goToSlide(i);
        restartAuto();
      });
      dotsWrap.appendChild(dot);
    });
  }

  const restartAuto = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goToSlide(slideIndex + 1), 4500);
  };

  if (slides.length > 1) {
    restartAuto();
    const slider = document.querySelector(".reviews__slider");
    slider?.addEventListener("mouseenter", () => clearInterval(autoTimer));
    slider?.addEventListener("mouseleave", restartAuto);
    slider?.addEventListener("focusin", () => clearInterval(autoTimer));
    slider?.addEventListener("focusout", restartAuto);
  }

  /* ---------- Parallax (lightweight) ---------- */
  const parallaxNodes = document.querySelectorAll(".parallax-img img, .hero__video.is-active");
  let ticking = false;

  const updateParallax = () => {
    const y = window.scrollY;
    parallaxNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - window.innerHeight / 2) * -0.04;
      if (node.matches(".hero__video")) {
        node.style.translate = `0 ${Math.min(Math.max(y * 0.08, 0), 80)}px`;
      } else if (rect.bottom > 0 && rect.top < window.innerHeight) {
        node.style.translate = `0 ${offset}px`;
      }
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateParallax);
    },
    { passive: true }
  );

  /* ---------- Magnetic-ish button micro interaction ---------- */
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.06}px, ${y * 0.08}px) scale(1.045)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });

  /* ---------- Open hours status (West Africa Time UTC+0) ---------- */
  const hoursStatus = document.querySelector(".hours__status");
  if (hoursStatus) {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Dakar",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(new Date());
    const hour = Number(parts.find((p) => p.type === "hour")?.value || 0);
    const minute = Number(parts.find((p) => p.type === "minute")?.value || 0);
    const minutes = hour * 60 + minute;
    const isOpen = minutes >= 7 * 60 + 30 || minutes < 2 * 60;
    const textNode = Array.from(hoursStatus.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
    );
    if (textNode) textNode.textContent = isOpen ? " Ouvert" : " Fermé";
    const dot = hoursStatus.querySelector(".hours__dot");
    if (dot && !isOpen) {
      dot.style.background = "#ef4444";
      dot.style.animation = "none";
    }
  }

  /* ---------- Mentions légales dialog ---------- */
  legalLink?.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof legalDialog?.showModal === "function") {
      legalDialog.showModal();
    } else {
      legalDialog?.setAttribute("open", "");
    }
  });

  /* ---------- Active nav highlight ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const match = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-current", match);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));
  }
})();
