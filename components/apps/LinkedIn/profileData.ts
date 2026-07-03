export type LinkedInExperience = {
  bullets?: string[];
  company: string;
  period: string;
  role: string;
  subtitle?: string;
};

export type LinkedInProject = {
  description?: string;
  links?: { label: string; url: string }[];
  title: string;
};

export const LINKEDIN_PROFILE = {
  about:
    "Desarrolladora full stack y ML engineer desde Valparaíso. Construyo plataformas web modernas con impacto en salud, empleabilidad, educación y datos. Trabajo con Angular, FastAPI, PostgreSQL, pipelines de datos y machine learning interpretable (SHAP, XAI).",
  contact: {
    email: "cata.barria@gmail.com",
    github: "https://github.com/Catussi",
    portfolio: "https://catussi-os.vercel.app/",
  },
  education: [
    {
      degree: "Ingeniería Civil Informática",
      period: "En curso / titulada",
      school: "Universidad técnica",
    },
  ],
  experience: [
    {
      bullets: [
        "ELVIR-Demo: simulaciones laborales con IA (Angular, FastAPI, PostgreSQL, LiveAvatar)",
        "Arquitectura end-to-end, JWT, RBAC y despliegue en Vercel",
      ],
      company: "Instituto de Tecnología para la Innovación en Salud y Bienestar",
      period: "Ene 2026 – Presente · Viña del Mar",
      role: "Full Stack Developer",
      subtitle: "Práctica profesional",
    },
    {
      bullets: [
        "Landing pages para programas académicos y eventos",
        "Hosting, dominios, SSL y contenido digital institucional",
      ],
      company: "Universidad Adolfo Ibáñez",
      period: "May 2024 – Sep 2024 · Remoto",
      role: "Digital Assistant",
    },
    {
      bullets: [
        "Sitio web de la asociación y dashboards en Power BI",
        "Soporte a comunidad de mujeres en IA",
      ],
      company: "ACHIYA (Mujeres en IA)",
      period: "Abr 2022 – Ago 2022 · Híbrido",
      role: "Web Development Intern",
    },
    {
      bullets: [
        "Diagnóstico hardware/software y atención a usuarios finales",
      ],
      company: "Soporte técnico",
      period: "Ene 2022 – Abr 2023 · Viña del Mar",
      role: "Soporte técnico",
    },
  ] as LinkedInExperience[],
  headline: "Full Stack Developer · Machine Learning Engineer",
  location: "Valparaíso, Chile",
  name: "Catalina Barria Otto",
  projects: [
    {
      description: "Simulaciones laborales con IA para entrenamiento en entrevistas.",
      links: [
        { label: "Demo", url: "https://elvir-demo.vercel.app/" },
        { label: "GitHub", url: "https://github.com/Catussi/ELVIR-Demo" },
      ],
      title: "ELVIR-Demo",
    },
    {
      description: "Retail data-driven: FastAPI, dbt, Airflow, Angular, AWS, MLflow.",
      links: [{ label: "GitHub", url: "https://github.com/Catussi/opspulse" }],
      title: "OpsPulse",
    },
    {
      description: "Este portafolio interactivo — escritorio web en el navegador.",
      links: [
        { label: "Sitio", url: "https://catussi-os.vercel.app/" },
        { label: "GitHub", url: "https://github.com/Catussi/catussi-os" },
      ],
      title: "catussi-os",
    },
  ] as LinkedInProject[],
  skills: [
    "Angular",
    "FastAPI",
    "PostgreSQL",
    "Python",
    "TypeScript",
    "Docker",
    "Machine Learning",
    "dbt",
    "Airflow",
    "Terraform",
    "AWS",
    "JWT / RBAC",
    "SHAP / XAI",
  ],
};
