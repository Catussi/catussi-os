# ![Rocket](/Users/Public/Pictures/Portfolio/emoji/rocket.png) Projects

This selection includes finished projects, work in progress, and learning exercises. I try to explain what I actually did in each one, not just list technologies.

| | |
|---|---|
| Professional project | ELVIR |
| Research | Capstone thesis · XAI |
| Personal lab | OpsPulse |
| Portfolio | catussi-os |

## ELVIR

**Virtual job coach with AI · ITISB / Teletón · 2026**

ELVIR started as a tool so young people from Teletón could practice job interviews in a controlled setting. The user prepares a session, talks with an avatar, and a professional can review the activity from their own panel.

I joined while the product was still being defined. I designed flows and mockups, proposed the data model, then implemented frontend, API, and persistence. The app uses Angular, FastAPI, and PostgreSQL; authentication is handled with JWT and permissions with RBAC to distinguish young people, tutors, and administrators.

Conversation relies on LiveAvatar and LiveKit. My contribution was the integration: creating and closing sessions, delivering dynamic context, handling waiting states, incorporating prompts defined by the research team, and adding Spanish voice through ElevenLabs.

> I also worked on tests, migrations, healthchecks, documentation, and deployment. The demo was set up to run without installation and was tested with real users, which meant fixing microphone permissions, audio issues, and mobile behavior.

**Technologies:** Angular · Angular Material · FastAPI · PostgreSQL · SQLAlchemy · Alembic · Docker · LiveKit · LiveAvatar · ElevenLabs

[Open demo](https://elvir-demo.vercel.app/) · [Review repository](https://github.com/Catussi/ELVIR-Demo)

## Capstone thesis · academic trajectories

**Machine learning and interpretability · UNAB · grade 6.6/7.0**

My thesis studied longitudinal school performance records. The goal wasn't only to predict outcomes, but to understand which variables were driving results and whether model behavior could introduce unfair differences.

I built the data preparation pipeline, trained and compared supervised models, and used SHAP to interpret predictions. An important part of the work was translating statistical results and visualizations into conclusions that made sense in an educational context.

This project strengthened my interest in ML Engineering and XAI. It also made clear that a high metric isn't enough when a model can influence decisions about people.

**Technologies:** Python · pandas · scikit-learn · SHAP · Jupyter

*The data and repository are not public because this is academic research.*

## OpsPulse

**Personal lab for data engineering and retail operations**

OpsPulse is a project I built to study how the pieces of a data platform connect beyond a notebook. The chosen domain is retail: sales, inventory, branches, alerts, and operational metrics.

The API is built with FastAPI and PostgreSQL. Tasks that shouldn't block a request run with Celery and Redis. For the analytics layer I use dbt and Airflow, while MLflow tracks experiments. The Angular frontend lets you query KPIs and review process status.

> I don't present this as a finished enterprise system. It's a practice environment where I try architecture, observability, and deployment decisions, and document which parts are implemented and which are still in progress.

**Technologies:** FastAPI · Celery · Redis · PostgreSQL · Angular · dbt · Airflow · MLflow · Prometheus · Grafana

[Review repository](https://github.com/Catussi/opspulse)

## catussi-os

**Interactive portfolio · this site**

I wanted to avoid another landing page with identical cards, so I adapted a web desktop as a portfolio. Documents live in a virtual file system and open with apps: the CV in a PDF viewer, texts in a Markdown reader, and projects in the browser.

My work has been customizing the base project, rewriting content, integrating GitHub, LinkedIn, and YouTube shortcuts, fixing viewers, adjusting file handling, and maintaining end-to-end tests. I also had to solve less visible problems, like cross-origin resources, PDFs loaded from BrowserFS, and limits for files that were too large.

The project is still evolving; this same page is part of making it feel more personal and less like a template.

**Technologies:** Next.js · React · TypeScript · styled-components · BrowserFS · Playwright

[Open site](https://catussi-os.vercel.app/) · [Review repository](https://github.com/Catussi/catussi-os)

## eSports Performance Analytics

This project explores more than 79,000 CS:GO matches. I prepared the data and tried classification, regression, and clustering tasks to study player performance patterns.

The result included a machine learning analysis and a web platform to present metrics. Random Forest reached an F1 near 0.99 on one task; that figure should be read within the dataset and split used, not as a guarantee outside the experiment.

[Open demo](https://esports-analytics-platform-tau.vercel.app/) · [Platform](https://github.com/Catussi/esports-analytics-platform) · [ML analysis](https://github.com/Catussi/Machine-Learning-Analysis-of-Player-Performance-in-CS-GO)

## Other projects

### Concrete Strength Prediction

Model comparison for predicting concrete strength. Includes data preparation, regression, neural networks, and hyperparameter search with Keras Tuner. The best result reached an approximate R² of 0.91 in the experiment.

[View code](https://github.com/Catussi/Concrete-Strength-Prediction-with-Machine-Learning)

### Production Management System

An Angular app to practice an enterprise production management UI: inventory, shifts, and dashboards. I used it to go deeper into Angular Material, modular structure, and server-side rendering.

[View code](https://github.com/Catussi/Production-Management-System-Angular-Enterprise-Application)

### Laravel Commerce

E-commerce built with Laravel, PHP, and MySQL. Includes catalog, checkout, admin, and image processing. It was useful for working with a monolithic backend framework and comparing that approach with separate APIs.

[View code](https://github.com/Catussi/Laravel-Commerce)

### University projects

The [Academic Projects](https://github.com/Catussi/Academic-Projects) repository collects machine learning, optimization, and IoT exercises: crack detection with CNN and MLP, VRPTW solving with Gurobi/CPLEX, and gas monitoring with sensors and MQTT.

All my public repositories are at [github.com/Catussi](https://github.com/Catussi).
