(function () {
  const menu = document.getElementById("menu");
  const burger = document.getElementById("burger");
  const closeMenu = document.getElementById("closeMenu");

  if (!menu || !burger || !closeMenu) return;

  function openMenu() {
    menu.classList.add("open");
    document.body.classList.add("menu-open");
  }

  function closeMenuFn() {
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  burger.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuFn);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenuFn();
  });
})();
