# Subir catussi-os a GitHub

## 1. Carpeta del proyecto

La carpeta local ya se llama **`catussi-os`** (antes `catus-daedalos`).

## 2. Crear el repo en GitHub

- Nombre: **`catussi-os`**
- Público
- Sin README (ya tienes uno)

## 3. Push inicial

```powershell
cd catussi-os
git init
git add .
git commit -m "Initial commit: catussi-os portfolio"
git branch -M main
git remote add origin https://github.com/Catussi/catussi-os.git
git push -u origin main
```

## 4. Deploy en catussi.dev

**Vercel (recomendado):**

1. Importar repo `Catussi/catussi-os`
2. Build: `npm run build`
3. Output: `out`
4. Dominio custom: `catussi.dev`

## 5. Verificar

- `https://catussi.dev` carga el escritorio
- Tarjeta pin en tu README de GitHub deja de salir negra
