import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SOURCE = join(ROOT, "assets", "cb-icon.png");
const PUBLIC = join(ROOT, "public");
const ICON_SIZES = [16, 32, 48];

const buildIco = (images) => {
  const header = Buffer.alloc(6);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = images.map(({ data, height, width }) => {
    const entry = Buffer.alloc(16);

    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(0, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;

    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map(({ data }) => data)]);
};

const main = async () => {
  if (!existsSync(SOURCE)) {
    console.warn("  skip favicon (falta assets/cb-icon.png)");
    return;
  }

  const pngBuffers = await Promise.all(
    ICON_SIZES.map((size) =>
      sharp(SOURCE)
        .resize(size, size, { fit: "cover", position: "centre" })
        .png()
        .toBuffer()
    )
  );

  const icoImages = await Promise.all(
    pngBuffers.map(async (data) => {
      const { height, width } = await sharp(data).metadata();

      return { data, height, width };
    })
  );

  writeFileSync(join(PUBLIC, "favicon.ico"), buildIco(icoImages));
  writeFileSync(
    join(PUBLIC, "favicon.png"),
    await sharp(SOURCE).resize(32, 32, { fit: "cover" }).png().toBuffer()
  );
  writeFileSync(
    join(PUBLIC, "apple-touch-icon.png"),
    await sharp(SOURCE).resize(180, 180, { fit: "cover" }).png().toBuffer()
  );

  const iconDir = join(PUBLIC, "System", "Icons");
  const sizes = [16, 32, 48];

  for (const size of sizes) {
    const outDir = join(iconDir, `${size}x${size}`);

    mkdirSync(outDir, { recursive: true });
    writeFileSync(
      join(outDir, "cb.webp"),
      await sharp(SOURCE)
        .resize(size, size, { fit: "cover" })
        .webp({ quality: 90 })
        .toBuffer()
    );
  }

  console.log("  favicon CB generado");
};

main();
