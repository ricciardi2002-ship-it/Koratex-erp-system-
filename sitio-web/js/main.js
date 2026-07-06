// Menú móvil
(function () {
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
  }
})();

// Filtros de categoría en /productos.html
(function () {
  const filtros = document.getElementById("filtros");
  const grid = document.getElementById("productGrid");
  if (!filtros || !grid) return;

  const cards = Array.from(grid.querySelectorAll(".p-card"));

  function applyFilter(cat, btn) {
    filtros.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    cards.forEach(card => {
      const cardCat = card.dataset.cat;
      card.style.display = (cat === "todos" || cardCat === cat) ? "" : "none";
    });
  }

  filtros.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;
    applyFilter(btn.dataset.cat, btn);
  });

  // Permite enlazar directo a una categoría, ej. productos.html#pinturas
  const hash = location.hash.replace("#", "");
  if (hash) {
    const btn = filtros.querySelector(`[data-cat="${hash}"]`);
    if (btn) applyFilter(hash, btn);
  }
})();
