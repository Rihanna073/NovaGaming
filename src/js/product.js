// Detalle de producto: se elige con ?id=nova-strike
const id = new URLSearchParams(location.search).get("id");
const p = findProduct(id) || PRODUCTS[0];

document.title = `Nova Gaming – ${p.name}`;
document.getElementById("migas").innerHTML =
  `<a href="${BASE}index.html">Inicio</a> / <a href="catalogo.html">Catálogo</a> / ${p.name}`;

document.getElementById("producto").innerHTML = `
  <div class="galeria">
    <div class="miniaturas">
      ${[1, 2, 3].map(() => `<div class="portada"><img src="${BASE}${p.img}" alt=""></div>`).join("")}
    </div>
    <div class="portada principal"><img src="${BASE}${p.img}" alt="${p.name}"></div>
    <div class="datos-galeria"><span>Vista principal · 3 vistas</span><span class="etiqueta etiqueta-oscura">Vista 360°</span></div>
  </div>

  <div class="product-informacion">
    <h1>${p.name}</h1>
    <div class="fila-precio">
      <span class="precio-grande">${money(p.price)}</span>
      <span class="etiqueta">Envío gratis en compras + S/ 200</span>
    </div>
    <p>${p.long}</p>
    <div class="detalles">
      <h2>Especificaciones</h2>
      <ul>
        <li><b>Plataforma:</b> ${PLATFORMS.join(" / ")}</li>
        <li><b>Género:</b> ${p.genres.join(", ")}</li>
        <li><b>Jugadores:</b> ${p.players}</li>
        <li><b>Idioma:</b> Español, Inglés</li>
      </ul>
    </div>
    <button class="boton boton-grande" id="add"><i data-icon="plus"></i>Añadir al carrito</button>
  </div>`;

document.getElementById("relacionados").innerHTML = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 3).map((x) => `
  <a href="${PAGES}producto.html?id=${x.id}" class="tarjeta">
    <div class="portada"><img src="${BASE}${x.img}" alt=""></div>
    <h3>${x.name}</h3>
    <span class="precio">${money(x.price)}</span>
  </a>`).join("");

renderIcons();

document.getElementById("add").addEventListener("click", (e) => {
  addToCart(p.id);
  e.currentTarget.lastChild.textContent = "¡Añadido!";
  setTimeout(() => (e.currentTarget.lastChild.textContent = "Añadir al carrito"), 1200);
});
