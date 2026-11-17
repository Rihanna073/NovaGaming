// Carrito: lista de juegos, cantidades y resumen
const list = document.getElementById("lista-carrito");

function render() {
  const cart = getCart();

  list.innerHTML = cart.map((item) => {
    const p = findProduct(item.id);
    return `
      <div class="producto-carrito elemento-linea">
        <div class="portada"><img src="${BASE}${p.img}" alt=""></div>
        <div class="informacion">
          <b>${p.name}</b>
          <span class="cantidad">
            <button data-minus="${p.id}" aria-label="Menos">−</button>
            Cantidad: ${item.qty}
            <button data-plus="${p.id}" aria-label="Más">+</button>
          </span>
          <button class="quitar" data-remove="${p.id}">Quitar</button>
        </div>
        <span class="monto">${money(p.price)}</span>
      </div>`;
  }).join("") || '<p class="vacio">Tu carrito está vacío. <a href="catalogo.html" class="enlace">Ver catálogo</a></p>';

  const t = cartTotals();
  document.getElementById("subtotal").textContent = money(t.subtotal);
  document.getElementById("envio").textContent = t.shipping === 0 ? "Gratis" : money(t.shipping);
  document.getElementById("total").textContent = money(t.total);
  document.getElementById("boton-pagar").classList.toggle("oculto", cart.length === 0);
  updateCartCount();
}

list.addEventListener("click", (e) => {
  const cart = getCart();
  const find = (id) => cart.find((i) => i.id === id);
  const t = e.target;
  if (t.dataset.plus) find(t.dataset.plus).qty++;
  if (t.dataset.minus) { const i = find(t.dataset.minus); i.qty = Math.max(1, i.qty - 1); }
  if (t.dataset.remove) cart.splice(cart.indexOf(find(t.dataset.remove)), 1);
  saveCart(cart);
  render();
});

render();
