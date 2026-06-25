/**
 * Genera iconos webp personalizados para catussi-os.
 * Uso: npm run icons:generate
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "Users", "Public", "Icons");
const SIZES = [48, 96, 144];

const GRAD = (id, c1, c2) => `
  <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="${c1}"/>
    <stop offset="100%" stop-color="${c2}"/>
  </linearGradient>`;

const BASE = (body, extraDefs = "") => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
  <defs>
    ${GRAD("g1", "#ea6161", "#ffc64d")}
    ${GRAD("g2", "#52fa5a", "#4dfcff")}
    ${GRAD("g3", "#4dfcff", "#c64dff")}
    ${GRAD("g4", "#ffc64d", "#52fa5a")}
    ${extraDefs}
  </defs>
  <rect width="96" height="96" rx="18" fill="#1a1a1f"/>
  ${body}
</svg>`;

const ICONS = {
  "catussi-profile": BASE(`
    <circle cx="48" cy="52" r="28" fill="url(#g1)" opacity="0.95"/>
    <ellipse cx="34" cy="30" rx="9" ry="14" fill="url(#g2)" transform="rotate(-18 34 30)"/>
    <ellipse cx="62" cy="30" rx="9" ry="14" fill="url(#g2)" transform="rotate(18 62 30)"/>
    <circle cx="48" cy="54" r="16" fill="#fff"/>
    <circle cx="42" cy="52" r="2.5" fill="#1a1a1f"/>
    <circle cx="54" cy="52" r="2.5" fill="#1a1a1f"/>
    <path d="M42 60 Q48 66 54 60" stroke="#1a1a1f" stroke-width="2" fill="none" stroke-linecap="round"/>
    <text x="48" y="86" text-anchor="middle" fill="#ffc64d" font-size="9" font-family="monospace" font-weight="bold">@</text>
  `),
  "catussi-projects": BASE(`
    <rect x="18" y="22" width="60" height="44" rx="6" fill="url(#g3)" stroke="#fff" stroke-width="2"/>
    <rect x="18" y="22" width="60" height="12" rx="6" fill="#000" opacity="0.25"/>
    <circle cx="28" cy="28" r="3" fill="#ff6b6b"/>
    <circle cx="38" cy="28" r="3" fill="#ffc64d"/>
    <circle cx="48" cy="28" r="3" fill="#52fa5a"/>
    <text x="48" y="54" text-anchor="middle" fill="#fff" font-size="16" font-family="monospace" font-weight="bold">&lt;/&gt;</text>
    <rect x="30" y="62" width="36" height="8" rx="2" fill="url(#g4)"/>
  `),
  "catussi-skills": BASE(`
    <rect x="24" y="24" width="48" height="48" rx="8" fill="url(#g2)" stroke="#fff" stroke-width="2"/>
    <rect x="32" y="32" width="32" height="32" rx="4" fill="#1a1a1f" opacity="0.85"/>
    <path d="M36 48h24M36 42h16M36 54h20" stroke="#4dfcff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="68" cy="28" r="10" fill="url(#g1)"/>
    <text x="68" y="32" text-anchor="middle" fill="#1a1a1f" font-size="11" font-weight="bold">ML</text>
  `),
  "catussi-experience": BASE(`
    <rect x="22" y="30" width="52" height="36" rx="6" fill="url(#g4)" stroke="#fff" stroke-width="2"/>
    <rect x="40" y="22" width="16" height="10" rx="3" fill="url(#g1)"/>
    <rect x="28" y="40" width="40" height="4" rx="2" fill="#1a1a1f" opacity="0.5"/>
    <rect x="28" y="48" width="32" height="4" rx="2" fill="#1a1a1f" opacity="0.35"/>
    <rect x="28" y="56" width="24" height="4" rx="2" fill="#1a1a1f" opacity="0.25"/>
    <polygon points="68,58 76,50 76,66" fill="url(#g3)"/>
  `),
  "catussi-cv-fs": BASE(`
    <path d="M30 18h28l10 10v50H30z" fill="#fff"/>
    <path d="M58 18v10h10" fill="url(#g1)"/>
    <rect x="36" y="36" width="24" height="3" rx="1.5" fill="url(#g3)"/>
    <rect x="36" y="44" width="18" height="3" rx="1.5" fill="#ccc"/>
    <text x="48" y="62" text-anchor="middle" fill="url(#g2)" font-size="13" font-family="monospace" font-weight="bold">FS</text>
    <rect x="34" y="68" width="28" height="8" rx="4" fill="url(#g4)"/>
  `),
  "catussi-cv-ml": BASE(`
    <path d="M30 18h28l10 10v50H30z" fill="#fff"/>
    <path d="M58 18v10h10" fill="url(#g3)"/>
    <circle cx="40" cy="46" r="4" fill="url(#g1)"/>
    <circle cx="56" cy="38" r="4" fill="url(#g2)"/>
    <circle cx="56" cy="54" r="4" fill="url(#g4)"/>
    <line x1="40" y1="46" x2="56" y2="38" stroke="#c64dff" stroke-width="2"/>
    <line x1="40" y1="46" x2="56" y2="54" stroke="#4dfcff" stroke-width="2"/>
    <text x="48" y="68" text-anchor="middle" fill="#1a1a1f" font-size="11" font-family="monospace" font-weight="bold">ML</text>
  `),
  "catussi-elvir": BASE(`
    <circle cx="48" cy="48" r="26" fill="url(#g1)"/>
    <rect x="30" y="38" width="36" height="24" rx="12" fill="#1a1a1f" opacity="0.9"/>
    <circle cx="40" cy="48" r="5" fill="#4dfcff"/>
    <circle cx="56" cy="48" r="5" fill="#4dfcff"/>
    <circle cx="40" cy="48" r="2" fill="#fff"/>
    <circle cx="56" cy="48" r="2" fill="#fff"/>
    <path d="M38 58 Q48 64 58 58" stroke="#52fa5a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M48 20 L52 30 L44 30 Z" fill="url(#g3)"/>
    <text x="48" y="82" text-anchor="middle" fill="#ffc64d" font-size="8" font-family="monospace">ELVIR</text>
  `),
  "catussi-terminal": BASE(`
    <rect x="16" y="20" width="64" height="52" rx="8" fill="#0d1117" stroke="url(#g2)" stroke-width="2"/>
    <rect x="16" y="20" width="64" height="12" rx="8" fill="url(#g3)" opacity="0.9"/>
    <circle cx="26" cy="26" r="3" fill="#ff6b6b"/>
    <circle cx="36" cy="26" r="3" fill="#ffc64d"/>
    <circle cx="46" cy="26" r="3" fill="#52fa5a"/>
    <text x="24" y="48" fill="#52fa5a" font-size="12" font-family="monospace">$</text>
    <text x="34" y="48" fill="#fff" font-size="12" font-family="monospace">catussi</text>
    <rect x="24" y="54" width="20" height="3" fill="#4dfcff" opacity="0.8"/>
    <rect x="24" y="60" width="32" height="3" fill="#ffc64d" opacity="0.6"/>
  `),
};

const main = async () => {
  for (const size of SIZES) {
    mkdirSync(join(OUT, `${size}x${size}`), { recursive: true });
  }

  for (const [name, svg] of Object.entries(ICONS)) {
    const buffer = Buffer.from(svg.trim());

    for (const size of SIZES) {
      const outPath = join(OUT, `${size}x${size}`, `${name}.webp`);
      await sharp(buffer).resize(size, size).webp({ lossless: true }).toFile(outPath);
    }

    console.log(`✓ ${name}`);
  }

  const manifest = Object.keys(ICONS).map((name) => `/Users/Public/Icons/${name}.webp`);
  writeFileSync(join(OUT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`\nListo: ${Object.keys(ICONS).length} iconos en ${OUT}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
