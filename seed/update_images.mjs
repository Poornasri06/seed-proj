import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'lib/data.ts');
const projectsDir = path.join(process.cwd(), 'public/projects');

let dataFileContent = fs.readFileSync(dataFilePath, 'utf8');

const projectImages = fs.readdirSync(projectsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.webp') || f.endsWith('.JPG'));

// A helper to normalize strings for comparison
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const normalizedImages = projectImages.map(img => ({
  original: img,
  normalized: normalize(img.replace(/\.[^/.]+$/, "")) // remove extension
}));

// Find all project blocks
// This regex looks for: title: "...", then finds the next image: "..." line.
let modifiedContent = dataFileContent;

// We'll iterate over portfolio array. It's a bit tricky to parse TS as JSON, 
// so we'll do regex replacements.
// Find blocks like:
// "title": "Akoya Carson Tower",
// ...
// "image": "/projects/old-image.webp",

let regex = /"title":\s*"([^"]+)"([\s\S]*?)"image":\s*"([^"]+)"/g;

modifiedContent = modifiedContent.replace(regex, (match, title, between, oldImage) => {
  const normTitle = normalize(title);
  
  // Try to find exact match or loose match
  let matchedImage = normalizedImages.find(img => img.normalized === normTitle);
  
  // Try finding if title contains image name or vice versa
  if (!matchedImage) {
    matchedImage = normalizedImages.find(img => normTitle.includes(img.normalized) || img.normalized.includes(normTitle));
  }

  // Fallbacks for specific known mismatches
  if (!matchedImage && title === 'Brass Monkey Hotel') matchedImage = normalizedImages.find(img => img.normalized === normalize('Brass Monkey'));
  if (!matchedImage && title === 'DIFC Business Tower') matchedImage = normalizedImages.find(img => img.normalized === normalize('Business tower DIFC'));
  if (!matchedImage && title === 'Commerz 3 Tower') matchedImage = normalizedImages.find(img => img.normalized === normalize('Commerz 3'));
  if (!matchedImage && title === 'Al Ajlan Tower 2') matchedImage = normalizedImages.find(img => img.normalized === normalize('Al AjlanTower 2'));
  if (!matchedImage && title === 'Al Ajlan Tower 3') matchedImage = normalizedImages.find(img => img.normalized === normalize('Al AjlanTower 3'));

  if (matchedImage) {
    console.log(`Matched: ${title} -> ${matchedImage.original}`);
    return `"title": "${title}"${between}"image": "/projects/${matchedImage.original}"`;
  } else {
    console.log(`NO MATCH for: ${title} (kept ${oldImage})`);
    return match;
  }
});

fs.writeFileSync(dataFilePath, modifiedContent);
console.log('Update complete.');
