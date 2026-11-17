// Catálogo: buscador, filtros y orden
const GENRES = ["Acción", "Shooter", "RPG", "Aventura", "Carreras", "Arcade", "Lucha"];

const state = { search: "", platform: "Todas las plataformas", genre: "Todos los géneros", sort: "recommended" };

// Crea un grupo de botones de radio
function radioGroup(containerId, name, options, key) {
  document.getElementById(containerId).insertAdjacentHTML("beforeend", options.map((o, i) => `
    <label class="radio">
      <input type="radio" name="${name}" value="${o}" ${i === 0 ? "checked" : ""}>${o}
    </label>`).join(""));
  document.getElementById(containerId).addEventListener("change", (e) => {
    state[key] = e.target.value;
    render();
  });
}

radioGroup("filtro-plataforma", "platform", ["Todas las plataformas", "PC", "PlayStation 5", "Xbox"], "platform");
radioGroup("filtro-genero", "genre", ["Todos los géneros", ...GENRES], "genre");

function visibleProducts() {
  let list = PRODUCTS.filter((p) => {
    const matchName = p.name.toLowerCase().includes(state.search.toLowerCase());
    const matchGenre = state.genre === "Todos los géneros" || p.genres.includes(state.genre);
    return matchName && matchGenre; // todos los juegos están en las 3 plataformas
  });
  if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function render() {
  const list = visibleProducts();
  document.getElementById("contador").textContent = `${list.length} juegos disponibles`;
  document.getElementById("filtros-activos").textContent = `${state.platform} · ${state.genre}`;

  document.getElementById("juegos").innerHTML = list.map((p) => `
    <article class="juego">
      <a href="${PAGES}producto.html?id=${p.id}" class="portada">
        <img src="${BASE}${p.img}" alt="">
        <span class="etiqueta etiqueta-oscura">${p.badge}</span>
      </a>
      <div>
        <div class="datos-juego"><span>${p.genres.join(" · ")}</span><span>En stock</span></div>
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <small>${PLATFORMS.join("  /  ")}</small>
      </div>
      <div class="compra-juego">
        <span class="precio">${money(p.price)}</span>
        <button class="boton" data-add="${p.id}"><i data-icon="plus"></i>Añadir al carrito</button>
      </div>
    </article>`).join("") || '<p class="vacio">No encontramos juegos con esos filtros.</p>';

  renderIcons();
}

document.getElementById("juegos").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  addToCart(btn.dataset.add);
  btn.lastChild.textContent = "¡Añadido!";
  setTimeout(() => (btn.lastChild.textContent = "Añadir al carrito"), 1200);
});

document.getElementById("busqueda").addEventListener("input", (e) => { state.search = e.target.value; render(); });
document.getElementById("orden").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
document.getElementById("reiniciar").addEventListener("click", () => {
  state.search = ""; state.platform = "Todas las plataformas"; state.genre = "Todos los géneros"; state.sort = "recommended";
  document.getElementById("busqueda").value = "";
  document.getElementById("orden").value = "recommended";
  document.querySelectorAll('input[value="Todas las plataformas"], input[value="Todos los géneros"]').forEach((r) => (r.checked = true));
  render();
});

render();
