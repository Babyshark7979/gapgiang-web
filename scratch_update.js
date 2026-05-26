import fs from 'fs';

console.log('--- STARTING UPDATE WORKFLOW ---');

// 1. UPDATE src/style.css
let cssContent = fs.readFileSync('src/style.css', 'utf8');
if (!cssContent.includes('.bio-hacking-grid')) {
  console.log('Appending bio-hacking responsive styles to style.css...');
  const newStyles = `

/* ─── BIO-HACKING BEFORE/AFTER GRID (Article 1) ─── */
.bio-hacking-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
  max-width: 680px;
  margin: 28px auto;
}
.bio-hacking-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.bio-hacking-card.after-card {
  border-color: rgba(96, 165, 250, 0.25);
}
.bio-hacking-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.15);
}
.bio-hacking-card.after-card:hover {
  border-color: rgba(96, 165, 250, 0.5);
}
.bio-hacking-media {
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 3 / 4;
}
.bio-hacking-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s ease;
}
.bio-hacking-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  z-index: 10;
}
.bio-hacking-badge.badge-before {
  background: #ef4444;
}
.bio-hacking-badge.badge-after {
  background: #10b981;
}

/* Tooltip overlay styling - Hidden by default (Option 2) */
.bio-hacking-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 12px;
  transform: translateY(101%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
  text-align: center;
}
/* Trigger overlay on hover (desktop) or active state (mobile tap toggle) */
.bio-hacking-card:hover .bio-hacking-info,
.bio-hacking-card.active .bio-hacking-info {
  transform: translateY(0);
}
.bio-hacking-card:hover img {
  filter: brightness(0.7);
}
.bio-hacking-card.active img {
  filter: brightness(0.7);
}

.bio-hacking-info p {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
}

/* A helper text badge to guide mobile users that they can TAP to view details */
.bio-hacking-tap-guide {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 0.62rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.4);
  padding: 2px 6px;
  border-radius: 4px;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 3;
}
.bio-hacking-card:hover .bio-hacking-tap-guide,
.bio-hacking-card.active .bio-hacking-tap-guide {
  opacity: 0;
}

@media (max-width: 640px) {
  .bio-hacking-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 280px;
    margin: 20px auto;
  }
}
`;
  fs.writeFileSync('src/style.css', cssContent + newStyles, 'utf8');
  console.log('style.css updated successfully.');
} else {
  console.log('style.css already has bio-hacking styles.');
}

// 2. UPDATE index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
if (indexContent.includes('href="#" class="social-link" aria-label="Facebook"')) {
  console.log('Updating facebook social link in footer inside index.html...');
  indexContent = indexContent.replace(
    'href="#" class="social-link" aria-label="Facebook"',
    'href="https://www.facebook.com/123321avc/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook"'
  );
  fs.writeFileSync('index.html', indexContent, 'utf8');
  console.log('index.html updated successfully.');
} else {
  console.log('index.html facebook social link already updated or element structure is different.');
}

// 3. UPDATE src/main.js with responsive before-after layout and deeper copy
let mainContent = fs.readFileSync('src/main.js', 'utf8');

