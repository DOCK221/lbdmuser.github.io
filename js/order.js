/* Burger Coffee Saly — commande WhatsApp + Menu Burger */

(() => {
  "use strict";

  const WA_NUMBER = "221781508788";

  const MENU_BURGER_CHOICES = [
    "Burger poulet",
    "Burger du chef",
    "Smash classic",
    "Smash double",
    "Smash bacon halal",
  ];

  const MENU = [
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
      img: "assets/dishes/burger-chef.jpg",
    },
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
      id: "menu-burger",
      cat: "menus",
      name: "Menu Burger",
      desc: "Burger ou smash au choix + frites + boisson.",
      price: 5000,
      img: "assets/dishes/menu-burger.jpg",
      needsChoice: true,
    },
    {
      id: "taco-poulet",
      cat: "tacos",
      name: "Tacos poulet",
      desc: "Galette, poulet croustillant, frites, sauce fromagère.",
      price: 3000,
      img: "assets/dishes/taco-poulet.jpg",
    },
    {
      id: "taco-boeuf",
      cat: "tacos",
      name: "Tacos bœuf",
      desc: "Galette, viande hachée assaisonnée, frites, sauce algérienne.",
      price: 3000,
      img: "assets/dishes/taco-boeuf.jpg",
    },
    {
      id: "taco-mixte",
      cat: "tacos",
      name: "Tacos mixte",
      desc: "Galette, poulet & bœuf, frites, double sauce.",
      price: 3500,
      img: "assets/dishes/taco-mixte.jpg",
    },
    {
      id: "taco-merguez",
      cat: "tacos",
      name: "Tacos merguez",
      desc: "Galette, merguez épicée, frites, sauce harissa douce.",
      price: 3500,
      img: "assets/dishes/taco-merguez.jpg",
    },
    {
      id: "taco-cordon",
      cat: "tacos",
      name: "Tacos cordon bleu",
      desc: "Galette, cordon bleu, frites, sauce fromagère.",
      price: 4000,
      img: "assets/dishes/taco-cordon.jpg",
    },
    {
      id: "taco-nuggets",
      cat: "tacos",
      name: "Tacos nuggets",
      desc: "Galette, nuggets de poulet, frites, sauce barbecue.",
      price: 3500,
      img: "assets/dishes/taco-nuggets.jpg",
    },
    {
      id: "sandwich-poulet",
      cat: "plats",
      name: "Sandwich poulet",
      desc: "Baguette fraîche, blanc de poulet, roquette, emmental, sauce à l’ail.",
      price: 3500,
      img: "assets/dishes/sandwich-poulet.jpg",
    },
    {
      id: "sandwich-boeuf",
      cat: "plats",
      name: "Sandwich bœuf",
      desc: "Baguette fraîche, steak de bœuf, sauce algérienne, guacamole.",
      price: 2500,
      img: "assets/dishes/sandwich-boeuf.jpg",
    },
    {
      id: "sandwich-chef",
      cat: "plats",
      name: "Sandwich du chef",
      desc: "Selon les envies de notre chef, chaque jour.",
      price: 3000,
      img: "assets/dishes/sandwich-chef.jpg",
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
      img: "assets/dishes/plat-jour.jpg",
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
      img: "assets/dishes/salade-chef.jpg",
    },
    {
      id: "caramel-macchiato",
      cat: "boissons",
      name: "Caramel macchiato",
      desc: "Espresso, lait onctueux et caramel.",
      price: 3500,
      img: "assets/dishes/caramel-macchiato.jpg?v=3",
    },
    {
      id: "frappuccino-caramel",
      cat: "boissons",
      name: "Frappuccino caramel",
      desc: "Café glacé crémeux, caramel et mousse onctueuse.",
      price: 3500,
      img: "assets/dishes/frappuccino-caramel.jpg?v=3",
    },
    {
      id: "cappuccino",
      cat: "boissons",
      name: "Cappuccino",
      desc: "Moussant, intense, parfait pour la terrasse.",
      price: 3000,
      img: "assets/dishes/cappuccino.jpg",
    },
    {
      id: "expresso",
      cat: "boissons",
      name: "Expresso",
      desc: "Court et intense.",
      price: 1000,
      img: "assets/dishes/expresso.jpg",
    },
    {
      id: "the-glace",
      cat: "boissons",
      name: "Thé glacé maison",
      desc: "Pêche, passion, fraise, citron ou mangue.",
      price: 2500,
      img: "assets/dishes/the-glace.jpg",
    },
    {
      id: "limonade",
      cat: "boissons",
      name: "Limonade glacée",
      desc: "Citron, pêche, passion, fraise ou mangue.",
      price: 3000,
      img: "assets/dishes/limonade.jpg",
    },
    {
      id: "jus-orange",
      cat: "boissons",
      name: "Jus d’orange pressé",
      desc: "Fraîchement pressé.",
      price: 2500,
      img: "assets/dishes/jus-orange.jpg",
    },
  ];

  /* Re-tag sandwiches/linguine as plats visually but keep under tacos filter group
     for the requested Burgers/Smash/Menus/Tacos bucket — show as cat tacos above.
     Separate plats items that are not tacos still listed with tacos filter as "food". */

  const grid = document.getElementById("orderGrid");
  const menuDialog = document.getElementById("menuBurgerDialog");
  const menuChoiceList = document.getElementById("menuBurgerChoices");
  const menuCancel = document.getElementById("menuBurgerCancel");

  const formatPrice = (n) =>
    `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")} F`;

  const waUrl = (text) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  const openWhatsAppProduct = (productName) => {
    const message = [
      "Bonjour, je souhaite commander :",
      "",
      `• ${productName}`,
      "",
      "Merci.",
    ].join("\n");
    window.open(waUrl(message), "_blank", "noopener");
  };

  const openWhatsAppMenuBurger = (choice) => {
    const message = [
      "Bonjour,",
      "",
      "Je souhaite commander :",
      "",
      "Menu Burger",
      "",
      `Burger choisi : ${choice}`,
      "",
      "Merci.",
    ].join("\n");
    window.open(waUrl(message), "_blank", "noopener");
  };

  const closeMenuDialog = () => {
    if (typeof menuDialog?.close === "function") menuDialog.close();
    else menuDialog?.removeAttribute("open");
  };

  const openMenuDialog = () => {
    if (!menuChoiceList) return;
    menuChoiceList.innerHTML = MENU_BURGER_CHOICES.map(
      (name) =>
        `<button type="button" class="menu-choice-btn" data-choice="${name}">${name}</button>`
    ).join("");
    if (typeof menuDialog?.showModal === "function") menuDialog.showModal();
    else menuDialog?.setAttribute("open", "");
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
            <button type="button" class="order-item__add" data-order="${item.id}">
              Commander
            </button>
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
      const itemCat = el.dataset.cat;
      const show =
        cat === "all" ||
        itemCat === cat ||
        (cat === "tacos" && itemCat === "plats");
      el.classList.toggle("is-hidden", !show);
    });
  };

  document.querySelectorAll(".order-cat").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".order-cat")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterCat(btn.dataset.cat || "all");
    });
  });

  grid?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-order]");
    if (!btn) return;
    const item = MENU.find((m) => m.id === btn.dataset.order);
    if (!item) return;
    if (item.needsChoice) openMenuDialog();
    else openWhatsAppProduct(item.name);
  });

  menuChoiceList?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-choice]");
    if (!btn) return;
    openWhatsAppMenuBurger(btn.dataset.choice);
    closeMenuDialog();
  });

  menuCancel?.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenuDialog();
  });

  renderMenu("all");
})();
