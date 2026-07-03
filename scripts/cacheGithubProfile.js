const { writeFileSync, readFileSync, existsSync } = require("fs");
const { join } = require("path");

const OWNER = "Catussi";
const OUT = join(
  "public",
  "Program Files",
  "Browser",
  "profiles",
  "github-cache.json"
);
const API = "https://api.github.com";

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "catussi-os",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const fetchJson = async (path) => {
  const res = await fetch(`${API}${path}`, { headers });

  if (!res.ok) {
    throw new Error(`${path} → ${res.status}`);
  }

  return res.json();
};

const main = async () => {
  try {
    const [user, repos] = await Promise.all([
      fetchJson(`/users/${OWNER}`),
      fetchJson(`/users/${OWNER}/repos?sort=pushed&per_page=100`),
    ]);

    const payload = {
      fetchedAt: new Date().toISOString(),
      user,
      repos,
    };

    writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`);
    console.log(`✓ GitHub cache (${repos.length} repos) → ${OUT}`);
  } catch (error) {
    if (existsSync(OUT)) {
      console.warn(
        `GitHub API no disponible (${error.message}); se mantiene ${OUT}`
      );
      return;
    }

    console.error(`GitHub cache falló y no hay respaldo: ${error.message}`);
    process.exit(1);
  }
};

main();
