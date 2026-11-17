// Inicio: tarjetas de juegos destacados
document.getElementById("destacados").innerHTML = PRODUCTS.map((p) => `
  <a href="${PAGES}producto.html?id=${p.id}" class="tarjeta">
    <div class="portada"><img src="${BASE}${p.img}" alt=""></div>
    <h3>${p.name}</h3>
    <span class="precio">${money(p.price)}</span>
  </a>`).join("");
