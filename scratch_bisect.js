import fs from 'fs';
import { execSync } from 'child_process';

const originalContent = fs.readFileSync('src/main.js', 'utf8');
const lines = originalContent.split('\n');
console.log(`Original main.js has ${lines.length} lines.`);

function runBuild() {
  try {
    execSync('node scratch_debug_build.js', { stdio: 'pipe' });
    return true; // Build succeeded
  } catch (e) {
    return false; // Build failed
  }
}

// Ensure the original build fails first
fs.writeFileSync('src/main.js', originalContent, 'utf8');
if (runBuild()) {
  console.log('Error: Original build succeeded! Nothing to bisect.');
  process.exit(1);
} else {
  console.log('Original build successfully failed, starting bisection...');
}

let start = 0;
let end = lines.length;

while (start < end - 1) {
  const mid = Math.floor((start + end) / 2);
  console.log(`Testing range: line ${start + 1} to ${mid}...`);
  
  // Construct a main.js that contains lines up to `mid`, plus the rest of the lines replaced with empty comments
  // We keep the imports at line 1 intact if there are any
  const testLines = [
    lines[0], // Keep line 1 import './style.css'
    ...lines.slice(1, mid),
  ];
  
  fs.writeFileSync('src/main.js', testLines.join('\n'), 'utf8');
  
  if (!runBuild()) {
    // Fails with only lines up to mid. The issue is in the range [0, mid].
    console.log(`-> Range [1, ${mid}] FAILS.`);
    end = mid;
  } else {
    // Succeeds with only lines up to mid. The issue is in the range [mid, end].
    console.log(`-> Range [1, ${mid}] SUCCEEDS. Issue must be in [${mid + 1}, ${end}].`);
    start = mid;
  }
}

console.log(`Bisection complete! The offending line is around line ${start + 1}:`);
console.log('--------------------------------------------------');
console.log(lines[start]);
console.log('--------------------------------------------------');

// Restore original content
fs.writeFileSync('src/main.js', originalContent, 'utf8');
