const header = document.querySelector("[data-header]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (window.lucide) {
  window.lucide.createIcons();
}
