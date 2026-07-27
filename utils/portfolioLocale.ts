import { type Locale } from "utils/i18n";

export const PORTFOLIO_DOCUMENTS_PATH = "/Users/Public/Documents/";
export const PORTFOLIO_DOCUMENTS_EN_PATH = `${PORTFOLIO_DOCUMENTS_PATH}en/`;

type PortfolioDocId =
  | "start"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact";

type PortfolioDoc = {
  id: PortfolioDocId;
  labels: Record<Locale, string>;
  paths: Record<Locale, string>;
};

export const PORTFOLIO_DOCS: PortfolioDoc[] = [
  {
    id: "start",
    labels: { es: "Inicio", en: "Home" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Empezar aquí.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}Start here.md`,
    },
  },
  {
    id: "about",
    labels: { es: "Sobre mí", en: "About me" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Catalina Barria Otto.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}About me.md`,
    },
  },
  {
    id: "experience",
    labels: { es: "Experiencia", en: "Experience" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Experience.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}Experience.md`,
    },
  },
  {
    id: "projects",
    labels: { es: "Proyectos", en: "Projects" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Projects.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}Projects.md`,
    },
  },
  {
    id: "skills",
    labels: { es: "Habilidades", en: "Skills" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Skills.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}Skills.md`,
    },
  },
  {
    id: "education",
    labels: { es: "Educación", en: "Education" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Education.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}Education.md`,
    },
  },
  {
    id: "contact",
    labels: { es: "Contacto", en: "Contact" },
    paths: {
      es: `${PORTFOLIO_DOCUMENTS_PATH}Contact.md`,
      en: `${PORTFOLIO_DOCUMENTS_EN_PATH}Contact.md`,
    },
  },
];

const DESKTOP_LABELS: Record<string, Record<Locale, string>> = {
  "Empezar aquí": { es: "Empezar aquí", en: "Start here" },
  "Mi PC": { es: "Mi PC", en: "My PC" },
  "CV ICI": { es: "CV ICI", en: "Resume" },
};

export const CV_PDF_PATHS: Record<Locale, string> = {
  es: `${PORTFOLIO_DOCUMENTS_PATH}CV_ICI.pdf`,
  en: `${PORTFOLIO_DOCUMENTS_PATH}CV_ICI_EN.pdf`,
};

const normalizePath = (path: string): string =>
  decodeURIComponent(path.split("#")[0].split("?")[0]);

export const findPortfolioDoc = (
  url?: string
): PortfolioDoc | undefined => {
  if (!url) return undefined;

  const normalized = normalizePath(url);

  return PORTFOLIO_DOCS.find(({ paths }) =>
    Object.values(paths).some(
      (path) => normalized === path || normalized.endsWith(path)
    )
  );
};

export const localizePortfolioDocumentUrl = (
  url: string,
  locale: Locale
): string => {
  const normalized = normalizePath(url);
  const isCv = Object.values(CV_PDF_PATHS).some(
    (path) => normalized === path || normalized.endsWith(path)
  );

  if (isCv) return CV_PDF_PATHS[locale];

  const doc = findPortfolioDoc(url);

  return doc ? doc.paths[locale] : url;
};

export const getLocalizedDesktopLabel = (
  fileBaseName: string,
  locale: Locale
): string | undefined => DESKTOP_LABELS[fileBaseName]?.[locale];

export const getPortfolioNav = (
  locale: Locale
): { label: string; path: string }[] =>
  PORTFOLIO_DOCS.map(({ labels, paths }) => ({
    label: labels[locale],
    path: paths[locale],
  }));
