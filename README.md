# catussi-os

Portafolio interactivo de **Catalina Barria Otto ([@Catussi](https://github.com/Catussi))** — un escritorio completo en el navegador con apps, explorador de archivos, terminal y documentación integrada.

<p align="center">
  <a href="https://catussi-os.vercel.app/"><img alt="Sitio en vivo" src="https://img.shields.io/badge/Sitio-catussi--os.vercel.app-000?style=for-the-badge" /></a>
  <a href="https://github.com/Catussi/catussi-os"><img alt="Repo" src="https://img.shields.io/badge/Repo-catussi--os-000?style=for-the-badge&logo=github" /></a>
  <a href="https://www.linkedin.com/in/catalinabarriaotto/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-000?style=for-the-badge&logo=linkedin" /></a>
</p>

## Enlaces

| | |
| --- | --- |
| **Portafolio** | [catussi-os.vercel.app](https://catussi-os.vercel.app/) |
| **Este repo** | [github.com/Catussi/catussi-os](https://github.com/Catussi/catussi-os) |
| **Perfil GitHub** | [github.com/Catussi/Catussi](https://github.com/Catussi/Catussi) |
| **ELVIR-Demo** | [github.com/Catussi/ELVIR-Demo](https://github.com/Catussi/ELVIR-Demo) · [demo](https://elvir-demo.vercel.app/) |
| **Email** | [cata.barria@gmail.com](mailto:cata.barria@gmail.com) |

## Escritorio

Al abrir [catussi-os.vercel.app](https://catussi-os.vercel.app/) verás un escritorio en español con accesos a:

- Sobre mí · Experiencia · Proyectos · Educación
- Habilidades · Contacto
- **CV Full Stack ML** (PDF)

Los documentos viven en `public/Users/Public/Documents/`. Los accesos del escritorio en `public/Users/Public/Desktop/`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Si ves iconos viejos en el navegador: **Inicio → Apagar** para resetear la sesión local.

## Build

```bash
npm run build
npx serve out -l 3010
```

## Deploy

El sitio se publica en **Vercel** desde este repo (`npm run build`, output `out`). Detalle en [DEPLOY.md](./DEPLOY.md).

## Stack principal

Next.js · React · TypeScript · styled-components · BrowserFS

## Créditos

Librerías y aplicaciones embebidas de terceros: [public/CREDITS.md](./public/CREDITS.md).
