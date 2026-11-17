# Guía de estilos — Nova Gaming Store

## 1. Paleta de colores

| Token          | Hex                              | Uso                               |
| -------------- | -------------------------------- | --------------------------------- |
| `--bg`         | `#160E26`                        | Fondo principal de la página      |
| `--card`       | `#261A3D`                        | Fondo de tarjetas y paneles       |
| `--card-dark`  | `#1D132F`                        | Fondo de tarjetas secundarias     |
| `--line`       | `rgba(255, 255, 255, 0.08)`      | Bordes y separadores suaves       |
| `--input-line` | `#4D4066`                        | Bordes de campos y controles      |
| `--text`       | `#FFFFFF`                        | Texto principal                   |
| `--muted`      | `#BFB8D1`                        | Texto secundario y placeholders   |
| `--soft`       | `#CCC4DE`                        | Texto auxiliar                    |
| `--accent`     | `#FF5C4A`                        | Color de marca, botones y precios |
| `--purple`     | `#4F298C`                        | Degradados y fondos de portada    |
| `--pink`       | `#DB4066`                        | Degradados y detalles             |
| `--shadow`     | `0 12px 24px rgba(0, 0, 0, 0.2)` | Sombra de tarjetas                |

### Degradado de portada

```css
background: linear-gradient(135deg, var(--purple), var(--pink));
```

## 2. Tipografía

- **Familia principal:** `Inter`, con respaldo en `system-ui, sans-serif`.
- **Origen:** Google Fonts.
- **Pesos utilizados:** 400 (regular), 600 (semibold) y 700 (bold).

| Elemento                           | Tamaño   | Peso    | Altura de línea |
| ---------------------------------- | -------- | ------- | --------------- |
| Título principal (hero)            | 44 px    | 700     | 1.1             |
| Título de página (`h1`, `.titulo`) | 36 px    | 700     | 1.2             |
| Título de producto                 | 34 px    | 700     | —               |
| Título de sección (`h2`)           | 26 px    | 700     | —               |
| Título de tarjeta / panel          | 15–21 px | 600–700 | —               |
| Texto base                         | 14–15 px | 400     | 1.5             |
| Texto secundario                   | 12–13 px | 400     | —               |
| Etiquetas / badges                 | 11–12 px | 600     | —               |

## 3. Tamaños y espaciados

### Contenedor

- Ancho máximo: `1440 px`.
- Padding lateral: `60 px` en escritorio, `32 px` en tablet y `20 px` en móvil.
- Centrado horizontal con `margin: 0 auto`.

### Espaciados frecuentes

| Token visual                | Valor                                                   |
| --------------------------- | ------------------------------------------------------- |
| Separación entre secciones  | `50–60 px`                                              |
| Separación entre tarjetas   | `16–24 px`                                              |
| Padding interno de tarjetas | `16–24 px`                                              |
| Gap de navegación           | `32 px` (escritorio), `20 px` (tablet)                  |
| Altura de cabecera          | `80 px` (escritorio), `68 px` (tablet), `60 px` (móvil) |
| Altura de pie               | `80 px` (escritorio), `84 px` (móvil)                   |

### Radios de borde

| Elemento             | Radio              |
| -------------------- | ------------------ |
| Botones y etiquetas  | `999 px` (píldora) |
| Tarjetas y paneles   | `12–20 px`         |
| Campos de formulario | `10 px`            |
| Portadas e imágenes  | `8–16 px`          |

## 4. Componentes visuales

### Botones

- Fondo: `--accent` (`#FF5C4A`), texto blanco, peso 600.
- Altura estándar: `48 px`; variantes `36 px` (pequeño) y `52 px` (grande).
- Radio tipo píldora y padding horizontal de `28 px`.
- Hover: `filter: brightness(1.1)` y desplazamiento de `-1 px`.
- Variante con borde: fondo transparente y borde `--input-line`.

### Tarjetas

- Fondo `--card`, borde `1px solid var(--line)`, radio `12–16 px` y sombra `--shadow`.
- Hover en tarjetas enlazadas: desplazamiento vertical de `-3 px`.

### Portadas de producto

- Fondo de respaldo con degradado púrpura → rosa.
- Imagen con `object-fit: cover` y radio de `8–16 px`.

### Campos de formulario

- Fondo `--bg`, borde `--input-line`, radio `10 px` y altura `48 px`.
- Foco: borde `--accent` y sin `outline`.
- Etiquetas en `--muted` con tamaño `13 px` y peso 600.

### Etiquetas / badges

- Fondo `--accent`, texto blanco, radio píldora y tamaño `11–12 px`.
- Variante oscura con fondo `--bg`.

### Navegación

- Enlaces en `--muted`; estado activo en blanco con subrayado de `2 px` en `--accent`.
- En móvil se convierte en menú desplegable vertical.

## 5. Breakpoints responsive

| Rango       | Comportamiento                                                          |
| ----------- | ----------------------------------------------------------------------- |
| `> 1024 px` | Diseño de escritorio completo                                           |
| `≤ 1024 px` | Tablet: padding reducido, cabecera más baja, se ocultan algunos accesos |
| `≤ 720 px`  | Móvil: menú hamburguesa, columnas apiladas y tipografía reducida        |

## 6. Recursos gráficos

- **Iconos:** SVG inline generados desde `src/js/main.js` (estilo lineal, trazo `2 px`, `currentColor`).
- **Imágenes:** deben guardarse optimizadas en `assets/images/`.
- **Logotipos e iconos externos:** en `assets/icons/`.
- **Mockups y exportaciones de Figma:** en `design/`.
