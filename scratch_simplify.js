import fs from 'fs';

console.log('--- RUNNING SIMPLIFICATION WORKFLOW ---');

// 1. SIMPLIFY index.html
let indexContent = fs.readFileSync('index.html', 'utf8');

// Replace navigation links
indexContent = indexContent.replace(
  '<a href="#ve-giang" class="nav-link">Origin Story</a>',
  '<a href="#ve-giang" class="nav-link">Origin Story (Câu chuyện khởi nguồn)</a>'
);
indexContent = indexContent.replace(
  '<a href="#bai-viet" class="nav-link">Field Notes</a>',
  '<a href="#bai-viet" class="nav-link">Field Notes (Ghi chép thực chiến)</a>'
);
indexContent = indexContent.replace(
  '<a href="#gallery" class="nav-link">Snapshots</a>',
  '<a href="#gallery" class="nav-link">Snapshots (Nhật ký quan sát)</a>'
);

// Replace page eyebrows and headers
indexContent = indexContent.replace(
  '<p class="section-eyebrow">Origin Story & Worldview</p>',
  '<p class="section-eyebrow">Câu chuyện & Thế giới quan (Origin Story & Worldview)</p>'
);
indexContent = indexContent.replace(
  '<p class="section-eyebrow" style="color: #93c5fd">Weekly Dispatch</p>',
  '<p class="section-eyebrow" style="color: #93c5fd">Bản tin hàng tuần (Weekly Dispatch)</p>'
);
indexContent = indexContent.replace(
  '<p class="section-eyebrow">System Logs in Action</p>',
  '<p class="section-eyebrow">Nhật ký hệ thống (System Logs in Action)</p>'
);

fs.writeFileSync('index.html', indexContent, 'utf8');
console.log('index.html English annotations added.');

// 2. SIMPLIFY src/main.js (Evan Carmichael essay and general jargon)
let mainContent = fs.readFileSync('src/main.js', 'utf8');

// Let's replace jargon inside "evan-carmichael" essay
// dopamine -> chất dẫn truyền thần kinh (dopamine)
mainContent = mainContent.replace(
  'Cơn hưng phấn cảm xúc (dopamine) từ video',
  'Cơn hưng phấn cảm xúc từ chất dẫn truyền thần kinh (dopamine) của video'
);
mainContent = mainContent.replace(
  'dopamine từ video truyền cảm hứng',
  'chất hưng phấn (dopamine) từ video truyền cảm hứng'
);
mainContent = mainContent.replace(
  'Obsidian của bạn vẫn đầy ắp',
  'Ứng dụng ghi chú Obsidian của bạn vẫn đầy ắp'
);
mainContent = mainContent.replace(
  'Notion vẫn trống rỗng',
  'Ứng dụng quản lý Notion vẫn trống rỗng'
);
mainContent = mainContent.replace(
  'đầu tiên để bắt đầu xây dựng thương hiệu.',
  'đầu tiên để bắt đầu xây dựng thương hiệu cá nhân (personal brand).'
);
mainContent = mainContent.replace(
  'bản thiết kế phễu bán hàng hoặc viết bài blog',
  'bản thiết kế phễu bán hàng (sales funnel) hoặc viết bài nhật ký chia sẻ (blog)'
);
mainContent = mainContent.replace(
  'đòn bẩy truyền thông cực kỳ thông minh: **Đóng gói tri thức (Curator Economy)**',
  'đòn bẩy truyền thông cực kỳ thông minh: **Nền kinh tế đóng gói tri thức (Curator Economy)**'
);
mainContent = mainContent.replace(
  'Evan là một Kiến trúc sư đóng gói đòn bẩy (Active Curator).',
  'Evan là một Kiến trúc sư đóng gói đòn bẩy (Active Curator - người thu thập và tối ưu hóa nội dung).'
);
mainContent = mainContent.replace(
  'Kẻ tiêu thụ thụ động (Passive Consumer)',
  'Kẻ tiêu thụ thụ động (Passive Consumer - người xem thụ động)'
);
mainContent = mainContent.replace(
  'cống hiến dữ liệu cho thuật toán (algorithm)',
  'cống hiến dữ liệu cho thuật toán vận hành (algorithm)'
);
mainContent = mainContent.replace(
  'Second Brain của mình',
  'bộ não thứ hai (Second Brain) của mình'
);

fs.writeFileSync('src/main.js', mainContent, 'utf8');
console.log('src/main.js jargon simplified and annotated with Vietnamese translations.');

console.log('--- SIMPLIFICATION COMPLETED SUCCESSFULLY ---');
