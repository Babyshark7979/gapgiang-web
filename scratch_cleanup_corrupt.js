import fs from 'fs';
import { execSync } from 'child_process';

const file = 'src/main.js';
let content = fs.readFileSync(file, 'utf8');

console.log('Original content length:', content.length);

// We need to clean up from line 380 (index of closing brace of the first hangson block) to the end of essayData block
// Let's locate the first hangson block closing brace
const searchString = `      <p><strong>Giải pháp hệ thống:</strong> Chấm dứt ngay sự bừa bãi và trống rỗng trong sinh hoạt hàng ngày. Thiết lập các cột mốc thời gian cố định, bộ lọc mối quan hệ nâng đỡ tư duy và quy trình tự rà soát bản thân định kỳ. Đó là ranh giới thép thu hẹp khoảng cách (Gap) giữa phiên bản hỗn loạn hiện tại và phiên bản kỷ luật bạn hướng tới.</p>
    \`
  }`;

const idxStart = content.indexOf(searchString);
if (idxStart === -1) {
  console.error('Could not find the end of the first hangson block!');
  process.exit(1);
}

const endOfFirstHangson = idxStart + searchString.length;

// Now locate the start of DYNAMIC ESSAY READER LOGIC
const readerLogicStr = `// ─── DYNAMIC ESSAY READER LOGIC ───`;
const idxEnd = content.indexOf(readerLogicStr);
if (idxEnd === -1) {
  console.error('Could not find DYNAMIC ESSAY READER LOGIC!');
  process.exit(1);
}

// Slice out the corrupted portion and close the essayData object nicely
const part1 = content.substring(0, endOfFirstHangson);
const part2 = content.substring(idxEnd);

const cleanContent = part1 + '\n}\n\n' + part2;

fs.writeFileSync(file, cleanContent, 'utf8');
console.log('Cleaned main.js. New content length:', cleanContent.length);

try {
  execSync('node -c src/main.js');
  console.log('Success! Syntax check passed on main.js.');
} catch (e) {
  console.error('Syntax check failed:', e.message);
}
