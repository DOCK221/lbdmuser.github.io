/* Burger Coffee — online ordering (Uber Eats style) + Wave */

(() => {
  "use strict";

  const WAVE_URL = "https://pay.wave.com/m/M_sn_emG7ozKw9upn";
  const WA_NUMBER = "221781508788";

  const MENU = [
    {
      id: "smash-classic",
      cat: "smashs",
      name: "Smash classic",
      desc: "Pain brioché, steak de bœuf, cheddar, sauce maison, oignons grillés.",
      price: 3000,
      img: "assets/dishes/smash-classic.jpg",
    },
    {
      id: "smash-double",
      cat: "smashs",
      name: "Smash double",
      desc: "Pain brioché, double steak, double cheddar, sauce maison, oignons confits.",
      price: 4000,
      img: "assets/dishes/smash-double.jpg",
    },
    {
      id: "smash-bacon",
      cat: "smashs",
      name: "Smash bacon halal",
      desc: "Pain brioché, steak, bacon, cheddar, sauce maison, oignons rouges, roquette.",
      price: 4000,
      img: "assets/dishes/smash-bacon.jpg",
    },
    {
      id: "burger-poulet",
      cat: "burgers",
      name: "Burger poulet",
      desc: "Pain brioché, steak de poulet, cheddar, sauce à l’ail, oignons, choux, carottes, roquette.",
      price: 3500,
      img: "assets/dishes/burger-poulet.jpg",
    },
    {
      id: "burger-chef",
      cat: "burgers",
      name: "Burger du chef",
      desc: "Pain brioché, steak de bœuf, cheddar, sauce maison, guacamole.",
      price: 3500,
      img: "assets/dishes/smash-classic.jpg",
    },
    {
      id: "menu-burger",
      cat: "burgers",
      name: "Menu Burger",
      desc: "Burger au choix + frites + boisson.",
      price: 5000,
      img: "assets/dishes/smash-double.jpg",
    },
    {
      id: "sandwich-poulet",
      cat: "sandwichs",
      name: "Sandwich poulet",
      desc: "Baguette fraîche, blanc de poulet, roquette, emmental, sauce à l’ail.",
      price: 3500,
      img: "assets/dishes/sandwich-poulet.jpg",
    },
    {
      id: "sandwich-boeuf",
      cat: "sandwichs",
      name: "Sandwich bœuf",
      desc: "Baguette fraîche, steak de bœuf, sauce algérienne, guacamole.",
      price: 2500,
      img: "assets/dishes/sandwich-poulet.jpg",
    },
    {
      id: "linguine",
      cat: "plats",
      name: "Linguine crevette",
      desc: "Pâtes linguine aux crevettes grillées, poivrons et herbes fraîches.",
      price: 4000,
      img: "assets/dishes/linguine-crevette.jpg",
    },
    {
      id: "plat-jour",
      cat: "plats",
      name: "Plat du jour",
      desc: "Fait maison avec des produits frais — suggestion du chef.",
      price: 3000,
      img: "assets/dishes/linguine-crevette.jpg",
    },
    {
      id: "salade-tropicale",
      cat: "salades",
      name: "Salade tropicale",
      desc: "Salade verte, poulet, pomme, mangue, tomate, avocat, sauce cocktail.",
      price: 5000,
      img: "assets/dishes/salade-tropicale.jpg",
    },
    {
      id: "salade-chef",
      cat: "salades",
      name: "Salade du chef",
      desc: "Selon les envies de notre chef cuisinier, chaque jour.",
      price: 4000,
      img: "assets/dishes/salade-tropicale.jpg",
    },
    {
      id: "petit-dej",
      cat: "breakfast",
      name: "Formule Petit Déjeuner",
      desc: "Jus d’orange + café ou thé + croissant ou pain chocolat.",
      price: 3000,
      img: "assets/dishes/petit-dejeuner.jpg",
    },
    {
      id: "petit-dej-gourmand",
      cat: "breakfast",
      name: "Petit Déjeuner Gourmand",
      desc: "Jus + café/thé + viennoiserie + œuf jambon fromage ou carpaccio tomates.",
      price: 5000,
      img: "assets/dishes/petit-dejeuner.jpg",
    },
    {
      id: "caramel-macchiato",
      cat: "coffee",
      name: "Caramel macchiato",
      desc: "Espresso, lait onctueux et caramel.",
      price: 3500,
      img: "assets/dishes/caramel-macchiato.jpg",
    },
    {
      id: "cappuccino",
      cat: "coffee",
      name: "Cappuccino",
      desc: "Moussant, intense, parfait pour la terrasse.",
      price: 3000,
      img: "assets/dishes/caramel-macchiato.jpg",
    },
    {
      id: "expresso",
      cat: "coffee",
      name: "Expresso",
      desc: "Court et intense.",
      price: 1000,
      img: "assets/dishes/caramel-macchiato.jpg",
    },
    {
      id: "the-glace",
      cat: "boissons",
      name: "Thé glacé maison",
      desc: "Pêche, passion, fraise, citron ou mangue.",
      price: 2500,
      img: "assets/dishes/caramel-macchiato.jpg",
    },
    {
      id: "limonade",
      cat: "boissons",
      name: "Limonade glacée",
      desc: "Citron, pêche, passion, fraise ou mangue.",
      price: 3000,
      img: "assets/dishes/caramel-macchiato.jpg",
    },
    {
      id: "jus-orange",
      cat: "boissons",
      name: "Jus d’orange pressé",
      desc: "Fraîchement pressé.",
      price: 2500,
      img: "assets/dishes/petit-dejeuner.jpg",
    },
  ];

  const grid = document.getElementById("orderGrid");
  const cartBody = document.getElementById("cartBody");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartFabTotal = document.getElementById("cartFabTotal");
  const cartCount = document.getElementById("cartCount");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const cartPanel = document.getElementById("cartPanel");
  const cartFab = document.getElementById("cartFab");
  const cartClose = document.getElementById("cartClose");
  const checkoutDialog = document.getElementById("checkoutDialog");
  const checkoutForm = document.getElementById("checkoutForm");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const addressField = document.getElementById("addressField");

  /** @type {Record<string, number>} */
  let cart = JSON.parse(localStorage.getItem("bc_cart") || "{}");

  const formatPrice = (n) =>
    `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")} F`;

  const getItem = (id) => MENU.find((m) => m.id === id);

  const cartEntries = () =>
    Object.entries(cart)
      .map(([id, qty]) => ({ item: getItem(id), qty }))
      .filter((e) => e.item && e.qty > 0);

  const cartTotal = () =>
    cartEntries().reduce((sum, { item, qty }) => sum + item.price * qty, 0);

  const cartQty = () =>
    cartEntries().reduce((sum, { qty }) => sum + qty, 0);

  const persist = () => {
    localStorage.setItem("bc_cart", JSON.stringify(cart));
  };

  const renderMenu = (cat = "all") => {
    if (!grid) return;
    grid.innerHTML = MENU.map(
      (item) => `
      <article class="order-item" data-cat="${item.cat}" data-id="${item.id}">
        <div class="order-item__info">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="order-item__row">
            <span class="order-item__price">${formatPrice(item.price)}</span>
            <button type="button" class="order-item__add" data-add="${item.id}">Ajouter</button>
          </div>
        </div>
        <div class="order-item__media">
          <img src="${item.img}" alt="${item.name}" loading="lazy" width="220" height="220">
        </div>
      </article>`
    ).join("");

    filterCat(cat);
  };

  const filterCat = (cat) => {
    document.querySelectorAll(".order-item").forEach((el) => {
      const show = cat === "all" || el.dataset.cat === cat;
      el.classList.toggle("is-hidden", !show);
    });
  };

  const renderCart = () => {
    const entries = cartEntries();
    const total = cartTotal();
    const qty = cartQty();

    if (cartCount) cartCount.textContent = String(qty);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
    if (cartFabTotal) cartFabTotal.textContent = formatPrice(total);
    if (checkoutTotal) checkoutTotal.textContent = formatPrice(total);
    if (checkoutBtn) checkoutBtn.disabled = qty === 0;

    if (!cartBody) return;

    if (!entries.length) {
      cartBody.innerHTML =
        '<p class="cart-empty">Votre panier est vide.<br>Ajoutez des plats pour commencer.</p>';
      return;
    }

    cartBody.innerHTML = entries
      .map(
        ({ item, qty: q }) => `
      <div class="cart-line" data-id="${item.id}">
        <div class="cart-line__name">${item.name}</div>
        <div class="cart-line__price">${formatPrice(item.price * q)}</div>
        <div class="cart-line__ctrl">
          <button type="button" data-dec="${item.id}" aria-label="Retirer">−</button>
          <span>${q}</span>
          <button type="button" data-inc="${item.id}" aria-label="Ajouter">+</button>
        </div>
      </div>`
      )
      .join("");
  };

  const addToCart = (id, delta = 1) => {
    const next = (cart[id] || 0) + delta;
    if (next <= 0) delete cart[id];
    else cart[id] = next;
    persist();
    renderCart();
  };

  const openCart = () => {
    cartPanel?.classList.add("is-open");
    cartFab?.setAttribute("aria-expanded", "true");
  };

  const closeCart = () => {
    cartPanel?.classList.remove("is-open");
    cartFab?.setAttribute("aria-expanded", "false");
  };

  // Categories
  document.querySelectorAll(".order-cat").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".order-cat").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterCat(btn.dataset.cat || "all");
    });
  });

  // Menu clicks
  grid?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    addToCart(btn.dataset.add);
    openCart();
  });

  // Cart qty
  cartBody?.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    if (inc) addToCart(inc.dataset.inc, 1);
    if (dec) addToCart(dec.dataset.dec, -1);
  });

  cartFab?.addEventListener("click", openCart);
  cartClose?.addEventListener("click", closeCart);

  checkoutBtn?.addEventListener("click", () => {
    if (cartQty() === 0) return;
    checkoutTotal.textContent = formatPrice(cartTotal());
    if (typeof checkoutDialog?.showModal === "function") checkoutDialog.showModal();
    else checkoutDialog?.setAttribute("open", "");
  });

  checkoutForm?.addEventListener("change", (e) => {
    if (e.target.name === "mode") {
      const isDelivery = e.target.value === "livraison";
      addressField?.classList.toggle("is-hidden", !isDelivery);
      const input = addressField?.querySelector("input");
      if (input) input.required = isDelivery;
    }
  });

  checkoutForm?.addEventListener("submit", (e) => {
    const submitter = e.submitter;
    if (submitter?.value === "cancel") return;

    e.preventDefault();
    if (cartQty() === 0) return;

    const data = new FormData(checkoutForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const mode = String(data.get("mode") || "sur_place");
    const address = String(data.get("address") || "").trim();
    const note = String(data.get("note") || "").trim();

    if (!name || !phone) return;
    if (mode === "livraison" && !address) return;

    const modeLabel = {
      sur_place: "Sur place",
      emporter: "À emporter",
      livraison: "Livraison",
    }[mode];

    const lines = cartEntries().map(
      ({ item, qty }) => `• ${qty}× ${item.name} — ${formatPrice(item.price * qty)}`
    );

    const message = [
      "🍔 Nouvelle commande Burger Coffee",
      "",
      `Client : ${name}`,
      `Tél : ${phone}`,
      `Mode : ${modeLabel}`,
      mode === "livraison" ? `Adresse : ${address}` : null,
      note ? `Note : ${note}` : null,
      "",
      "Commande :",
      ...lines,
      "",
      `TOTAL : ${formatPrice(cartTotal())}`,
      "",
      "Paiement : Wave",
      WAVE_URL,
    ]
      .filter(Boolean)
      .join("\n");

    // Open Wave payment first, then WhatsApp confirmation
    window.open(WAVE_URL, "_blank", "noopener");

    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(wa, "_blank", "noopener");
    }, 600);

    // Clear cart after order intent
    cart = {};
    persist();
    renderCart();
    checkoutDialog?.close?.();
    closeCart();
    checkoutForm.reset();
    addressField?.classList.add("is-hidden");
  });

  renderMenu("all");
  renderCart();
})();
