// Confirmación: muestra el último pedido guardado por el checkout
let order = null;
try { order = JSON.parse(localStorage.getItem("nova-order")); } catch (e) {}

if (!order) {
  location.replace("catalogo.html");
} else {
  const set = (id, text) => (document.getElementById(id).textContent = text);

  set("numero-pedido", "#" + order.number);
  set("fecha-pedido", order.date);
  set("unidades", `${order.units} ${order.units === 1 ? "artículo" : "artículos"}`);
  set("subtotal", money(order.subtotal));
  set("envio", order.shipping === 0 ? "Gratis" : money(order.shipping));
  set("total", money(order.total));
  set("quien", order.name);
  set("direccion", order.address);
  set("telefono", order.phone);
  set("titular-tarjeta", order.card);

  document.getElementById("lista-corta").innerHTML = order.items.map((i) => {
    const p = findProduct(i.id);
    return `
      <div class="elemento-linea">
        <div class="portada"><img src="${BASE}${p.img}" alt=""></div>
        <div class="informacion"><b>${p.name}</b><small>Cantidad: ${i.qty} · ${money(p.price)}</small></div>
        <span class="monto">${money(p.price * i.qty)}</span>
      </div>`;
  }).join("");
}
