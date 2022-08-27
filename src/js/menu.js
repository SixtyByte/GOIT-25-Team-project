(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuItem = document.querySelector('[data-menu-list]');
  
  if (!!menuBtnRef) {
    menuBtnRef.addEventListener("click", hendleMobileMenu);
  }
  if (!!menuItem) {
    menuItem.addEventListener('click', hendleMobileMenu);
  }

  function hendleMobileMenu () {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    document.body.classList.toggle('no-scroll');
  };

})();