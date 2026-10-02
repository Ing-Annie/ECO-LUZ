/* =====================================================================
   ECO LUZ · TEXTOS DE LA PÁGINA
   ---------------------------------------------------------------------
   ✏️  ESTE ARCHIVO SÍ LO PUEDES EDITAR.

   Aquí están todos los textos: portada, quiénes somos, la historia
   del emprendimiento, títulos de secciones y contacto.

   REGLAS BÁSICAS:
     • Cambia solo el texto entre comillas "así".
     • Si tu texto necesita comillas, usa comillas simples: 'así'.
     • Cada párrafo va entre comillas y separado por comas.
     • No borres llaves { } ni corchetes [ ].
   ===================================================================== */

const contenido = {

  // ---------- PORTADA (INICIO) ----------
  inicio: {
    etiqueta: "Artesanía hecha a mano",
    lema: "Iluminamos tus espacios con la belleza de lo natural.",
    descripcion: "Creemos en transformar materiales naturales en piezas únicas que combinan iluminación, creatividad y artesanía.",
    botonCatalogo: "Ver catálogo",
    botonWhatsapp: "Comprar por WhatsApp",
    // Foto principal (reemplaza por una foto real en assets/img/hero/)
    imagen: "assets/img/hero/hero-lampara.svg",
    textoImagen: "Lámpara de tutuma colgante encendida, con puntos de luz proyectados alrededor",
  },


  // ---------- CATÁLOGO ----------
  catalogo: {
    antetitulo: "Hecho a mano, pieza por pieza",
    titulo: "Nuestro Catálogo",
    descripcion: "Cada lámpara es única: la forma de la tutuma y el trabajo manual hacen que no existan dos piezas iguales.",
  },


  // ---------- ¿QUIÉNES SOMOS? ----------
  quienesSomos: {
    antetitulo: "Conócenos",
    titulo: "¿Quiénes somos?",
    parrafos: [
      "ECO LUZ es un emprendimiento dedicado a crear lámparas artesanales utilizando tutumas, un material natural lleno de carácter, textura e historia.",
      "Cada pieza nace de un trabajo manual paciente: seleccionamos, preparamos, diseñamos y perforamos cada tutuma para convertirla en una lámpara que ilumina y decora al mismo tiempo.",
      "Nos mueve el amor por los materiales naturales, la creatividad y el deseo de innovar con identidad, ofreciendo productos hechos a mano que llevan un pedacito de nuestra tierra a cada hogar.",
    ],
    imagen: "assets/img/galeria/terminado-02.svg",
    textoImagen: "Tres lámparas colgantes de tutuma encendidas",

    // Íconos disponibles: "mano", "hoja", "estrella", "luz", "corazon"
    valores: [
      { icono: "mano",     titulo: "Hecho a mano",          texto: "Cada lámpara es trabajada artesanalmente, detalle por detalle." },
      { icono: "hoja",     titulo: "Materiales naturales",  texto: "La tutuma es la protagonista: un material noble y natural." },
      { icono: "estrella", titulo: "Piezas únicas",         texto: "No hay dos tutumas iguales, por eso cada lámpara es irrepetible." },
      { icono: "luz",      titulo: "Creatividad e innovación", texto: "Diseños que transforman la luz en texturas y sombras." },
    ],

    // Datos del emprendimiento. Se muestran solo los que tengan valor.
    // Ejemplo: { etiqueta: "Fundado por", valor: "Nombre Apellido" },
    datos: [
      { etiqueta: "Fundado por", valor: "" },
      { etiqueta: "Desde",       valor: "" },
      { etiqueta: "Ubicación",   valor: "" },
    ],
  },


  // ---------- ¿POR QUÉ SURGIÓ ECO LUZ? ----------
  historia: {
    antetitulo: "Nuestra historia",
    titulo: "¿Por qué surgió ECO LUZ?",
    introduccion: "La idea de ECO LUZ nace de la intención de transformar un material natural como la tutuma en una pieza decorativa y funcional que pueda iluminar los espacios de una manera diferente.",
    capitulos: [
      { titulo: "Aprovechar lo natural",      texto: "Vimos en la tutuma un material noble, resistente y lleno de belleza que merecía una nueva vida más allá de su uso tradicional." },
      { titulo: "Dar espacio a la creatividad", texto: "Cada tutuma es un lienzo distinto. Su forma inspira el diseño y los patrones de luz que tendrá la lámpara." },
      { titulo: "Revalorizar la artesanía",    texto: "Quisimos poner en valor las técnicas manuales y el oficio artesanal, que dan a cada pieza un alma propia." },
      { titulo: "Crear piezas únicas",         texto: "En un mundo de productos en serie, ofrecemos lámparas irrepetibles, pensadas para quien busca algo especial." },
      { titulo: "Valorar el trabajo manual",   texto: "Detrás de cada lámpara hay horas de dedicación, paciencia y cuidado que se reflejan en cada punto de luz." },
      { titulo: "Una alternativa diferente",   texto: "Buscamos ofrecer una opción decorativa cálida y original que combine naturaleza, diseño e iluminación." },
    ],
    cierre: "Así nació ECO LUZ: de la unión entre la naturaleza, las manos que la trabajan y la luz que la transforma.",
  },


  // ---------- NUESTRO PROCESO ----------
  // (Los pasos del proceso se editan en datos/proceso-galeria.js)
  proceso: {
    antetitulo: "Nuestro proceso",
    titulo: "De la Tutuma a la Luz",
    descripcion: "Así transformamos una tutuma natural en una lámpara hecha a mano.",
  },


  // ---------- GALERÍA ----------
  // (Las fotos de la galería se editan en datos/proceso-galeria.js)
  galeria: {
    antetitulo: "Detrás de cada lámpara",
    titulo: "Galería",
    descripcion: "Imágenes del proceso de elaboración, desde la materia prima hasta el producto terminado. Toca una foto para ampliarla.",
  },


  // ---------- CONTACTO ----------
  contacto: {
    antetitulo: "Estamos para ayudarte",
    titulo: "Contáctanos",
    descripcion: "¿Te gustó alguna lámpara o quieres un diseño especial? Escríbenos por WhatsApp y te responderemos con gusto.",
    boton: "Escribir por WhatsApp",
  },


  // ---------- PIE DE PÁGINA ----------
  pie: {
    frase: "Lámparas artesanales de tutuma, hechas a mano con dedicación.",
  },

};
