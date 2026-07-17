import { type ProcessArguments, type Processes } from "contexts/process/types";
import { PROCESS_DELIMITER } from "utils/constants";

export const PORTFOLIO_DOCUMENTS_PATH = "/Users/Public/Documents/";

export const isPortfolioDocument = (url?: string): boolean =>
  Boolean(url?.includes(PORTFOLIO_DOCUMENTS_PATH));

export const isPortfolioDocumentLink = (
  currentUrl: string,
  targetUrl: string
): boolean =>
  isPortfolioDocument(currentUrl) &&
  isPortfolioDocument(targetUrl) &&
  targetUrl.endsWith(".md");

export const findPortfolioMarkedProcessId = (
  processes: Processes
): string | undefined =>
  Object.entries(processes).find(
    ([pid, { url: processUrl }]) =>
      pid.startsWith(`Marked${PROCESS_DELIMITER}`) &&
      isPortfolioDocument(processUrl)
  )?.[0];

/** Ventana amplia tipo hoja; el sistema la limita automáticamente en pantallas pequeñas. */
export const PORTFOLIO_MARKED_WINDOW = {
  allowResizing: false,
  defaultSize: {
    height: 760,
    width: 900,
  },
  hideMaximizeButton: true,
} as const satisfies ProcessArguments;

export const withPortfolioMarkedArgs = (
  processId: string,
  processArguments: ProcessArguments = {}
): ProcessArguments => {
  const { url = "" } = processArguments;

  if (processId !== "Marked" || !isPortfolioDocument(url)) {
    return processArguments;
  }

  return {
    ...processArguments,
    ...PORTFOLIO_MARKED_WINDOW,
  };
};
