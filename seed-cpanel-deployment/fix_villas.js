const fs = require('fs');
const path = require('path');

const publicProjectsDir = path.join(__dirname, 'public', 'projects');
const dataFile = path.join(__dirname, 'lib', 'data.ts');

let dataContent = fs.readFileSync(dataFile, 'utf8');

const villaImageNames = [
  "B+G+1 PRIVATE VILLA | DUBAI, UAE.jpg",
  "B+G+1 RESIDENTIAL VILLA | DUBAI, UAE.jpg",
  "G+1 BEACH VILLA | DUBAI, UAE.jpg",
  "G+1 RESIDENTIAL VILLA | DUBAI, UAE.png",
  "G+1 RESIDENTIAL VILLA | Nad Al Sheba Fourth DUBAI, UAE.tif",
  "G+1 RESIDENTIAL VILLA | Nad Al Sheba Fourth DUBAI, UAE.jpg",
  "G+1 VILLA - Maryam Ahmed Abdulla Almoosa | DUBAI, UAE.jpg",
  "G+1 VILLA | Al Barsha DUBAI, UAE\n.png",
  "G+1 VILLA | Al Barsha DUBAI, UAE.png",
  "G+1+BASEMENT PRIVATE RESIDENTIAL VILLA | DUBAI, UAE.jpg",
  "G+2 PRIVATE RESIDENTIAL VILLA | DUBAI, UAE.png",
  "MODERN PRIVATE VILLA ON PALM JUMEIRAH | DUBAI, UAE.jpg",
  "NADD AL SHIBA VILLA | DUBAI, UAE.JPG",
  "RESIDENTIAL VILLA (VILLA ALI AL SALIM) | DUBAI, UAE.jpg"
];

villaImageNames.forEach(oldName => {
  const oldPath = path.join(publicProjectsDir, oldName.replace('\n', ''));
  if (fs.existsSync(oldPath)) {
    const newName = oldName
      .toLowerCase()
      .replace(/[\s\|+()]/g, '-')
      .replace(/-+/g, '-')
      .replace('.jpg', '.jpg')
      .replace('.png', '.png')
      .replace('.tif', '.tif')
      .replace('\n', '');
    
    const newPath = path.join(publicProjectsDir, newName);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldName} -> ${newName}`);
    
    // Update data.ts
    // Replace exact old path in data.ts
    const oldPathString = `/projects/${oldName.replace('\n', '')}`;
    const newPathString = `/projects/${newName}`;
    dataContent = dataContent.split(oldPathString).join(newPathString);
  }
});

// Now update sector to "Villas" for the villa projects
// We will look for objects with these titles and change sector to "Villas"
const titles = [
  "Noora & Hana Beach Villa",
  "B+G+1 Private Villa",
  "B+G+1 Residential Villa, Emirates Hills",
  "G+1+Basement Private Residential Villa",
  "G+1 Residential Villa, Palm Jumeirah",
  "G+1 Residential Villa, Nad Al Sheba",
  "G+1 Villa - Maryam Ahmed Abdulla Almoosa",
  "G+1 Villa, Al Barsha",
  "G+2 Private Residential Villa, Palm Jumeirah",
  "Modern Private Villa, Palm Jumeirah",
  "Nadd Al Shiba Villa",
  "Residential Villa (Villa Ali Al Salim)"
];

titles.forEach(title => {
  // Regex to find the block for this title and change sector
  const regex = new RegExp(`(title:\\s*"${title}"[\\s\\S]*?sector:\\s*)"Residential"`, 'g');
  dataContent = dataContent.replace(regex, `$1"Villas"`);
  
  // also change clientSector just in case
  const regex2 = new RegExp(`(title:\\s*"${title}"[\\s\\S]*?clientSector:\\s*)"Residential"`, 'g');
  dataContent = dataContent.replace(regex2, `$1"Villas"`);
});

fs.writeFileSync(dataFile, dataContent);
console.log('Updated data.ts');
