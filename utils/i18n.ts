/** Textos de la interfaz de catussi-os (ES / EN). */

export type Locale = "es" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["es", "en"];

type UiDictionary = {
  start: string;
  searchPlaceholder: string;
  showDesktop: string;
  showOpenWindows: string;
  desktop: string;
  enterFullscreen: string;
  exitFullscreen: string;
  showAiButton: (title: string) => string;
  restore: string;
  minimize: string;
  maximize: string;
  close: string;
  mute: string;
  unmute: string;
  localTime: string;
  serverTime: string;
  openFileLocation: string;
  sortBy: string;
  name: string;
  size: string;
  itemType: string;
  dateModified: string;
  ascending: string;
  descending: string;
  refresh: string;
  background: string;
  theme: string;
  darkTheme: string;
  lightTheme: string;
  language: string;
  spanish: string;
  english: string;
  musicVisualization: string;
  windowCloseEffect: string;
  stopScreenCapture: string;
  captureScreen: string;
  addFiles: string;
  mapDirectory: string;
  mapOpfs: string;
  openTerminalHere: string;
  paste: string;
  new: string;
  folder: string;
  richTextDocument: string;
  textDocument: string;
  properties: string;
  viewPageSource: string;
  inspect: string;
  scrollHere: string;
  top: string;
  bottom: string;
  pageUp: string;
  pageDown: string;
  scrollUp: string;
  scrollDown: string;
  cut: string;
  copy: string;
  createShortcut: string;
  delete: string;
  rename: string;
  convertTo: string;
  convertToM3u: string;
  share: string;
  addToArchive: string;
  extractHere: string;
  download: string;
  disconnect: string;
  edit: string;
  setAsMousePointer: string;
  summarizeTextAi: string;
  setAsBackground: string;
  fill: string;
  fit: string;
  stretch: string;
  tile: string;
  center: string;
  openWith: string;
  chooseAnotherApp: string;
  openInNewWindow: string;
  ok: string;
  cancel: string;
  open: string;
  runMessage: (alias: string) => string;
  allApps: string;
  expand: string;
  documents: string;
  pictures: string;
  videos: string;
  power: string;
  powerTooltip: string;
  rootName: string;
  mappedName: string;
  fileTooLarge: (fileName: string, fileSize: string, maxSize: string) => string;
  filesTooLargeTitle: (maxSize: string) => string;
  videoUnreadable: string;
  browser: string;
  fileExplorer: string;
  documentViewer: string;
  openWithDialog: string;
  propertiesDialog: string;
  runDialog: string;
  videoPlayer: string;
  portfolioDocsNav: string;
  documentMissing: string;
  documentLoadError: string;
};

const es: UiDictionary = {
  start: "Inicio",
  searchPlaceholder: "Escribe aquí para buscar",
  showDesktop: "Mostrar el escritorio",
  showOpenWindows: "Mostrar ventanas abiertas",
  desktop: "Escritorio",
  enterFullscreen: "Pantalla completa",
  exitFullscreen: "Salir de pantalla completa",
  showAiButton: (title) => `Mostrar botón ${title}`,
  restore: "Restaurar",
  minimize: "Minimizar",
  maximize: "Maximizar",
  close: "Cerrar",
  mute: "Silenciar",
  unmute: "Activar sonido",
  localTime: "Hora local",
  serverTime: "Hora del servidor",
  openFileLocation: "Abrir ubicación del archivo",
  sortBy: "Ordenar por",
  name: "Nombre",
  size: "Tamaño",
  itemType: "Tipo",
  dateModified: "Fecha de modificación",
  ascending: "Ascendente",
  descending: "Descendente",
  refresh: "Actualizar",
  background: "Fondo",
  theme: "Tema",
  darkTheme: "Oscuro",
  lightTheme: "Claro",
  language: "Idioma",
  spanish: "Español",
  english: "English",
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
  ok: "Aceptar",
  cancel: "Cancelar",
  open: "Abrir:",
  runMessage: (alias) =>
    `Escribe el nombre de un programa, carpeta, documento o recurso de Internet, y ${alias} lo abrirá por ti.`,
  allApps: "Todas las apps",
  expand: "Expandir",
  documents: "Documentos",
  pictures: "Imágenes",
  videos: "Videos",
  power: "Apagar",
  powerTooltip: "Borra los datos de sesión y recarga la página.",
  rootName: "Mi PC",
  mappedName: "Compartir",
  fileTooLarge: (fileName, fileSize, maxSize) =>
    `«${fileName}» (${fileSize}) supera el límite de ${maxSize} para copiar al escritorio virtual.`,
  filesTooLargeTitle: (maxSize) =>
    `No se pueden copiar archivos mayores de ${maxSize}:`,
  videoUnreadable:
    "No se pudo abrir el video. Puede estar dañado, superar el límite de 512 MB o no haberse copiado bien. Elimínalo del escritorio e inténtalo con un archivo más pequeño.",
  browser: "Navegador",
  fileExplorer: "Explorador de archivos",
  documentViewer: "Documento",
  openWithDialog: "Abrir con",
  propertiesDialog: "Propiedades",
  runDialog: "Ejecutar",
  videoPlayer: "Reproductor de video",
  portfolioDocsNav: "Documentación del portafolio",
  documentMissing:
    "No se encontró este documento. Vuelve a abrirlo desde el escritorio.",
  documentLoadError:
    "No se pudo cargar el lector de documentos. Recarga la página e inténtalo de nuevo.",
};

