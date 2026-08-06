import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dataFilePath = path.join(process.cwd(), 'lib/data.ts');
let dataFileContent = fs.readFileSync(dataFilePath, 'utf8');

const dirs = [
  path.join(process.cwd(), 'public/projects'),
  path.join(process.cwd(), 'public/team')
];

async function optimizeImages() {
  for (const dir of dirs) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const fullPath = path.join(dir, file);
        const nameWithoutExt = path.basename(file, path.extname(file));
        const newFileName = `${nameWithoutExt}.webp`;
        const newPath = path.join(dir, newFileName);
        
        try {
          console.log(`Optimizing: ${file}`);
          await sharp(fullPath)
            .resize({ width: 1600, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(newPath);
            
          // If successful, delete the old file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${file}`);
          
          // Replace in data.ts
          // Using global replace because there could be multiple occurrences 
          // or just the generic name replace.
          const escapedOld = file.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const regex = new RegExp(`(/projects/|/team/)${escapedOld}`, 'g');
          dataFileContent = dataFileContent.replace(regex, `$1${newFileName}`);
        } catch (e) {
          console.error(`Failed to process ${file}`, e);
        }
      }
    }
  }
  
  fs.writeFileSync(dataFilePath, dataFileContent);
  console.log('Finished updating data.ts');
}

optimizeImages();
