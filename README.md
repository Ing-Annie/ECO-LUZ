# ECO LUZ · Lámparas de Tutumas

Sitio web del emprendimiento **ECO LUZ**, que elabora lámparas artesanales hechas con tutumas.

- Catálogo con precios y botón de compra por WhatsApp
- Quiénes somos, historia del emprendimiento, proceso de elaboración y galería
- Funciona en computadoras, tablets y celulares
- **Todo el contenido se edita en 4 archivos de la carpeta `datos/`**, sin tocar el diseño

> **Tecnología:** HTML, CSS y JavaScript puros. No usa React, Vite ni otro framework a propósito: no hay nada que instalar ni que compilar. Un cambio en un archivo de datos se ve en cuanto se guarda, y GitHub Pages publica el sitio tal cual está.

---

## Índice

1. [Estructura de archivos](#1-estructura-de-archivos)
2. [Ver el sitio en tu computadora](#2-ver-el-sitio-en-tu-computadora)
3. [Subir el proyecto a GitHub](#3-subir-el-proyecto-a-github)
4. [Activar GitHub Pages (publicar)](#4-activar-github-pages-publicar)
5. [Cómo editar archivos directamente en GitHub](#5-cómo-editar-archivos-directamente-en-github)
6. [Manual del catálogo](#6-manual-del-catálogo)
7. [Fotografías: agregar y cambiar](#7-fotografías-agregar-y-cambiar)
8. [Cambiar los textos](#8-cambiar-los-textos)
9. [Cambiar el número de WhatsApp](#9-cambiar-el-número-de-whatsapp)
10. [Contacto, redes sociales y horarios](#10-contacto-redes-sociales-y-horarios)
11. [Logo e ícono del sitio](#11-logo-e-ícono-del-sitio)
12. [Antes de lanzar: lista de verificación](#12-antes-de-lanzar-lista-de-verificación)
13. [Si algo sale mal](#13-si-algo-sale-mal)
14. [Futuras mejoras recomendadas](#14-futuras-mejoras-recomendadas)

---

## 1. Estructura de archivos

```text
eco-luz/
│
├── index.html                 ← Estructura de la página (casi nunca se edita)
│
├── datos/                     ← ✏️  AQUÍ SE EDITA TODO EL CONTENIDO
│   ├── configuracion.js       ← WhatsApp, logo, contacto, horarios, redes sociales
│   ├── productos.js           ← Catálogo: productos, precios, fotos, disponibilidad
│   ├── contenido.js           ← Textos: portada, quiénes somos, historia, contacto
│   └── proceso-galeria.js     ← Pasos del proceso y fotos de la galería
│
├── css/
│   └── styles.css             ← Diseño: colores, tipografías, tamaños
│
├── js/
│   └── app.js                 ← Lógica que arma la página (no necesitas editarlo)
│
├── assets/
│   ├── img/
│   │   ├── hero/              ← Foto grande de la portada
│   │   ├── productos/         ← Fotos del catálogo
│   │   ├── galeria/           ← Fotos del proceso y de la galería
│   │   ├── logo/              ← Logo del emprendimiento
│   │   ├── og-imagen.jpg      ← Imagen que aparece al compartir el enlace
│   │   ├── sin-imagen.svg     ← Se muestra si una foto no se encuentra
│   │   └── LEEME.txt          ← Guía rápida de imágenes
│   └── icons/                 ← Ícono de la pestaña del navegador
│
├── README.md                  ← Este manual
├── .nojekyll                  ← Indica a GitHub Pages que publique el sitio tal cual
└── .gitignore                 ← Archivos que Git debe ignorar
```

**Regla de oro:** para el día a día solo necesitas la carpeta `datos/` y la carpeta `assets/img/`.

---

## 2. Ver el sitio en tu computadora

**Opción fácil:** haz doble clic en `index.html`. Se abre en tu navegador y funciona completo, sin internet (solo las tipografías necesitan conexión; sin ella se usa una tipografía parecida).

Después de editar un archivo, guarda y presiona **F5** en el navegador para ver el cambio.

**Opción para desarrolladores** (simula mejor el servidor real):

```bash
npx http-server eco-luz -p 8080
```

y abre `http://localhost:8080`. En Visual Studio Code también sirve la extensión *Live Server*.

---

## 3. Subir el proyecto a GitHub

### Opción A · Desde el navegador (sin instalar nada)

1. Crea una cuenta gratuita en <https://github.com> (si no la tienes).
2. Arriba a la derecha pulsa **+** → **New repository**.
3. En **Repository name** escribe `eco-luz`. Marca **Public**. Pulsa **Create repository**.
4. En la página del repositorio vacío, pulsa el enlace **uploading an existing file**.
5. Abre la carpeta `eco-luz` en tu computadora, **selecciona todo su contenido** (`index.html`, `datos`, `css`, `js`, `assets`, `README.md`, `.nojekyll`, `.gitignore`) y arrástralo a la página de GitHub.
   - ⚠️ Arrastra **el contenido** de la carpeta, no la carpeta `eco-luz` en sí. `index.html` debe quedar en la raíz del repositorio.
6. Abajo, pulsa **Commit changes** y espera a que termine de subir.

### Opción B · Con Git (si ya lo usas)

```bash
cd eco-luz
git init
git add .
git commit -m "Primera versión del sitio ECO LUZ"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/eco-luz.git
git push -u origin main
```

---

## 4. Activar GitHub Pages (publicar)

1. En tu repositorio de GitHub entra a **Settings** (Configuración).
2. En el menú de la izquierda pulsa **Pages**.
3. En **Build and deployment → Source** elige **Deploy from a branch**.
4. En **Branch** elige **main** y la carpeta **/ (root)**. Pulsa **Save**.
5. Espera 1 o 2 minutos y recarga. Arriba aparecerá la dirección de tu sitio:

   `https://TU-USUARIO.github.io/eco-luz/`

6. **Último paso:** abre `index.html` (ver [sección 5](#5-cómo-editar-archivos-directamente-en-github)) y reemplaza las dos apariciones de `TU-USUARIO` por tu usuario real de GitHub. Así, al compartir el enlace por WhatsApp o Facebook, aparecerá la imagen de vista previa.

A partir de ahí, **cada cambio que guardes en GitHub se publica solo** en 1 o 2 minutos.

---

## 5. Cómo editar archivos directamente en GitHub

No necesitas descargar nada para hacer cambios:

1. Entra a tu repositorio en GitHub y abre la carpeta `datos`.
2. Haz clic en el archivo que quieres cambiar (por ejemplo `productos.js`).
3. Pulsa el ícono del **lápiz ✏️** (arriba a la derecha del archivo).
4. Haz tu cambio.
5. Pulsa **Commit changes…** y luego otra vez **Commit changes**.
6. Espera 1 o 2 minutos y recarga tu sitio (en el celular, a veces hay que cerrar y abrir la pestaña).

### Reglas básicas para no romper nada

- Cambia **solo el texto que está entre comillas** `"así"`.
- **No borres las comas** del final de las líneas.
- No borres llaves `{ }` ni corchetes `[ ]`.
- Si tu texto necesita comillas, usa comillas simples: `"La lámpara 'Luna'"`.
- Las líneas que empiezan con `//` son notas de ayuda: la página las ignora.

---

## 6. Manual del catálogo

Todo el catálogo está en **`datos/productos.js`**. Cada producto es un bloque así:

```javascript
  {
    codigo: "ECO-001",
    nombre: "Lámpara Tutuma Natural",
    descripcion: "Lámpara artesanal elaborada a mano con tutuma, ideal para decorar espacios interiores.",
    precio: 180,
    imagen: "assets/img/productos/lampara-01.svg",
    categoria: "Lámparas de mesa",
    disponibilidad: "disponible",
    caracteristicas: ["Hecha a mano", "Patrón en espiral", "Con base"],
    destacado: true,
  },
```

| Campo | Qué significa | Ejemplo |
|---|---|---|
| `codigo` | Código único del producto | `"ECO-007"` |
| `nombre` | Nombre que se muestra | `"Lámpara Tutuma Luna"` |
| `descripcion` | Texto corto | `"Ideal para dormitorios."` |
| `precio` | Solo el número, **sin "Bs" y sin comillas** | `180` |
| `imagen` | Ruta de la foto | `"assets/img/productos/luna.jpg"` |
| `categoria` | Grupo. Los botones de filtro se crean solos | `"Colgantes"` |
| `disponibilidad` | `"disponible"`, `"a pedido"` o `"agotado"` | `"a pedido"` |
| `caracteristicas` | Lista de detalles cortos | `["Hecha a mano", "Luz cálida"]` |
| `destacado` | `true` muestra la etiqueta "Destacado"; `false` no | `false` |

> ⚠️ **Los precios actuales son de demostración.** Reemplázalos por los reales y luego, en `datos/configuracion.js`, cambia `modoDemostracion: true` por `modoDemostracion: false` para quitar el aviso del catálogo.

### ➕ Agregar un producto

1. Abre `datos/productos.js`.
2. Copia un bloque completo, **desde la llave `{` hasta la llave y coma `},`**.
3. Pégalo justo **antes** de la línea final `];`.
4. Cambia sus datos (sobre todo el `codigo`, que no debe repetirse).
5. Guarda. La tarjeta aparece sola en el catálogo, con su botón de WhatsApp listo.

### ➖ Eliminar un producto

Borra su bloque completo, desde `{` hasta `},` (inclusive). No borres el `];` del final.

### 💲 Cambiar un precio

Busca el producto y cambia el número:

```javascript
    precio: 180,     ← antes
    precio: 210,     ← después
```

Si prefieres no mostrar el precio, escribe `precio: null,` → la tarjeta dirá "Precio a consultar" y el mensaje de WhatsApp preguntará el precio.

### 📦 Cambiar la disponibilidad

```javascript
    disponibilidad: "agotado",
```

| Valor | Se muestra como |
|---|---|
| `"disponible"` | ● Disponible (verde) |
| `"a pedido"` | ● Por pedido (dorado) |
| `"agotado"` | ● Agotado (gris, con la foto atenuada) |

### 💬 El mensaje de WhatsApp de cada producto

Se arma solo con el nombre, código y precio. Por ejemplo:

> Hola, ECO LUZ. Estoy interesado/a en la Lámpara Tutuma Natural, código ECO-001, con precio de Bs 180. Quisiera obtener más información.

Para cambiar la redacción, edita `mensajeProducto` en `datos/configuracion.js` (mantén `{nombre}`, `{codigo}` y `{precio}`, que se reemplazan solos).

---

## 7. Fotografías: agregar y cambiar

Las imágenes actuales son **ilustraciones de demostración** (tienen la etiqueta "IMAGEN DE DEMOSTRACIÓN").

### Dónde va cada foto

| Carpeta | Uso | Tamaño recomendado |
|---|---|---|
| `assets/img/productos/` | Fotos del catálogo | Cuadrada, 1000 × 1000 px |
| `assets/img/galeria/` | Galería y pasos del proceso | Horizontal, 1200 × 900 px |
| `assets/img/hero/` | Foto grande de la portada | Vertical, 900 × 1100 px |
| `assets/img/logo/` | Logo | Cuadrado, 512 × 512 px, PNG |

### Preparar la foto

- Formato **.jpg** (o .webp) y **menos de 300 KB**. Puedes reducirla gratis en <https://squoosh.app>.
- Nombre en **minúsculas, sin espacios ni tildes**: `lampara-luna-01.jpg` ✅ · `Lámpara Luna 1.JPG` ❌
- Las fotos con fondo sencillo y buena luz lucen mucho mejor en el catálogo.

### Subir la foto a GitHub

1. En tu repositorio, entra a la carpeta correspondiente (por ejemplo `assets/img/productos`).
2. Pulsa **Add file → Upload files**, arrastra la foto y pulsa **Commit changes**.

### Usar la foto en la página

Abre el archivo de datos y cambia la ruta:

```javascript
    imagen: "assets/img/productos/lampara-01.svg",        ← demostración
    imagen: "assets/img/productos/lampara-luna-01.jpg",   ← tu foto
```

| Foto de… | Se cambia en |
|---|---|
| Un producto | `datos/productos.js` → `imagen` |
| La portada | `datos/contenido.js` → `inicio.imagen` |
| Quiénes somos | `datos/contenido.js` → `quienesSomos.imagen` |
| Un paso del proceso | `datos/proceso-galeria.js` → lista `proceso` |
| La galería | `datos/proceso-galeria.js` → lista `galeria` |

**Agregar una foto a la galería:** copia una línea de la lista `galeria`, pégala antes de `];` y cambia `imagen`, `titulo` y `categoria`. Si usas una categoría nueva, su botón de filtro aparece solo.

> Si escribes mal una ruta, en lugar de la foto aparecerá un recuadro "Imagen no encontrada". Revisa que el nombre sea **idéntico** (mayúsculas, minúsculas y extensión `.jpg`/`.JPG` cuentan).

Cuando ya no uses las ilustraciones de demostración, puedes borrar los archivos `.svg` que ya no aparezcan en los datos (excepto `sin-imagen.svg`).

---

## 8. Cambiar los textos

Todos los textos están en **`datos/contenido.js`**, ordenados por sección:

| Sección | Bloque |
|---|---|
| Portada | `inicio` |
| Encabezado del catálogo | `catalogo` |
| ¿Quiénes somos? | `quienesSomos` (párrafos, valores y datos) |
| ¿Por qué surgió ECO LUZ? | `historia` (introducción, capítulos y cierre) |
| Nuestro proceso | `proceso` (títulos) · los pasos están en `datos/proceso-galeria.js` |
| Galería | `galeria` (títulos) · las fotos están en `datos/proceso-galeria.js` |
| Contacto | `contacto` |
| Pie de página | `pie` |

**Agregar un párrafo** en "Quiénes somos": copia una línea de `parrafos` (con sus comillas y su coma) y cambia el texto.

**Datos del emprendimiento** (fundadores, año de inicio, ubicación): están vacíos a propósito en `quienesSomos.datos`. Complétalos cuando quieras; solo se muestran los que tengan valor:

```javascript
      { etiqueta: "Fundado por", valor: "Nombre Apellido" },
```

**Título y descripción para Google:** son lo único que se edita en `index.html`, al principio del archivo (`<title>` y `<meta name="description">`).

---

## 9. Cambiar el número de WhatsApp

1. Abre **`datos/configuracion.js`**.
2. Cambia estas dos líneas:

```javascript
    numero: "59175452129",          ← código de país + número, sin "+", sin espacios
    numeroVisible: "+591 75452129", ← como se lee en la página
```

Todos los botones (menú, portada, catálogo, contacto y botón flotante) se actualizan solos.

> Detalle menor: en `index.html` el número aparece una vez más dentro de `<noscript>` (un mensaje para navegadores con JavaScript desactivado). Si cambias de número, cámbialo ahí también buscando `59175452129`.

---

## 10. Contacto, redes sociales y horarios

En **`datos/configuracion.js`**:

```javascript
  contacto: {
    correo: "ecoluz@correo.com",
    ubicacion: "Ciudad, Departamento",
    enlaceMapa: "https://maps.app.goo.gl/...",
    horarios: [
      { dias: "Lunes a Viernes", horas: "09:00 – 18:00" },
      { dias: "Sábados",         horas: "09:00 – 13:00" },
    ],
  },

  redes: {
    facebook:  "https://www.facebook.com/tu-pagina",
    instagram: "https://www.instagram.com/tu-cuenta",
    tiktok:    "https://www.tiktok.com/@tu-cuenta",
  },
```

- Lo que dejes vacío (`""`) no se muestra.
- Los enlaces de redes deben empezar con `https://`; si no, se ignoran por seguridad.
- Cuando llenes algún dato, la tarjeta de contacto muestra un panel adicional con esa información.

---

## 11. Logo e ícono del sitio

- **Logo:** guarda tu logo como `assets/img/logo/logo.png` y en `datos/configuracion.js` cambia
  `logo: "assets/img/logo/logo.svg"` por `logo: "assets/img/logo/logo.png"`.
  Si tu logo ya incluye el nombre escrito, cambia `mostrarTextoJuntoAlLogo` a `false`.
- **Ícono de la pestaña (favicon):** reemplaza los archivos de `assets/icons/` por versiones de tu logo con el mismo nombre y tamaño (`favicon.svg`, `favicon-32.png` de 32 × 32 px y `apple-touch-icon.png` de 180 × 180 px). Puedes generarlos en <https://realfavicongenerator.net>.
- **Imagen al compartir:** `assets/img/og-imagen.jpg` (1200 × 630 px). Reemplázala por una foto real con el mismo nombre.

---

## 12. Antes de lanzar: lista de verificación

- [ ] Precios reales en `datos/productos.js`
- [ ] Fotos reales de productos, portada, galería y proceso
- [ ] `modoDemostracion: false` en `datos/configuracion.js`
- [ ] Logo definitivo (opcional)
- [ ] Datos del emprendimiento en `quienesSomos.datos` (opcional)
- [ ] Redes sociales, horarios, correo y ubicación (los que existan)
- [ ] `TU-USUARIO` reemplazado en `index.html`
- [ ] Probado desde un celular: catálogo, menú y botón de WhatsApp

---

## 13. Si algo sale mal

**Aparece una franja roja abajo que dice "Hay un error en datos/…"**
Casi siempre falta una coma, una comilla, una llave o un corchete. Revisa **el último cambio** que hiciste en el archivo indicado. Compara con los otros bloques, que están bien escritos. En GitHub puedes ver y deshacer cambios desde la pestaña **History** del archivo.

**No veo mi cambio en el sitio publicado**
Espera 2 minutos. Luego recarga con **Ctrl + F5** (en computadora) o cierra y vuelve a abrir la pestaña en el celular. En GitHub, la pestaña **Actions** muestra si la publicación terminó (✓ verde).

**Una foto no aparece**
Revisa que la ruta en los datos coincida exactamente con el nombre del archivo, incluidas mayúsculas y extensión.

**El botón de WhatsApp no abre el chat correcto**
Revisa que `numero` tenga solo dígitos, empezando con `591`.

---

## 14. Futuras mejoras recomendadas

Ideas para próximas versiones (no están implementadas todavía):

1. **Panel de administración sin programar** · Conectar un CMS gratuito basado en GitHub, como [Pages CMS](https://pagescms.org) o [Decap CMS](https://decapcms.org). Permiten editar productos y subir fotos desde un formulario web, sin tocar código. Requiere pasar el catálogo a formato JSON.
2. **Catálogo desde Google Sheets** · Mantener los productos en una hoja de cálculo publicada y que la página la lea automáticamente.
3. **Pedido de varios productos** · Un "carrito" que junte varias lámparas y envíe un único mensaje de WhatsApp con el detalle y el total.
4. **Varias fotos por producto** · Un pequeño carrusel en cada tarjeta.
5. **Página individual por producto** · Con enlace propio para compartir cada lámpara en redes.
6. **Dominio propio** · Por ejemplo `ecoluz.com.bo`, configurable en GitHub Pages.
7. **Estadísticas de visitas** · Google Analytics o una alternativa respetuosa con la privacidad, como Plausible, para saber qué productos interesan más.
8. **Mapa de ubicación** integrado cuando haya un punto de venta físico.
9. **Testimonios de clientes** y fotos de las lámparas en sus hogares.
10. **Formulario de pedidos personalizados** mediante un servicio como Formspree (sin servidor propio).
11. **Instalable como app (PWA)** · Para que el sitio pueda añadirse a la pantalla de inicio del celular.
12. **Fotos en formato WebP** y varios tamaños por foto, para cargar aún más rápido con datos móviles.

---

*Hecho con cariño para ECO LUZ · Lámparas de Tutumas.*
