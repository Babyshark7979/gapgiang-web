import fs from 'fs';

const buf = fs.readFileSync('src/main.js');
console.log('File length in bytes:', buf.length);

// Check if it has any non-printable characters or unexpected control characters (except tab, LF, CR)
let badBytes = [];
for (let i = 0; i < buf.length; i++) {
  const byte = buf[i];
  // Control characters except tab (9), LF (10), CR (13)
  if (byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) {
    badBytes.push({ index: i, byte: byte, hex: byte.toString(16) });
  }
}

console.log('Number of control characters found:', badBytes.length);
if (badBytes.length > 0) {
  console.log('Control characters list (first 20):', badBytes.slice(0, 20));
}

// Let's also check if there are any invalid UTF-8 sequences by checking if it throws when decoded to String and then re-encoded
try {
  const decoded = buf.toString('utf8');
  const reencoded = Buffer.from(decoded, 'utf8');
  if (!buf.equals(reencoded)) {
    console.log('Warning: Decoded string does not match raw bytes. Encoding issues!');
  } else {
    console.log('Decoding test passed: UTF-8 encoding is valid and lossless.');
  }
} catch (e) {
  console.error('Decoding test failed:', e);
}
