/* =====================================================================
   ECO LUZ · CATÁLOGO DE PRODUCTOS
   ---------------------------------------------------------------------
   ✏️  ESTE ARCHIVO SÍ LO PUEDES EDITAR.

   Cada producto es un bloque entre llaves { ... } separado por comas.
   La página lee esta lista y crea las tarjetas automáticamente.

   ⚠️  LOS PRECIOS E IMÁGENES ACTUALES SON DE DEMOSTRACIÓN.
       Reemplázalos por los reales.

   CAMPOS DE CADA PRODUCTO:
     codigo          → Código único. Ej.: "ECO-007"
     nombre          → Nombre del producto.
     descripcion     → Texto corto que describe la lámpara.
     precio          → Solo el número, sin "Bs". Ej.: 150
                       Si no quieres mostrar precio escribe: null
     imagen          → Ruta de la foto dentro de assets/img/productos/
     categoria       → Grupo del producto. Los botones de filtro del
                       catálogo se crean solos a partir de este dato.
     disponibilidad  → Escribe una de estas tres opciones:
                       "disponible"   "a pedido"   "agotado"
     caracteristicas → Lista corta entre corchetes: ["...", "..."]
     destacado       → true = muestra la etiqueta "Destacado".

   ➕ AGREGAR UN PRODUCTO: copia un bloque completo (desde { hasta },),
      pégalo antes del ]; del final y cambia sus datos.
   ➖ ELIMINAR UN PRODUCTO: borra su bloque completo, desde { hasta },
   ===================================================================== */

const productos = [

  {
    codigo: "ECO-001",
    nombre: "Lámpara Tutuma Natural",
    descripcion: "Lámpara artesanal elaborada a mano con tutuma, ideal para decorar espacios interiores.",
    precio: 180, // PRECIO DE DEMOSTRACIÓN
    imagen: "assets/img/productos/lampara-01.jpg",
    categoria: "Lámparas de mesa",
    disponibilidad: "disponible",
    caracteristicas: ["Hecha a mano", "Patrón en espiral", "Con base"],
    destacado: true,
  },

  {
    codigo: "ECO-002",
    nombre: "Lámpara Tutuma Decorativa",
    descripcion: "Pieza decorativa con diseño floral perforado a mano que proyecta sombras cálidas en la pared.",
    precio: 220, // PRECIO DE DEMOSTRACIÓN
    imagen: "assets/img/productos/lampara-04.jpg",
    categoria: "Decorativas",
    disponibilidad: "disponible",
    caracteristicas: ["Forma natural", "Diseño floral", "Luz cálida"],
    destacado: false,
  },

  {
    codigo: "ECO-003",
    nombre: "Lámpara Tutuma Colgante",
    descripcion: "Lámpara colgante de tutuma para salas, comedores o terrazas, con un patrón de anillos de luz.",
    precio: 250, // PRECIO DE DEMOSTRACIÓN
    imagen: "assets/img/productos/lampara-03.jpg",
    categoria: "Colgantes",
    disponibilidad: "disponible",
    caracteristicas: ["Para techo", "Patrón de anillos", "Cable colgante"],
    destacado: true,
  },

  {
    codigo: "ECO-004",
    nombre: "Lámpara Tutuma Artesanal",
    descripcion: "Diseño geométrico de inspiración andina, perforado punto por punto con paciencia y detalle.",
    precio: 200, // PRECIO DE DEMOSTRACIÓN
    imagen: "assets/img/productos/lampara-02.jpg",
    categoria: "Decorativas",
    disponibilidad: "a pedido",
    caracteristicas: ["Inspiración andina", "Patrón de rombos", "Pieza única"],
    destacado: false,
  },

  {
    codigo: "ECO-005",
    nombre: "Lámpara Tutuma de Mesa",
    descripcion: "Lámpara de mesa con diseño de estrellas, perfecta para mesas de noche y rincones de lectura.",
    precio: 190, // PRECIO DE DEMOSTRACIÓN
    imagen: "assets/img/productos/lampara-05.svg",
    categoria: "Lámparas de mesa",
    disponibilidad: "disponible",
    caracteristicas: ["Diseño de estrellas", "Con base", "Luz cálida"],
    destacado: false,
  },

  {
    codigo: "ECO-006",
    nombre: "Lámpara Tutuma Trío",
    descripcion: "Conjunto de tres lámparas pequeñas con diseños distintos, ideal para regalar o decorar repisas.",
    precio: 150, // PRECIO DE DEMOSTRACIÓN
    imagen: "assets/img/productos/lampara-06.svg",
    categoria: "Decorativas",
    disponibilidad: "agotado",
    caracteristicas: ["Tres piezas", "Diseños variados", "Ideal para regalo"],
    destacado: false,
  },

];
