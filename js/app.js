/* =====================================================================
   ECO LUZ · Lógica del sitio
   ---------------------------------------------------------------------
   ⚠️  NO NECESITAS EDITAR ESTE ARCHIVO.
   Para cambiar productos, textos, fotos o el número de WhatsApp,
   edita los archivos de la carpeta /datos.

   Este archivo lee esos datos y construye la página automáticamente.
   ===================================================================== */

(function () {
  'use strict';

  const IMAGEN_RESPALDO = 'assets/img/sin-imagen.svg';

  /* ------------------------------------------------------------------
     1. LECTURA SEGURA DE LOS DATOS
     Si un archivo de /datos tiene un error (una coma o comilla de menos),
     se muestra un aviso claro en vez de dejar la página rota.
     ------------------------------------------------------------------ */
  const archivos = [
    ['configuracion', 'datos/configuracion.js', () => configuracion],
    ['productos', 'datos/productos.js', () => productos],
    ['contenido', 'datos/contenido.js', () => contenido],
    ['proceso', 'datos/proceso-galeria.js', () => proceso],
    ['galeria', 'datos/proceso-galeria.js', () => galeria],
  ];
  const datos = {};
  const conError = new Set();
  for (const [nombre, archivo, leer] of archivos) {
    try { datos[nombre] = leer(); } catch (e) { datos[nombre] = null; conError.add(archivo); }
  }

  const config = datos.configuracion || {};
  const textos = datos.contenido || {};
  const wa = config.whatsapp || {};
  const moneda = config.moneda || 'Bs';

  /* ------------------------------------------------------------------
     2. UTILIDADES
     ------------------------------------------------------------------ */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));
  const tieneTexto = (v) => typeof v === 'string' && v.trim() !== '';

  // Crea un elemento HTML de forma segura (el texto nunca se interpreta como HTML).
  function el(etiqueta, atributos = {}, ...hijos) {
    const nodo = document.createElement(etiqueta);
    for (const [clave, valor] of Object.entries(atributos)) {
      if (valor === null || valor === undefined || valor === false) continue;
      if (clave === 'class') nodo.className = valor;
      else if (clave === 'text') nodo.textContent = valor;
      else if (clave.startsWith('on')) nodo.addEventListener(clave.slice(2), valor);
      else nodo.setAttribute(clave, valor === true ? '' : valor);
    }
    for (const hijo of hijos.flat()) {
      if (hijo === null || hijo === undefined || hijo === false) continue;
      nodo.append(hijo instanceof Node ? hijo : document.createTextNode(String(hijo)));
    }
    return nodo;
  }

  // Busca un valor dentro de un objeto con una ruta tipo "inicio.lema".
  const valorEn = (obj, ruta) => ruta.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

  // Quita tildes y pasa a minúsculas (para comparar textos escritos a mano).
  const normalizar = (t) => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

  // Imagen con carga diferida y respaldo si el archivo no existe.
  function imagen(src, alt, extra = {}) {
    const img = el('img', { src: src || IMAGEN_RESPALDO, alt: alt || '', loading: 'lazy', decoding: 'async', ...extra });
    img.addEventListener('error', function alFallar() {
      img.removeEventListener('error', alFallar);
      console.warn('[ECO LUZ] No se encontró la imagen: "' + src + '". Revisa el nombre y la carpeta.');
      img.src = IMAGEN_RESPALDO;
    });
    return img;
  }

  // Acepta solo enlaces web (https/http) o de correo; descarta el resto.
  function urlSegura(url, protocolos = ['https:', 'http:']) {
    if (!tieneTexto(url)) return null;
    try {
      const u = new URL(url.trim(), window.location.href);
      return protocolos.includes(u.protocol) ? u.href : null;
    } catch (e) { return null; }
  }

  function formatoPrecio(precio) {
    const n = typeof precio === 'string' ? Number(precio.replace(',', '.')) : precio;
    if (typeof n !== 'number' || !Number.isFinite(n)) return null;
    return moneda + ' ' + n.toLocaleString('es-BO', { maximumFractionDigits: 2 });
  }

  const rellenar = (plantilla, valores) =>
    String(plantilla || '').replace(/\{(\w+)\}/g, (m, clave) => (valores[clave] != null ? valores[clave] : m));

  const numeroWhatsApp = String(wa.numero || '').replace(/\D/g, '');

  function enlaceWhatsApp(mensaje) {
    if (!numeroWhatsApp) return '#contacto';
    return 'https://wa.me/' + numeroWhatsApp + (tieneTexto(mensaje) ? '?text=' + encodeURIComponent(mensaje) : '');
  }

  function prepararEnlaceExterno(a, href) {
    a.href = href;
    if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  }

  /* ------------------------------------------------------------------
     3. ÍCONOS (SVG internos, sin dependencias externas)
     ------------------------------------------------------------------ */
  const trazo = (contenido) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + contenido + '</svg>';

  const ICONOS = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z"/></svg>',
    mano: trazo('<path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'),
    hoja: trazo('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'),
    estrella: trazo('<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z"/>'),
    luz: trazo('<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.1 14c.2-1 .7-1.7 1.4-2.5A6 6 0 1 0 6 8c0 1.3.5 2.5 1.5 3.5.7.8 1.2 1.5 1.4 2.5"/>'),
    corazon: trazo('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>'),
    facebook: trazo('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'),
    instagram: trazo('<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'),
    tiktok: trazo('<path d="M9 12a4 4 0 1 0 4 4V2c.5 2.6 2.4 4.6 5 5"/>'),
    correo: trazo('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
    ubicacion: trazo('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    reloj: trazo('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  };

  function icono(nombre) {
    const span = el('span', { class: 'icono', 'aria-hidden': 'true' });
    span.innerHTML = ICONOS[nombre] || ICONOS.luz; // contenido fijo y confiable (definido arriba)
    return span;
  }

  /* ------------------------------------------------------------------
     4. MARCA, TEXTOS SIMPLES Y ENLACES DE WHATSAPP
     ------------------------------------------------------------------ */
  function aplicarMarca() {
    $$('[data-marca="nombre"]').forEach((n) => { if (tieneTexto(config.nombre)) n.textContent = config.nombre; });
    $$('[data-marca="subtitulo"]').forEach((n) => { if (tieneTexto(config.subtitulo)) n.textContent = config.subtitulo; });
    $$('[data-logo]').forEach((img) => {
      if (tieneTexto(config.logo)) img.src = config.logo;
      img.addEventListener('error', () => { img.src = 'assets/img/logo/logo.svg'; }, { once: true });
    });
    if (config.mostrarTextoJuntoAlLogo === false) {
      $$('[data-marca-texto]').forEach((n) => n.classList.add('visualmente-oculto'));
      $$('[data-logo]').forEach((img) => { img.alt = config.nombre || 'ECO LUZ'; });
    }
    $$('[data-icono]').forEach((n) => n.replaceWith(icono(n.dataset.icono)));
    $$('[data-whatsapp-numero]').forEach((n) => { if (tieneTexto(wa.numeroVisible)) n.textContent = wa.numeroVisible; });
    $$('[data-whatsapp]').forEach((a) => prepararEnlaceExterno(a, enlaceWhatsApp(wa.mensajeGeneral)));
    const anio = $('#anio');
    if (anio) anio.textContent = new Date().getFullYear();
  }

  function aplicarTextos() {
    $$('[data-texto]').forEach((n) => {
      const v = valorEn(textos, n.dataset.texto);
      if (tieneTexto(v)) n.textContent = v;
      else if (n.hasAttribute('data-opcional')) n.hidden = true;
    });
  }

  /* ------------------------------------------------------------------
     5. PORTADA
     ------------------------------------------------------------------ */
  function renderInicio() {
    const img = $('#hero-imagen');
    const inicio = textos.inicio || {};
    if (!img) return;
    img.alt = inicio.textoImagen || '';
    img.addEventListener('error', () => { img.src = IMAGEN_RESPALDO; }, { once: true });
    img.src = inicio.imagen || IMAGEN_RESPALDO;
  }

  /* ------------------------------------------------------------------
     6. CATÁLOGO
     ------------------------------------------------------------------ */
  const ESTADOS = {
    disponible: { texto: 'Disponible', clase: 'disponible' },
    'a pedido': { texto: 'Por pedido', clase: 'pedido' },
    agotado: { texto: 'Agotado', clase: 'agotado' },
  };

  function estadoDe(p) {
    if (p.disponibilidad === undefined && typeof p.disponible === 'boolean') {
      return p.disponible ? ESTADOS.disponible : ESTADOS.agotado;
    }
    const clave = normalizar(p.disponibilidad).replace(/^por pedido$|^pedido$|^bajo pedido$/, 'a pedido');
    return ESTADOS[clave] || ESTADOS.disponible;
  }

  // Normaliza cada producto para tolerar pequeños errores al editar.
  function prepararProductos(lista) {
    const codigos = new Set();
    return (Array.isArray(lista) ? lista : [])
      .filter((p) => p && typeof p === 'object' && tieneTexto(p.nombre))
      .map((p) => {
        const codigo = String(p.codigo || p.id || '').trim();
        if (codigo && codigos.has(codigo)) console.warn('[ECO LUZ] Código de producto repetido: ' + codigo);
        codigos.add(codigo);
        return {
          codigo,
          nombre: p.nombre.trim(),
          descripcion: p.descripcion || '',
          precio: formatoPrecio(p.precio),
          imagen: p.imagen,
          categoria: tieneTexto(p.categoria) ? p.categoria.trim() : '',
          estado: estadoDe(p),
          caracteristicas: Array.isArray(p.caracteristicas) ? p.caracteristicas.filter(tieneTexto) : [],
          destacado: p.destacado === true,
        };
      });
  }

  function mensajeProducto(p) {
    const valores = { nombre: p.nombre, codigo: p.codigo || 'sin código', precio: p.precio };
    return p.precio ? rellenar(wa.mensajeProducto, valores) : rellenar(wa.mensajeProductoSinPrecio || wa.mensajeProducto, valores);
  }

  function tarjetaProducto(p, indice, lista) {
    const boton = el('a', { class: 'boton boton--whatsapp' }, icono('whatsapp'), p.estado.clase === 'agotado' ? 'Consultar' : 'Comprar / Consultar');
    boton.setAttribute('aria-label', 'Consultar por WhatsApp: ' + p.nombre);
    prepararEnlaceExterno(boton, enlaceWhatsApp(mensajeProducto(p)));

    return el('article', { class: 'producto revelar' + (p.estado.clase === 'agotado' ? ' producto--agotado' : '') },
      el('button', {
        class: 'producto__media', type: 'button', 'aria-label': 'Ampliar foto de ' + p.nombre,
        onclick: () => visor.abrir(lista.map((x) => ({ imagen: x.imagen, titulo: x.nombre, detalle: x.precio || '' })), indice),
      },
        imagen(p.imagen, p.nombre + (p.categoria ? ' – ' + p.categoria : ''), { width: 900, height: 900 }),
        el('span', { class: 'insignias' },
          el('span', { class: 'insignia insignia--' + p.estado.clase, text: p.estado.texto }),
          p.destacado ? el('span', { class: 'insignia insignia--destacado', text: 'Destacado' }) : null)),
      el('div', { class: 'producto__cuerpo' },
        p.categoria ? el('p', { class: 'producto__categoria', text: p.categoria }) : null,
        el('h3', { class: 'producto__nombre', text: p.nombre }),
        p.codigo ? el('p', { class: 'producto__codigo', text: 'Código: ' + p.codigo }) : null,
        p.descripcion ? el('p', { class: 'producto__descripcion', text: p.descripcion }) : null,
        p.caracteristicas.length ? el('ul', { class: 'producto__caracteristicas', 'aria-label': 'Características' }, p.caracteristicas.map((c) => el('li', { text: c }))) : null,
        el('div', { class: 'producto__pie' },
          p.precio ? el('p', { class: 'producto__precio' }, p.precio) : el('p', { class: 'producto__precio' }, el('small', { text: 'Precio a consultar' })),
          boton)));
  }

  // Crea los botones de filtro a partir de las categorías de una lista.
  function crearFiltros(contenedor, categorias, alCambiar) {
    contenedor.replaceChildren();
    if (categorias.length < 2) { contenedor.hidden = true; return; }
    const botones = ['Todos', ...categorias].map((cat, i) =>
      el('button', {
        class: 'filtro', type: 'button', 'aria-pressed': i === 0 ? 'true' : 'false', text: cat,
        onclick: (e) => {
          botones.forEach((b) => b.setAttribute('aria-pressed', 'false'));
          e.currentTarget.setAttribute('aria-pressed', 'true');
          alCambiar(i === 0 ? null : cat);
        },
      }));
    contenedor.append(...botones);
  }

  const categoriasDe = (lista) => [...new Set(lista.map((x) => x.categoria).filter(Boolean))];

  function renderCatalogo() {
    const contenedor = $('#lista-productos');
    if (!contenedor) return;
    if (config.modoDemostracion) $('#aviso-demo').hidden = false;

    if (datos.productos === null) {
      contenedor.replaceChildren(el('p', { class: 'catalogo__vacio', text: 'El catálogo no se pudo cargar. Escríbenos por WhatsApp para conocer nuestras lámparas.' }));
      return;
    }
    const lista = prepararProductos(datos.productos);

    function mostrar(categoria) {
      const visibles = categoria ? lista.filter((p) => p.categoria === categoria) : lista;
      contenedor.replaceChildren(...(visibles.length
        ? visibles.map((p, i) => tarjetaProducto(p, i, visibles))
        : [el('p', { class: 'catalogo__vacio', text: 'Pronto agregaremos nuevos productos. ¡Consúltanos por WhatsApp!' })]));
      observarRevelado(contenedor);
    }

    crearFiltros($('#filtros-catalogo'), categoriasDe(lista), mostrar);
    mostrar(null);
  }

  /* ------------------------------------------------------------------
     7. QUIÉNES SOMOS E HISTORIA
     ------------------------------------------------------------------ */
  function renderNosotros() {
    const q = textos.quienesSomos || {};
    const img = $('#nosotros-imagen');
    if (img) {
      if (tieneTexto(q.imagen)) {
        img.alt = q.textoImagen || '';
        img.addEventListener('error', () => { img.src = IMAGEN_RESPALDO; }, { once: true });
        img.src = q.imagen;
      } else {
        img.closest('figure').hidden = true;
      }
    }

    $('#nosotros-parrafos').replaceChildren(...(q.parrafos || []).filter(tieneTexto).map((t) => el('p', { text: t })));

    const datosLlenos = (q.datos || []).filter((d) => d && tieneTexto(d.valor));
    const dl = $('#nosotros-datos');
    if (datosLlenos.length) {
      dl.replaceChildren(...datosLlenos.map((d) => el('div', {}, el('dt', { text: (d.etiqueta || '') + ':' }), el('dd', { text: d.valor }))));
      dl.hidden = false;
    }

    $('#nosotros-valores').replaceChildren(...(q.valores || []).filter((v) => v && tieneTexto(v.titulo)).map((v) =>
      el('li', { class: 'valor revelar' }, icono(v.icono), el('h3', { text: v.titulo }), tieneTexto(v.texto) ? el('p', { text: v.texto }) : null)));
  }

  function renderHistoria() {
    const h = textos.historia || {};
    $('#historia-capitulos').replaceChildren(...(h.capitulos || []).filter((c) => c && tieneTexto(c.titulo)).map((c) =>
      el('li', { class: 'capitulo revelar' }, el('h3', { text: c.titulo }), tieneTexto(c.texto) ? el('p', { text: c.texto }) : null)));
  }

  /* ------------------------------------------------------------------
     8. PROCESO
     ------------------------------------------------------------------ */
  function renderProceso() {
    const lista = (Array.isArray(datos.proceso) ? datos.proceso : []).filter((p) => p && tieneTexto(p.titulo));
    $('#lista-pasos').replaceChildren(...lista.map((p, i) =>
      el('li', { class: 'paso revelar' + (i === lista.length - 1 ? ' paso--final' : '') },
        tieneTexto(p.imagen) ? imagen(p.imagen, p.titulo + ': ' + (p.descripcion || ''), { width: 1200, height: 900 }) : null,
        el('div', { class: 'paso__cuerpo' },
          el('span', { class: 'paso__numero', 'aria-hidden': 'true', text: p.numero || String(i + 1).padStart(2, '0') }),
          el('h3', { text: p.titulo }),
          tieneTexto(p.descripcion) ? el('p', { text: p.descripcion }) : null))));
  }

  /* ------------------------------------------------------------------
     9. GALERÍA
     ------------------------------------------------------------------ */
  function renderGaleria() {
    const contenedor = $('#lista-galeria');
    const lista = (Array.isArray(datos.galeria) ? datos.galeria : [])
      .filter((g) => g && tieneTexto(g.imagen))
      .map((g) => ({ imagen: g.imagen, titulo: g.titulo || '', categoria: tieneTexto(g.categoria) ? g.categoria.trim() : '' }));

    if (!lista.length) { $('#galeria').hidden = true; $('a[data-seccion="galeria"]')?.parentElement.remove(); return; }

    function mostrar(categoria) {
      const visibles = categoria ? lista.filter((g) => g.categoria === categoria) : lista;
      const paraVisor = visibles.map((g) => ({ imagen: g.imagen, titulo: g.titulo, detalle: g.categoria }));
      contenedor.replaceChildren(...visibles.map((g, i) =>
        el('li', { class: 'galeria__item revelar' },
          el('button', { type: 'button', 'aria-label': 'Ampliar: ' + (g.titulo || 'foto ' + (i + 1)), onclick: () => visor.abrir(paraVisor, i) },
            imagen(g.imagen, g.titulo, { width: 1200, height: 900 }),
            el('span', { class: 'galeria__texto' }, g.categoria ? el('small', { text: g.categoria }) : null, g.titulo)))));
      observarRevelado(contenedor);
    }

    crearFiltros($('#filtros-galeria'), categoriasDe(lista), mostrar);
    mostrar(null);
  }

  /* ------------------------------------------------------------------
     10. VISOR DE IMÁGENES (lightbox)
     ------------------------------------------------------------------ */
  const visor = (() => {
    const caja = $('#visor');
    const img = $('#visor-imagen');
    const texto = $('#visor-texto');
    let lista = [];
    let actual = 0;
    let focoAnterior = null;
    let toqueX = null;

    function mostrar(i) {
      actual = (i + lista.length) % lista.length;
      const item = lista[actual];
      img.src = item.imagen;
      img.alt = item.titulo || '';
      texto.replaceChildren(document.createTextNode(item.titulo || ''),
        item.detalle ? el('small', { text: item.detalle + (lista.length > 1 ? ' · ' + (actual + 1) + ' / ' + lista.length : '') }) : '');
      const varias = lista.length > 1;
      $$('[data-visor="anterior"], [data-visor="siguiente"]', caja).forEach((b) => { b.hidden = !varias; });
    }

    function abrir(items, i) {
      lista = items;
      focoAnterior = document.activeElement;
      mostrar(i);
      caja.hidden = false;
      document.body.style.overflow = 'hidden';
      $('[data-visor="cerrar"]', caja).focus();
    }

    function cerrar() {
      caja.hidden = true;
      document.body.style.overflow = '';
      if (focoAnterior) focoAnterior.focus();
    }

    img.addEventListener('error', () => { if (!img.src.endsWith(IMAGEN_RESPALDO)) img.src = IMAGEN_RESPALDO; });
    caja.addEventListener('click', (e) => {
      const accion = e.target.closest('[data-visor]')?.dataset.visor;
      if (accion === 'cerrar' || e.target === caja) cerrar();
      else if (accion === 'anterior') mostrar(actual - 1);
      else if (accion === 'siguiente') mostrar(actual + 1);
    });
    document.addEventListener('keydown', (e) => {
      if (caja.hidden) return;
      if (e.key === 'Escape') cerrar();
      else if (e.key === 'ArrowLeft' && lista.length > 1) mostrar(actual - 1);
      else if (e.key === 'ArrowRight' && lista.length > 1) mostrar(actual + 1);
      else if (e.key === 'Tab') {
        // Mantiene el foco dentro del visor
        const focos = $$('button:not([hidden])', caja);
        const primero = focos[0], ultimo = focos[focos.length - 1];
        if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
      }
    });
    // Deslizar con el dedo en celulares
    caja.addEventListener('touchstart', (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
    caja.addEventListener('touchend', (e) => {
      if (toqueX === null || lista.length < 2) return;
      const dx = e.changedTouches[0].clientX - toqueX;
      if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
      toqueX = null;
    });

    return { abrir };
  })();

  /* ------------------------------------------------------------------
     11. CONTACTO (solo muestra los datos que existen)
     ------------------------------------------------------------------ */
  function renderContacto() {
    const c = config.contacto || {};
    const redes = config.redes || {};
    const bloques = [];

    const horarios = (Array.isArray(c.horarios) ? c.horarios : []).filter((h) => h && (tieneTexto(h.dias) || tieneTexto(h.horas)));
    if (horarios.length) {
      bloques.push(el('div', {}, el('h3', { text: 'Horarios de atención' }),
        el('ul', { class: 'horarios' }, horarios.map((h) => el('li', {}, el('span', { text: h.dias || '' }), el('strong', { text: h.horas || '' }))))));
    }

    const datosContacto = [];
    const correo = tieneTexto(c.correo) ? c.correo.trim() : '';
    if (correo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      datosContacto.push(el('p', { class: 'dato' }, icono('correo'), el('a', { href: 'mailto:' + correo, text: correo })));
    }
    if (tieneTexto(c.ubicacion)) {
      const mapa = urlSegura(c.enlaceMapa);
      const texto = mapa ? el('a', { href: mapa, target: '_blank', rel: 'noopener noreferrer', text: c.ubicacion }) : el('span', { text: c.ubicacion });
      datosContacto.push(el('p', { class: 'dato' }, icono('ubicacion'), texto));
    }
    if (datosContacto.length) bloques.push(el('div', {}, el('h3', { text: 'Encuéntranos' }), ...datosContacto));

    const nombresRedes = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok' };
    const enlacesRedes = Object.keys(nombresRedes)
      .map((red) => [red, urlSegura(redes[red], ['https:'])])
      .filter(([, url]) => url)
      .map(([red, url]) => el('a', { href: url, target: '_blank', rel: 'noopener noreferrer', 'aria-label': nombresRedes[red], title: nombresRedes[red] }, icono(red)));
    if (enlacesRedes.length) bloques.push(el('div', {}, el('h3', { text: 'Síguenos' }), el('div', { class: 'redes' }, enlacesRedes)));

    if (bloques.length) {
      const extra = $('#contacto-extra');
      extra.replaceChildren(...bloques);
      extra.hidden = false;
      $('#tarjeta-contacto').classList.add('contacto--con-extra');
    }
  }

  /* ------------------------------------------------------------------
     12. DATOS ESTRUCTURADOS PARA GOOGLE (generados desde la configuración)
     ------------------------------------------------------------------ */
  function datosEstructurados() {
    const redes = Object.values(config.redes || {}).map((u) => urlSegura(u, ['https:'])).filter(Boolean);
    const info = {
      '@context': 'https://schema.org',
      '@type': 'Store',
      name: (config.nombre || 'ECO LUZ') + ' – ' + (config.subtitulo || ''),
      description: document.querySelector('meta[name="description"]')?.content || '',
      url: window.location.href.split('#')[0],
      image: new URL('assets/img/og-imagen.jpg', window.location.href).href,
    };
    if (numeroWhatsApp) info.telephone = '+' + numeroWhatsApp;
    if (redes.length) info.sameAs = redes;
    document.head.append(el('script', { type: 'application/ld+json', text: JSON.stringify(info) }));
  }

  /* ------------------------------------------------------------------
     13. NAVEGACIÓN: encabezado, menú móvil y enlace activo
     ------------------------------------------------------------------ */
  function iniciarNavegacion() {
    const encabezado = $('#encabezado');
    const boton = $('#boton-menu');
    const menu = $('#menu');

    const alDesplazar = () => encabezado.classList.toggle('encabezado--solido', window.scrollY > 40);
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });

    function abrirMenu(abrir) {
      boton.setAttribute('aria-expanded', String(abrir));
      boton.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
      menu.classList.toggle('menu--abierto', abrir);
      encabezado.classList.toggle('encabezado--abierto', abrir);
    }
    boton.addEventListener('click', () => abrirMenu(boton.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) abrirMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') abrirMenu(false); });
    document.addEventListener('click', (e) => { if (!encabezado.contains(e.target)) abrirMenu(false); });
    window.matchMedia('(min-width: 1080px)').addEventListener('change', () => abrirMenu(false));

    // Resalta en el menú la sección visible
    if (!('IntersectionObserver' in window)) return;
    const enlaces = $$('.menu__lista a[data-seccion]');
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const id = entrada.target.dataset.nav || entrada.target.id;
        enlaces.forEach((a) => a.classList.toggle('activo', a.dataset.seccion === id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section[id]').forEach((s) => observador.observe(s));
  }

  /* ------------------------------------------------------------------
     14. APARICIÓN PROGRESIVA DE ELEMENTOS
     ------------------------------------------------------------------ */
  const revelador = 'IntersectionObserver' in window
    ? new IntersectionObserver((entradas, obs) => {
      entradas.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    : null;

  function observarRevelado(ctx = document) {
    $$('.revelar:not(.visible)', ctx).forEach((n, i) => {
      if (!revelador) { n.classList.add('visible'); return; }
      n.style.transitionDelay = Math.min(i % 4, 3) * 80 + 'ms';
      revelador.observe(n);
    });
  }

  /* ------------------------------------------------------------------
     15. AVISO DE ERRORES EN LOS ARCHIVOS DE DATOS
     ------------------------------------------------------------------ */
  function avisarErrores() {
    if (!conError.size) return;
    const lista = [...conError];
    console.error('[ECO LUZ] No se pudieron leer estos archivos: ' + lista.join(', ') +
      '. Revisa que no falten comas, comillas, llaves o corchetes.');
    const aviso = $('#aviso-error');
    aviso.replaceChildren('⚠️ Hay un error en ', ...lista.flatMap((a, i) => [i ? ', ' : '', el('code', { text: a })]),
      '. Revisa que no falte una coma, comilla, llave o corchete (el último cambio que hiciste suele ser la causa).');
    aviso.hidden = false;
  }

  /* ------------------------------------------------------------------
     INICIO
     ------------------------------------------------------------------ */
  document.documentElement.classList.add('js');
  avisarErrores();
  aplicarMarca();
  aplicarTextos();
  renderInicio();
  renderCatalogo();
  renderNosotros();
  renderHistoria();
  renderProceso();
  renderGaleria();
  renderContacto();
  datosEstructurados();
  iniciarNavegacion();
  observarRevelado();
})();
