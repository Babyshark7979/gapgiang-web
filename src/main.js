import './style.css'

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }
}, { passive: true })

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('navbar-menu')
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open')
  })
}

// ─── SUBSCRIBE HANDLER (ZALO REDIRECT INTEGRATION) ───
// Bạn có thể dán link Google Sheet Script, Discord Webhook, Telegram Bot hoặc Make/Zapier Webhook vào đây
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxxYr2yCd3CndFLgu-OzvHbc4_hM8oQHL45fhJz78n3lsPa8YxhSKzTh7iG1x6KYck/exec'; 
const ZALO_CONTACT_URL = 'https://zalo.me/0969695696'; // Link Zalo cá nhân của Giang (nhấp sẽ chat trực tiếp)

window.handleSubscribe = async function (e) {
  e.preventDefault()
  
  const emailInput = document.getElementById('nl-email')
  const phoneInput = document.getElementById('nl-phone')
  const interestInput = document.getElementById('nl-interest')
  
  if (!emailInput || !phoneInput || !interestInput) return
  
  const email = emailInput.value
  const phone = phoneInput.value
  const interest = interestInput.value
  
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalBtnText = submitBtn ? submitBtn.innerHTML : ''
  if (submitBtn) {
    submitBtn.disabled = true
    submitBtn.innerHTML = 'Đang đồng bộ dữ liệu...'
  }

  const payload = {
    email: email,
    phone: phone,
    interest: interest,
    timestamp: new Date().toISOString(),
    source: 'GapGiang.com - Weekly Dispatch'
  }

  console.log('Đăng ký mới:', payload)

  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Hỗ trợ bypass CORS đối với Google Script/Webhook
      })
      console.log('Đã gửi dữ liệu thành công lên hệ thống!')
    } catch (err) {
      console.error('Lỗi khi đồng bộ dữ liệu:', err)
    }
  }

  if (submitBtn) {
    submitBtn.innerHTML = 'Thành công! Đang kết nối...'
  }

  // Hiển thị Zalo Connection Modal tuyệt đẹp thay vì redirect thô thiển
  setTimeout(() => {
    e.target.reset()
    if (submitBtn) {
      submitBtn.disabled = false
      submitBtn.innerHTML = originalBtnText
    }
    
    const zaloModal = document.getElementById('zalo-modal')
    if (zaloModal) {
      zaloModal.classList.add('active')
      zaloModal.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden' // Lock background scroll
    }
  }, 800)
}

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll(
  '.pillar-card, .post-card, .trust-item, .about-content, .about-media-stack, .gap-explanation-col'
)
revealEls.forEach(el => el.classList.add('reveal'))

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, i * 60)
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
)

revealEls.forEach(el => observer.observe(el))

// ─── SMOOTH ANCHOR SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')
    if (id === '#') return
    const target = document.querySelector(id)
    if (target) {
      e.preventDefault()
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      // Close mobile menu
      if (navMenu) navMenu.classList.remove('open')
    }
  })
})

// ─── ACTIVE NAV LINK HIGHLIGHT ───
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active')
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active')
        }
      })
    }
  })
}, { threshold: 0.3 })

sections.forEach((section) => observer.observe(section))

