# Iconos

Set de 26 iconos SVG lineales del proyecto Nova Gaming Store.

- Formato: SVG 24 × 24 px.
- Trazo: `currentColor`, `stroke-width="2"`, extremos y uniones redondeados.
- Estilo: lineal, compatible con el sistema visual de la web.

## Archivos

| Icono | Archivo | Uso principal |
| --- | --- | --- |
| Usuario | `user.svg` | Mi cuenta / perfil |
| Bolsa | `bag.svg` | Carrito de compras |
| Búsqueda | `search.svg` | Buscador del catálogo |
| Flecha abajo | `down.svg` | Selectores desplegables |
| Flecha derecha | `right.svg` | Navegación / enlaces |
| Flecha atrás | `back.svg` | Volver |
| Más | `plus.svg` | Añadir al carrito |
| Camión | `truck.svg` | Envío y seguimiento |
| Filtros | `sliders.svg` | Filtros del catálogo |
| Correo | `mail.svg` | Contacto |
| Teléfono | `phone.svg` | Contacto |
| Reloj | `clock.svg` | Plazos y horarios |
| Ubicación | `pin.svg` | Direcciones |
| Check | `check.svg` | Confirmaciones |
| Tarjeta | `card.svg` | Métodos de pago |
| Candado | `lock.svg` | Pago seguro |
| Escudo | `shield.svg` | Garantía y privacidad |
| Auriculares | `headset.svg` | Soporte |
| Paquete | `package.svg` | Pedidos |
| Descarga | `download.svg` | Comprobantes |
| Panel | `dashboard.svg` | Panel de cuenta |
| Salir | `logout.svg` | Cerrar sesión |
| Menú | `menu.svg` | Menú móvil |
| Apple | `apple.svg` | Inicio de sesión social |
| Google | `google.svg` | Inicio de sesión social |
| Correo verificado | `mailcheck.svg` | Confirmación por correo |

## Uso

Los iconos se insertan actualmente de forma inline desde `src/js/main.js` usando el atributo `data-icon`:

```html
<i data-icon="truck"></i>
```

También pueden usarse como archivo independiente:

```html
<img src="assets/icons/truck.svg" alt="" width="24" height="24">
```

Si se usa como `<img>`, el color no se hereda; para conservar `currentColor` conviene mantener el SVG inline.
