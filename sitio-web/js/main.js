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

  filtros.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;
    filtros.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.cat;

    cards.forEach(card => {
      const cardCat = card.dataset.cat;
      card.style.display = (cat === "todos" || cardCat === cat) ? "" : "none";
    });
  });
})();
