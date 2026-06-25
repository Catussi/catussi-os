# Deploy y dominio catussi.dev

## Sitio en vivo (ahora)

**https://catussi-os.vercel.app** — el portafolio ya está desplegado ahí.

El banner del perfil y los README apuntan a **catussi.dev**, pero ese dominio **aún no resuelve en DNS** (no está registrado o no tiene registros configurados). Por eso el clic no lleva a ningún sitio.

---

## Conectar catussi.dev (paso a paso)

### 1. Tener el dominio

Si **no lo compraste**: regístralo en [Cloudflare](https://www.cloudflare.com/products/registrar/), [Namecheap](https://www.namecheap.com), [Google Domains / Squarespace](https://domains.google), etc. Busca **catussi.dev**.

Si **ya lo tienes**: entra al panel donde lo compraste (registrar).

### 2. Añadir dominio en Vercel

1. [vercel.com](https://vercel.com) → proyecto **catussi-os**
2. **Settings** → **Domains**
3. Añade:
   - `catussi.dev`
   - `www.catussi.dev` (opcional)
4. Vercel te mostrará los registros DNS exactos. Suele ser:

| Tipo | Nombre | Valor |
|------|--------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

*(Usa los que te muestre Vercel; pueden variar.)*

### 3. Configurar DNS en tu registrar

En el panel del dominio (donde lo compraste), sección **DNS**:

1. Borra registros viejos que choquen (A/CNAME en `@` o `www`)
2. Crea los que indicó Vercel
3. Guarda

### 4. Esperar propagación

- Suele tardar **5 min – 48 h** (a veces minutos)
- Vercel marcará el dominio en verde cuando esté listo
- Prueba: `https://catussi.dev`

### 5. Redirección www (opcional)

En Vercel → Domains, puedes marcar que `www.catussi.dev` redirija a `catussi.dev` (o al revés).

---

## Verificar desde terminal

```powershell
nslookup catussi.dev
```

Cuando funcione, debe devolver una IP (p. ej. `76.76.21.21`), no *Non-existent domain*.

---

## Mientras tanto

Puedes usar **https://catussi-os.vercel.app** en LinkedIn, CV, etc. Cuando `catussi.dev` esté activo, los enlaces del README y del banner ya apuntan ahí y no hay que cambiar código.

---

## Build en Vercel

- **Build:** `npm run build`
- **Output:** `out`
- **Install:** `YARN_PRODUCTION=false NODE_OPTIONS=--openssl-legacy-provider yarn install --ignore-scripts`
- **Node:** 24.x
