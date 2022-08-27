(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuItem = document.querySelector('[data-menu-list]');
  
  if (!!menuBtnRef) {
    menuBtnRef.addEventListener("click", handleMobileMenu);
  }
  if (!!menuItem) {
    menuItem.addEventListener('click', handleMobileMenu);
  }

  function handleMobileMenu () {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    document.body.classList.toggle('no-scroll');
    
    if (!expanded) {
      setTimeout(() => {
        document.addEventListener('click', onDocumentClick);
      }, 100);  
    }
    else {
      document.removeEventListener('click', onDocumentClick);
    }
  };

  function onDocumentClick (event) {
    if ((event.target !== menuBtnRef) && (event.target !== mobileMenuRef)) {
      handleMobileMenu();
    }
  };
})();