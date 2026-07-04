import { type TextItem } from "pdfjs-dist/types/src/display/api";
import processDirectory from "contexts/process/directory";
import { loadFiles } from "utils/functions";

export const PDF_LIBS = processDirectory.PDF.libs ?? [];
export const PDF_WORKER = "/Program Files/PDF.js/pdf.worker.js";

export const isPdfReady = (): boolean =>
  typeof window.pdfjsLib?.getDocument === "function";

export const configurePdfWorker = (): void => {
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER;
  }
};

export const ensurePdfLibs = async (libs: string[] = []): Promise<boolean> => {
  const files = libs.length > 0 ? libs : PDF_LIBS;

  if (files.length === 0) return false;

  const load = async (force?: boolean): Promise<void> => {
    await loadFiles(files, undefined, force);
  };

  try {
    await load();

    if (!isPdfReady()) {
      await load(true);
    }
  } catch {
    try {
      await load(true);
    } catch {
      return false;
    }
  }

  if (isPdfReady()) {
    configurePdfWorker();
    return true;
  }

  return false;
};

export const toPdfData = (fileData: Buffer): Uint8Array =>  new Uint8Array(fileData.buffer, fileData.byteOffset, fileData.byteLength);

export const getPdfDocumentLoader = (
  fileData: Buffer
): ReturnType<NonNullable<typeof window.pdfjsLib>["getDocument"]> => {
  if (!window.pdfjsLib) {
    throw new Error("pdf.js is not loaded");
  }

  return window.pdfjsLib.getDocument({ data: toPdfData(fileData) });
};

export const readPdfText = async (pdfDoc: Buffer): Promise<string> => {
  await ensurePdfLibs();
  let text = "";

  if (window.pdfjsLib) {
    configurePdfWorker();

    try {      const doc = await getPdfDocumentLoader(pdfDoc).promise;

      for (let p = 0; p < doc.numPages; p += 1) {
        // eslint-disable-next-line no-await-in-loop
        const content = await (await doc.getPage(p + 1)).getTextContent();

        text += content.items
          .map((item) => (item as TextItem).str || "")
          .filter(Boolean)
          .join(" ");
      }
    } catch {
      // Ignore failure to read PDF
    }
  }

  return text;
};