// ─── ESSAY DATA (EMPOWERMENT PHILOSOPHY) ───
const essayData = {
  "don-rac-ai": {
    title: "Hướng dẫn dùng AI Agent tự động dọn rác, chống đơ máy tính trong 15 phút",
    tag: "Tự động hóa",
    date: "23 Tháng 5, 2026",
    content: `
      <p>Bài viết này sinh ra để giải quyết đúng 1 vấn đề đau đầu nhất của anh em văn phòng: <strong>Máy tính quá bừa bộn, ì ạch nhưng bạn không biết file nào là rác để xóa, và cũng không có thời gian để mò!</strong></p>
      
      <p>Đừng tự làm việc tay chân nữa. Trí tuệ nhân tạo sinh ra là để làm "Tổng thầu" xây dựng, còn bạn là "Chủ đầu tư". Khác với các con Chatbot (như ChatGPT) chỉ biết gõ chữ, hôm nay Giang sẽ hướng dẫn bạn xài một <strong>AI Agent</strong> - loại AI có khả năng "mọc tay mọc chân" tự quét và tự xóa file trên máy tính của bạn (tất nhiên là dưới sự cho phép của bạn).</p>

      <h3>Bước 1: Thuê "Tổng Thầu AI" (Tải và Cài Đặt Antigravity)</h3>
      <p>Khác với ChatGPT trên Web, để con AI can thiệp dọn dẹp hệ thống, bạn cần cài đặt ứng dụng vào máy tính.</p>

      <div style="margin: 24px 0; text-align: center;">
        <a href="https://antigravity.google/" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #10b981, #06b6d4); color: #ffffff; padding: 12px 28px; border-radius: 30px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); transition: transform 0.2s, box-shadow 0.2s; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 185, 129, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 185, 129, 0.4)';">
          <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
          </svg>
          TẢI ANTIGRAVITY IDE (MIỄN PHÍ)
        </a>
      </div>

      <div style="margin: 24px 0; text-align: center;">
        <img src="/media/antigravity_cleaning_vi.png" alt="Sơ đồ Quy trình 4 Bước Dọn Rác bằng Antigravity" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto;" loading="lazy" />
      </div>

      <p><strong>Hướng dẫn cài đặt siêu tốc:</strong></p>
      <ol style="margin-left: 20px; margin-bottom: 24px;">
        <li style="margin-bottom: 8px;"><strong>Tải phần mềm:</strong> Bấm nút tải nổi bật ở trên hoặc <a href="https://antigravity.google/" target="_blank" style="color: #10b981; text-decoration: underline; font-weight: bold;">truy cập link này</a> để tải Antigravity IDE chính thức từ Google.</li>
        <li style="margin-bottom: 8px;"><strong>Cài đặt:</strong> Bấm đúp vào file vừa tải về, cứ ấn "Next" cho đến khi hoàn thành.</li>
        <li style="margin-bottom: 8px;"><strong>Kích hoạt:</strong> Mở phần mềm Antigravity lên. Bạn chú ý đến <strong>Khung Chat</strong> nằm ở bên tay phải. Đó chính là nơi bạn giao tiếp với Tổng thầu AI.</li>
      </ol>

      <h3>Bước 2: Bàn Giao Hợp Đồng (Nhập Câu Thần Chú)</h3>
      <p>Mở khung Chat của Antigravity lên. Bạn copy và dán nguyên xi đoạn văn bản (Prompt) dưới đây của Giang vào. Lệnh này sẽ ép con AI biến thành một Trợ lý dọn rác tận tụy nhất.</p>

      <div style="background: rgba(255,255,255,0.05); border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0; border-radius: 4px;">
        <strong style="color: #60a5fa;">📍 TỔNG THẦU PROMPT (Copy từ đây):</strong><br/><br/>
        <span style="font-family: monospace; font-size: 0.9em; line-height: 1.6;">
        Bắt đầu từ bây giờ, hãy đóng vai trò là "Trợ lý dọn dẹp hệ thống cao cấp" của tôi. Mục tiêu của bạn là giúp tôi dọn rác máy tính một cách an toàn và tự động 100%.<br/><br/>
        Tuyệt đối tuân thủ Quy trình 4 Bước sau đây, làm từng bước một, KHÔNG được tự ý gộp bước hay tự ý xóa bất cứ thứ gì khi tôi chưa cấp quyền:<br/><br/>
        BƯỚC 1: KHẢO SÁT<br/>
        Hãy hỏi tôi 3 câu trắc nghiệm (A, B, C) bằng tiếng Việt thật dễ hiểu:<br/>
        - Bạn muốn quét ổ đĩa nào? (Ví dụ: Desktop, Ổ C, Ổ D).<br/>
        - Định nghĩa "Rác" của bạn là gì? (Ví dụ: File > 1 năm không mở, File rác hệ thống .tmp/.cache, File siêu nặng > 1GB).<br/>
        - Hướng xử lý? (Xóa vĩnh viễn hay Gom Nén vào kho Archive?).<br/>
        Dừng lại chờ tôi trả lời.<br/><br/>
        BƯỚC 2: QUÉT & BÁO CÁO<br/>
        Dùng Terminal thực thi lệnh quét theo đúng yêu cầu. Sau đó in ra Bảng Báo Cáo chi tiết danh sách rác và tổng dung lượng. Hỏi tôi có duyệt không. Dừng lại chờ tôi trả lời.<br/><br/>
        BƯỚC 3: THỰC THI (AN TOÀN)<br/>
        Xóa hoặc Gom file theo yêu cầu. Làm xong báo cáo lại kết quả.<br/><br/>
        BƯỚC 4: MỞ RỘNG<br/>
        Hỏi tôi có muốn tiếp tục quét ổ khác không, hoặc có muốn bạn tắt bớt các phần mềm chạy ngầm gây đơ máy không. Nếu tôi đồng ý, hãy lặp lại quy trình.<br/><br/>
        Đã rõ thì hãy in ra dòng chữ "Sẵn sàng phục vụ Chủ Đầu Tư" và bắt đầu Bước 1.
        </span>
      </div>

      <h3>Bước 3: Vắt chân lên bàn và bấm Duyệt</h3>
      <p>Ngay sau khi bạn dán câu lệnh trên, AI sẽ lập tức phỏng vấn bạn bằng các câu hỏi trắc nghiệm cực kỳ dễ hiểu. Bạn chỉ việc gõ "A, B, C".</p>
      <p><strong>Lưu ý cực kỳ quan trọng:</strong> Mỗi khi AI chuẩn bị quét hệ thống hoặc dọn file, nó sẽ đề xuất lệnh trong khung chat. Bạn **bắt buộc phải click vào nút "Duyệt" (Approve) màu xanh lá cây** thì con AI mới có quyền chạy lệnh trên máy tính của bạn nhé (quyền kiểm soát an toàn 100% thuộc về bạn!).</p>
      <p>Nó sẽ tự động chạy ngầm, rà soát mọi ngóc ngách trong máy tính và xin phép bạn trước khi xóa. Bạn không lo bị xóa nhầm dữ liệu quan trọng, cũng không phải tự căng mắt đi tìm rác nữa.</p>
      <p>Chúc anh em thực hành thành công. Cảm giác làm Chủ Đầu Tư sai vặt được con AI nó sướng và nhẹ đầu cực kỳ! Đi dọn rác thôi anh em!</p>
    `
  },
  "bay-sinh-hoc": {
    title: "Có chắc cày 14 tiếng một ngày là hiệu quả với công việc... hay đang hiệu quả với bệnh viện?",
    tag: "Hiệu suất cân bằng",
    date: "22 Tháng 5, 2026",
    content: `
      <p>Một chiếc ảnh Alex Hormozi cởi trần, cơ bắp cuồn cuộn bên cạnh đống sách (book), kèm theo câu nói truyền cảm hứng về việc cày cuốc 14 tiếng mỗi ngày. Dưới phần bình luận, hàng ngàn người trẻ thả tim, tag nhau vào và tự hứa đêm nay sẽ thức đến 2 giờ sáng để làm việc nhiều hơn tất cả mọi người ("outwork everyone"). Họ coi sự kiệt quệ, những ly cà phê thứ ba trong ngày, và giấc ngủ chập chờn là chiếc huy chương danh giá của sự nỗ lực.</p>
      
      <div style="margin: 24px 0; text-align: center;">
        <img src="/media/hormozi-challenge.png" alt="Alex Hormozi 12x30 Challenge" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto;" loading="lazy" />
      </div>

      <p><em>Giang cũng từng là một trong số họ.</em></p>
      
      <p>Giang từng nghĩ rằng chỉ cần mình cố gắng thêm một chút, bớt ngủ đi một giờ, thì thành công sẽ đến nhanh hơn một năm. Giang thần tượng những cỗ máy làm việc không biết mệt mỏi. Giang lao vào công việc như một con thiêu thân, tự hào với những đêm trắng đối thoại với màn hình máy tính.</p>
      
      <p>Nhưng dưới sâu thẳm của sự điên cuồng đó, Giang nhận ra một sự thật trần trụi mà hiếm ai dám tự đối diện: <strong>đó là cảm giác cô đơn và sự bất an tột cùng</strong>. Khi bạn nhìn xung quanh, lướt mạng xã hội và thấy người ta thành công quá nhanh, có nhà đẹp, xe sang, hay thăng tiến thần tốc, một áp lực vô hình đè nặng lên ngực bạn. Bạn sợ mình bị tụt lại phía sau, sợ mình kém cỏi, và cảm thấy vô dụng nếu không làm gì đó. Việc cày cuốc 14 tiếng mỗi ngày thực chất chỉ là một <strong>cơ chế tự vệ tâm lý vô thức</strong> để bạn tạm thời trốn chạy nỗi sợ hãi ấy. Bạn cố gắng thức khuya, uống ly cà phê thứ ba chỉ để chứng minh với bản thân và thế giới rằng: *"Tôi cũng đang nỗ lực hết mình, tôi không hề lười biếng!"*</p>
      
      <p>Nhưng sự thật là, nỗ lực trong hoảng loạn không bao giờ mang lại hiệu quả thực chất. Nó chỉ biến bạn thành một thợ xây kiệt quệ, tự tiêu sản đi tài sản sinh mệnh quý báu nhất của mình.</p>
      
      <p><em>Nhưng có một sự thật thô ráp mà không ai nói với bạn ở trên mạng.</em></p>
      
      <p>Alex Hormozi đô con thật, khỏe thật, và giàu thật. Trên kênh truyền thông của mình, cả hai vợ chồng Alex và Leila liên tục chia sẻ những video hướng dẫn cày 14 tiếng mỗi ngày hay thử thách <a href="https://www.instagram.com/reel/DH7MD0rSswf/" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: underline;">làm việc liên tục 12 tiếng suốt 30 ngày (Thử thách 12x30)</a>.</p>
      
      <p>Nhưng bạn có biết đằng sau cơ bắp cuồn cuộn đó là gì không? Đó là một hệ gen di truyền xuất sắc, một người vợ đồng hành gánh vác 100% sự nghiệp, không vướng bận con cái, và cả một đội ngũ hậu cần y tế, dinh dưỡng cao cấp đứng sau hỗ trợ.</p>
      
      <p><em>Giới phân tích gọi đó là khoảng cách tương quan nguồn lực (Gap).</em></p>
      
      <p>Khi bạn lao vào cuộc chiến cày cuốc với họ mà không biết đối thủ đang sở hữu những "khí tài hạng nặng" gì để bảo vệ sinh mệnh, bạn đã thua ngay từ khi xuất phát. Khi Alex khuyên bạn cày 12 đến 14 tiếng mỗi ngày, ông ấy đang dùng trải nghiệm của một cỗ máy sinh học siêu cấp để áp đặt lên một cơ thể bình thường.</p>
      
      <p>If bạn là một người đi làm lâu năm, đang gánh trên vai áp lực gia đình, con cái, hóa đơn... và không có một đội ngũ nâng đỡ phía sau. Việc bạn cố gắng bắt chước cày 14 tiếng như Alex không phải là bạn đang tối ưu hóa công việc. Bạn đang tối ưu hóa doanh thu cho bệnh viện.</p>
      
      <p>Khi bạn đẩy cơ thể vào trạng thái căng thẳng tột độ liên tục, lượng Cortisol (hormone căng thẳng) sẽ tăng vọt, phá hủy dần các liên kết thần kinh, làm suy giảm hệ miễn dịch và kéo chỉ số phục hồi cơ thể (HRV - biến thiên nhịp tim) của bạn xuống đáy vực. Bạn tưởng mình đang tiến gần hơn đến thành công, nhưng thực chất, bạn đang tiêu sản sinh mệnh của chính mình.</p>
      
      <p>Giang viết những dòng này không phải để phán xét hay bảo bạn hãy ngừng cố gắng. Giang hiểu hơn ai hết cảm giác bất lực của bạn lúc này. Bạn mệt mỏi, bạn thấy bế tắc, và bạn sợ rằng nếu mình dừng lại chỉ một nhịp thôi, thế giới ngoài kia sẽ bỏ rơi bạn. Bạn cày cuốc điên cuồng vì bạn đang thiếu đi một điểm tựa, thiếu một công cụ để tin rằng mình có thể làm khác đi.</p>
      
      <blockquote>
        "Bạn không hề yếu kém, bạn chỉ đang thiếu một công cụ đúng. Những nỗ lực của bạn hoàn toàn xứng đáng với một kết quả tốt đẹp hơn, chứ không phải là một cơ thể rã rời và những đêm mất ngủ."
      </blockquote>
      
      <p>Đã đến lúc chúng ta ngừng chơi trò chơi cày cuốc ngu ngốc của đám đông. Thành công dài hạn không được đo bằng số giờ bạn hành xác trên bàn làm việc, nó được đo bằng chỉ số phục hồi cơ thể (HRV) xanh mướt vào mỗi buổi sáng, bằng một giấc ngủ sâu không mộng mị, và bằng một hệ thống thông tin đòn bẩy giúp bạn làm ít đi nhưng tạo ra giá trị lớn hơn.</p>
      
      <p><em>Hãy bảo vệ mạng sống trước khi bảo vệ tiền.</em></p>
      
      <div style="margin: 36px 0; display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="font-size: 0.9rem; letter-spacing: 0.05em; text-transform: uppercase; color: #a1a1aa; font-weight: 500; text-align: center; border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 9999px; background: rgba(255,255,255,0.03);">
          Case Study: Hành trình tối ưu sinh học ("Bio-hacking") thực chiến của Giang
        </div>
        <div class="bio-hacking-grid">
          <!-- Hình ảnh minh họa (nếu có) -->
        </div>
      </div>
    `
  },
  "evan-carmichael": {
    title: "Xem truyền cảm hứng rất sướng, nhưng tại sao động lực của Evan Carmichael không giúp bạn trả nổi hóa đơn tháng tới?",
    tag: "Quy trình đòn bẩy",
    date: "22 Tháng 5, 2026",
    content: `
      <p>Bạn mở máy tính lên, hít một hơi thật sâu, định bụng tối nay sẽ hoàn thành nốt bản thiết kế phễu bán hàng (sales funnel) hoặc viết bài chia sẻ (blog) đầu tiên để bắt đầu xây dựng thương hiệu (brand). Nhưng một nỗi sợ vô hình ập đến: <em>Sản phẩm của mình liệu đã đủ tốt? Mình đã đủ giỏi để nói về chủ đề này chưa?</em></p>
      
      <p>Để trốn tránh cảm giác bất an đó, bạn bấm vào YouTube, mở một video của nhà sáng tạo nội dung Evan Carmichael với hashtag tin tưởng (#Believe). Giọng nói hùng hùng của các vĩ nhân như Steve Jobs, Elon Musk vang lên, kết hợp với nhạc nền kịch tính làm tim bạn đập nhanh hơn. Bạn cảm thấy hừng hực khí thế, tin tưởng 100% vào bản thân và tự nhủ: "Ngày mai mình chắc chắn sẽ làm được".</p>
      
      <p><em>Nhưng sáng hôm sau ngủ dậy, mọi thứ vẫn y nguyên.</em></p>
      
      <p>Ứng dụng ghi chú chuyên sâu (Obsidian) của bạn vẫn đầy ắp các ghi chép dở dang, ứng dụng quản trị công việc (Notion) vẫn trống rỗng các trang sản phẩm, và hóa đơn tiền nhà tháng tới vẫn lù lù xuất hiện trong hòm thư. Cơn hưng phấn cảm xúc từ chất dẫn truyền thần kinh (dopamine) của video truyền cảm hứng đã tan biến, để lại một khoảng trống hoang hoải và sự bất lực còn lớn hơn ngày hôm qua.</p>
      
      <p><em>Giang hiểu sâu sắc cảm giác này của bạn.</em></p>
      
      <p>Giang biết bạn không hề lười biếng. Ngược lại, bạn là một người vô cùng tôn trọng tri thức, khao khát sự hoàn hảo và mong muốn mang lại giá trị thực chất nhất. Bạn lưu tài liệu, học hỏi không ngừng vì bạn có trách nhiệm với những gì mình viết ra và làm ra. Nỗi sợ trì hoãn của bạn thực chất chỉ là tấm gương phản chiếu mong muốn được làm tốt nhất có thể của bạn mà thôi.</p>
      
      <p><em>Nhưng có một sự thật tàn nhẫn về cách thế giới này vận hành mà Evan không bao giờ nói cho bạn biết.</em></p>
      
      <p>Động lực chỉ là mồi lửa, còn hệ thống và đòn bẩy mới là củi khô để giữ cho ngọn lửa cháy mãi. Bạn tin vào bản thân thôi là chưa đủ, nếu ngày mai bạn không có một quy trình thực thi cụ thể, bạn vẫn sẽ nghèo bền vững trong sự tích cực.</p>
      
      <p><em>Hãy nhìn vào chính cách Evan Carmichael làm giàu.</em></p>
      
      <p>Evan không làm giàu bằng cách ngồi mơ mộng và tin tưởng. Ông ấy làm giàu bằng một đòn bẩy truyền thông cực kỳ thông minh: <strong>Nền kinh tế đóng gói tri thức (Curator Economy)</strong>. Evan không tự phát minh ra các triết lý thành công. Ông ấy chỉ đi thu thập những phát biểu của Steve Jobs, Elon Musk, Oprah Winfrey, biên tập lại thành chuỗi video Top 10 Nguyên tắc (Top 10 Rules) và đóng gói chúng thành những video triệu lượt xem (view).</p>
      
      <p><em>Evan là một Kiến trúc sư đóng gói giá trị (Active Curator).</em></p>
      
      <p>Còn bạn, khi ngồi xem những video đó và gật gù tâm đắc, bạn chỉ đang đóng vai <strong>Kẻ tiêu thụ thụ động (Passive Consumer - người xem thụ động)</strong>. Bạn đang dùng năng lượng sinh học quý báu của mình để cống hiến lượt xem (view), cống hiến dữ liệu cho thuật toán vận hành (algorithm) giúp Evan kiếm tiền từ quảng cáo và bán sách, trong khi bản thân bạn không có thêm một đồng nào trong tài khoản.</p>
      
      <p>Bạn không cần phải phát minh ra bánh xe. Bạn chỉ cần là bộ lọc chất lượng cao cho độc giả của mình.</p>
      
      <div style="margin: 32px 0; text-align: center; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.2); box-shadow: 0 4px 30px rgba(0,0,0,0.3); max-width: 480px; margin: 32px auto;">
        <video src="/media/7855350699122.mp4" muted controls playsinline style="width: 100%; display: block;" poster="/media/z7855350983106_e16e2e1d7d12ce7246ed356fc147197a.jpg"></video>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid rgba(255,255,255,0.05);">
          Minh chứng thực tế: Giang đang tập trung nghiên cứu tài liệu, chọn lọc và ghi chép để chuẩn bị đóng gói tri thức chủ động.
        </div>
      </div>
      
      <p>Khi bạn chuyển từ vị thế của kẻ đi xem sang vị thế của người đóng gói và phân phối tri thức, bạn lập tức bước lên thế cầm cái của cuộc chơi nội dung. Bạn sẽ thấy việc tạo ra sản phẩm không còn đáng sợ nữa, bởi vì bạn không cần phải là vĩ nhân, bạn chỉ cần là người dẫn đường thấu cảm biết đóng gói giá trị.</p>
      
      <p><em>Ngừng phê động lực hão huyền. Hãy bắt đầu xây dựng đòn bẩy thực tế.</em></p>
      
      <p>If bạn muốn học cách Giang dùng hệ thống tối giản để biến đống ghi chép hỗn độn trong đầu thành những sản phẩm đòn bẩy thực tế, và cách vận hành một bản tin định kỳ (newsletter) chất lượng cao để tự chủ tài chính mà không cần cày cuốc điên cuồng, hãy ghé thăm <a href="https://gapgiang.com" style="color: #60a5fa; text-decoration: underline;">Gapgiang.com</a>. Chìa khóa đã nằm sẵn trong tay bạn rồi.</p>
    `
  },
  "sleep": {
    title: "Chất lượng giấc ngủ vs. Cơn mệt mỏi rã rời mỗi sáng: Thu hẹp khoảng cách phục hồi thực chất",
    tag: "Phục hồi thể chất",
    date: "22 Tháng 5, 2026",
    content: `
      <p>Có một sự thật thế này: Những người hay bị kiệt sức nhất, thường lại là những người có trách nhiệm và làm việc chăm chỉ nhất.</p>
      
      <p>Bạn không ốm vì bạn yếu. Bạn ốm vì bạn luôn đặt công việc, dự án và sự kỳ vọng của người khác lên trên giới hạn chịu đựng của bản thân. Bạn là một người khao khát thành công, và đó là một điều cực kỳ đáng tự hào.</p>
      
      <p>Nhưng đôi khi, chính sự nỗ lực phi thường ấy lại bị thị trường đánh cắp. Chỉ vì chúng ta thiếu đi một chút khoảng cách thông tin (Gap) về chính sinh mệnh của mình. Hôm nay, Giang muốn chia sẻ với bạn một "chiếc la bàn" vô cùng đơn giản để bạn bảo vệ trọn vẹn thành quả lao động của mình, để bạn lúc nào cũng ở thế chủ động.</p>
      
      <h3>1. Trạm thu phí mang tên "Sự cố chấp"</h3>
      <p>Sáng nay thức dậy, bạn thấy người hơi hâm hấp, đầu nặng trĩu. Trực giác báo cho bạn biết cơ thể đang bất ổn. Nhưng vì hôm nay có một cuộc họp quan trọng, hoặc một hợp đồng cần ký, bạn tự nhủ: "Uống cốc cafe rồi cố làm nốt". Đó là bản năng của những người giỏi: Không bao giờ chịu lùi bước.</p>
      
      <p>Nhưng cuộc chơi lại tàn khốc ở chỗ: Cuộc họp hôm đó bạn không chốt được hợp đồng (deal) vì năng lượng cạn kiệt. Và sáng hôm sau, bạn chính thức "sập nguồn", sốt cao, nằm bẹp trên giường mất tròn một tuần. Bạn mất 1 tuần cơ hội, mất đi nhịp độ công việc, và quan trọng nhất, sự vất vả của bạn không được đền đáp xứng đáng.</p>
      
      <blockquote>
        "Chúng ta hoàn toàn xứng đáng với một kết quả tốt hơn thế rất nhiều. Bạn có năng lực, you chỉ đang thiếu một công cụ để biết chính xác khi nào cần đạp phanh."
      </blockquote>
      
      <h3>2. Dữ liệu sinh học: Chiếc la bàn của người làm chủ</h3>
      <p>Giang cũng từng quen với việc tự ép mình "cố thêm chút nữa", cho đến khi Giang tìm ra cách làm chủ luồng thông tin này. Gần đây, có một buổi sáng Giang thức dậy với cảm giác uể oải và muốn lịm đi. Theo thói quen cũ, Giang định pha một ấm trà đặc để tiếp tục cày cuốc. Nhưng khi nhìn xuống chiếc đồng hồ thông minh trên tay, Giang thấy một tín hiệu thú vị: Chỉ số phục hồi cơ thể (HRV - biến thiên nhịp tim) đang tụt dốc, và năng lượng chạm đáy.</p>
      
      <p>Thay vì cố chấp, Giang mỉm cười nhận ra cơ thể đang gửi một thông điệp rất chân thành: "Nếu tiếp tục, cậu sẽ phải trả giá đắt". Giang gọi điện dời lịch họp, uống một cốc nước ép, tắt điện thoại và ngủ sâu thêm 2 tiếng đồng hồ. Thật tuyệt vời, buổi chiều tỉnh dậy, năng lượng của Giang đã quay trở lại. Giang đã nhẹ nhàng lật ngược thế cờ, né được một cơn bạo bệnh có thể cướp đi 1 tuần làm việc, chỉ nhờ việc biết cách đọc thông tin cơ thể trước 24 giờ.</p>
      
      <div style="margin: 32px 0; text-align: center; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.2); box-shadow: 0 4px 30px rgba(0,0,0,0.3); max-width: 480px; margin: 32px auto;">
        <video src="/media/giang-transformation-1.mp4" autoplay loop muted playsinline controls style="width: 100%; display: block;" poster="/media/giang-after-2.jpg"></video>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid rgba(255,255,255,0.05);">
          Minh chứng thực tế: Tập luyện kỷ luật kết hợp tối ưu sinh học (Bio-hacking) giúp Giang giữ năng lượng luôn ở đỉnh cao mà không sập nguồn.
        </div>
      </div>
      
      <blockquote>
        "Quản trị được dòng tiền là một kỹ năng xuất sắc, nhưng quản trị được năng lượng sinh tồn mới là chìa khóa để bạn đi đường dài."
      </blockquote>
      
      <h3>3. Chiếc chìa khóa luôn nằm trong tay bạn</h3>
      <p>Chiếc đồng hồ thông minh thực ra chỉ là công cụ. Vấn đề cốt lõi nằm ở tư duy tuyệt vời của bạn. Bạn đã đủ thông minh để giải quyết hàng tá vấn đề phức tạp ngoài thương trường, thì việc đọc một chỉ số cơ thể để bấm nút dừng đúng lúc hoàn toàn nằm trong tầm tay bạn. Khoảng cách giữa việc biết trước để dừng lại, và việc cố chấp để rồi kiệt sức... chính là khoảng thời gian quý báu mà bạn có thể dùng để tạo ra những bước nhảy vọt mới.</p>
      
      <p>Hãy lắng nghe cơ thể. Khởi đầu từ việc nhỏ nhất: Cho phép mình được nghỉ ngơi ngay khi cơ thể phát ra tín hiệu đầu tiên. Đừng để năng lượng bị sập nguồn. Hãy bắt đầu giành lại quyền chủ động ngay hôm nay nhé, Giang tin là bạn làm được!</p>
    `
  },
  "builder": {
    title: "Thợ xây công nghệ vs. Kiến trúc sư cuộc đời",
    tag: "Quy trình hệ thống",
    date: "17 Tháng 5, 2026",
    content: `
      <p>Có một nghịch lý thế này: Bạn bỏ ra hàng triệu đồng mua các ứng dụng quản lý công việc đắt tiền, dành cả tuần trời để thiết lập (set-up) các ứng dụng quản lý công việc (Notion) và ghi chú (Obsidian), rồi tải về hàng tá công cụ trí tuệ nhân tạo (AI) mới nhất với hi vọng chúng sẽ thay đổi hiệu suất của bạn. Để rồi cuối cùng, bạn nhận ra mình vẫn trì hoãn, ngập đầu trong đống việc dở dang và đầu óc hoàn toàn hỗn loạn.</p>
      
      <p>Bạn không hề lười biếng. Bạn chỉ đang rơi vào cái bẫy của một <strong>thợ xây công nghệ</strong> — cố gắng nhặt nhạnh thật nhiều gạch đá (công cụ) mà hoàn toàn thiếu đi một bản thiết kế quy trình lõi cho ngôi nhà cuộc đời mình. Khoảng cách (Gap - khoảng trống) ở đây chính là sự lệch pha giữa sự hào nhoáng của công cụ ngoài kia và năng lực thực thi tối giản thực tế của bạn.</p>
      
      <blockquote>
        "Năng lượng của chúng ta là hữu hạn, trong khi công cụ ngoài kia là vô hạn. Muốn làm chủ hiệu suất, bạn phải làm kiến trúc sư thiết kế quy trình trước khi mua gạch."
      </blockquote>
      
      <p>Tôi từng là một thợ xây như thế. Cày cuốc thâu đêm suốt sáng, thử nghiệm hàng chục ứng dụng (app) mới, nhét đầy rác dữ liệu vào đầu để rồi đổi lại chỉ là sự trống rỗng và bế tắc. Thay vì tiếp tục chạy đua nhồi nhét công nghệ một cách vô thức với ảo tưởng gia tăng năng suất tức thời, tôi học cách ngồi xuống và tối giản hóa.</p>
      
      <div style="margin: 32px 0; text-align: center; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.2); box-shadow: 0 4px 30px rgba(0,0,0,0.3); max-width: 480px; margin: 32px auto;">
        <video src="/media/7855350892184.mp4" muted controls playsinline style="width: 100%; display: block;" poster="/media/z7855351717574_2eb223785ddfc4c5f4a8677f56c076fb.jpg"></video>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid rgba(255,255,255,0.05);">
          Nhật ký thực tế: Giang ngồi thâu đêm làm việc trước máy tính, kiệt sức và bế tắc trước khi tự thiết lập các quy trình tự vận hành.
        </div>
      </div>
      
      <p><strong>Giải pháp tối giản:</strong> Hãy ngừng đăng ký ứng dụng (app) mới ngay hôm nay. Bắt đầu bằng một cây bút và tờ giấy trắng: Vẽ ra đúng 3 quy trình lõi bạn cần làm mỗi ngày để tạo ra 80% kết quả công việc. Khi quy trình trên giấy đã chạy mượt mà, lúc đó mới đưa công nghệ vào để tự động hóa. Hãy đưa công cụ về đúng vị trí làm thợ xây gõ gạch cho bản thiết kế của bạn.</p>
    `
  },
  "ikigai": {
    title: "Tối ưu hóa định vị: Thu hẹp khoảng cách giá bán sản phẩm",
    tag: "Định vị giá trị",
    date: "8 Tháng 5, 2026",
    content: `
      <p>Bạn có một sản phẩm hoặc dịch vụ cực kỳ tốt, được đầu tư tỉ mỉ từng chi tiết, nhưng khi mang ra thị trường, bạn luôn phải <strong>bán với giá rẻ mạt</strong> hoặc chật vật tìm kiếm những khách hàng thực sự hiểu giá trị của nó. Trong khi đó, đối thủ có sản phẩm bình thường hơn lại được săn đón với giá cao ngất ngưởng. Bạn tự hỏi tại sao sản phẩm tốt của mình lại bị thị trường ngó lơ?</p>
      
      <p>Nhiều người vội vàng đổ lỗi cho thị trường suy thoái hay đối thủ phá giá. Nhưng khoảng cách thực tế (Gap) ở đây lại nằm ở định vị giá trị và đứt gãy kết nối truyền thông. Bạn quá tập trung vào mô tả tính năng kỹ thuật mà quên mất việc đóng gói giá trị để khách hàng hiểu được sản phẩm sẽ giải quyết nỗi đau cốt lõi của họ như thế nào.</p>
      
      <blockquote>
        "Khách hàng không mua tính năng của sản phẩm. Họ mua phiên bản tốt hơn của chính họ sau khi sử dụng sản phẩm của bạn."
      </blockquote>
      
      <p>Định vị sắc bén không đến từ việc bạn cố hét to hơn trên mạng xã hội, mà đến từ thiết kế hệ thống đóng gói giá trị khớp khít với nhu cầu thực tế của độc giả. Khi bạn nói ngôn ngữ kỹ thuật cao siêu, bạn đang đẩy người đọc ra xa. Khi bạn nói ngôn ngữ giải quyết nỗi đau đời thường của họ, bạn kéo họ lại gần.</p>
      
      <p><strong>Giải pháp tối giản:</strong> Hãy đơn giản hóa thông điệp bán hàng của bạn. Loại bỏ mọi danh mục (menu) rườm rà, tập trung truyền thông chính xác 1 nỗi đau duy nhất mà sản phẩm của bạn giải quyết xuất sắc nhất. Đóng gói lại giá trị dựa trên hiệu quả thực tế đem lại cho khách hàng thay vì đọ giá theo kiểu cơ bắp.</p>
    `
  },
  "trading": {
    title: "Hệ thống cảm xúc: Giải pháp khi thu không đủ chi",
    tag: "Quản trị hành vi",
    date: "1 Tháng 5, 2026",
    content: `
      <p>Tại sao có những tháng bạn làm lụng cật lực, cày cuốc thâu đêm suốt sáng và kiếm được dòng tiền rất khá, nhưng cuối cùng tài khoản vẫn rơi vào trạng thái <strong>thu không đủ chi</strong>? Hoặc khi đối mặt với các quyết định chi tiêu và đầu tư tài chính, bạn thường xuyên bị cuốn vào vòng xoáy của lòng tham và sự sợ hãi nhất thời?</p>
      
      <p>Cố gắng kiểm soát tiền bạc hay thị trường bằng một tâm trí hỗn loạn cảm xúc là con đường nhanh nhất dẫn tới sự đổ vỡ. Khoảng cách thực tế (Gap) ở đây là khoảng cách lớn giữa mong muốn tự do tài chính dài hạn và sự thiếu thốn của một hệ thống ranh giới vận hành khách quan.</p>
      
      <blockquote>
        "Kỷ luật tài chính thực chất không phải là sự kìm kẹp bản thân, mà là thiết lập một hệ thống ranh giới tự động để cảm xúc bốc đồng không có cơ hội can thiệp."
      </blockquote>
      
      <p>Con người là sinh vật bị chi phối bởi cảm xúc nhất thời. Nếu bạn chỉ dựa vào "ý chí" hay sự quyết tâm để tiết kiệm và đầu tư, bạn chắc chắn sẽ thất bại trước các cám dỗ tiêu dùng. Để giải quyết, bạn cần lượng hóa và tự động hóa.</p>
      
      <p><strong>Giải pháp tối giản:</strong> Áp dụng nguyên lý 'Giới' (thiết lập ranh giới cứng). Hãy tự động hóa hoàn toàn dòng tiền ngay khi nhận thu nhập: Tự động trích 20% vào tài khoản tích lũy không rút được, đặt hạn mức cứng cho tài khoản chi tiêu hàng ngày. Khi bạn ngắt kết nối cảm xúc khỏi quyền truy cập tiền bạc bốc đồng, tài khoản của bạn sẽ ngừng rò rỉ.</p>
    `
  },
  "kieu-toc": {
    title: "Chuyện cái tóc và cơn độc thoại của một gã sợ \"mòn\"",
    tag: "Làm mới bản thân",
    date: "26 Tháng 5, 2026",
    content: `
      <p>Một buổi sáng soi gương chải đầu, tôi giật mình nhìn gã trong gương: Ô hay, cái quả đầu rẽ ngôi đóng băng suốt 5 năm ròng rã không hề xê dịch một milimet!</p>
      
      <p>Tôi chợt nhận ra một sự thật trần trụi: Đàn ông chúng ta thường rất giỏi "hướng ngoại". Ra đường thì chém gió vĩ mô kinh tế toàn cầu oai phong lẫm liệt, đàm phán thương vụ nghìn đô, thiết lập quan hệ ngoại giao xa gần... Thế mà ngoảnh đi ngoảnh lại, cái đầu tóc của chính mình lại mọc rêu phong từ lúc nào không biết. Chúng ta bận rộn chăm lo cho cả thế giới, nhưng lại quên mất việc "bảo dưỡng" cho chính phiên bản đời thực của mình.</p>
      
      <p>Để mãi một kiểu tóc cũ mèm thực chất không phải là sự ổn định, mà là một sự đầu hàng thầm lặng trước cái sự tẻ nhạt của quán tính cuộc sống!</p>
      
      <p>Thế là tối qua, tôi quyết định làm một cuộc "nổi loạn ôn hòa" với chi phí 0 đồng. Tôi chụp ngay quả ảnh chân dung thẳng thắn của mình, nạp thẳng vào AI và ra lệnh cho nó F5 diện mạo với 15 kiểu tóc hot trend nam từ Trung sang Hàn.</p>
      
      <p>Lúc nhận kết quả từ AI, tôi suýt sặc ngụm nước vì cười bò. Có những quả tóc AI ghép trông thảm họa không chịu nổi: kiểu "mái dài ép thẳng" trông chả khác gì cái gáo dừa úp ngược lên đầu, còn kiểu "xoăn xù mì" thì y hệt như úp vội bát mì tôm Hảo Hảo lên đầu vậy! Nhưng bù lại, cũng có những quả side part 7/3 hay textured crop nhìn cũng bảnh tỏn, ra dáng tổng tài phết.</p>
      
      <p>Từ cái bảng ghép tóc dở khóc dở cười đó, tôi ngộ ra một chân lý cực kỳ sâu sắc: 
      Thay đổi kiểu tóc thực ra không đơn thuần là chuyện cắt bớt vài cọng tóc. Đó là một nguồn cảm hứng, là nghi thức "yêu bản thân" cực kỳ đúng cách và thực tế. Chúng ta cứ mải mê tìm kiếm những nguồn động lực to tát ở đâu xa, trong khi việc F5 lại diện mạo chính là cách đơn giản nhất, tốn ít tiền nhất mà hiệu quả kích hoạt lại sinh khí lại cực kỳ cao!</p>
      
      <p>Đôi khi, để cuộc sống bớt nhàm chán, chúng ta chỉ cần dám "bớt oai" đi một chút, dám tự trào trước những phiên bản mới lạ (và đôi khi là tấu hài) của chính mình. Nếu bạn cũng đang thấy cuộc sống hơi "lì", đầu óc hơi "mòn", hãy thử F5 bản thân ngay đi. Biết đâu bạn sẽ tìm thấy một phiên bản cực kỳ thú vị của mình thì sao?</p>
      
      <p>👉 Xem và thảo luận cùng Giang trên Facebook: <a href="https://www.facebook.com/123321avc/" target="_blank" rel="noopener noreferrer">123321avc</a></p>
      
      <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 32px 0;" />
      
      <h3>HƯỚNG DẪN TẠO ẢNH INFOGRAPHIC 15 KIỂU TÓC BẰNG GPT</h3>
      <p>Để tạo được bức ảnh phân tích kiểu tóc hot trend cực kỳ nhất quán và hài hước như trên, bạn chỉ cần sử dụng ChatGPT (phiên bản GPT-4o hoặc Claude 3.5 Sonnet) và thực hiện theo hướng dẫn siêu đơn giản dưới đây:</p>
      
      <p><strong>Bước 1: Chuẩn bị ảnh gốc</strong></p>
      <ul>
        <li>Chọn một bức ảnh chân dung nhìn thẳng, rõ mặt, ánh sáng tốt, biểu cảm tự nhiên nhất của bạn.</li>
      </ul>
      
      <p><strong>Bước 2: Tải ảnh lên GPT và chạy Prompt mẫu</strong></p>
      <p>Tải bức ảnh của bạn lên khung chat của GPT, sau đó copy prompt bên dưới dán vào để AI tự động hoán đổi kiểu tóc trên gương mặt bạn nhé:</p>
      
      <!-- HỘP CHỨA PROMPT CAO CẤP VỚI NÚT COPY -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; margin: 24px 0; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
        <!-- Header của code block -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(30, 41, 59, 0.8); padding: 10px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></span>
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;"></span>
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></span>
            <span style="color: #94a3b8; font-family: monospace; font-size: 0.8rem; font-weight: 600; margin-left: 8px;">PROMPT: IDENTITY LOCK HAIRSTYLE</span>
          </div>
          <button onclick="window.copyKieuTocPrompt(this)" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; color: #94a3b8; padding: 6px 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease; outline: none;" onmouseover="this.style.background='rgba(255,255,255,0.1)'; this.style.color='#ffffff';" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='#94a3b8';">
            <svg style="width: 14px; height: 14px; fill: currentColor" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Prompt
          </button>
        </div>
        <!-- Nội dung code block -->
        <div id="kieu-toc-prompt-text" style="padding: 16px 20px; font-family: 'Fira Code', 'Courier New', Courier, monospace; font-size: 0.85rem; line-height: 1.6; color: #cbd5e1; max-height: 400px; overflow-y: auto; white-space: pre-wrap; word-break: break-word; background: rgba(15, 23, 42, 0.4);">Create a high-quality “AI hairstyle analysis board” infographic using the uploaded face photo.

CRITICAL IDENTITY LOCK:
ALL hairstyle panels MUST use the EXACT SAME PERSON from the uploaded image.
DO NOT generate a new person.
DO NOT redesign the face.
DO NOT beautify.
DO NOT change:

* eye shape
* nose shape
* mouth shape
* jawline
* forehead
* ears
* skin tone
* facial proportions
* facial expression
* age
* ethnicity

Treat the uploaded face as a FIXED CHARACTER MODEL.
Only swap hairstyles onto the SAME FACE.

VERY IMPORTANT:
The hairstyle panels must look like:
“same person trying different hairstyles”
NOT:
“different people with similar faces”.

Face consistency priority:
100% facial consistency
20% hairstyle creativity

If hairstyle conflicts with identity consistency:
KEEP THE ORIGINAL FACE.

Keep identical across ALL 15 panels:

* same camera angle
* same facial expression
* same lighting direction
* same eye distance
* same head shape
* same skin texture
* same neck proportions
* same realism level

ONLY change:

* hairstyle
* hair direction
* hair texture
* hair volume
* fringe shape
* side fade
* styling vibe
* hair color

DO NOT:

* change facial structure
* generate sharper jawline
* enlarge eyes
* create Korean idol face
* create different forehead
* create different cheekbones
* create different nose bridge
* create different lips
* create different identity

STYLE:

* realistic Vietnamese male
* TikTok barber aesthetic
* Chinese / Korean hairstyle trends
* premium social infographic
* realistic lighting
* white clean background
* colorful but tasteful sections
* social-media-ready

LAYOUT:
Top section:

* original uploaded hairstyle
* title:
  “PHÂN TÍCH KIỂU TÓC HOT TREND NAM TRUNG QUỐC”

Three sections:

1. KIỂU HOT & PHÙ HỢP
2. KIỂU ĐÁNG THỬ
3. KHÔNG PHÙ HỢP

Generate hairstyle variations using the SAME FACE ONLY.

Hairstyles:

* textured crop
* side part 7/3
* comma hair
* taper fade
* two block 6/4
* mullet layer
* messy wave
* ivy league
* quiff Hàn Quốc
* french crop
* middle part
* undercut vuốt ngược
* mái dài ép thẳng
* xoăn xù mì
* mohican quá cao

Hair color variations:

* natural black
* dark brown
* ash gray
* muted silver
* light brown

IMPORTANT:
Hairstyles must look visually different from each other.
BUT the FACE must remain identical in every panel.

Aspect ratio: 3:4
Ultra detailed.
Realistic.
Clean infographic composition.</div>
      </div>
      
      <p><strong>Bước 3: Tải ảnh kết quả về và chia sẻ</strong></p>
      <p>GPT sẽ tự động xử lý và trả về cho bạn một tấm bảng infographic phân tích kiểu tóc cực kì bảnh bao nhưng cũng không kém phần hài hước, giữ nguyên vẹn 100% gương mặt thực của bạn. Bạn chỉ cần tải về đem đi F5 bản thân hoặc đi khoe với bạn bè thôi!</p>
    `
  }
}

