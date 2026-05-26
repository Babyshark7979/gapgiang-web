import fs from 'fs';
const indexContent = fs.readFileSync('index.html', 'utf8');

const scriptMatches = [...indexContent.matchAll(/<script[^>]*>[\s\S]*?<\/script>|<script[^>]*\/>/g)];
console.log('Script tags inside index.html:');
scriptMatches.forEach((s) => {
  console.log(s[0]);
});
