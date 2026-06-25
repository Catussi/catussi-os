import { extname } from "path";
import { colorAttributes, rgbAnsi } from "components/apps/Terminal/color";
import { commands as gitCommands } from "components/apps/Terminal/processGit";
import { type LocalEcho } from "components/apps/Terminal/types";
import { resourceAliasMap } from "components/system/Dialogs/Run";
import processDirectory from "contexts/process/directory";
import { ONE_DAY_IN_MILLISECONDS } from "utils/constants";

export const help = (
  printLn: (message: string) => void,
  commandList: Record<string, string>,
  aliasList?: Record<string, string[]>
): void => {
  Object.entries(commandList).forEach(([command, description]) => {
    printLn(`${command.padEnd(14)} ${description}`);
  });

  if (aliasList) {
    printLn("\r\nAlias:\r\n");
    Object.entries(aliasList).forEach(([baseCommand, aliasCommands]) => {
      aliasCommands.forEach((aliasCommand) => {
        printLn(`${aliasCommand.padEnd(14)} ${commandList[baseCommand]}`);
      });
    });
  }
};

export const commands: Record<string, string> = {
  cd: "Cambia el directorio actual.",
  clear: "Limpia la pantalla.",
  color: "Define el color de la consola.",
  copy: "Copia un archivo a otra ubicación.",
  date: "Muestra la fecha.",
  del: "Elimina un archivo.",
  dir: "Lista el contenido del directorio actual.",
  echo: "Muestra el texto que recibe.",
  exit: "Cierra el intérprete de comandos.",
  ffmpeg: "Convierte audio o video a otro formato.",
  file: "Detecta el tipo MIME del archivo.",
  find: "Busca texto en un archivo o archivos.",
  git: "Lee repositorios git.",
  help: "Muestra ayuda de los comandos.",
  history: "Muestra el historial de comandos.",
  imagemagick: "Convierte una imagen a otro formato.",
  ipconfig: "Muestra la IP actual.",
  license: "Muestra la licencia.",
  md: "Crea un directorio.",
  mediainfo: "Muestra datos técnicos de archivos multimedia.",
  mount: "Monta una carpeta del sistema de archivos local.",
  move: "Mueve un archivo o directorio.",
  neofetch: "Muestra información del sistema.",
  nslookup: "Muestra información DNS de un dominio.",
  pwd: "Muestra el directorio de trabajo.",
  python: "Ejecuta código con el intérprete Python.",
  qjs: "Ejecuta código con el intérprete QuickJS.",
  rd: "Elimina un directorio.",
  ren: "Renombra un archivo o directorio.",
  rm: "Elimina un archivo o directorio.",
  sheep: "Genera una oveja.",
  shutdown: "Apaga el sistema local.",
  taskkill: "Detiene un proceso o aplicación.",
  tasklist: "Lista los procesos en ejecución.",
  time: "Muestra la hora del sistema.",
  title: "Establece el título de la ventana.",
  touch: "Crea un archivo vacío.",
  type: "Muestra el contenido de un archivo.",
  uptime: "Muestra el tiempo activo del sistema.",
  ver: "Muestra la versión del sistema.",
  wapm: "Ejecuta binarios Wasm universales.",
  weather: "Servicio de pronóstico del tiempo.",
  whoami: "Muestra información del usuario.",
  wsl: "Abre el shell Linux predeterminado.",
  xlsx: "Convierte una hoja de cálculo a otro formato.",
};

export const aliases: Record<string, string[]> = {
  cd: ["chdir"],
  clear: ["cls"],
  copy: ["cp"],
  del: ["erase"],
  dir: ["ls"],
  exit: ["quit"],
  find: ["search"],
  git: ["isogit"],
  ipconfig: ["ifconfig", "whatsmyip"],
  md: ["mkdir"],
  move: ["mv"],
  neofetch: ["systeminfo"],
  python: ["py", "python3"],
  qjs: ["eval", "node", "quickjs"],
  rd: ["rmdir"],
  ren: ["rename"],
  sheep: ["esheep"],
  shutdown: ["logout", "restart"],
  taskkill: ["kill"],
  tasklist: ["ps"],
  type: ["cat"],
  ver: ["version"],
  wapm: ["wasmer", "wax"],
  weather: ["wttr"],
  whoami: ["logname"],
  wsl: ["linux"],
};

const directoryCommands = new Set([
  "cat",
  "cd",
  "chdir",
  "copy",
  "cp",
  "del",
  "dir",
  "erase",
  "ffmpeg",
  "file",
  "imagemagick",
  "ls",
  "md",
  "mediainfo",
  "mkdir",
  "move",
  "mv",
  "node",
  "py",
  "python",
  "python3",
  "qjs",
  "quickjs",
  "rd",
  "ren",
  "rename",
  "rm",
  "rmdir",
  "touch",
  "type",
  "wapm",
  "wasmer",
  "wax",
  "xlsx",
]);

export const unknownCommand = (baseCommand: string): string =>
  `'${baseCommand}' is not recognized as an internal or external command, operable program or batch file.`;

