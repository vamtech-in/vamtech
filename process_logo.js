const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = 'C:\\Users\\vivek\\.gemini\\antigravity-ide\\brain\\af6f7291-1dda-4b76-9e5f-3fe843685e07\\.user_uploaded\\media_1787751502004.jpg';
  const outDir = 'c:\\Users\\vivek\\Desktop\\vamtech\\public\\images';
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Load raw image data
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  
  // Buffers for regular (dark text) and inverted (white text)
  const regularBuffer = Buffer.from(data);
  const invertedBuffer = Buffer.from(data);

  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Calculate brightness (0 to 255)
      const brightness = (r + g + b) / 3;

      if (brightness > 245) {
        // Pure / near white background -> make fully transparent
        regularBuffer[idx + 3] = 0;
        invertedBuffer[idx + 3] = 0;
      } else if (brightness > 215) {
        // Antialiased edge
        const alpha = Math.round(((255 - brightness) / 40) * 255);
        regularBuffer[idx + 3] = alpha;
        invertedBuffer[idx + 3] = alpha;
        
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // Invert non-blue parts for inverted version
        const isBlue = (b > r + 30 && b > g + 20);
        if (!isBlue) {
          invertedBuffer[idx] = 255;
          invertedBuffer[idx + 1] = 255;
          invertedBuffer[idx + 2] = 255;
        }
      } else {
        // Foreground (dark navy and electric blue)
        regularBuffer[idx + 3] = 255;
        invertedBuffer[idx + 3] = 255;

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // Check if it's the electric blue triangle
        const isBlue = (b > r + 40 && b > g + 20);
        if (!isBlue) {
          // It's the dark navy text/shape -> turn to pure white for inverted
          invertedBuffer[idx] = 255;
          invertedBuffer[idx + 1] = 255;
          invertedBuffer[idx + 2] = 255;
        }
      }
    }
  }

  // Add padding
  const padding = 15;
  const cropX = Math.max(0, minX - padding);
  const cropY = Math.max(0, minY - padding);
  const cropW = Math.min(width - cropX, (maxX - minX) + padding * 2);
  const cropH = Math.min(height - cropY, (maxY - minY) + padding * 2);

  // Save regular transparent logo
  await sharp(regularBuffer, { raw: { width, height, channels } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png()
    .toFile(path.join(outDir, 'vamtech-logo.png'));

  // Save inverted transparent logo
  await sharp(invertedBuffer, { raw: { width, height, channels } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .png()
    .toFile(path.join(outDir, 'vamtech-logo-white.png'));

  console.log(`Saved transparent logos! Cropped to ${cropW}x${cropH} at (${cropX}, ${cropY})`);
}

processLogo().catch(console.error);
