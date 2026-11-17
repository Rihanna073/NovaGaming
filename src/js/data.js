// Datos de los juegos (un solo lugar para editar nombres, precios e imágenes)
const PRODUCTS = [
  {
    id: "nova-strike",
    name: "Nova Strike",
    price: 129.9,
    genres: ["Acción", "Shooter"],
    badge: "Más vendido",
    short: "Estrategia y reflejos en cada batalla.",
    long: "Un shooter táctico multijugador de nueva generación. Combina estrategia, reflejos rápidos y mapas dinámicos en batallas de hasta 20 jugadores.",
    players: "1-20 (online)",
    img: "assets/images/nova-strike.jpg",
  },
  {
    id: "shadow-realms",
    name: "Shadow Realms",
    price: 129.9,
    genres: ["RPG", "Aventura"],
    badge: "Favorito de la comunidad",
    short: "Un mundo de misterios por descubrir.",
    long: "Un RPG de mundo abierto lleno de ruinas flotantes, criaturas antiguas y decisiones que cambian la historia.",
    players: "1 jugador",
    img: "assets/images/shadow-realms.jpg",
  },
  {
    id: "pixel-rush",
    name: "Pixel Rush",
    price: 99.9,
    genres: ["Carreras", "Arcade"],
    badge: "Desde S/ 99.90",
    short: "Velocidad y adrenalina en cada circuito.",
    long: "Carreras arcade de alta velocidad con estética retro y circuitos nocturnos llenos de neón.",
    players: "1-4 (local y online)",
    img: "assets/images/pixel-rush.jpg",
  },
  {
    id: "cyber-arena",
    name: "Cyber Arena",
    price: 149.9,
    genres: ["Acción", "Lucha"],
    badge: "Multijugador",
    short: "Domina la arena. Desafía a tus rivales.",
    long: "Combates uno contra uno en arenas futuristas, con torneos en línea y un sistema de combos profundo.",
    players: "1-2 (online)",
    img: "assets/images/cyber-arena.jpg",
  },
];

const PLATFORMS = ["PC", "PS5", "Xbox"];
const SHIPPING_FREE_FROM = 200; // envío gratis desde S/ 200

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
