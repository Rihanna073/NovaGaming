// Finalizar compra: resumen del carrito y "pago" de demostración
const items = getCart();
if (items.length === 0) location.href = "carrito.html";

const t = cartTotals();
const units = cartCount();

document.getElementById("cantidad-productos").textContent = `${units} ${units === 1 ? "artículo" : "artículos"}`;
document.getElementById("lista-corta").innerHTML = items.map((i) => {
  const p = findProduct(i.id);
  return `
    <div class="elemento-linea">
      <div class="portada"><img src="${BASE}${p.img}" alt=""></div>
      <div class="informacion"><b>${p.name}</b><small>Cantidad: ${i.qty} · ${money(p.price)}</small></div>
      <span class="monto">${money(p.price * i.qty)}</span>
    </div>`;
}).join("");

const shippingText = t.shipping === 0 ? "Gratis" : money(t.shipping);
document.getElementById("subtotal").textContent = money(t.subtotal);
document.getElementById("envio").textContent = shippingText;
document.getElementById("costo-envio").textContent = shippingText;
document.getElementById("total").textContent = money(t.total);

document.getElementById("formulario-pago").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = (id) => document.getElementById(id).value;

  // Guardamos el pedido para mostrarlo en la confirmación
  const order = {
    number: "NG-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" }),
    items, units, ...t,
    name: `${f("nombre")} ${f("apellido")}`,
    phone: f("tel"),
    address: `${f("dir")}, ${f("dist")}, ${f("prov")}, ${f("dep")}`,
    card: f("titular") || `${f("nombre")} ${f("apellido")}`,
  };
  try { localStorage.setItem("nova-order", JSON.stringify(order)); } catch (err) {}
  saveCart([]); // el carrito queda vacío
  location.href = "confirmacion.html";
});
