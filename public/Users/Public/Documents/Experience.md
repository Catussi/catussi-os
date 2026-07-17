# ![Maletín](/Users/Public/Pictures/Portfolio/emoji/briefcase.png) Experiencia

Mi recorrido combina desarrollo web, datos y soporte técnico. La experiencia principal es ELVIR: comencé con una práctica de ingeniería y continué en el mismo equipo como desarrolladora full stack junior.

[Descargar CV](/Users/Public/Documents/CV_ICI.pdf) · [LinkedIn](https://www.linkedin.com/in/catalinabarriaotto/)

## ITISB · proyecto ELVIR

**Instituto de Tecnología para la Innovación en Salud y Bienestar, Viña del Mar**  
Enero a junio de 2026 · modalidad híbrida

### Desarrolladora Full Stack Junior

**Marzo a junio de 2026**

ELVIR es una plataforma para practicar entrevistas laborales mediante un avatar conversacional. Fue desarrollada para un piloto con jóvenes de Teletón y debía funcionar desde el navegador, sin instalación y tanto en computador como en móvil.

Trabajé en las tres capas del producto. En Angular implementé los flujos para joven, tutor y administrador, la preparación de la sesión, la sala de espera y el panel de seguimiento. En FastAPI desarrollé endpoints, validaciones, autenticación JWT y permisos RBAC. En PostgreSQL mantuve el modelo relacional y sus migraciones con Alembic.

La integración de IA no consistió en entrenar un modelo propio. Mi responsabilidad fue conectar y orquestar servicios externos —LiveAvatar, LiveKit y ElevenLabs— dentro de la experiencia del producto: creación de sesiones, contexto dinámico, prompts provenientes de la investigación y voz en español.

También preparé pruebas, healthchecks, documentación técnica y despliegues con Docker, Vercel, Supabase y Northflank. Durante el piloto atendí incidencias reales de audio, permisos del navegador y compatibilidad móvil.

**Resultado:** la plataforma se utilizó en un piloto real con Teletón. El supervisor de ITISB destacó el avance tanto en frontend como en backend.

[Demo pública](https://elvir-demo.vercel.app/) · [Código y documentación](https://github.com/Catussi/ELVIR-Demo)

### Practicante de Ingeniería Informática

**Enero a febrero de 2026**

La práctica comenzó con un encargo todavía abierto. Preparé mockups y recorridos de usuario, propuse una arquitectura frontend/backend y diseñé el primer modelo de datos. Una decisión importante fue separar la sesión técnica del avatar de la simulación laboral, porque tenían ciclos de vida y datos distintos.

Elegí FastAPI para la API, definí los contratos REST iniciales e implementé un primer flujo conectado con LiveAvatar. La entrega incluyó scripts de demostración, documentación y un repositorio que sirvió como base para continuar el proyecto.

**Resultado:** después de validar el prototipo, seguí en el equipo como desarrolladora full stack junior.

## Universidad Adolfo Ibáñez

**Ayudante Digital · Trusted AI 2024**  
Mayo a septiembre de 2024 · remoto

Apoyé la presencia digital del workshop Trusted AI 2024. Trabajé con WordPress, DreamHost, hosting, dominio y certificados SSL, y preparé más de veinte piezas de contenido para la difusión del evento.

Fue una experiencia breve, pero me enseñó a mantener un sitio operativo mientras coordinaba contenido con personas de un entorno académico. La plataforma permaneció activa durante los cinco meses del proyecto.

## MIA Chile · Mujeres en Inteligencia Artificial

**Práctica universitaria**  
Abril a agosto de 2022 · modalidad híbrida

Participé en el rediseño del sitio institucional, la administración del hosting y la creación de dashboards en Power BI. El objetivo era mejorar la visibilidad de la asociación y facilitar el seguimiento de sus actividades.

Esta fue mi primera experiencia trabajando en un proyecto digital para una organización. Aprendí a traducir solicitudes poco técnicas en cambios concretos y a mantener servicios que otras personas utilizaban.

## Lo que aprendí de estas experiencias

- Un producto no termina cuando el código funciona: también necesita documentación, despliegue, soporte y una experiencia entendible.
- Las integraciones externas requieren manejar errores y estados intermedios, no solo consumir una API.
- Trabajar con usuarios reales cambia las prioridades; compatibilidad, permisos y mensajes claros pueden ser tan importantes como una nueva función.
- Prefiero reconocer lo que todavía no sé y estudiarlo antes que presentar una herramienta como dominio consolidado.