const en: UiDictionary = {
  start: "Start",
  searchPlaceholder: "Type here to search",
  showDesktop: "Show the desktop",
  showOpenWindows: "Show open windows",
  desktop: "Desktop",
  enterFullscreen: "Fullscreen",
  exitFullscreen: "Exit fullscreen",
  showAiButton: (title) => `Show ${title} button`,
  restore: "Restore",
  minimize: "Minimize",
  maximize: "Maximize",
  close: "Close",
  mute: "Mute",
  unmute: "Unmute",
  localTime: "Local time",
  serverTime: "Server time",
  openFileLocation: "Open file location",
  sortBy: "Sort by",
  name: "Name",
  size: "Size",
  itemType: "Type",
  dateModified: "Date modified",
  ascending: "Ascending",
  descending: "Descending",
  refresh: "Refresh",
  background: "Background",
  theme: "Theme",
  darkTheme: "Dark",
  lightTheme: "Light",
  language: "Language",
  spanish: "Español",
  english: "English",
  musicVisualization: "Music visualization",
  windowCloseEffect: "Window close effect",
  stopScreenCapture: "Stop screen capture",
  captureScreen: "Capture screen",
  addFiles: "Add file(s)",
  mapDirectory: "Map directory",
  mapOpfs: "Map OPFS",
  openTerminalHere: "Open Terminal here",
  paste: "Paste",
  new: "New",
  folder: "Folder",
  richTextDocument: "Rich Text Document",
  textDocument: "Text Document",
  properties: "Properties",
  viewPageSource: "View page source",
  inspect: "Inspect",
  scrollHere: "Scroll here",
  top: "Top",
  bottom: "Bottom",
  pageUp: "Page Up",
  pageDown: "Page Down",
  scrollUp: "Scroll up",
  scrollDown: "Scroll down",
  cut: "Cut",
  copy: "Copy",
  createShortcut: "Create shortcut",
  delete: "Delete",
  rename: "Rename",
  convertTo: "Convert to",
  convertToM3u: "Convert to M3U",
  share: "Share",
  addToArchive: "Add to archive...",
  extractHere: "Extract here",
  download: "Download",
  disconnect: "Disconnect",
  edit: "Edit",
  setAsMousePointer: "Set as mouse pointer",
  summarizeTextAi: "Summarize text (AI)",
  setAsBackground: "Set as background",
  fill: "Fill",
  fit: "Fit",
  stretch: "Stretch",
  tile: "Tile",
  center: "Center",
  openWith: "Open with",
  chooseAnotherApp: "Choose another app",
  openInNewWindow: "Open in new window",
  ok: "OK",
  cancel: "Cancel",
  open: "Open:",
  runMessage: (alias) =>
    `Type the name of a program, folder, document, or Internet resource, and ${alias} will open it for you.`,
  allApps: "All apps",
  expand: "Expand",
  documents: "Documents",
  pictures: "Pictures",
  videos: "Videos",
  power: "Power",
  powerTooltip: "Clears session data and reloads the page.",
  rootName: "My PC",
  mappedName: "Share",
  fileTooLarge: (fileName, fileSize, maxSize) =>
    `"${fileName}" (${fileSize}) exceeds the ${maxSize} limit for copying to the virtual desktop.`,
  filesTooLargeTitle: (maxSize) =>
    `Cannot copy files larger than ${maxSize}:`,
  videoUnreadable:
    "Could not open the video. It may be damaged, larger than 512 MB, or not copied correctly. Remove it from the desktop and try a smaller file.",
  browser: "Browser",
  fileExplorer: "File Explorer",
  documentViewer: "Document",
  openWithDialog: "Open with",
  propertiesDialog: "Properties",
  runDialog: "Run",
  videoPlayer: "Video Player",
  portfolioDocsNav: "Portfolio documentation",
  documentMissing:
    "This document was not found. Open it again from the desktop.",
  documentLoadError:
    "Could not load the document viewer. Reload the page and try again.",
};

const dictionaries: Record<Locale, UiDictionary> = { es, en };

let activeLocale: Locale = "es";

export const isLocale = (value: unknown): value is Locale =>
  value === "es" || value === "en";

export const setActiveLocale = (locale: Locale): void => {
  activeLocale = locale;
};

export const getActiveLocale = (): Locale => activeLocale;

export const getUi = (locale: Locale = activeLocale): UiDictionary =>
  dictionaries[locale] ?? dictionaries.es;

/** @deprecated Prefer getUi()/useUi() so strings follow the active locale. */
export const ui = es;

export type { UiDictionary };
