/* Burger Coffee Saly — WhatsApp order helpers (index) */

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

  const dialog = document.getElementById("menuBurgerDialog");
  const list = document.getElementById("menuBurgerChoices");
  const cancel = document.getElementById("menuBurgerCancel");

  const closeDialog = () => {
    if (typeof dialog?.close === "function") dialog.close();
    else dialog?.removeAttribute("open");
  };

  const openDialog = () => {
    if (!list) return;
    list.innerHTML = MENU_BURGER_CHOICES.map(
      (name) =>
        `<button type="button" class="menu-choice-btn" data-choice="${name}">${name}</button>`
    ).join("");
    if (typeof dialog?.showModal === "function") dialog.showModal();
    else dialog?.setAttribute("open", "");
  };

  document.addEventListener("click", (e) => {
    const menuBtn = e.target.closest("[data-menu-burger]");
    if (menuBtn) {
      e.preventDefault();
      openDialog();
      return;
    }

    const productBtn = e.target.closest("[data-wa-product]");
    if (productBtn) {
      e.preventDefault();
      const name = productBtn.getAttribute("data-wa-product");
      if (name) openWhatsAppProduct(name);
    }
  });

  list?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-choice]");
    if (!btn) return;
    openWhatsAppMenuBurger(btn.dataset.choice);
    closeDialog();
  });

  cancel?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDialog();
  });
})();
