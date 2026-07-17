# ![Cohete](/Users/Public/Pictures/Portfolio/emoji/rocket.png) Proyectos

Esta selección muestra proyectos terminados, trabajos en curso y ejercicios de aprendizaje. Intento explicar qué hice realmente en cada uno y no solo enumerar tecnologías.

| | |
|---|---|
| Proyecto profesional | ELVIR |
| Investigación | Memoria de título · XAI |
| Laboratorio personal | OpsPulse |
| Portafolio | catussi-os |

## ELVIR

**Entrenador laboral virtual con IA · ITISB / Teletón · 2026**

ELVIR nació como una herramienta para que jóvenes de Teletón pudieran practicar entrevistas laborales en un entorno controlado. El usuario prepara una sesión, conversa con un avatar y el profesional puede revisar la actividad desde su propio panel.

Me incorporé cuando el producto todavía estaba en definición. Diseñé flujos y mockups, propuse el modelo de datos y luego implementé frontend, API y persistencia. La aplicación usa Angular, FastAPI y PostgreSQL; la autenticación se maneja con JWT y los permisos con RBAC para distinguir jóvenes, tutores y administradores.

La conversación se apoya en LiveAvatar y LiveKit. Mi aporte estuvo en la integración: crear y cerrar sesiones, entregar contexto dinámico, manejar estados de espera, incorporar los prompts definidos por el equipo de investigación y agregar una voz en español mediante ElevenLabs.

> También trabajé en pruebas, migraciones, healthchecks, documentación y despliegue. La demo se preparó para funcionar sin instalación y se probó con usuarios reales, lo que obligó a resolver permisos de micrófono, audio y comportamiento móvil.

**Tecnologías:** Angular · Angular Material · FastAPI · PostgreSQL · SQLAlchemy · Alembic · Docker · LiveKit · LiveAvatar · ElevenLabs

[Abrir demo](https://elvir-demo.vercel.app/) · [Revisar repositorio](https://github.com/Catussi/ELVIR-Demo)

## Memoria de título · trayectorias académicas

**Machine learning e interpretabilidad · UNAB · nota 6,6/7,0**

Mi memoria estudió registros longitudinales de rendimiento escolar. El objetivo no era únicamente predecir resultados, sino entender qué variables estaban influyendo y revisar si el comportamiento de los modelos podía introducir diferencias injustas.

Construí el proceso de preparación de datos, entrené y comparé modelos supervisados y utilicé SHAP para interpretar las predicciones. Una parte importante del trabajo fue traducir resultados estadísticos y visualizaciones a conclusiones que tuvieran sentido en un contexto educativo.

Este proyecto consolidó mi interés por ML Engineering y XAI. También me dejó claro que una métrica alta no basta cuando un modelo puede influir en decisiones sobre personas.

**Tecnologías:** Python · pandas · scikit-learn · SHAP · Jupyter

*Los datos y el repositorio no son públicos por tratarse de investigación académica.*

## OpsPulse

**Laboratorio personal de ingeniería de datos y operaciones retail**

OpsPulse es un proyecto que construí para estudiar cómo se conectan las piezas de una plataforma de datos más allá de un notebook. El dominio elegido es retail: ventas, inventario, sucursales, alertas y métricas operativas.

La API se desarrolla con FastAPI y PostgreSQL. Las tareas que no deberían bloquear una petición se ejecutan con Celery y Redis. Para la capa analítica uso dbt y Airflow, mientras que MLflow registra experimentos. El frontend en Angular permite consultar KPIs y revisar el estado de los procesos.

> No lo presento como un sistema empresarial terminado. Es un entorno de práctica donde pruebo decisiones de arquitectura, observabilidad y despliegue, y documento qué partes están implementadas y cuáles siguen en desarrollo.

**Tecnologías:** FastAPI · Celery · Redis · PostgreSQL · Angular · dbt · Airflow · MLflow · Prometheus · Grafana

[Revisar repositorio](https://github.com/Catussi/opspulse)

## catussi-os

**Portafolio interactivo · este sitio**

Quería evitar otra landing con tarjetas idénticas, así que adapté un escritorio web como portafolio. Los documentos viven en un sistema de archivos virtual y se abren con aplicaciones: el CV en un visor PDF, los textos en un lector Markdown y los proyectos en el navegador.

Mi trabajo ha consistido en personalizar el proyecto base, rehacer contenidos, integrar accesos a GitHub, LinkedIn y YouTube, corregir visores, ajustar el manejo de archivos y mantener los tests end-to-end. También tuve que resolver problemas poco visibles, como recursos cross-origin, PDFs cargados desde BrowserFS y límites para archivos demasiado grandes.

El proyecto sigue evolucionando; esta misma página forma parte del proceso de hacerlo más personal y menos parecido a una plantilla.

**Tecnologías:** Next.js · React · TypeScript · styled-components · BrowserFS · Playwright

[Abrir sitio](https://catussi-os.vercel.app/) · [Revisar repositorio](https://github.com/Catussi/catussi-os)

## eSports Performance Analytics

Este proyecto explora más de 79.000 partidas de CS:GO. Preparé los datos y probé tareas de clasificación, regresión y clustering para estudiar patrones de rendimiento de jugadores.

El resultado incluyó un análisis de machine learning y una plataforma web para presentar métricas. El Random Forest alcanzó un F1 cercano a 0,99 en una de las tareas; esa cifra debe leerse dentro del conjunto y la partición utilizados, no como una garantía fuera del experimento.

[Abrir demo](https://esports-analytics-platform-tau.vercel.app/) · [Plataforma](https://github.com/Catussi/esports-analytics-platform) · [Análisis ML](https://github.com/Catussi/Machine-Learning-Analysis-of-Player-Performance-in-CS-GO)

## Otros proyectos

### Concrete Strength Prediction

Comparación de modelos para predecir resistencia del hormigón. Incluye preparación de datos, regresión, redes neuronales y búsqueda de hiperparámetros con Keras Tuner. El mejor resultado obtuvo un R² aproximado de 0,91 en el experimento.

[Ver código](https://github.com/Catussi/Concrete-Strength-Prediction-with-Machine-Learning)

### Production Management System

Aplicación Angular para practicar una interfaz empresarial de gestión de producción: inventario, turnos y dashboards. La utilicé para profundizar en Angular Material, estructura por módulos y renderizado del lado del servidor.

[Ver código](https://github.com/Catussi/Production-Management-System-Angular-Enterprise-Application)

### Laravel Commerce

E-commerce desarrollado con Laravel, PHP y MySQL. Incluye catálogo, checkout, administración y procesamiento de imágenes. Fue útil para trabajar con un framework backend monolítico y comparar ese enfoque con APIs separadas.

[Ver código](https://github.com/Catussi/Laravel-Commerce)

### Proyectos universitarios

El repositorio [Academic Projects](https://github.com/Catussi/Academic-Projects) reúne ejercicios de machine learning, optimización e IoT: detección de grietas con CNN y MLP, resolución de VRPTW con Gurobi/CPLEX y monitoreo de gas con sensores y MQTT.

Todos mis repositorios públicos están en [github.com/Catussi](https://github.com/Catussi).
