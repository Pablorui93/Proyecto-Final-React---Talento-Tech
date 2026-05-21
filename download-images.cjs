const fs = require('fs');
const path = require('path');
const https = require('https');

const autos = [
  'fiat-cronos', 'fiat-toro', 'toyota-corolla', 'toyota-hilux', 
  'toyota-yaris', 'vw-gol', 'vw-taos', 'vw-amarok', 
  'ford-ranger', 'ford-territory', 'ford-mustang', 
  'chevrolet-cruze', 'chevrolet-tracker', 'peugeot-208', 
  'renault-stepway'
];

const dirPath = path.join(__dirname, 'public', 'img');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

autos.forEach((auto) => {
  const fileName = `${auto}.jpg`;
  const filePath = path.join(dirPath, fileName);
  const fileStream = fs.createWriteStream(filePath);
  
  // Genera una imagen limpia con el nombre del auto en el centro
  const url = `https://dummyimage.com/600x400/2c3e50/ffffff.jpg?text=${auto.toUpperCase()}`;

  https.get(url, (response) => {
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Imagen generada con éxito: ${fileName}`);
    });
  }).on('error', (err) => {
    console.error(`Error de red con ${fileName}:`, err.message);
  });
});