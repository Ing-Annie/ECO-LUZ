/* =====================================================================
   ECO LUZ · PASOS DEL PROCESO Y FOTOS DE LA GALERÍA
   ---------------------------------------------------------------------
   ✏️  ESTE ARCHIVO SÍ LO PUEDES EDITAR.

   ⚠️  LAS IMÁGENES ACTUALES SON ILUSTRACIONES DE DEMOSTRACIÓN.
       Guarda tus fotos reales en assets/img/galeria/ y cambia la ruta.
   ===================================================================== */


/* ---------- PASOS: "DE LA TUTUMA A LA LUZ" ----------
   Cada paso tiene: numero, titulo, descripcion e imagen.
   Para agregar un paso, copia un bloque { ... }, y cambia sus datos. */

const proceso = [
  { numero: "01", titulo: "Selección",         descripcion: "Selección cuidadosa de las tutumas.",                  imagen: "assets/img/galeria/materia-prima-01.jpg" },
  { numero: "02", titulo: "Preparación",       descripcion: "Limpieza y preparación del material.",                 imagen: "assets/img/galeria/preparacion-01.jpeg" },
  { numero: "03", titulo: "Diseño",            descripcion: "Definición del diseño y patrón de iluminación.",       imagen: "assets/img/galeria/diseno-01.jpeg" },
  { numero: "04", titulo: "Elaboración",       descripcion: "Trabajo artesanal y perforación de la tutuma.",        imagen: "assets/img/galeria/elaboracion-01.jpeg" },
  { numero: "05", titulo: "Ensamblaje",        descripcion: "Instalación de los componentes de la lámpara.",        imagen: "assets/img/galeria/ensamblaje-01.jpeg" },
  { numero: "06", titulo: "Acabado",           descripcion: "Revisión, limpieza y acabado final.",                  imagen: "assets/img/galeria/elaboracion-02.jpeg" },
  { numero: "07", titulo: "Producto terminado", descripcion: "La lámpara queda lista para iluminar y decorar.",     imagen: "assets/img/galeria/terminado-01.jpeg" },
];


/* ---------- GALERÍA ----------
   Cada foto tiene: imagen, titulo (se usa también como texto
   alternativo para buscadores y lectores de pantalla) y categoria.
   Los botones de filtro se crean solos a partir de las categorías. */

const galeria = [
  { imagen: "assets/img/galeria/materia-prima-01.jpg", titulo: "Tutumas seleccionadas para el taller",  categoria: "Materia prima" },
  { imagen: "assets/img/galeria/materia-prima-02.svg", titulo: "Tutumas en el árbol",                    categoria: "Materia prima" },
  { imagen: "assets/img/galeria/preparacion-01.jpeg",   titulo: "Tutuma cortada y vaciada",               categoria: "Preparación" },
  { imagen: "assets/img/galeria/preparacion-02.svg",   titulo: "Limpieza de la tutuma",                  categoria: "Preparación" },
  { imagen: "assets/img/galeria/diseno-01.jpeg",        titulo: "Patrón dibujado sobre la tutuma",        categoria: "Diseño" },
  { imagen: "assets/img/galeria/diseno-02.svg",        titulo: "Bocetos de diseños de perforación",      categoria: "Diseño" },
  { imagen: "assets/img/galeria/elaboracion-01.jpeg",   titulo: "Perforación artesanal",                  categoria: "Elaboración" },
  { imagen: "assets/img/galeria/elaboracion-02.svg",   titulo: "Detalle de los orificios de luz",        categoria: "Elaboración" },
  { imagen: "assets/img/galeria/ensamblaje-01.jpeg",    titulo: "Componentes de la lámpara",              categoria: "Ensamblaje" },
  { imagen: "assets/img/galeria/ensamblaje-02.svg",    titulo: "Armado de una lámpara colgante",         categoria: "Ensamblaje" },
  { imagen: "assets/img/galeria/terminado-01.jpeg",     titulo: "Lámpara terminada y encendida",          categoria: "Producto terminado" },
  { imagen: "assets/img/galeria/terminado-02.svg",     titulo: "Lámparas colgantes encendidas",          categoria: "Producto terminado" },
];
