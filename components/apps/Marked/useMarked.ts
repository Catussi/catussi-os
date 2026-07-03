import { basename } from "path";
import { useCallback, useEffect } from "react";
import { type ContainerHookProps } from "components/system/Apps/AppContainer";
import useTitle from "components/system/Window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { loadFiles } from "utils/functions";
import { useLinkHandler } from "hooks/useLinkHandler";

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
  const loadFile = useCallback(async () => {
    if (!url) return;

    const markdownFile = await readFile(url);
    const container = getContainer();
    const isPortfolioDoc = url.includes("/Users/Public/Documents/");

    if (container instanceof HTMLElement) {
      container.classList.remove("drop");
      container.classList.toggle("portfolio", isPortfolioDoc);
      container.innerHTML = window.DOMPurify.sanitize(
        window.marked.parse(markdownFile.toString(), {
          headerIds: false,
          mangle: false,
        })
      );
      container
        .querySelectorAll("a")
        .forEach((link) =>
          link.addEventListener("click", (event) =>
            openLink(
              event,
              link.href || "",
              link.pathname,
              link.textContent || ""
            )
          )
        );
      container.scrollTop = 0;
    }

    prependFileToTitle(basename(url));
  }, [getContainer, openLink, prependFileToTitle, readFile, url]);

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
