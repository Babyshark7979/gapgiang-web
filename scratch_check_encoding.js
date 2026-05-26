import fs from 'fs';

function checkFile(filepath) {
  const buf = fs.readFileSync(filepath);
  console.log(`File: ${filepath}, Size: ${buf.length} bytes`);
  
  // Check for NULL bytes
  let nullCount = 0;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === 0) nullCount++;
  }
  console.log(`NULL bytes found: ${nullCount}`);
  
  // Check first few bytes
  console.log('First 10 bytes:', Array.from(buf.slice(0, 10)).map(b => b.toString(16)));
  
  // If there are NULL bytes, let's fix it by converting buffer to a clean string
  if (nullCount > 0) {
    console.log('Fixing NULL bytes by reading as UTF-8 and rewriting...');
    const cleanStr = buf.toString('utf8').replace(/\0/g, '');
    fs.writeFileSync(filepath, cleanStr, 'utf8');
    console.log('Fixed.');
  }
}

checkFile('src/main.js');
checkFile('src/style.css');
checkFile('index.html');
