/* Burger Coffee Saly — Menu Burger → panier (page d’accueil) */

(() => {
  "use strict";

  const CART_KEY = "bc_cart";
  const MENU_BURGER_CHOICES = [
    "Burger poulet",
    "Burger du chef",
    "Smash classic",
    "Smash double",
    "Smash bacon halal",
  ];
  const MENU_DRINK_CHOICES = [
    "Petite bouteille d’eau",
    "Coca-Cola",
    "Coca-Cola Zéro",
    "Sprite",
    "Fanta",
    "Un jus local",
  ];

  const dialog = document.getElementById("menuBurgerDialog");
  const list = document.getElementById("menuBurgerChoices");
  const drinkList = document.getElementById("menuDrinkChoices");
  const confirm = document.getElementById("menuBurgerConfirm");
  const cancel = document.getElementById("menuBurgerCancel");

  let selectedPlat = null;
  let selectedDrink = null;

  const readCart = () => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) || "{}") || {};
    } catch {
      return {};
    }
  };

  const writeCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  };

  const syncConfirm = () => {
    if (confirm) confirm.disabled = !(selectedPlat && selectedDrink);
  };

  const closeDialog = () => {
    selectedPlat = null;
    selectedDrink = null;
    if (typeof dialog?.close === "function") dialog.close();
    else dialog?.removeAttribute("open");
  };

  const openDialog = () => {
    if (!list || !drinkList) return;
    selectedPlat = null;
    selectedDrink = null;
    list.innerHTML = MENU_BURGER_CHOICES.map(
      (name) =>
        `<button type="button" class="menu-choice-btn" data-plat="${name}">${name}</button>`
    ).join("");
    drinkList.innerHTML = MENU_DRINK_CHOICES.map(
      (name) =>
        `<button type="button" class="menu-choice-btn" data-drink="${name}">${name}</button>`
    ).join("");
    syncConfirm();
    if (typeof dialog?.showModal === "function") dialog.showModal();
    else dialog?.setAttribute("open", "");
  };

  document.addEventListener("click", (e) => {
    const menuBtn = e.target.closest("[data-menu-burger]");
    if (!menuBtn) return;
    e.preventDefault();
    openDialog();
  });

  list?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-plat]");
    if (!btn) return;
    selectedPlat = btn.dataset.plat;
    list
      .querySelectorAll(".menu-choice-btn")
      .forEach((b) => b.classList.toggle("is-selected", b === btn));
    syncConfirm();
  });

  drinkList?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-drink]");
    if (!btn) return;
    selectedDrink = btn.dataset.drink;
    drinkList
      .querySelectorAll(".menu-choice-btn")
      .forEach((b) => b.classList.toggle("is-selected", b === btn));
    syncConfirm();
  });

  confirm?.addEventListener("click", (e) => {
    e.preventDefault();
    if (!selectedPlat || !selectedDrink) return;
    const cart = readCart();
    const key = `menu-burger::${selectedPlat}::${selectedDrink}`;
    cart[key] = (cart[key] || 0) + 1;
    writeCart(cart);
    closeDialog();
    window.location.href = "commander.html";
  });

  cancel?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDialog();
  });
})();
