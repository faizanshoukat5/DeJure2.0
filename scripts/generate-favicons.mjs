import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const ROOT = process.cwd();
const publicDir = path.join(ROOT, 'client', 'public');
const input = path.join(publicDir, 'assets', 'logo-dejure-maroon.svg');
const background = { r: 51, g: 41, b: 37, alpha: 1 }; // subtle warm charcoal to blend with navbar

const OUTPUTS = [
  { size: 32, filename: 'favicon-32.png' },
  { size: 64, filename: 'favicon-64.png' },
  { size: 180, filename: 'apple-touch-icon.png' },
  { size: 180, filename: 'favicon.PNG' },
  { size: 192, filename: 'android-chrome-192x192.png' },
  { size: 512, filename: 'android-chrome-512x512.png' },
];

async function generate() {
  if (!fs.existsSync(input)) {
    console.error('Input logo not found:', input);
    process.exit(1);
  }

  const meta = await sharp(input).metadata();
  const width = meta.width || 520;
  const height = meta.height || 230;

  // Crop the top portion where the box logo sits (exclude bottom tagline band)
  let cropHeight = Math.floor(height * 0.78);
  if (cropHeight <= 0 || cropHeight > height) cropHeight = height;
  const cropWidth = Math.min(width, meta.width || width);

  const extractedBuffer = await sharp(input)
    .extract({ left: 0, top: 0, width: cropWidth, height: cropHeight })
    .png()
    .toBuffer();

  await Promise.all(
    OUTPUTS.map(({ size, filename }) =>
      sharp(extractedBuffer)
        .resize(size, size, { fit: 'contain', background })
        .png()
        .toFile(path.join(publicDir, filename))
    )
  );

  console.log('Wrote favicons:');
  OUTPUTS.forEach(({ filename, size }) => console.log(` - ${filename} (${size}x${size})`));
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
