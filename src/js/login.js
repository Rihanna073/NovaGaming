// Inicio de sesión / registro: cambia el texto según la pestaña
const TEXTS = {
  login: { title: "Bienvenido de vuelta", intro: "Ingresa tus datos para continuar con tu experiencia en Nova Gaming.", button: "Iniciar sesión", foot: '¿No tienes cuenta? <a href="#" class="enlace" data-tab="register">Regístrate</a>' },
  register: { title: "Crea tu cuenta", intro: "Regístrate para guardar tus pedidos y comprar más rápido.", button: "Crear cuenta", foot: '¿Ya tienes cuenta? <a href="#" class="enlace" data-tab="login">Inicia sesión</a>' },
};

function showTab(tab) {
  const t = TEXTS[tab];
  document.getElementById("titulo").textContent = t.title;
  document.getElementById("introduccion").textContent = t.intro;
  document.getElementById("enviar").textContent = t.button;
  document.getElementById("pie").innerHTML = t.foot;
  document.getElementById("campo-nombre").classList.toggle("oculto", tab === "login");
  document.getElementById("olvido-clave").classList.toggle("oculto", tab === "register");
  document.querySelectorAll(".pestana").forEach((b) => b.classList.toggle("activo", b.dataset.tab === tab));
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-tab]");
  if (!el) return;
  e.preventDefault();
  showTab(el.dataset.tab);
});

// Demo: sin servidor, así que solo llevamos a "Mi cuenta"
document.getElementById("form-acceso").addEventListener("submit", (e) => {
  e.preventDefault();
  location.href = "cuenta.html";
});
