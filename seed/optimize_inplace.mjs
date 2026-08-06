import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = [
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'public/sectors'),
  path.join(process.cwd(), 'public/services'),
  path.join(process.cwd(), 'public/blog'),
];

async function optimizeInplace() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const fullPath = path.join(dir, file);
      
      // Skip directories or already optimized webp/svg
      if (fs.statSync(fullPath).isDirectory()) continue;
      
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        try {
          const stats = fs.statSync(fullPath);
          if (stats.size > 500 * 1024) { // Only optimize if > 500KB
            console.log(`Optimizing in-place (>500KB): ${fullPath}`);
            const tempPath = fullPath + '.tmp';
            
            if (ext === '.png') {
              await sharp(fullPath)
                .resize({ width: 1600, withoutEnlargement: true })
                .png({ compressionLevel: 9, quality: 80 })
                .toFile(tempPath);
            } else {
              await sharp(fullPath)
                .resize({ width: 1600, withoutEnlargement: true })
                .jpeg({ quality: 80 })
                .toFile(tempPath);
            }
            
            fs.renameSync(tempPath, fullPath);
            console.log(`Replaced: ${file}`);
          }
        } catch (e) {
          console.error(`Failed to process ${file}`, e);
        }
      }
    }
  }
}

optimizeInplace();
