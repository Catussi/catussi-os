const { existsSync, mkdirSync, readdirSync, writeFileSync } = require("fs");
const { join, basename, extname } = require("path");

const MUSIC_DIR = join("public", "Users", "Public", "Music");
const PLAYLIST_PATH = join(MUSIC_DIR, "Catussi.m3u");
const PLAYLIST_URL_PREFIX = "/Users/Public/Music";

const titleFromFileName = (fileName) =>
  basename(fileName, extname(fileName))
    .replace(/^\d+[\s._-]*/, "")
    .replace(/_/g, " ")
    .trim();

const main = () => {
  mkdirSync(MUSIC_DIR, { recursive: true });

  const tracks = readdirSync(MUSIC_DIR)
    .filter((file) => file.toLowerCase().endsWith(".mp3"))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));

  if (tracks.length === 0) {
    writeFileSync(
      PLAYLIST_PATH,
      [
        "#EXTM3U",
        "# Coloca tus .mp3 en public/Users/Public/Music/",
        "# y ejecuta: npm run build:prebuild",
      ].join("\n") + "\n"
    );
    console.log("  playlist vacía (sin .mp3 en Music/)");
    return;
  }

  const lines = tracks.flatMap((file) => {
    const title = titleFromFileName(file);
    const url = `${PLAYLIST_URL_PREFIX}/${encodeURIComponent(file)}`;

    return [`#EXTINF:-1,${title}`, url];
  });

  writeFileSync(PLAYLIST_PATH, `#EXTM3U\n${lines.join("\n")}\n`);
  console.log(`  playlist ${tracks.length} pista(s) → Catussi.m3u`);
};

main();
