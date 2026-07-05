// Menú móvil
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
})();

// Filtros de categoría en /productos.html
(function () {
  const filtros = document.getElementById("filtros");
  const grid = document.getElementById("productGrid");
  if (!filtros || !grid) return;

  const cats = {
    "mortero-adhesivo-c2": "adhesivos",
    "estuco-koratex": "estucos",
    "estuco-constructor": "estucos",
    "carateo-koratex": "acabados",
    "friso-pre-listo": "estucos",
    "mate-koracolor": "pinturas",
    "supra-koracolor": "pinturas",
    "ama-flex": "impermeabilizantes"
  };

  const cards = Array.from(grid.querySelectorAll(".product-card"));

  filtros.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;
    filtros.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.cat;

    cards.forEach(card => {
      const slug = card.getAttribute("href").split("/").pop().replace(".html", "");
      const cardCat = cats[slug];
      card.style.display = (cat === "todos" || cardCat === cat) ? "" : "none";
    });
  });
})();