// Find and replace the before/after div block with new markup
const oldBeforeAfterGrid = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 680px; margin: 0 auto;">
          <!-- TRƯỚC -->
          <div style="display: flex; flex-direction: column; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);">
            <div style="position: relative; overflow: hidden;">
              <img src="/media/giang-before-1.jpg" alt="Giang trước khi tập luyện" style="width: 100%; height: auto; display: block;" loading="lazy" />
              <span style="position: absolute; top: 12px; left: 12px; font-size: 0.75rem; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em; background: #ef4444; padding: 3px 8px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.5); z-index: 10;">TRƯỚC</span>
            </div>
            <div style="padding: 12px 8px; text-align: center; flex-grow: 1; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25);">
              <p style="margin: 0; font-size: 0.8rem; font-weight: 500; color: #e4e4e7; line-height: 1.3;">72kg, căng thẳng (stress) đỉnh điểm, sinh mệnh kiệt quệ</p>
            </div>
          </div>
          <!-- SAU -->
          <div style="display: flex; flex-direction: column; background: rgba(255,255,255,0.01); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);">
            <div style="position: relative; overflow: hidden;">
              <img src="/media/giang-after-1.jpg" alt="Giang sau khi tập luyện" style="width: 100%; height: auto; display: block;" loading="lazy" />
              <span style="position: absolute; top: 12px; left: 12px; font-size: 0.75rem; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em; background: #10b981; padding: 3px 8px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.5); z-index: 10;">SAU</span>
            </div>
            <div style="padding: 12px 8px; text-align: center; flex-grow: 1; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25);">
              <p style="margin: 0; font-size: 0.8rem; font-weight: 500; color: #e4e4e7; line-height: 1.3;">Tối ưu sinh học (Bio-hacking) + Đòn bẩy, HRV xanh mướt</p>
            </div>
          </div>
        </div>`;

const newBeforeAfterGrid = `        <div class="bio-hacking-grid">
          <!-- TRƯỚC -->
          <div class="bio-hacking-card" onclick="this.classList.toggle('active')">
            <div class="bio-hacking-media">
              <img src="/media/giang-before-1.jpg" alt="Giang trước khi tập luyện" loading="lazy" />
              <span class="bio-hacking-badge badge-before">TRƯỚC</span>
              <span class="bio-hacking-tap-guide">Tap để xem</span>
            </div>
            <div class="bio-hacking-info">
              <p>72kg, căng thẳng (stress) đỉnh điểm, sinh mệnh kiệt quệ do cày cuốc sai phương pháp</p>
            </div>
          </div>
          <!-- SAU -->
          <div class="bio-hacking-card after-card" onclick="this.classList.toggle('active')">
            <div class="bio-hacking-media">
              <img src="/media/giang-after-1.jpg" alt="Giang sau khi tập luyện" loading="lazy" />
              <span class="bio-hacking-badge badge-after">SAU</span>
              <span class="bio-hacking-tap-guide">Tap để xem</span>
            </div>
            <div class="bio-hacking-info">
              <p>Tối ưu sinh học (Bio-hacking) + Đòn bẩy thông tin, HRV xanh mướt và năng lượng đỉnh cao</p>
            </div>
          </div>
        </div>`;

if (mainContent.includes(oldBeforeAfterGrid)) {
  console.log('Replacing Before/After inline grid with responsive Option 2 classes inside main.js...');
  mainContent = mainContent.replace(oldBeforeAfterGrid, newBeforeAfterGrid);
} else {
  console.log('Warning: Old before/after markup not found directly, writing custom replacement check...');
  // Let's do a more robust regex check
  const beforeAfterRegex = /<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;[^>]*>[\s\S]*?giang-before-1.jpg[\s\S]*?giang-after-1.jpg[\s\S]*?<\/div>/;
  if (beforeAfterRegex.test(mainContent)) {
    console.log('Regex matched the before-after grid block. Replacing it...');
    mainContent = mainContent.replace(beforeAfterRegex, newBeforeAfterGrid);
  }
}

// 4. DEEPEN "bay-sinh-hoc" content inside src/main.js with loneliness/insecurity details (Câu 1: C)
const oldPara = `<p>Giang từng nghĩ rằng chỉ cần mình cố gắng thêm một chút, bớt ngủ đi một giờ, thì thành công sẽ đến nhanh hơn một năm. Giang thần tượng những cỗ máy làm việc không biết mệt mỏi. Giang lao vào công việc như một con thiêu thân, tự hào với những đêm trắng đối thoại với màn hình máy tính.</p>`;

const newPara = `<p>Giang từng nghĩ rằng chỉ cần mình cố gắng thêm một chút, bớt ngủ đi một giờ, thì thành công sẽ đến nhanh hơn một năm. Giang thần tượng những cỗ máy làm việc không biết mệt mỏi. Giang lao vào công việc như một con thiêu thân, tự hào với những đêm trắng đối thoại với màn hình máy tính.</p>
      
      <p>Nhưng dưới sâu thẳm của sự điên cuồng đó, Giang nhận ra một sự thật trần trụi mà hiếm ai dám tự đối diện: **đó là cảm giác cô đơn và sự bất an tột cùng**. Khi bạn nhìn xung quanh, lướt mạng xã hội và thấy người ta thành công quá nhanh, có nhà đẹp, xe sang, hay thăng tiến thần tốc, một áp lực vô hình đè nặng lên ngực bạn. Bạn sợ mình bị tụt lại phía sau, sợ mình kém cỏi, và cảm thấy vô dụng nếu không làm gì đó. Việc cày cuốc 14 tiếng mỗi ngày thực chất chỉ là một **cơ chế tự vệ tâm lý vô thức** để bạn tạm thời trốn chạy nỗi sợ hãi ấy. Bạn cố gắng thức khuya, uống ly cà phê thứ ba chỉ để chứng minh với bản thân và thế giới rằng: *"Tôi cũng đang nỗ lực hết mình, tôi không hề lười biếng!"*</p>
      
      <p>Nhưng sự thật là, nỗ lực trong hoảng loạn không bao giờ mang lại hiệu quả thực chất. Nó chỉ biến bạn thành một thợ xây kiệt quệ, tự tiêu sản đi tài sản sinh mệnh quý báu nhất của mình.</p>`;

if (mainContent.includes(oldPara)) {
  console.log('Deepening bay-sinh-hoc essay with psychological insights...');
  mainContent = mainContent.replace(oldPara, newPara);
} else {
  console.log('Warning: Old paragraph not found in main.js. Let us try to find a sub-segment.');
  const subSegment = `Giang từng nghĩ rằng chỉ cần mình cố gắng thêm một chút`;
  if (mainContent.includes(subSegment)) {
    console.log('Subsegment matched. Finding and replacing...');
    // We will do a replacement based on index
    const idx = mainContent.indexOf(subSegment);
    const startP = mainContent.lastIndexOf('<p>', idx);
    const endP = mainContent.indexOf('</p>', idx) + 4;
    const matchedPara = mainContent.substring(startP, endP);
    mainContent = mainContent.replace(matchedPara, newPara);
  }
}

// Write the main.js changes
fs.writeFileSync('src/main.js', mainContent, 'utf8');
console.log('main.js updated successfully.');

console.log('--- ALL UPDATES COMPLETED SUCCESSFULLY ---');
