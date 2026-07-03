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

const PORTFOLIO_DOC_LABELS: Record<string, string> = {
  "Catalina Barria Otto": "Sobre mí",
  Contact: "Contacto",
  Education: "Educación",
  "Empezar aquí": "Empezar aquí",
  Experience: "Experiencia",
  Projects: "Proyectos",
  README: "Índice",
  Skills: "Habilidades",
};

const getPortfolioDocLabel = (url: string): string => {
  const fileName = basename(url, ".md");

  return PORTFOLIO_DOC_LABELS[fileName] || fileName;
};

const wrapPortfolioContent = (html: string, docLabel: string): string =>
  `<div class="portfolio-shell">
    <aside class="portfolio-rail" aria-hidden="true">
      <span class="portfolio-mark">@Catussi</span>
      <span class="portfolio-role">Full Stack · ML Engineer</span>
      <span class="portfolio-doc">${docLabel}</span>
      <span class="portfolio-location">Valparaíso, Chile</span>
    </aside>
    <div class="portfolio-body">${html}</div>
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
          ? wrapPortfolioContent(missingMessage, getPortfolioDocLabel(url))
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
        ? wrapPortfolioContent(html, getPortfolioDocLabel(url))
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
