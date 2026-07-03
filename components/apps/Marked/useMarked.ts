import { basename } from "path";
import { useCallback, useEffect } from "react";
import { type ContainerHookProps } from "components/system/Apps/AppContainer";
import useTitle from "components/system/Window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { loadFiles } from "utils/functions";
import { useLinkHandler } from "hooks/useLinkHandler";
import { resolveDocumentPath } from "utils/resolveDocumentPath";

export type MarkedOptions = {
  headerIds: boolean;
  mangle: boolean;
};

declare global {
  interface Window {
    DOMPurify: {
      sanitize: (text: string) => string;
    };
    marked: {
      parse: (markdownString: string, options: MarkedOptions) => string;
    };
  }
}

const wrapPortfolioContent = (html: string): string =>
  `<div class="portfolio-page">
    <p class="portfolio-byline">Catalina Barria Otto · @Catussi</p>
    <div class="portfolio-content">${html}</div>
  </div>`;

const useMarked = ({
  containerRef,
  id,
  setLoading,
  url,
}: ContainerHookProps): void => {
  const { readFile } = useFileSystem();
  const { prependFileToTitle } = useTitle(id);
  const { processes: { [id]: { libs = [] } = {} } = {} } = useProcesses();
  const openLink = useLinkHandler();
  const getContainer = useCallback(
    (): HTMLElement | null =>
      containerRef.current?.querySelector("article") as HTMLElement,
    [containerRef]
  );
  const bindLinks = useCallback(
    (container: HTMLElement, currentUrl: string) => {
      container.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", (event) => {
          const resolvedPath = resolveDocumentPath(
            link.getAttribute("href") || link.pathname || "",
            currentUrl
          );

          openLink(
            event,
            resolvedPath,
            resolvedPath,
            link.textContent || ""
          );
        })
      );
    },
    [openLink]
  );
  const loadFile = useCallback(async () => {
    if (!url) return;

    const markdownFile = await readFile(url);
    const container = getContainer();
    const isPortfolioDoc = url.includes("/Users/Public/Documents/");

    if (container instanceof HTMLElement) {
      container.classList.remove("drop");
      container.classList.toggle("portfolio", isPortfolioDoc);

      if (markdownFile.length === 0) {
        const missingMessage =
          "<p><strong>No se encontró este documento.</strong> Vuelve a abrirlo desde el escritorio.</p>";

        container.innerHTML = isPortfolioDoc
          ? wrapPortfolioContent(missingMessage)
          : missingMessage;

        prependFileToTitle(basename(url));
        return;
      }

      const html = window.DOMPurify.sanitize(
        window.marked.parse(markdownFile.toString(), {
          headerIds: false,
          mangle: false,
        })
      );

      container.innerHTML = isPortfolioDoc
        ? wrapPortfolioContent(html)
        : html;

      bindLinks(container, url);
      container.scrollTop = 0;
    }

    prependFileToTitle(basename(url));
  }, [bindLinks, getContainer, prependFileToTitle, readFile, url]);

  useEffect(() => {
    let cancelled = false;

    const bootstrap = async (): Promise<void> => {
      setLoading(true);
      await loadFiles(libs);

      if (cancelled) return;

      if (!window.marked) {
        const container = getContainer();

        if (container instanceof HTMLElement) {
          container.innerHTML =
            "<p><strong>No se pudo cargar el visor de documentos.</strong> Recarga la página e inténtalo de nuevo.</p>";
        }

        setLoading(false);
        return;
      }

      if (url) {
        await loadFile();
      } else {
        getContainer()?.classList.add("drop");
      }

      if (!cancelled) setLoading(false);
    };

    bootstrap();

    return () => {
      cancelled = true;
    };
  }, [getContainer, libs, loadFile, setLoading, url]);
};

export default useMarked;