// ─── DYNAMIC COPY PROMPT LOGIC ───
window.copyKieuTocPrompt = function(btn) {
  const text = document.getElementById('kieu-toc-prompt-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = `<svg style="width:14px;height:14px;fill:#10b981;vertical-align:middle;margin-right:4px;" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Đã copy!`;
    btn.style.color = '#10b981';
    btn.style.borderColor = '#10b981';
    setTimeout(() => {
      btn.innerHTML = `<svg style="width:14px;height:14px;fill:currentColor;vertical-align:middle;margin-right:4px;" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> Copy Prompt`;
      btn.style.color = '#94a3b8';
      btn.style.borderColor = 'rgba(255,255,255,0.15)';
    }, 2000);
  }).catch(err => {
    console.error('Lỗi copy:', err);
    // Fallback: select and let the user copy manually
    const range = document.createRange();
    range.selectNode(document.getElementById('kieu-toc-prompt-text'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    alert('Không thể copy tự động. Hệ thống đã bôi đen đoạn Prompt, bạn chỉ cần nhấn Ctrl+C để copy nhé!');
  });
}


// ─── DYNAMIC ESSAY READER LOGIC ───
const essayReader = document.getElementById('essay-reader')
const essayReaderClose = document.getElementById('essay-reader-close')
const essayReaderContent = document.getElementById('essay-reader-content')
const essayReaderOverlay = document.getElementById('essay-reader-overlay')

window.openEssay = function (key) {
  const data = essayData[key]
  if (!data || !essayReader || !essayReaderContent) return

  // Inject content
  essayReaderContent.innerHTML = `
    <article>
      <div class="essay-meta">
        <span class="post-tag">${data.tag}</span>
        <span class="post-date">${data.date}</span>
      </div>
      <h1>${data.title}</h1>
      <div class="essay-body">
        ${data.content}
      </div>
    </article>
  `

  // Show reader with transition
  essayReader.setAttribute('aria-hidden', 'false')
  essayReader.classList.add('active')
  document.body.style.overflow = 'hidden' // Lock scroll

  // Push clean hash into the URL smoothly
  if (window.location.hash !== `#${key}`) {
    history.pushState(null, null, `#${key}`)
  }
}

function closeEssay() {
  if (!essayReader) return
  essayReader.classList.remove('active')
  essayReader.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = '' // Unlock scroll

  // Clear hash from URL smoothly
  if (window.location.hash) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

if (essayReaderClose) {
  essayReaderClose.addEventListener('click', closeEssay)
}
if (essayReaderOverlay) {
  essayReaderOverlay.addEventListener('click', closeEssay)
}

// Close on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && essayReader && essayReader.classList.contains('active')) {
    closeEssay()
  }
})

