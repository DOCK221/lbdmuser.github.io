(() => {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenu = document.getElementById("closeMenu");

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const openMenu = () => {
    mobileNav.hidden = false;
    mobileNav.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const hideMenu = () => {
    mobileNav.classList.remove("open");
    mobileNav.hidden = true;
    document.body.style.overflow = "";
  };

  menuBtn?.addEventListener("click", openMenu);
  closeMenu?.addEventListener("click", hideMenu);
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", hideMenu);
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  // Pause videos when offscreen to stay light
  const videos = document.querySelectorAll("video");
  if ("IntersectionObserver" in window && videos.length) {
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );
    videos.forEach((video) => vio.observe(video));
  }
})();
