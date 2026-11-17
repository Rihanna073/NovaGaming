# Nova Gaming Store

Proyecto web de tienda virtual de videojuegos, consolas y accesorios gamer. La interfaz está inspirada en un mockup de Figma y se implementa con HTML5, CSS3 y JavaScript vanilla.

## Objetivo

Construir una experiencia de compra clara, rápida y atractiva para jugadores, permitiendo explorar un catálogo, consultar el detalle de cada producto, gestionar un carrito y completar un pedido simulado.

## Público objetivo

Jóvenes y adultos aficionados a los videojuegos, consolas y accesorios gamer que buscan comprar en línea de forma rápida, con información clara sobre productos, precios y envíos.

## Funcionalidades previstas

- Página de inicio con portada y juegos destacados.
- Catálogo con filtros y búsqueda de productos.
- Detalle de producto con descripción, plataformas y precio.
- Carrito de compras persistente mediante `localStorage`.
- Proceso de checkout con datos de envío y pago simulado.
- Página de confirmación de compra.
- Registro e inicio de sesión de usuario.
- Panel de cuenta con historial de pedidos.
- Página de contacto.
- Diseño responsive para escritorio, tablet y móvil.

## Tecnologías

- HTML5 semántico.
- CSS3 con variables, Grid y Flexbox.
- JavaScript vanilla (ES6).
- Google Fonts: Inter (400, 600, 700).

## Estructura del proyecto

```
nova-gaming/
├── assets/
│   ├── icons/        #Iconos SVG optimizados
│   └── images/       #Imágenes, portadas y logotipos
├── design/           #Exportaciones de Figma (mockups y prototipos)
├── src/
│   ├── css/
│   │   ├── base.css  #Variables, reset, layout y componentes compartidos
│   │   └── pages.css #Estilos específicos de cada página
│   ├── js/
│   │   ├── data.js   #Datos de productos
│   │   ├── main.js   #Cabecera, pie, iconos y carrito compartido
│   │   └── ...       #Lógica de cada página
│   └── pages/
│       ├── catalogo.html
│       ├── producto.html
│       ├── carrito.html
│       ├── checkout.html
│       ├── confirmacion.html
│       ├── login.html
│       ├── cuenta.html
│       └── contacto.html
├── index.html        # Página principal (único HTML en la raíz)
├── README.md
└── style-guide.md
```

## Recursos gráficos

Las imágenes del proyecto fueron exportadas desde el diseño de Figma y optimizadas en `assets/images/`:

- `hero.jpg` — portada principal (800 × 537 px).
- `nova-strike.jpg` — portada del juego Nova Strike (560 × 313 px).
- `shadow-realms.jpg` — portada del juego Shadow Realms (560 × 313 px).
- `pixel-rush.jpg` — portada del juego Pixel Rush (560 × 313 px).
- `cyber-arena.jpg` — portada del juego Cyber Arena (560 × 313 px).

Los iconos están en `assets/icons/` como SVG de 24 × 24 px (26 archivos). Se documentan en `assets/icons/README.md` y se insertan inline mediante `data-icon`.

## Diseño

Los mockups exportados desde Figma están en `design/`: inicio en escritorio, tablet y móvil, además de catálogo, producto, carrito, login, contacto, checkout, confirmación y cuenta.

Archivo de Figma: https://www.figma.com/design/MUsEAFWej1uskQvD9cl6f9/Gaming-Store

## Cómo ejecutar

Abre `index.html` en un navegador moderno. No requiere instalación ni servidor local.
