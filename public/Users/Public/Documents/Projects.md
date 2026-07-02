# Proyectos

Portafolio completo de **Catalina Barria Otto** — full stack, machine learning, datos e investigación.

> **Lectura rápida:** índice con demos en vivo → detalle técnico por proyecto. ¿Solo quieres ver algo funcionando? Abre **ELVIR Demo** en el escritorio.

---

## Índice rápido

| # | Proyecto | Tipo | Live |
| --- | --- | --- | --- |
| 1 | [ELVIR-Demo](#elvir-demo--simulación-laboral-con-ia) | Full stack + IA | [Demo](https://elvir-demo.vercel.app/) |
| 2 | [OpsPulse](#opspulse--retail-data-driven) | Data platform | Repo |
| 3 | [catussi-os](#catussi-os--portafolio-interactivo) | Portfolio OS | [Live](https://catussi-os.vercel.app/) |
| 4 | [eSports Analytics](#esports-performance-analytics) | ML + platform | [Demo](https://esports-analytics-platform-tau.vercel.app/) |
| 5 | [Academic Pathways](#academic-pathways--tesis-ml--xai) | Investigación | — |
| 6 | [Production Management](#production-management-system) | Angular enterprise | Repo |
| 7 | [Laravel Commerce](#laravel-commerce) | E-commerce | Repo |
| 8 | [Proyectos académicos](#proyectos-académicos) | ML · IoT · Optimización | Repo |

---

## Demos en vivo

| Proyecto | URL | Repositorio |
| --- | --- | --- |
| **ELVIR-Demo** | [elvir-demo.vercel.app](https://elvir-demo.vercel.app/) | [GitHub](https://github.com/Catussi/ELVIR-Demo) |
| **catussi-os** | [catussi-os.vercel.app](https://catussi-os.vercel.app/) | [GitHub](https://github.com/Catussi/catussi-os) |
| **eSports Analytics** | [esports-analytics-platform-tau.vercel.app](https://esports-analytics-platform-tau.vercel.app/) | [GitHub](https://github.com/Catussi/esports-analytics-platform) |

*Accesos directos en el escritorio: ELVIR Demo, eSports Analytics, OpsPulse.*

---

## ELVIR-Demo · Simulación laboral con IA

**Estado:** proyecto actual · práctica profesional  
**Rol:** Full Stack Developer

| | |
| --- | --- |
| **Qué es** | Plataforma para entrenamiento en entrevistas y simulaciones laborales con IA |
| **Impacto** | Empleabilidad, accesibilidad, salud y bienestar |
| **Stack** | Angular 18 · FastAPI · PostgreSQL · Docker · LiveAvatar · JWT · RBAC |
| **Enlaces** | [GitHub](https://github.com/Catussi/ELVIR-Demo) · [Demo](https://elvir-demo.vercel.app/) |

### Funcionalidades

- Simulaciones conversacionales con **avatar e IA** (LiveAvatar)
- Sistema **multirol** con autenticación JWT
- Gestión de sesiones y seguimiento de progreso
- API REST documentada · migraciones Alembic
- Deploy en Vercel con entorno Docker para desarrollo

---

## OpsPulse · Retail data-driven

**Estado:** proyecto personal · arquitectura completa  
**Rol:** Arquitectura e implementación full stack + datos

| | |
| --- | --- |
| **Qué es** | Plataforma retail de operaciones basada en datos |
| **Stack** | FastAPI · Celery · PostgreSQL · Angular · dbt · Airflow · Terraform · MLflow |
| **Enlaces** | [GitHub](https://github.com/Catussi/opspulse) |

### Arquitectura

| Capa | Detalle |
| --- | --- |
| **Ingesta** | CSV y APIs con procesamiento asíncrono (Celery) |
| **Transformación** | Modelos dbt, pipelines ETL |
| **Orquestación** | Apache Airflow |
| **Frontend** | Dashboard Angular con KPIs operativos |
| **Automatización** | Reglas de negocio y alertas |
| **ML** | MLflow para experimentos y modelos |
| **Observabilidad** | Prometheus + Grafana |
| **Infra** | Terraform en AWS (ECS, RDS, S3) |

---

## catussi-os · Portafolio interactivo

**Estado:** en producción · este sitio  
**Rol:** Creadora y mantenedora

| | |
| --- | --- |
| **Qué es** | Escritorio web completo en el navegador |
| **Stack** | Next.js · TypeScript · styled-components · BrowserFS |
| **Enlaces** | [Live](https://catussi-os.vercel.app/) · [GitHub](https://github.com/Catussi/catussi-os) |

### Características

- Apps integradas: explorador, terminal, navegador, visor PDF, markdown
- Documentación y CV accesibles como archivos del sistema
- Accesos directos a demos y perfiles profesionales
- Deploy estático en Vercel · CI con Playwright

---

## eSports Performance Analytics

**Estado:** demo pública + repos ML  
**Rol:** ML + desarrollo de plataforma

| | |
| --- | --- |
| **Datos** | 79,000+ partidas CS:GO |
| **Modelos** | Clasificación, regresión, clustering |
| **Métricas** | Random Forest · F1 ~0.99 |
| **Enlaces** | [Plataforma](https://github.com/Catussi/esports-analytics-platform) · [Demo](https://esports-analytics-platform-tau.vercel.app/) · [Análisis ML](https://github.com/Catussi/Machine-Learning-Analysis-of-Player-Performance-in-CS-GO) |

---

## Academic Pathways · Tesis ML + XAI

**Estado:** investigación universitaria (sin repo público)  
**Rol:** Investigadora · autora de tesis

| | |
| --- | --- |
| **Tema** | Trayectorias académicas y equidad algorítmica |
| **Stack** | Python · scikit-learn · SHAP · XAI |
| **Enfoque** | ML interpretable en contexto educativo |

- Modelos supervisados sobre registros longitudinales
- Análisis de equidad y sesgos algorítmicos
- Interpretabilidad con SHAP y visualización de importancia de features

---

## Concrete Strength Prediction

**Stack:** Python · scikit-learn · TensorFlow · Keras Tuner

Predicción de resistencia del hormigón con comparación de modelos y hyperparameter tuning.

- **R² ~0.91**
- [GitHub](https://github.com/Catussi/Concrete-Strength-Prediction-with-Machine-Learning)

---

## Production Management System

**Stack:** Angular 18 · TypeScript · Angular Material · SSR

Sistema enterprise de gestión de producción: inventario, turnos y dashboards operativos.

- [GitHub](https://github.com/Catussi/Production-Management-System-Angular-Enterprise-Application)

---

## Laravel Commerce

**Stack:** Laravel · PHP · MySQL

E-commerce full stack: catálogo, checkout, panel admin y procesamiento automático de imágenes.

- [GitHub](https://github.com/Catussi/Laravel-Commerce)

---

## Proyectos académicos

Repositorio unificado de trabajos universitarios:

| Área | Proyecto | Enlace |
| --- | --- | --- |
| **ML / Visión** | Crack Detection (CNN vs MLP) | [Machine Learning](https://github.com/Catussi/Academic-Projects/tree/main/Machine%20Learning) |
| **Optimización** | VRPTW con Gurobi/CPLEX | [Optimization](https://github.com/Catussi/Academic-Projects/tree/main/Optimization) |
| **IoT** | Monitoreo de gas en tiempo real | [Internet Of Things](https://github.com/Catussi/Academic-Projects/tree/main/Internet%20Of%20Things) |

- [Academic-Projects](https://github.com/Catussi/Academic-Projects)

---

## IBM Data Science Capstone

Proyecto integrador del certificado IBM — pipeline completo de ciencia de datos.

- [DataScience-Capstone](https://github.com/Catussi/DataScience-Capstone)

---

## Más en GitHub

**15+ repositorios públicos:** [github.com/Catussi](https://github.com/Catussi)

| Categoría | Ejemplos |
| --- | --- |
| Full stack | ELVIR, catussi-os, Laravel Commerce, Production Management |
| Datos / ML | OpsPulse, eSports, Concrete, Academic Pathways |
| Académico | Academic-Projects, Optimization, IoT |