export const autoComplete = (
  directory: string[],
  localEcho: LocalEcho
): void => {
  const { _autocompleteHandlers: handlers } = localEcho;

  handlers.forEach(({ fn }) => localEcho.removeAutocompleteHandler(fn));

  localEcho.addAutocompleteHandler((index: number, [command]): string[] => {
    if (index === 0) {
      return [
        ...Object.keys(commands),
        ...Object.values(aliases).flat(),
        ...directory,
      ];
    }
    if (index === 1) {
      const lowerCommand = command.toLowerCase();

      if (lowerCommand === "git") return Object.keys(gitCommands);
      if (directoryCommands.has(lowerCommand)) return directory;

      const lowerProcesses = Object.entries(processDirectory)
        .filter(([, { dialogProcess }]) => !dialogProcess)
        .map(([pid]) => pid.toLowerCase());

      if (
        lowerProcesses.includes(lowerCommand) ||
        Object.keys(resourceAliasMap).includes(lowerCommand)
      ) {
        return directory;
      }
    }

    return [];
  });
};

export const parseCommand = (
  commandString: string,
  pipedCommand = ""
): string[] => {
  let readingQuotedArg = false;
  let currentArg = "";
  const addArg = (acc: string[]): void => {
    acc.push(currentArg);
    currentArg = "";
  };
  const parsedCommand = [...commandString].reduce<string[]>(
    (acc, char, index) => {
      if (pipedCommand && index > pipedCommand.length) {
        currentArg += char;
      } else if (char === " " && !readingQuotedArg && currentArg) {
        addArg(acc);
      } else if (char === '"') {
        readingQuotedArg = !readingQuotedArg;
        if (!readingQuotedArg) addArg(acc);
      } else {
        currentArg += char;
      }

      return acc;
    },
    []
  );

  return currentArg ? [...parsedCommand, currentArg] : parsedCommand;
};

export const printTable = (
  headers: [string, number, boolean?, ((value: string) => string)?][],
  data: string[][],
  printLn: (message: string) => void,
  hideHeader?: boolean,
  paddingCharacter = "="
): void => {
  if (!hideHeader) {
    const header = headers
      .map(([key, padding]) => key.padEnd(padding, " "))
      .join(" ");
    const divider = headers
      .map(([, padding]) => paddingCharacter.repeat(padding))
      .join(" ");

    printLn(header);
    printLn(divider);
  }

  const content = data.map((row) =>
    row
      .map((rowData, index) => {
        const [, padding, alignRight, modifier] = headers[index];
        let trunctatedText =
          index === row.length - 1 ? rowData : rowData.slice(0, padding);

        if (modifier) trunctatedText = modifier(trunctatedText);

        return alignRight
          ? trunctatedText.padStart(padding, " ")
          : trunctatedText.padEnd(padding, " ");
      })
      .join(" ")
  );

  if (content.length > 0) content.forEach((entry) => printLn(entry));
};

export const getFreeSpace = async (): Promise<string> => {
  const { quota = 0, usage = 0 } =
    (await navigator.storage?.estimate?.()) || {};

  if (quota === 0) return "";

  return `  ${(quota - usage).toLocaleString()} bytes`;
};

export const getUptime = (isShort = false): string => {
  if (window.performance) {
    const [{ duration }] = window.performance.getEntriesByType("navigation");
    const bootTime = window.performance.timeOrigin + duration;
    const uptimeInMilliseconds = Math.ceil(Date.now() - bootTime);
    const days = Math.floor(uptimeInMilliseconds / ONE_DAY_IN_MILLISECONDS);
    const uptime = new Date(uptimeInMilliseconds);
    const hours = uptime.getUTCHours();
    const mins = uptime.getUTCMinutes();
    const secs = uptime.getUTCSeconds();

    return [
      ...(days ? [`${days} day${days === 1 ? "" : "s"}`] : []),
      ...(hours ? [`${hours} hour${hours === 1 ? "" : "s"}`] : []),
      ...(mins
        ? [`${mins} ${isShort ? "min" : "minute"}${mins === 1 ? "" : "s"}`]
        : []),
      `${secs} ${isShort ? "sec" : "second"}${secs === 1 ? "" : "s"}`,
    ].join(", ");
  }

  return "Unknown";
};

export const printColor = (
  colorIndex: number | string,
  colorOutput?: string[]
): string =>
  `${rgbAnsi(...colorAttributes[colorIndex].rgb, true)}${rgbAnsi(
    ...colorAttributes[colorIndex].rgb
  )}|||${
    colorOutput?.join("") ||
    `${rgbAnsi(...colorAttributes[0].rgb, true)}${rgbAnsi(
      ...colorAttributes[7].rgb
    )}`
  }\u001B[0m`;

export const clearAnsiBackground = (text: string): string =>
  text.replace(/;48;2;/g, ";48;0;").replace(/;48;5;/g, ";48;0;");

export const readClipboardToTerminal = (localEcho: LocalEcho): void => {
  try {
    navigator.clipboard
      ?.readText?.()
      .then((clipboardText) => localEcho.handleCursorInsert(clipboardText));
  } catch {
    // Ignore failure to read clipboard
  }
};

export const formatToExtension = (format: string): string => {
  const extension = format.toLowerCase().trim();

  return extension.startsWith(".")
    ? extension.slice(1)
    : extension.includes(".")
      ? extname(extension).slice(1)
      : extension;
};
