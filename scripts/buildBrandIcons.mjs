import sharp from "sharp";
import { readFileSync } from "fs";

const sizes = [16, 32, 48, 96, 144];

const colorizePaths = (svg, color) =>
  svg
    .replace(/<title>[^<]*<\/title>/, "")
    .replace(/fill="[^"]*"/g, "")
    .replace(/<path\b/g, `<path fill="${color}"`);

async function renderBrand(fileBase, svg) {
  for (const size of sizes) {
    const base = `public/System/Icons/${size}x${size}/${fileBase}`;
    const img = () =>
      sharp(Buffer.from(svg), { density: 320 }).resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      });
    await img().png().toFile(`${base}.png`);
    await img().webp({ lossless: true }).toFile(`${base}.webp`);
  }
}

const ghPaths = colorizePaths(
  readFileSync("scripts/assets/github-mark.svg", "utf8"),
  "#ffffff"
).replace(/<\/?svg[^>]*>/g, "");

const gh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
  <rect width="96" height="96" rx="20" fill="#010409"/>
  <g transform="translate(18,18) scale(2.5)">${ghPaths}</g>
</svg>`;

const liPaths = colorizePaths(
  readFileSync("scripts/assets/linkedin-mark.svg", "utf8"),
  "#0A66C2"
).replace(/<\/?svg[^>]*>/g, "");

const li = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
  <rect width="96" height="96" rx="20" fill="#ffffff"/>
  <g transform="translate(8,8) scale(3.333)">${liPaths}</g>
</svg>`;

const ytPaths = colorizePaths(
  readFileSync("scripts/assets/youtube-mark.svg", "utf8"),
  "#FF0000"
).replace(/<\/?svg[^>]*>/g, "");

const yt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
  <rect width="96" height="96" rx="20" fill="#ffffff"/>
  <g transform="translate(8,18) scale(3.333)">${ytPaths}</g>
</svg>`;

await renderBrand("github_app", gh);
await renderBrand("linkedin_app", li);
await renderBrand("youtube_app", yt);
console.log("brand icons ready");
