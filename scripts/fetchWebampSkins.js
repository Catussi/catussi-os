const { existsSync, mkdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const OUT_DIR = join("public", "Users", "Public", "Documents", "Winamp Skins");

const SKINS = [
  {
    file: "Aqua_X.wsz",
    url: "https://archive.org/download/winampskin_Aqua_X/Aqua_X.wsz",
  },
  {
    file: "SpyAMP_Professional_Edition_v5.wsz",
    url: "https://archive.org/download/winampskin_SpyAMP_Professional_Edition_v5/SpyAMP_Professional_Edition_v5.wsz",
  },
  {
    file: "Nucleo_NLog_v102.wsz",
    museumSearch: "Nucleo NLog",
    url: "https://archive.org/download/winampskin_Nucleo_NLog_v102/Nucleo_NLog_v102.wsz",
  },
  {
    file: "base-2.91.wsz",
    museumSearch: "base 2.91",
    url: "https://archive.org/download/winampskin_Base291Winamp/base-2.91.wsz",
  },
];

const fetchFromMuseum = async (search) => {
  const response = await fetch("https://skins.webamp.org/graphql", {
    body: JSON.stringify({
      query: `query { skins(search: "${search}", first: 1, filter: APPROVED) { nodes { filename download_url } } }`,
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
    signal: AbortSignal.timeout(30_000),
  });
  const { data } = await response.json();

  return data?.skins?.nodes?.[0];
};

const fetchSkin = async ({ file, url, museumSearch }) => {
  const dest = join(OUT_DIR, file);

  if (existsSync(dest)) {
    console.log(`  skip ${file} (ya existe)`);
    return;
  }

  const sources = [url];

  if (museumSearch) {
    const museumSkin = await fetchFromMuseum(museumSearch);

    if (museumSkin?.download_url) {
      sources.push(museumSkin.download_url);
    }
  }

  for (const source of sources) {
    if (!source) continue;

    try {
      const response = await fetch(source, {
        signal: AbortSignal.timeout(60_000),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      writeFileSync(dest, buffer);
      console.log(`  ok ${file} (${buffer.length} bytes)`);
      return;
    } catch (error) {
      console.warn(`  warn ${file} @ ${source}: ${error.message}`);
    }
  }
};

const main = async () => {
  mkdirSync(OUT_DIR, { recursive: true });

  for (const skin of SKINS) {
    await fetchSkin(skin);
  }
};

main();
