// Código compartido por todas las páginas: cabecera, pie, iconos y carrito

/* ---------- Iconos ---------- */
const ICONS = {
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 16v2a3 3 0 0 1-3 3h-3"/><rect width="4" height="7" x="2" y="14" rx="1"/><rect width="4" height="7" x="18" y="14" rx="1"/>',
  package: '<path d="m7.5 4.3 9 5.2"/><path d="M21 8v8a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.7l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  apple: '<path d="M12 7c-2-3-7-2-7 3 0 4 3 10 5 10 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 5-6 5-10 0-5-5-6-7-3z"/><path d="M12 7c0-2 1-3 3-4"/>',
  google: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  mailcheck: '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/>',
};

// <i data-icon="truck"></i>  ->  <svg> con el icono
function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    const size = el.dataset.size || 18;
    el.outerHTML = `<svg class="icono-general ${el.className}" width="${size}" height="${size}" viewBox="0 0 24 24">${ICONS[el.dataset.icon] || ""}</svg>`;
  });
}

/* ---------- Dinero ---------- */
const money = (n) => "S/ " + n.toFixed(2);

/* ---------- Carrito (guardado en localStorage) ---------- */
const CART_KEY = "nova-cart";

function getCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    if (saved) return saved;
  } catch (e) {}
  // Carrito de ejemplo, igual al del diseño de Figma
  const demo = [
    { id: "nova-strike", qty: 1 },
    { id: "shadow-realms", qty: 2 },
    { id: "cyber-arena", qty: 1 },
  ];
  saveCart(demo);
  return demo;
}

function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}

function addToCart(id) {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  updateCartCount();
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotals() {
  const subtotal = getCart().reduce((sum, i) => sum + findProduct(i.id).price * i.qty, 0);
  const shipping = subtotal >= SHIPPING_FREE_FROM || subtotal === 0 ? 0 : 12;
  return { subtotal, shipping, total: subtotal + shipping };
}

function updateCartCount() {
  document.querySelectorAll(".contador-carrito").forEach((el) => (el.textContent = cartCount()));
}

/* ---------- Cabecera y pie ---------- */
// BASE: prefijo hacia la raíz del proyecto ("" en index.html, "../../" en src/pages)
const BASE = document.body.dataset.base || "";
const PAGES = BASE ? "" : "src/pages/";

const NAV = [
  { key: "inicio", label: "Inicio", href: `${BASE}index.html` },
  { key: "catalogo", label: "Catálogo", href: `${PAGES}catalogo.html` },
  { key: "ofertas", label: "Ofertas", href: `${PAGES}catalogo.html` },
  { key: "contacto", label: "Contacto", href: `${PAGES}contacto.html` },
];

function renderLayout() {
  const page = document.body.dataset.page;
  const links = NAV.map((l) => `<a href="${l.href}" class="${l.key === page ? "active" : ""}">${l.label}</a>`).join("");

  document.getElementById("cabecera").innerHTML = `
    <header class="cabecera">
      <div class="contenedor">
        <a href="${BASE}index.html" class="logo">NOVA GAMING</a>
        <nav class="navegacion" id="nav">${links}</nav>
        <div class="acciones-cabecera">
          <a href="${PAGES}login.html" class="ocultar-tablet"><i data-icon="user"></i><span>Mi cuenta</span></a>
          <a href="${PAGES}carrito.html"><i data-icon="bag"></i><span class="contador-carrito">0</span></a>
          <a href="${PAGES}carrito.html" class="btn boton-sm">Comprar ahora</a>
          <button class="menu-boton" id="menu-btn" aria-label="Menú"><i data-icon="menu" data-size="22"></i></button>
        </div>
      </div>
    </header>`;

  document.getElementById("pie").innerHTML = `
    <footer class="pie">
      <div class="contenedor">
        <span>© 2026 Nova Gaming Store</span>
        <nav><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Discord</a></nav>
      </div>
    </footer>`;

  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
  });
}

/* ---------- Inicio ---------- */
// Si una imagen no existe, se oculta y se ve el degradado de respaldo
document.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG") e.target.style.display = "none";
}, true);

renderLayout();
renderIcons();
updateCartCount();