// ─── ZALO MODAL CLOSE LOGIC ───
const zaloModal = document.getElementById('zalo-modal')
const zaloModalClose = document.getElementById('zalo-modal-close')
const zaloModalOverlay = document.getElementById('zalo-modal-overlay')

function closeZaloModal() {
  if (!zaloModal) return
  zaloModal.classList.remove('active')
  zaloModal.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = '' // Unlock background scroll
}

if (zaloModalClose) {
  zaloModalClose.addEventListener('click', closeZaloModal)
}
if (zaloModalOverlay) {
  zaloModalOverlay.addEventListener('click', closeZaloModal)
}

// Close Zalo modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && zaloModal && zaloModal.classList.contains('active')) {
    closeZaloModal()
  }
})

// ─── AUTO-OPEN ESSAY FROM URL (PARAMETER OR HASH) ───
function checkUrlAndOpenEssay() {
  // 1. Check URL search query parameter ?essay=key
  const urlParams = new URLSearchParams(window.location.search)
  let essayKey = urlParams.get('essay')

  // 2. Check hash parameter #key
  if (!essayKey && window.location.hash) {
    const hashKey = window.location.hash.substring(1)
    if (essayData[hashKey]) {
      essayKey = hashKey
    }
  }

  if (essayKey && essayData[essayKey]) {
    // Wait for DOM load/transitions
    setTimeout(() => {
      window.openEssay(essayKey)
    }, 400)
  }
}

window.addEventListener('DOMContentLoaded', checkUrlAndOpenEssay)

window.addEventListener('hashchange', () => {
  const hashKey = window.location.hash.substring(1)
  if (hashKey && essayData[hashKey]) {
    window.openEssay(hashKey)
  } else if (!hashKey && essayReader && essayReader.classList.contains('active')) {
    closeEssay()
  }
})
