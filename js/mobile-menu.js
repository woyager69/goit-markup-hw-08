(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
// (() => {
//   const menuBtnRef = document.querySelector('.my-class1');
//   const mobileMenuRef = document.querySelector('.my-class2');
//   const menuContainerRef = document.querySelector('.menu-container');
//   console.log(menuBtnRef);
//   mobileMenuRef.addEventListener('click', () => {
//     menuContainerRef.classList.toggle('is-open');
//   });
//   menuBtnRef.addEventListener('click', () => {
//     console.log(222);
//     menuContainerRef.classList.toggle('is-open');
//   });
// })();