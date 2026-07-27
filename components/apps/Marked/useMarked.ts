import { basename } from "path";
import { useCallback, useEffect } from "react";
import { type ContainerHookProps } from "components/system/Apps/AppContainer";
import useTitle from "components/system/Window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import {
  ensureMarkedLibs,
  isMarkedReady,
} from "components/apps/Marked/functions";
import { haltEvent } from "utils/functions";
import { useLinkHandler } from "hooks/useLinkHandler";
import { resolveDocumentPath } from "utils/resolveDocumentPath";
import { enhancePortfolioDom } from "utils/portfolioEnhance";
import { isPortfolioDocumentLink } from "utils/portfolioDocument";
import {
  findPortfolioDoc,
  localizePortfolioDocumentUrl,
} from "utils/portfolioLocale";
import useUi from "hooks/useUi";

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
    <div class="portfolio-content">${html}</div>
  </div>`;

const useMarked = ({
  containerRef,
  id,
  loading,
  setLoading,
  url,
}: ContainerHookProps): void => {
  const { readFile } = useFileSystem();
  const { prependFileToTitle } = useTitle(id);
  const { url: setProcessUrl, processes: { [id]: { libs = [] } = {} } = {} } =
    useProcesses();
  const { locale, setForegroundId } = useSession();
  const ui = useUi();
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

          if (isPortfolioDocumentLink(currentUrl, resolvedPath)) {
            haltEvent(event);
            container
              .querySelectorAll(".portfolio-index-link")
              .forEach((navLink) => {
                const href = resolveDocumentPath(
                  navLink.getAttribute("href") || "",
                  currentUrl
                );

                navLink.classList.toggle("is-here", href === resolvedPath);
              });
            setProcessUrl(id, resolvedPath);
            setForegroundId(id);
            return;
          }

          openLink(
            event,
            resolvedPath,
            resolvedPath,
            link.textContent || ""
          );
        })
      );
    },
    [id, openLink, setForegroundId, setProcessUrl]
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
        const missingMessage = `<p><strong>${ui.documentMissing}</strong></p>`;

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

      if (isPortfolioDoc) {
        try {
          enhancePortfolioDom(container, url, locale);
        } catch {
          /* Si falla el layout editorial, el markdown sigue visible */
        }
      }

      bindLinks(container, url);
      container.scrollTop = 0;
    }

    prependFileToTitle(basename(url));
  }, [
    bindLinks,
    getContainer,
    locale,
    prependFileToTitle,
    readFile,
    ui.documentMissing,
    url,
  ]);

  useEffect(() => {
    if (!url || !findPortfolioDoc(url)) return;

    const localizedUrl = localizePortfolioDocumentUrl(url, locale);

    if (localizedUrl !== url) {
      setProcessUrl(id, localizedUrl);
    }
  }, [id, locale, setProcessUrl, url]);

  useEffect(() => {
    let cancelled = false;

    if (loading) {
      ensureMarkedLibs(libs).then((ready) => {
        if (cancelled) return;

        if (!ready) {
          const container = getContainer();

          if (container instanceof HTMLElement) {
            container.innerHTML = `<p><strong>${ui.documentLoadError}</strong></p>`;
          }
        }

        setLoading(false);
      });
    }

    return () => {
      cancelled = true;
    };
  }, [getContainer, libs, loading, setLoading, ui.documentLoadError]);

  useEffect(() => {
    let cancelled = false;

    if (!loading) {
      const renderDocument = async (): Promise<void> => {
        if (!isMarkedReady()) {
          const ready = await ensureMarkedLibs(libs);

          if (!ready || cancelled) return;
        }

        if (url) {
          await loadFile();
        } else {
          getContainer()?.classList.add("drop");
        }
      };

      renderDocument();
    }

    return () => {
      cancelled = true;
    };
  }, [getContainer, libs, loadFile, loading, url]);
};

export default useMarked;
