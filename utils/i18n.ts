/** Textos de la interfaz de catussi-os (español). */

export const ui = {
  // Taskbar
  start: "Inicio",
  searchPlaceholder: "Escribe aquí para buscar",
  showDesktop: "Mostrar el escritorio",
  showOpenWindows: "Mostrar ventanas abiertas",
  desktop: "Escritorio",
  enterFullscreen: "Pantalla completa",
  exitFullscreen: "Salir de pantalla completa",
  showAiButton: (title: string) => `Mostrar botón ${title}`,

  // Ventanas
  restore: "Restaurar",
  minimize: "Minimizar",
  maximize: "Maximizar",
  close: "Cerrar",
  mute: "Silenciar",
  unmute: "Activar sonido",

  // Reloj
  localTime: "Hora local",
  serverTime: "Hora del servidor",

  // Búsqueda
  openFileLocation: "Abrir ubicación del archivo",

  // Explorador / escritorio
  sortBy: "Ordenar por",
  name: "Nombre",
  size: "Tamaño",
  itemType: "Tipo",
  dateModified: "Fecha de modificación",
  ascending: "Ascendente",
  descending: "Descendente",
  refresh: "Actualizar",
  background: "Fondo",
  musicVisualization: "Visualización musical",
  windowCloseEffect: "Efecto al cerrar ventana",
  stopScreenCapture: "Detener captura de pantalla",
  captureScreen: "Capturar pantalla",
  addFiles: "Agregar archivo(s)",
  mapDirectory: "Mapear carpeta",
  mapOpfs: "Mapear OPFS",
  openTerminalHere: "Abrir terminal aquí",
  paste: "Pegar",
  new: "Nuevo",
  folder: "Carpeta",
  richTextDocument: "Documento de texto enriquecido",
  textDocument: "Documento de texto",
  properties: "Propiedades",
  viewPageSource: "Ver código fuente de la página",
  inspect: "Inspeccionar",
  scrollHere: "Desplazar aquí",
  top: "Arriba",
  bottom: "Abajo",
  pageUp: "Re Pág",
  pageDown: "Av Pág",
  scrollUp: "Subir",
  scrollDown: "Bajar",

  // Archivos
  cut: "Cortar",
  copy: "Copiar",
  createShortcut: "Crear acceso directo",
  delete: "Eliminar",
  rename: "Renombrar",
  convertTo: "Convertir a",
  convertToM3u: "Convertir a M3U",
  share: "Compartir",
  addToArchive: "Agregar al archivo...",
  extractHere: "Extraer aquí",
  download: "Descargar",
  disconnect: "Desconectar",
  edit: "Editar",
  setAsMousePointer: "Establecer como puntero",
  summarizeTextAi: "Resumir texto (IA)",
  setAsBackground: "Establecer como fondo",
  fill: "Rellenar",
  fit: "Ajustar",
  stretch: "Estirar",
  tile: "Mosaico",
  center: "Centrar",
  openWith: "Abrir con",
  chooseAnotherApp: "Elegir otra aplicación",
  openInNewWindow: "Abrir en ventana nueva",

  // Diálogos
  ok: "Aceptar",
  cancel: "Cancelar",
  open: "Abrir:",
  runMessage: (alias: string) =>
    `Escribe el nombre de un programa, carpeta, documento o recurso de Internet, y ${alias} lo abrirá por ti.`,

  // Menú Inicio
  allApps: "Todas las apps",
  expand: "Expandir",
  documents: "Documentos",
  pictures: "Imágenes",
  videos: "Videos",
  power: "Apagar",
  powerTooltip: "Borra los datos de sesión y recarga la página.",

  // Sistema
  rootName: "Mi PC",
  mappedName: "Compartir",
} as const;
