import { getPortfolioNav } from "utils/portfolioLocale";
import { getUi, type Locale } from "utils/i18n";

const isKeyValueTable = (table: HTMLTableElement): boolean => {
  const rows = [...table.querySelectorAll("tr")];

  if (rows.length < 2) return false;

  const hasHeaderRow = Boolean(table.querySelector("th"));
  const colCount = rows[0]?.cells.length ?? 0;

  if (colCount !== 2) return false;

  if (hasHeaderRow) {
    const headers = [...(rows[0]?.cells ?? [])].map(
      (c) => c.textContent?.trim() ?? ""
    );
    return headers.every((h) => h === "" || h === "|");
  }

  return rows.every((row) => row.cells.length === 2);
};

const isPillarTable = (table: HTMLTableElement): boolean =>
  (table.querySelector("th")?.textContent ?? "")
    .toLowerCase()
    .includes("pilar") ||
  (table.querySelector("th")?.textContent ?? "")
    .toLowerCase()
    .includes("pillar");

const isIndexTable = (table: HTMLTableElement): boolean => {
  const header = table.querySelector("th")?.textContent?.toLowerCase() ?? "";
  return (
    header === "#" ||
    (header.includes("proyecto") && header.includes("tipo")) ||
    (header.includes("project") && header.includes("type"))
  );
};

const wrapSections = (content: HTMLElement): void => {
  const headings = [...content.querySelectorAll(":scope > h2")];

  headings.forEach((heading) => {
    const block = document.createElement("div");
    block.className = "portfolio-block";
    heading.before(block);
    block.appendChild(heading);

    let sibling = block.nextElementSibling;

    while (sibling && sibling.tagName !== "H2") {
      const next = sibling.nextElementSibling;
      block.appendChild(sibling);
      sibling = next;
    }
  });
};

const buildMasthead = (content: HTMLElement): void => {
  const h1 = content.querySelector("h1");
  if (!h1) return;

  const masthead = document.createElement("header");
  masthead.className = "portfolio-masthead";

  h1.before(masthead);
  masthead.appendChild(h1);

  let sibling = masthead.nextElementSibling;

  while (sibling && !["H2", "HR"].includes(sibling.tagName)) {
    const next = sibling.nextElementSibling;
    masthead.appendChild(sibling);
    sibling = next;
  }
};

const buildNav = (
  page: HTMLElement,
  currentUrl: string,
  locale: Locale
): void => {
  const nav = document.createElement("nav");
  nav.className = "portfolio-index";
  nav.setAttribute("aria-label", getUi(locale).portfolioDocsNav);

  nav.innerHTML = getPortfolioNav(locale)
    .map(({ label, path }, i) => {
      const active =
        currentUrl.includes(encodeURI(path)) || currentUrl.endsWith(path);
      const sep =
        i > 0
          ? '<span class="portfolio-index-sep" aria-hidden="true">·</span>'
          : "";
      return `${sep}<a class="portfolio-index-link${
        active ? " is-here" : ""
      }" href="${path}">${label}</a>`;
    })
    .join("");

  page.insertBefore(nav, page.firstChild);
};

const classifyTables = (content: HTMLElement): void => {
  content.querySelectorAll("table").forEach((table) => {
    if (!(table instanceof HTMLTableElement)) return;

    if (isPillarTable(table)) {
      table.classList.add("portfolio-pillars");
      return;
    }

    if (isIndexTable(table)) {
      table.classList.add("portfolio-catalog");
      return;
    }

    if (isKeyValueTable(table)) {
      table.classList.add("portfolio-facts");

      const thead = table.querySelector("thead");

      if (
        thead &&
        [...thead.querySelectorAll("th")].every(
          (cell) => !cell.textContent?.trim()
        )
      ) {
        thead.remove();
      }
    }
  });
};

const enhanceLists = (content: HTMLElement): void => {
  content.querySelectorAll("ol").forEach((ol) => {
    const prev = ol.previousElementSibling;
    if (
      prev?.tagName === "H2" &&
      /ruta|recomendad|where to start|path/i.test(prev.textContent ?? "")
    ) {
      ol.classList.add("portfolio-route");
    }
  });

  content.querySelectorAll("ul").forEach((ul) => {
    const inBlock = ul.closest(".portfolio-block");
    const heading = inBlock?.querySelector("h2")?.textContent ?? "";
    if (
      /competencia|fortaleza|disponibilidad|idioma|skill|strength|availability|language/i.test(
        heading
      )
    ) {
      ul.classList.add("portfolio-inline-tags");
    }
  });
};

export const enhancePortfolioDom = (
  container: HTMLElement,
  currentUrl: string,
  locale: Locale = "es"
): void => {
  document.getElementById("portfolio-fonts")?.remove();

  const page = container.querySelector(".portfolio-page");
  const content = container.querySelector(".portfolio-content");

  if (!(page instanceof HTMLElement) || !(content instanceof HTMLElement))
    return;

  buildNav(page, currentUrl, locale);
  buildMasthead(content);
  wrapSections(content);
  classifyTables(content);
  enhanceLists(content);
};
