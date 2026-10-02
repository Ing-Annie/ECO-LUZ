/* =====================================================================
   ECO LUZ · CONFIGURACIÓN GENERAL
   ---------------------------------------------------------------------
   ✏️  ESTE ARCHIVO SÍ LO PUEDES EDITAR.

   Aquí están: el número de WhatsApp, los mensajes automáticos, el logo,
   los datos de contacto, los horarios y las redes sociales.

   REGLAS BÁSICAS (para no romper nada):
     • Cambia solo lo que está entre comillas "así".
     • No borres las comas del final de cada línea.
     • No borres llaves { } ni corchetes [ ].
     • Si un dato todavía no existe, déjalo vacío: ""
       → la página simplemente no lo mostrará.
   ===================================================================== */

const configuracion = {

  // ---------- MARCA ----------
  nombre: "ECO LUZ",
  subtitulo: "Lámparas de Tutumas",

  // Ruta del logo. Cuando tengas tu logo definitivo, guárdalo como
  // assets/img/logo/logo.png y cambia la línea por:
  //   logo: "assets/img/logo/logo.png",
  logo: "assets/img/logo/logo.svg",

  // true  = muestra "ECO LUZ / Lámparas de Tutumas" al lado del logo.
  // false = muestra solo el logo (útil si tu logo ya incluye el nombre).
  mostrarTextoJuntoAlLogo: true,


  // ---------- WHATSAPP ----------
  whatsapp: {
    // Número en formato internacional: código de país (591) + número.
    // Sin "+", sin espacios y sin guiones.
    numero: "59175452129",

    // Cómo se muestra el número escrito en la página.
    numeroVisible: "+591 75452129",

    // Mensaje del botón flotante y de los botones generales.
    mensajeGeneral: "Hola, ECO LUZ. Me gustaría obtener información sobre sus lámparas de tutumas.",

    // Mensaje del botón de cada producto. Las palabras entre llaves
    // se reemplazan solas: {nombre}, {codigo} y {precio}.
    mensajeProducto: "Hola, ECO LUZ. Estoy interesado/a en la {nombre}, código {codigo}, con precio de {precio}. Quisiera obtener más información.",

    // Se usa cuando un producto no tiene precio (precio: null).
    mensajeProductoSinPrecio: "Hola, ECO LUZ. Estoy interesado/a en la {nombre}, código {codigo}. Quisiera conocer su precio y obtener más información.",
  },


  // ---------- CATÁLOGO ----------
  moneda: "Bs",

  // true  = muestra un aviso de "precios e imágenes de demostración".
  // false = cámbialo a false cuando ya pongas tus precios y fotos reales.
  modoDemostracion: true,


  // ---------- CONTACTO ----------
  contacto: {
    correo: "",          // ejemplo: "ecoluz@correo.com"
    ubicacion: "",       // ejemplo: "Ciudad, Departamento"
    enlaceMapa: "",      // enlace de Google Maps (opcional)

    // Horarios de atención. Copia la línea de ejemplo, quítale las //
    // y cambia los datos. Si la lista queda vacía, no se muestra.
    horarios: [
      // { dias: "Lunes a Viernes", horas: "09:00 – 18:00" },
      // { dias: "Sábados",         horas: "09:00 – 13:00" },
    ],
  },


  // ---------- REDES SOCIALES ----------
  // Pega el enlace completo de cada red (debe empezar con https://).
  // Las que queden vacías no se muestran.
  redes: {
    facebook: "",        // ejemplo: "https://www.facebook.com/tu-pagina"
    instagram: "",       // ejemplo: "https://www.instagram.com/tu-cuenta"
    tiktok: "",          // ejemplo: "https://www.tiktok.com/@tu-cuenta"
  },

};
