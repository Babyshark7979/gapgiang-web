import './style.css'

// â”€â”€â”€ NAVBAR SCROLL â”€â”€â”€
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

// â”€â”€â”€ HAMBURGER MENU â”€â”€â”€
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('navbar-menu')
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open')
  })
}

// â”€â”€â”€ SUBSCRIBE HANDLER (ZALO REDIRECT INTEGRATION) â”€â”€â”€
// Báº¡n cÃ³ thá»ƒ dÃ¡n link Google Sheet Script, Discord Webhook, Telegram Bot hoáº·c Make/Zapier Webhook vÃ o Ä‘Ã¢y
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxxYr2yCd3CndFLgu-OzvHbc4_hM8oQHL45fhJz78n3lsPa8YxhSKzTh7iG1x6KYck/exec'; 
const ZALO_CONTACT_URL = 'https://zalo.me/0868797777'; // Link Zalo cÃ¡ nhÃ¢n cá»§a Giang (nháº¥p sáº½ chat trá»±c tiáº¿p)

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
    submitBtn.innerHTML = 'Äang Ä‘á»“ng bá»™ dá»¯ liá»‡u...'
  }

  const payload = {
    email: email,
    phone: phone,
    interest: interest,
    timestamp: new Date().toISOString(),
    source: 'GapGiang.com - Weekly Dispatch'
  }

  console.log('ÄÄƒng kÃ½ má»›i:', payload)

  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Há»— trá»£ bypass CORS Ä‘á»‘i vá»›i Google Script/Webhook
      })
      console.log('ÄÃ£ gá»­i dá»¯ liá»‡u thÃ nh cÃ´ng lÃªn há»‡ thá»‘ng!')
    } catch (err) {
      console.error('Lá»—i khi Ä‘á»“ng bá»™ dá»¯ liá»‡u:', err)
    }
  }

  if (submitBtn) {
    submitBtn.innerHTML = 'ThÃ nh cÃ´ng! Äang káº¿t ná»‘i...'
  }

  // Hiá»ƒn thá»‹ Zalo Connection Modal tuyá»‡t Ä‘áº¹p thay vÃ¬ redirect thÃ´ thiá»ƒn
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

// â”€â”€â”€ SCROLL REVEAL â”€â”€â”€
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

// â”€â”€â”€ SMOOTH ANCHOR SCROLL â”€â”€â”€
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

// â”€â”€â”€ ACTIVE NAV LINK HIGHLIGHT â”€â”€â”€
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

// â”€â”€â”€ ESSAY DATA (EMPOWERMENT PHILOSOPHY) â”€â”€â”€
const essayData = {
  "brain2-obsidian": {
    title: "TÃ´i máº¥t 21 ngÃ y chá»‰ Ä‘á»ƒ nháº­n ra: AI ngu hÆ¡n mÃ¬nh tÆ°á»Ÿng, vÃ  App xá»‹n cÅ©ng chá»‰ lÃ  cÃ¡i tá»§ láº¡nh",
    tag: "TÆ° duy há»‡ thá»‘ng",
    date: "01 ThÃ¡ng 6, 2026",
    content: `
      <p>NhÃ¬n cÃ¡i sÆ¡ Ä‘á»“ "Bá»™ nÃ£o thá»© 2" (Brain2) káº¿t ná»‘i mÆ°á»£t mÃ  nhÆ° dáº£i ngÃ¢n hÃ  á»Ÿ dÆ°á»›i, Ã­t ai biáº¿t tÃ´i vá»«a pháº£i tráº£i qua má»™t cuá»™c hÃ nh xÃ¡c thá»±c sá»±.</p>

      <p>Láº§n Ä‘áº§u tiÃªn tÃ´i lá» má» setup há»‡ thá»‘ng nÃ y, tÃ´i máº¥t Ä‘Ãºng 15 ngÃ y. Tháº¥t báº¡i.<br>
      Äáº­p Ä‘i xÃ¢y láº¡i láº§n 2, máº¥t 5 ngÃ y. Váº«n rá»‘i.<br>
      Äáº¿n láº§n thá»© 3, tÃ´i chá»‰ máº¥t Ä‘Ãºng 1 ngÃ y Ä‘á»ƒ má»i thá»© gá»n gÃ ng, sáº¯c nÃ©t.</p>

      <p>Sau 21 ngÃ y Ä‘áº­p Ä‘i xÃ¢y láº¡i, tÃ´i nháº­n ra váº¿t xe Ä‘á»• chÃ­ máº¡ng nháº¥t cá»§a nhá»¯ng ngÆ°á»i lÃ m há»‡ thá»‘ng: <strong>NhÃ©t dá»¯ liá»‡u vÃ o trÆ°á»›c khi xÃ¢y mÃ³ng cáº¥u trÃºc.</strong></p>

      <div style="margin: 24px 0; text-align: center;">
        <img src="/media/ai_fridge_system_new.jpg" alt="AI Fridge vs Structured Archive" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto;" loading="lazy" />
      </div>

      <p>NÃ³ y há»‡t nhÆ° viá»‡c báº¡n bá» cáº£ trÄƒm triá»‡u mua má»™t cÃ¡i tá»§ láº¡nh Side-by-side nháº­p kháº©u, rá»“i tá»‘ng há»—n lá»‘n thá»‹t cÃ¡ sá»‘ng, háº£i sáº£n tanh rÃ¬nh náº±m chung vá»›i hoa quáº£, sá»¯a tÆ°Æ¡i. KhÃ´ng phÃ¢n vÃ¹ng, khÃ´ng khay há»™p. VÃ i ngÃ y sau má»Ÿ tá»§ ra, má»™t mÃ¹i thiu thá»‘i bá»‘c lÃªn.</p>

      <p>Dá»¯ liá»‡u cÅ©ng y chang váº­y. NhÃ©t bá»«a bÃ£i vÃ o má»™t á»©ng dá»¥ng xá»‹n thÃ¬ nÃ³ biáº¿n thÃ nh BÃ£i rÃ¡c ká»¹ thuáº­t sá»‘.</p>

      <p>VÃ  Ä‘Ã¢y lÃ  pháº§n Ä‘au Ä‘á»›n nháº¥t: <strong>Sá»± ngÃ¢y thÆ¡ khi dÃ¹ng AI.</strong></p>

      <p>Nhiá»u ngÆ°á»i láº§m tÆ°á»Ÿng cá»© bÆ¡m tháº­t nhiá»u file tÃ i liá»‡u, nÃ©m nguyÃªn cuá»‘n sÃ¡ch vÃ o lÃ  AI sáº½ tá»± thÃ´ng minh ra. Sai láº§m. Báº£n cháº¥t cá»§a AI lÃ  nÃ³ Ä‘á»c lÆ°á»›t (skimming). Báº¡n nÃ©m cho nÃ³ má»™t bÃ£i rÃ¡c khÃ´ng phÃ¢n loáº¡i, nÃ³ sáº½ luÃ´n luÃ´n bá» sÃ³t (miss) dá»¯ liá»‡u.</p>

      <p>Sau hÃ ng chá»¥c láº§n bá»±c mÃ¬nh vÃ¬ con AI quÃªn trÆ°á»›c quÃªn sau, tÃ´i ngá»™ ra má»™t chÃ¢n lÃ½: <strong>Äá»«ng dÃ¹ng lá»i nÃ³i nháº¹ nhÃ ng vá»›i AI. HÃ£y dÃ¹ng Luáº­t.</strong></p>

      <p>TÃ´i pháº£i thiáº¿t láº­p háº³n má»™t "Bá»™ luáº­t hÃ¬nh sá»±" cho con AI trong há»‡ thá»‘ng Brain2 cá»§a mÃ¬nh. Pháº£i cÃ³ quy táº¯c rÃµ rÃ ng, cÃ³ cÃ¡c "khung, khoáº£n" nghiÃªm ngáº·t Ä‘á»ƒ khÃ©p tá»™i vÃ  Ã©p nÃ³ tuÃ¢n thá»§ tá»«ng ly tá»«ng tÃ­. Tá»« lÃºc Ã¡p dá»¥ng "Luáº­t hÃ¬nh sá»±" Ä‘Ã³, AI má»›i thá»±c sá»± trá»Ÿ thÃ nh má»™t cá»— mÃ¡y gia tá»‘c ngoan ngoÃ£n.</p>

      <p><strong>BÃ i há»c rÃºt ra lÃ  gÃ¬?</strong></p>
      <ol style="margin-left: 20px; margin-bottom: 24px;">
        <li style="margin-bottom: 8px;">TÆ° duy há»‡ thá»‘ng Ä‘i trÆ°á»›c, CÃ´ng cá»¥ Ä‘i sau.</li>
        <li style="margin-bottom: 8px;">Cáº¥u trÃºc dá»¯ liá»‡u quan trá»ng hÆ¡n khá»‘i lÆ°á»£ng dá»¯ liá»‡u.</li>
        <li style="margin-bottom: 8px;">Äá»«ng hy vá»ng AI tá»± thÃ´ng minh lÃªn náº¿u ngÆ°á»i lÃ m chá»§ há»‡ thá»‘ng chÆ°a biáº¿t cÃ¡ch ra luáº­t.</li>
      </ol>
      <p>Há»‡ thá»‘ng Brain2 cá»§a tÃ´i Ä‘Ã£ báº¯t Ä‘áº§u vÃ o guá»“ng. Anh em nÃ o Ä‘ang bá»‹ "Ngá»™ Ä‘á»™c dá»¯ liá»‡u" hoáº·c Ä‘ang cháº­t váº­t cÃ£i nhau vá»›i AI má»—i ngÃ y khÃ´ng? Cháº¥m má»™t cÃ¡i Ä‘i, tÃ´i sáº½ chia sáº» cÃ¡i "Bá»™ luáº­t hÃ¬nh sá»±" mÃ  tÃ´i Ä‘ang dÃ¹ng Ä‘á»ƒ trá»‹ bá»n AI nÃ y!</p>
    `
  },
  "don-rac-ai": {
    title: "HÆ°á»›ng dáº«n dÃ¹ng AI Agent tá»± Ä‘á»™ng dá»n rÃ¡c, chá»‘ng Ä‘Æ¡ mÃ¡y tÃ­nh trong 15 phÃºt",
    tag: "Tá»± Ä‘á»™ng hÃ³a",
    date: "23 ThÃ¡ng 5, 2026",
    content: `
      <p>BÃ i viáº¿t nÃ y sinh ra Ä‘á»ƒ giáº£i quyáº¿t Ä‘Ãºng 1 váº¥n Ä‘á» Ä‘au Ä‘áº§u nháº¥t cá»§a anh em vÄƒn phÃ²ng: <strong>MÃ¡y tÃ­nh quÃ¡ bá»«a bá»™n, Ã¬ áº¡ch nhÆ°ng báº¡n khÃ´ng biáº¿t file nÃ o lÃ  rÃ¡c Ä‘á»ƒ xÃ³a, vÃ  cÅ©ng khÃ´ng cÃ³ thá»i gian Ä‘á»ƒ mÃ²!</strong></p>
      
      <p>Äá»«ng tá»± lÃ m viá»‡c tay chÃ¢n ná»¯a. TrÃ­ tuá»‡ nhÃ¢n táº¡o sinh ra lÃ  Ä‘á»ƒ lÃ m "Tá»•ng tháº§u" xÃ¢y dá»±ng, cÃ²n báº¡n lÃ  "Chá»§ Ä‘áº§u tÆ°". KhÃ¡c vá»›i cÃ¡c con Chatbot (nhÆ° ChatGPT) chá»‰ biáº¿t gÃµ chá»¯, hÃ´m nay Giang sáº½ hÆ°á»›ng dáº«n báº¡n xÃ i má»™t <strong>AI Agent</strong> - loáº¡i AI cÃ³ kháº£ nÄƒng "má»c tay má»c chÃ¢n" tá»± quÃ©t vÃ  tá»± xÃ³a file trÃªn mÃ¡y tÃ­nh cá»§a báº¡n (táº¥t nhiÃªn lÃ  dÆ°á»›i sá»± cho phÃ©p cá»§a báº¡n).</p>

      <h3>BÆ°á»›c 1: ThuÃª "Tá»•ng Tháº§u AI" (Táº£i vÃ  CÃ i Äáº·t Antigravity)</h3>
      <p>KhÃ¡c vá»›i ChatGPT trÃªn Web, Ä‘á»ƒ con AI can thiá»‡p dá»n dáº¹p há»‡ thá»‘ng, báº¡n cáº§n cÃ i Ä‘áº·t á»©ng dá»¥ng vÃ o mÃ¡y tÃ­nh.</p>

      <div style="margin: 24px 0; text-align: center;">
        <a href="https://antigravity.google/" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #10b981, #06b6d4); color: #ffffff; padding: 12px 28px; border-radius: 30px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); transition: transform 0.2s, box-shadow 0.2s; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 185, 129, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 185, 129, 0.4)';">
          <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
          </svg>
          Táº¢I ANTIGRAVITY IDE (MIá»„N PHÃ)
        </a>
      </div>

      <div style="margin: 24px 0; text-align: center;">
        <img src="/media/antigravity_cleaning_vi.png" alt="SÆ¡ Ä‘á»“ Quy trÃ¬nh 4 BÆ°á»›c Dá»n RÃ¡c báº±ng Antigravity" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto;" loading="lazy" />
      </div>

      <p><strong>HÆ°á»›ng dáº«n cÃ i Ä‘áº·t siÃªu tá»‘c:</strong></p>
      <ol style="margin-left: 20px; margin-bottom: 24px;">
        <li style="margin-bottom: 8px;"><strong>Táº£i pháº§n má»m:</strong> Báº¥m nÃºt táº£i ná»•i báº­t á»Ÿ trÃªn hoáº·c <a href="https://antigravity.google/" target="_blank" style="color: #10b981; text-decoration: underline; font-weight: bold;">truy cáº­p link nÃ y</a> Ä‘á»ƒ táº£i Antigravity IDE chÃ­nh thá»©c tá»« Google.</li>
        <li style="margin-bottom: 8px;"><strong>CÃ i Ä‘áº·t:</strong> Báº¥m Ä‘Ãºp vÃ o file vá»«a táº£i vá», cá»© áº¥n "Next" cho Ä‘áº¿n khi hoÃ n thÃ nh.</li>
        <li style="margin-bottom: 8px;"><strong>KÃ­ch hoáº¡t:</strong> Má»Ÿ pháº§n má»m Antigravity lÃªn. Báº¡n chÃº Ã½ Ä‘áº¿n <strong>Khung Chat</strong> náº±m á»Ÿ bÃªn tay pháº£i. ÄÃ³ chÃ­nh lÃ  nÆ¡i báº¡n giao tiáº¿p vá»›i Tá»•ng tháº§u AI.</li>
      </ol>

      <h3>BÆ°á»›c 2: BÃ n Giao Há»£p Äá»“ng (Nháº­p CÃ¢u Tháº§n ChÃº)</h3>
      <p>Má»Ÿ khung Chat cá»§a Antigravity lÃªn. Báº¡n copy vÃ  dÃ¡n nguyÃªn xi Ä‘oáº¡n vÄƒn báº£n (Prompt) dÆ°á»›i Ä‘Ã¢y cá»§a Giang vÃ o. Lá»‡nh nÃ y sáº½ Ã©p con AI biáº¿n thÃ nh má»™t Trá»£ lÃ½ dá»n rÃ¡c táº­n tá»¥y nháº¥t.</p>

      <div style="background: rgba(255,255,255,0.05); border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0; border-radius: 4px;">
        <strong style="color: #60a5fa;">ðŸ“ Tá»”NG THáº¦U PROMPT (Copy tá»« Ä‘Ã¢y):</strong><br/><br/>
        <span style="font-family: monospace; font-size: 0.9em; line-height: 1.6;">
        Báº¯t Ä‘áº§u tá»« bÃ¢y giá», hÃ£y Ä‘Ã³ng vai trÃ² lÃ  "Trá»£ lÃ½ dá»n dáº¹p há»‡ thá»‘ng cao cáº¥p" cá»§a tÃ´i. Má»¥c tiÃªu cá»§a báº¡n lÃ  giÃºp tÃ´i dá»n rÃ¡c mÃ¡y tÃ­nh má»™t cÃ¡ch an toÃ n vÃ  tá»± Ä‘á»™ng 100%.<br/><br/>
        Tuyá»‡t Ä‘á»‘i tuÃ¢n thá»§ Quy trÃ¬nh 4 BÆ°á»›c sau Ä‘Ã¢y, lÃ m tá»«ng bÆ°á»›c má»™t, KHÃ”NG Ä‘Æ°á»£c tá»± Ã½ gá»™p bÆ°á»›c hay tá»± Ã½ xÃ³a báº¥t cá»© thá»© gÃ¬ khi tÃ´i chÆ°a cáº¥p quyá»n:<br/><br/>
        BÆ¯á»šC 1: KHáº¢O SÃT<br/>
        HÃ£y há»i tÃ´i 3 cÃ¢u tráº¯c nghiá»‡m (A, B, C) báº±ng tiáº¿ng Viá»‡t tháº­t dá»… hiá»ƒu:<br/>
        - Báº¡n muá»‘n quÃ©t á»• Ä‘Ä©a nÃ o? (VÃ­ dá»¥: Desktop, á»” C, á»” D).<br/>
        - Äá»‹nh nghÄ©a "RÃ¡c" cá»§a báº¡n lÃ  gÃ¬? (VÃ­ dá»¥: File > 1 nÄƒm khÃ´ng má»Ÿ, File rÃ¡c há»‡ thá»‘ng .tmp/.cache, File siÃªu náº·ng > 1GB).<br/>
        - HÆ°á»›ng xá»­ lÃ½? (XÃ³a vÄ©nh viá»…n hay Gom NÃ©n vÃ o kho Archive?).<br/>
        Dá»«ng láº¡i chá» tÃ´i tráº£ lá»i.<br/><br/>
        BÆ¯á»šC 2: QUÃ‰T & BÃO CÃO<br/>
        DÃ¹ng Terminal thá»±c thi lá»‡nh quÃ©t theo Ä‘Ãºng yÃªu cáº§u. Sau Ä‘Ã³ in ra Báº£ng BÃ¡o CÃ¡o chi tiáº¿t danh sÃ¡ch rÃ¡c vÃ  tá»•ng dung lÆ°á»£ng. Há»i tÃ´i cÃ³ duyá»‡t khÃ´ng. Dá»«ng láº¡i chá» tÃ´i tráº£ lá»i.<br/><br/>
        BÆ¯á»šC 3: THá»°C THI (AN TOÃ€N)<br/>
        XÃ³a hoáº·c Gom file theo yÃªu cáº§u. LÃ m xong bÃ¡o cÃ¡o láº¡i káº¿t quáº£.<br/><br/>
        BÆ¯á»šC 4: Má»ž Rá»˜NG<br/>
        Há»i tÃ´i cÃ³ muá»‘n tiáº¿p tá»¥c quÃ©t á»• khÃ¡c khÃ´ng, hoáº·c cÃ³ muá»‘n báº¡n táº¯t bá»›t cÃ¡c pháº§n má»m cháº¡y ngáº§m gÃ¢y Ä‘Æ¡ mÃ¡y khÃ´ng. Náº¿u tÃ´i Ä‘á»“ng Ã½, hÃ£y láº·p láº¡i quy trÃ¬nh.<br/><br/>
        ÄÃ£ rÃµ thÃ¬ hÃ£y in ra dÃ²ng chá»¯ "Sáºµn sÃ ng phá»¥c vá»¥ Chá»§ Äáº§u TÆ°" vÃ  báº¯t Ä‘áº§u BÆ°á»›c 1.
        </span>
      </div>

      <h3>BÆ°á»›c 3: Váº¯t chÃ¢n lÃªn bÃ n vÃ  báº¥m Duyá»‡t</h3>
      <p>Ngay sau khi báº¡n dÃ¡n cÃ¢u lá»‡nh trÃªn, AI sáº½ láº­p tá»©c phá»ng váº¥n báº¡n báº±ng cÃ¡c cÃ¢u há»i tráº¯c nghiá»‡m cá»±c ká»³ dá»… hiá»ƒu. Báº¡n chá»‰ viá»‡c gÃµ "A, B, C".</p>
      <p><strong>LÆ°u Ã½ cá»±c ká»³ quan trá»ng:</strong> Má»—i khi AI chuáº©n bá»‹ quÃ©t há»‡ thá»‘ng hoáº·c dá»n file, nÃ³ sáº½ Ä‘á» xuáº¥t lá»‡nh trong khung chat. Báº¡n **báº¯t buá»™c pháº£i click vÃ o nÃºt "Duyá»‡t" (Approve) mÃ u xanh lÃ¡ cÃ¢y** thÃ¬ con AI má»›i cÃ³ quyá»n cháº¡y lá»‡nh trÃªn mÃ¡y tÃ­nh cá»§a báº¡n nhÃ© (quyá»n kiá»ƒm soÃ¡t an toÃ n 100% thuá»™c vá» báº¡n!).</p>
      <p>NÃ³ sáº½ tá»± Ä‘á»™ng cháº¡y ngáº§m, rÃ  soÃ¡t má»i ngÃ³c ngÃ¡ch trong mÃ¡y tÃ­nh vÃ  xin phÃ©p báº¡n trÆ°á»›c khi xÃ³a. Báº¡n khÃ´ng lo bá»‹ xÃ³a nháº§m dá»¯ liá»‡u quan trá»ng, cÅ©ng khÃ´ng pháº£i tá»± cÄƒng máº¯t Ä‘i tÃ¬m rÃ¡c ná»¯a.</p>
      <p>ChÃºc anh em thá»±c hÃ nh thÃ nh cÃ´ng. Cáº£m giÃ¡c lÃ m Chá»§ Äáº§u TÆ° sai váº·t Ä‘Æ°á»£c con AI nÃ³ sÆ°á»›ng vÃ  nháº¹ Ä‘áº§u cá»±c ká»³! Äi dá»n rÃ¡c thÃ´i anh em!</p>
    `
  },
  "bay-sinh-hoc": {
    title: "CÃ³ cháº¯c cÃ y 14 tiáº¿ng má»™t ngÃ y lÃ  hiá»‡u quáº£ vá»›i cÃ´ng viá»‡c... hay Ä‘ang hiá»‡u quáº£ vá»›i bá»‡nh viá»‡n?",
    tag: "Hiá»‡u suáº¥t cÃ¢n báº±ng",
    date: "22 ThÃ¡ng 5, 2026",
    content: `
      <p>Má»™t chiáº¿c áº£nh Alex Hormozi cá»Ÿi tráº§n, cÆ¡ báº¯p cuá»“n cuá»™n bÃªn cáº¡nh Ä‘á»‘ng sÃ¡ch (book), kÃ¨m theo cÃ¢u nÃ³i truyá»n cáº£m há»©ng vá» viá»‡c cÃ y cuá»‘c 14 tiáº¿ng má»—i ngÃ y. DÆ°á»›i pháº§n bÃ¬nh luáº­n, hÃ ng ngÃ n ngÆ°á»i tráº» tháº£ tim, tag nhau vÃ o vÃ  tá»± há»©a Ä‘Ãªm nay sáº½ thá»©c Ä‘áº¿n 2 giá» sÃ¡ng Ä‘á»ƒ lÃ m viá»‡c nhiá»u hÆ¡n táº¥t cáº£ má»i ngÆ°á»i ("outwork everyone"). Há» coi sá»± kiá»‡t quá»‡, nhá»¯ng ly cÃ  phÃª thá»© ba trong ngÃ y, vÃ  giáº¥c ngá»§ cháº­p chá»n lÃ  chiáº¿c huy chÆ°Æ¡ng danh giÃ¡ cá»§a sá»± ná»— lá»±c.</p>
      
      <div style="margin: 24px 0; text-align: center;">
        <img src="/media/hormozi-challenge.png" alt="Alex Hormozi 12x30 Challenge" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto;" loading="lazy" />
      </div>

      <p><em>Giang cÅ©ng tá»«ng lÃ  má»™t trong sá»‘ há».</em></p>
      
      <p>Giang tá»«ng nghÄ© ráº±ng chá»‰ cáº§n mÃ¬nh cá»‘ gáº¯ng thÃªm má»™t chÃºt, bá»›t ngá»§ Ä‘i má»™t giá», thÃ¬ thÃ nh cÃ´ng sáº½ Ä‘áº¿n nhanh hÆ¡n má»™t nÄƒm. Giang tháº§n tÆ°á»£ng nhá»¯ng cá»— mÃ¡y lÃ m viá»‡c khÃ´ng biáº¿t má»‡t má»i. Giang lao vÃ o cÃ´ng viá»‡c nhÆ° má»™t con thiÃªu thÃ¢n, tá»± hÃ o vá»›i nhá»¯ng Ä‘Ãªm tráº¯ng Ä‘á»‘i thoáº¡i vá»›i mÃ n hÃ¬nh mÃ¡y tÃ­nh.</p>
      
      <p>NhÆ°ng dÆ°á»›i sÃ¢u tháº³m cá»§a sá»± Ä‘iÃªn cuá»“ng Ä‘Ã³, Giang nháº­n ra má»™t sá»± tháº­t tráº§n trá»¥i mÃ  hiáº¿m ai dÃ¡m tá»± Ä‘á»‘i diá»‡n: <strong>Ä‘Ã³ lÃ  cáº£m giÃ¡c cÃ´ Ä‘Æ¡n vÃ  sá»± báº¥t an tá»™t cÃ¹ng</strong>. Khi báº¡n nhÃ¬n xung quanh, lÆ°á»›t máº¡ng xÃ£ há»™i vÃ  tháº¥y ngÆ°á»i ta thÃ nh cÃ´ng quÃ¡ nhanh, cÃ³ nhÃ  Ä‘áº¹p, xe sang, hay thÄƒng tiáº¿n tháº§n tá»‘c, má»™t Ã¡p lá»±c vÃ´ hÃ¬nh Ä‘Ã¨ náº·ng lÃªn ngá»±c báº¡n. Báº¡n sá»£ mÃ¬nh bá»‹ tá»¥t láº¡i phÃ­a sau, sá»£ mÃ¬nh kÃ©m cá»i, vÃ  cáº£m tháº¥y vÃ´ dá»¥ng náº¿u khÃ´ng lÃ m gÃ¬ Ä‘Ã³. Viá»‡c cÃ y cuá»‘c 14 tiáº¿ng má»—i ngÃ y thá»±c cháº¥t chá»‰ lÃ  má»™t <strong>cÆ¡ cháº¿ tá»± vá»‡ tÃ¢m lÃ½ vÃ´ thá»©c</strong> Ä‘á»ƒ báº¡n táº¡m thá»i trá»‘n cháº¡y ná»—i sá»£ hÃ£i áº¥y. Báº¡n cá»‘ gáº¯ng thá»©c khuya, uá»‘ng ly cÃ  phÃª thá»© ba chá»‰ Ä‘á»ƒ chá»©ng minh vá»›i báº£n thÃ¢n vÃ  tháº¿ giá»›i ráº±ng: *"TÃ´i cÅ©ng Ä‘ang ná»— lá»±c háº¿t mÃ¬nh, tÃ´i khÃ´ng há» lÆ°á»i biáº¿ng!"*</p>
      
      <p>NhÆ°ng sá»± tháº­t lÃ , ná»— lá»±c trong hoáº£ng loáº¡n khÃ´ng bao giá» mang láº¡i hiá»‡u quáº£ thá»±c cháº¥t. NÃ³ chá»‰ biáº¿n báº¡n thÃ nh má»™t thá»£ xÃ¢y kiá»‡t quá»‡, tá»± tiÃªu sáº£n Ä‘i tÃ i sáº£n sinh má»‡nh quÃ½ bÃ¡u nháº¥t cá»§a mÃ¬nh.</p>
      
      <p><em>NhÆ°ng cÃ³ má»™t sá»± tháº­t thÃ´ rÃ¡p mÃ  khÃ´ng ai nÃ³i vá»›i báº¡n á»Ÿ trÃªn máº¡ng.</em></p>
      
      <p>Alex Hormozi Ä‘Ã´ con tháº­t, khá»e tháº­t, vÃ  giÃ u tháº­t. TrÃªn kÃªnh truyá»n thÃ´ng cá»§a mÃ¬nh, cáº£ hai vá»£ chá»“ng Alex vÃ  Leila liÃªn tá»¥c chia sáº» nhá»¯ng video hÆ°á»›ng dáº«n cÃ y 14 tiáº¿ng má»—i ngÃ y hay thá»­ thÃ¡ch <a href="https://www.instagram.com/reel/DH7MD0rSswf/" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: underline;">lÃ m viá»‡c liÃªn tá»¥c 12 tiáº¿ng suá»‘t 30 ngÃ y (Thá»­ thÃ¡ch 12x30)</a>.</p>
      
      <p>NhÆ°ng báº¡n cÃ³ biáº¿t Ä‘áº±ng sau cÆ¡ báº¯p cuá»“n cuá»™n Ä‘Ã³ lÃ  gÃ¬ khÃ´ng? ÄÃ³ lÃ  má»™t há»‡ gen di truyá»n xuáº¥t sáº¯c, má»™t ngÆ°á»i vá»£ Ä‘á»“ng hÃ nh gÃ¡nh vÃ¡c 100% sá»± nghiá»‡p, khÃ´ng vÆ°á»›ng báº­n con cÃ¡i, vÃ  cáº£ má»™t Ä‘á»™i ngÅ© háº­u cáº§n y táº¿, dinh dÆ°á»¡ng cao cáº¥p Ä‘á»©ng sau há»— trá»£.</p>
      
      <p><em>Giá»›i phÃ¢n tÃ­ch gá»i Ä‘Ã³ lÃ  khoáº£ng cÃ¡ch tÆ°Æ¡ng quan nguá»“n lá»±c (Gap).</em></p>
      
      <p>Khi báº¡n lao vÃ o cuá»™c chiáº¿n cÃ y cuá»‘c vá»›i há» mÃ  khÃ´ng biáº¿t Ä‘á»‘i thá»§ Ä‘ang sá»Ÿ há»¯u nhá»¯ng "khÃ­ tÃ i háº¡ng náº·ng" gÃ¬ Ä‘á»ƒ báº£o vá»‡ sinh má»‡nh, báº¡n Ä‘Ã£ thua ngay tá»« khi xuáº¥t phÃ¡t. Khi Alex khuyÃªn báº¡n cÃ y 12 Ä‘áº¿n 14 tiáº¿ng má»—i ngÃ y, Ã´ng áº¥y Ä‘ang dÃ¹ng tráº£i nghiá»‡m cá»§a má»™t cá»— mÃ¡y sinh há»c siÃªu cáº¥p Ä‘á»ƒ Ã¡p Ä‘áº·t lÃªn má»™t cÆ¡ thá»ƒ bÃ¬nh thÆ°á»ng.</p>
      
      <p>If báº¡n lÃ  má»™t ngÆ°á»i Ä‘i lÃ m lÃ¢u nÄƒm, Ä‘ang gÃ¡nh trÃªn vai Ã¡p lá»±c gia Ä‘Ã¬nh, con cÃ¡i, hÃ³a Ä‘Æ¡n... vÃ  khÃ´ng cÃ³ má»™t Ä‘á»™i ngÅ© nÃ¢ng Ä‘á»¡ phÃ­a sau. Viá»‡c báº¡n cá»‘ gáº¯ng báº¯t chÆ°á»›c cÃ y 14 tiáº¿ng nhÆ° Alex khÃ´ng pháº£i lÃ  báº¡n Ä‘ang tá»‘i Æ°u hÃ³a cÃ´ng viá»‡c. Báº¡n Ä‘ang tá»‘i Æ°u hÃ³a doanh thu cho bá»‡nh viá»‡n.</p>
      
      <p>Khi báº¡n Ä‘áº©y cÆ¡ thá»ƒ vÃ o tráº¡ng thÃ¡i cÄƒng tháº³ng tá»™t Ä‘á»™ liÃªn tá»¥c, lÆ°á»£ng Cortisol (hormone cÄƒng tháº³ng) sáº½ tÄƒng vá»t, phÃ¡ há»§y dáº§n cÃ¡c liÃªn káº¿t tháº§n kinh, lÃ m suy giáº£m há»‡ miá»…n dá»‹ch vÃ  kÃ©o chá»‰ sá»‘ phá»¥c há»“i cÆ¡ thá»ƒ (HRV - biáº¿n thiÃªn nhá»‹p tim) cá»§a báº¡n xuá»‘ng Ä‘Ã¡y vá»±c. Báº¡n tÆ°á»Ÿng mÃ¬nh Ä‘ang tiáº¿n gáº§n hÆ¡n Ä‘áº¿n thÃ nh cÃ´ng, nhÆ°ng thá»±c cháº¥t, báº¡n Ä‘ang tiÃªu sáº£n sinh má»‡nh cá»§a chÃ­nh mÃ¬nh.</p>
      
      <p>Giang viáº¿t nhá»¯ng dÃ²ng nÃ y khÃ´ng pháº£i Ä‘á»ƒ phÃ¡n xÃ©t hay báº£o báº¡n hÃ£y ngá»«ng cá»‘ gáº¯ng. Giang hiá»ƒu hÆ¡n ai háº¿t cáº£m giÃ¡c báº¥t lá»±c cá»§a báº¡n lÃºc nÃ y. Báº¡n má»‡t má»i, báº¡n tháº¥y báº¿ táº¯c, vÃ  báº¡n sá»£ ráº±ng náº¿u mÃ¬nh dá»«ng láº¡i chá»‰ má»™t nhá»‹p thÃ´i, tháº¿ giá»›i ngoÃ i kia sáº½ bá» rÆ¡i báº¡n. Báº¡n cÃ y cuá»‘c Ä‘iÃªn cuá»“ng vÃ¬ báº¡n Ä‘ang thiáº¿u Ä‘i má»™t Ä‘iá»ƒm tá»±a, thiáº¿u má»™t cÃ´ng cá»¥ Ä‘á»ƒ tin ráº±ng mÃ¬nh cÃ³ thá»ƒ lÃ m khÃ¡c Ä‘i.</p>
      
      <blockquote>
        "Báº¡n khÃ´ng há» yáº¿u kÃ©m, báº¡n chá»‰ Ä‘ang thiáº¿u má»™t cÃ´ng cá»¥ Ä‘Ãºng. Nhá»¯ng ná»— lá»±c cá»§a báº¡n hoÃ n toÃ n xá»©ng Ä‘Ã¡ng vá»›i má»™t káº¿t quáº£ tá»‘t Ä‘áº¹p hÆ¡n, chá»© khÃ´ng pháº£i lÃ  má»™t cÆ¡ thá»ƒ rÃ£ rá»i vÃ  nhá»¯ng Ä‘Ãªm máº¥t ngá»§."
      </blockquote>
      
      <p>ÄÃ£ Ä‘áº¿n lÃºc chÃºng ta ngá»«ng chÆ¡i trÃ² chÆ¡i cÃ y cuá»‘c ngu ngá»‘c cá»§a Ä‘Ã¡m Ä‘Ã´ng. ThÃ nh cÃ´ng dÃ i háº¡n khÃ´ng Ä‘Æ°á»£c Ä‘o báº±ng sá»‘ giá» báº¡n hÃ nh xÃ¡c trÃªn bÃ n lÃ m viá»‡c, nÃ³ Ä‘Æ°á»£c Ä‘o báº±ng chá»‰ sá»‘ phá»¥c há»“i cÆ¡ thá»ƒ (HRV) xanh mÆ°á»›t vÃ o má»—i buá»•i sÃ¡ng, báº±ng má»™t giáº¥c ngá»§ sÃ¢u khÃ´ng má»™ng má»‹, vÃ  báº±ng má»™t há»‡ thá»‘ng thÃ´ng tin Ä‘Ã²n báº©y giÃºp báº¡n lÃ m Ã­t Ä‘i nhÆ°ng táº¡o ra giÃ¡ trá»‹ lá»›n hÆ¡n.</p>
      
      <p><em>HÃ£y báº£o vá»‡ máº¡ng sá»‘ng trÆ°á»›c khi báº£o vá»‡ tiá»n.</em></p>
      
      <div style="margin: 36px 0; display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="font-size: 0.9rem; letter-spacing: 0.05em; text-transform: uppercase; color: #a1a1aa; font-weight: 500; text-align: center; border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 9999px; background: rgba(255,255,255,0.03);">
          Case Study: HÃ nh trÃ¬nh tá»‘i Æ°u sinh há»c ("Bio-hacking") thá»±c chiáº¿n cá»§a Giang
        </div>
        <div class="bio-hacking-grid">
          <!-- HÃ¬nh áº£nh minh há»a (náº¿u cÃ³) -->
        </div>
      </div>
    `
  },
  "evan-carmichael": {
    title: "Xem truyá»n cáº£m há»©ng ráº¥t sÆ°á»›ng, nhÆ°ng táº¡i sao Ä‘á»™ng lá»±c cá»§a Evan Carmichael khÃ´ng giÃºp báº¡n tráº£ ná»•i hÃ³a Ä‘Æ¡n thÃ¡ng tá»›i?",
    tag: "Quy trÃ¬nh Ä‘Ã²n báº©y",
    date: "22 ThÃ¡ng 5, 2026",
    content: `
      <p>Báº¡n má»Ÿ mÃ¡y tÃ­nh lÃªn, hÃ­t má»™t hÆ¡i tháº­t sÃ¢u, Ä‘á»‹nh bá»¥ng tá»‘i nay sáº½ hoÃ n thÃ nh ná»‘t báº£n thiáº¿t káº¿ phá»…u bÃ¡n hÃ ng (sales funnel) hoáº·c viáº¿t bÃ i chia sáº» (blog) Ä‘áº§u tiÃªn Ä‘á»ƒ báº¯t Ä‘áº§u xÃ¢y dá»±ng thÆ°Æ¡ng hiá»‡u (brand). NhÆ°ng má»™t ná»—i sá»£ vÃ´ hÃ¬nh áº­p Ä‘áº¿n: <em>Sáº£n pháº©m cá»§a mÃ¬nh liá»‡u Ä‘Ã£ Ä‘á»§ tá»‘t? MÃ¬nh Ä‘Ã£ Ä‘á»§ giá»i Ä‘á»ƒ nÃ³i vá» chá»§ Ä‘á» nÃ y chÆ°a?</em></p>
      
      <p>Äá»ƒ trá»‘n trÃ¡nh cáº£m giÃ¡c báº¥t an Ä‘Ã³, báº¡n báº¥m vÃ o YouTube, má»Ÿ má»™t video cá»§a nhÃ  sÃ¡ng táº¡o ná»™i dung Evan Carmichael vá»›i hashtag tin tÆ°á»Ÿng (#Believe). Giá»ng nÃ³i hÃ¹ng hÃ¹ng cá»§a cÃ¡c vÄ© nhÃ¢n nhÆ° Steve Jobs, Elon Musk vang lÃªn, káº¿t há»£p vá»›i nháº¡c ná»n ká»‹ch tÃ­nh lÃ m tim báº¡n Ä‘áº­p nhanh hÆ¡n. Báº¡n cáº£m tháº¥y há»«ng há»±c khÃ­ tháº¿, tin tÆ°á»Ÿng 100% vÃ o báº£n thÃ¢n vÃ  tá»± nhá»§: "NgÃ y mai mÃ¬nh cháº¯c cháº¯n sáº½ lÃ m Ä‘Æ°á»£c".</p>
      
      <p><em>NhÆ°ng sÃ¡ng hÃ´m sau ngá»§ dáº­y, má»i thá»© váº«n y nguyÃªn.</em></p>
      
      <p>á»¨ng dá»¥ng ghi chÃº chuyÃªn sÃ¢u (Obsidian) cá»§a báº¡n váº«n Ä‘áº§y áº¯p cÃ¡c ghi chÃ©p dá»Ÿ dang, á»©ng dá»¥ng quáº£n trá»‹ cÃ´ng viá»‡c (Notion) váº«n trá»‘ng rá»—ng cÃ¡c trang sáº£n pháº©m, vÃ  hÃ³a Ä‘Æ¡n tiá»n nhÃ  thÃ¡ng tá»›i váº«n lÃ¹ lÃ¹ xuáº¥t hiá»‡n trong hÃ²m thÆ°. CÆ¡n hÆ°ng pháº¥n cáº£m xÃºc tá»« cháº¥t dáº«n truyá»n tháº§n kinh (dopamine) cá»§a video truyá»n cáº£m há»©ng Ä‘Ã£ tan biáº¿n, Ä‘á»ƒ láº¡i má»™t khoáº£ng trá»‘ng hoang hoáº£i vÃ  sá»± báº¥t lá»±c cÃ²n lá»›n hÆ¡n ngÃ y hÃ´m qua.</p>
      
      <p><em>Giang hiá»ƒu sÃ¢u sáº¯c cáº£m giÃ¡c nÃ y cá»§a báº¡n.</em></p>
      
      <p>Giang biáº¿t báº¡n khÃ´ng há» lÆ°á»i biáº¿ng. NgÆ°á»£c láº¡i, báº¡n lÃ  má»™t ngÆ°á»i vÃ´ cÃ¹ng tÃ´n trá»ng tri thá»©c, khao khÃ¡t sá»± hoÃ n háº£o vÃ  mong muá»‘n mang láº¡i giÃ¡ trá»‹ thá»±c cháº¥t nháº¥t. Báº¡n lÆ°u tÃ i liá»‡u, há»c há»i khÃ´ng ngá»«ng vÃ¬ báº¡n cÃ³ trÃ¡ch nhiá»‡m vá»›i nhá»¯ng gÃ¬ mÃ¬nh viáº¿t ra vÃ  lÃ m ra. Ná»—i sá»£ trÃ¬ hoÃ£n cá»§a báº¡n thá»±c cháº¥t chá»‰ lÃ  táº¥m gÆ°Æ¡ng pháº£n chiáº¿u mong muá»‘n Ä‘Æ°á»£c lÃ m tá»‘t nháº¥t cÃ³ thá»ƒ cá»§a báº¡n mÃ  thÃ´i.</p>
      
      <p><em>NhÆ°ng cÃ³ má»™t sá»± tháº­t tÃ n nháº«n vá» cÃ¡ch tháº¿ giá»›i nÃ y váº­n hÃ nh mÃ  Evan khÃ´ng bao giá» nÃ³i cho báº¡n biáº¿t.</em></p>
      
      <p>Äá»™ng lá»±c chá»‰ lÃ  má»“i lá»­a, cÃ²n há»‡ thá»‘ng vÃ  Ä‘Ã²n báº©y má»›i lÃ  cá»§i khÃ´ Ä‘á»ƒ giá»¯ cho ngá»n lá»­a chÃ¡y mÃ£i. Báº¡n tin vÃ o báº£n thÃ¢n thÃ´i lÃ  chÆ°a Ä‘á»§, náº¿u ngÃ y mai báº¡n khÃ´ng cÃ³ má»™t quy trÃ¬nh thá»±c thi cá»¥ thá»ƒ, báº¡n váº«n sáº½ nghÃ¨o bá»n vá»¯ng trong sá»± tÃ­ch cá»±c.</p>
      
      <p><em>HÃ£y nhÃ¬n vÃ o chÃ­nh cÃ¡ch Evan Carmichael lÃ m giÃ u.</em></p>
      
      <p>Evan khÃ´ng lÃ m giÃ u báº±ng cÃ¡ch ngá»“i mÆ¡ má»™ng vÃ  tin tÆ°á»Ÿng. Ã”ng áº¥y lÃ m giÃ u báº±ng má»™t Ä‘Ã²n báº©y truyá»n thÃ´ng cá»±c ká»³ thÃ´ng minh: <strong>Ná»n kinh táº¿ Ä‘Ã³ng gÃ³i tri thá»©c (Curator Economy)</strong>. Evan khÃ´ng tá»± phÃ¡t minh ra cÃ¡c triáº¿t lÃ½ thÃ nh cÃ´ng. Ã”ng áº¥y chá»‰ Ä‘i thu tháº­p nhá»¯ng phÃ¡t biá»ƒu cá»§a Steve Jobs, Elon Musk, Oprah Winfrey, biÃªn táº­p láº¡i thÃ nh chuá»—i video Top 10 NguyÃªn táº¯c (Top 10 Rules) vÃ  Ä‘Ã³ng gÃ³i chÃºng thÃ nh nhá»¯ng video triá»‡u lÆ°á»£t xem (view).</p>
      
      <p><em>Evan lÃ  má»™t Kiáº¿n trÃºc sÆ° Ä‘Ã³ng gÃ³i giÃ¡ trá»‹ (Active Curator).</em></p>
      
      <p>CÃ²n báº¡n, khi ngá»“i xem nhá»¯ng video Ä‘Ã³ vÃ  gáº­t gÃ¹ tÃ¢m Ä‘áº¯c, báº¡n chá»‰ Ä‘ang Ä‘Ã³ng vai <strong>Káº» tiÃªu thá»¥ thá»¥ Ä‘á»™ng (Passive Consumer - ngÆ°á»i xem thá»¥ Ä‘á»™ng)</strong>. Báº¡n Ä‘ang dÃ¹ng nÄƒng lÆ°á»£ng sinh há»c quÃ½ bÃ¡u cá»§a mÃ¬nh Ä‘á»ƒ cá»‘ng hiáº¿n lÆ°á»£t xem (view), cá»‘ng hiáº¿n dá»¯ liá»‡u cho thuáº­t toÃ¡n váº­n hÃ nh (algorithm) giÃºp Evan kiáº¿m tiá»n tá»« quáº£ng cÃ¡o vÃ  bÃ¡n sÃ¡ch, trong khi báº£n thÃ¢n báº¡n khÃ´ng cÃ³ thÃªm má»™t Ä‘á»“ng nÃ o trong tÃ i khoáº£n.</p>
      
      <p>Báº¡n khÃ´ng cáº§n pháº£i phÃ¡t minh ra bÃ¡nh xe. Báº¡n chá»‰ cáº§n lÃ  bá»™ lá»c cháº¥t lÆ°á»£ng cao cho Ä‘á»™c giáº£ cá»§a mÃ¬nh.</p>
      
      <div style="margin: 32px 0; text-align: center; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.2); box-shadow: 0 4px 30px rgba(0,0,0,0.3); max-width: 480px; margin: 32px auto;">
        <video src="/media/7855350699122.mp4" muted controls playsinline style="width: 100%; display: block;" poster="/media/z7855350983106_e16e2e1d7d12ce7246ed356fc147197a.jpg"></video>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid rgba(255,255,255,0.05);">
          Minh chá»©ng thá»±c táº¿: Giang Ä‘ang táº­p trung nghiÃªn cá»©u tÃ i liá»‡u, chá»n lá»c vÃ  ghi chÃ©p Ä‘á»ƒ chuáº©n bá»‹ Ä‘Ã³ng gÃ³i tri thá»©c chá»§ Ä‘á»™ng.
        </div>
      </div>
      
      <p>Khi báº¡n chuyá»ƒn tá»« vá»‹ tháº¿ cá»§a káº» Ä‘i xem sang vá»‹ tháº¿ cá»§a ngÆ°á»i Ä‘Ã³ng gÃ³i vÃ  phÃ¢n phá»‘i tri thá»©c, báº¡n láº­p tá»©c bÆ°á»›c lÃªn tháº¿ cáº§m cÃ¡i cá»§a cuá»™c chÆ¡i ná»™i dung. Báº¡n sáº½ tháº¥y viá»‡c táº¡o ra sáº£n pháº©m khÃ´ng cÃ²n Ä‘Ã¡ng sá»£ ná»¯a, bá»Ÿi vÃ¬ báº¡n khÃ´ng cáº§n pháº£i lÃ  vÄ© nhÃ¢n, báº¡n chá»‰ cáº§n lÃ  ngÆ°á»i dáº«n Ä‘Æ°á»ng tháº¥u cáº£m biáº¿t Ä‘Ã³ng gÃ³i giÃ¡ trá»‹.</p>
      
      <p><em>Ngá»«ng phÃª Ä‘á»™ng lá»±c hÃ£o huyá»n. HÃ£y báº¯t Ä‘áº§u xÃ¢y dá»±ng Ä‘Ã²n báº©y thá»±c táº¿.</em></p>
      
      <p>If báº¡n muá»‘n há»c cÃ¡ch Giang dÃ¹ng há»‡ thá»‘ng tá»‘i giáº£n Ä‘á»ƒ biáº¿n Ä‘á»‘ng ghi chÃ©p há»—n Ä‘á»™n trong Ä‘áº§u thÃ nh nhá»¯ng sáº£n pháº©m Ä‘Ã²n báº©y thá»±c táº¿, vÃ  cÃ¡ch váº­n hÃ nh má»™t báº£n tin Ä‘á»‹nh ká»³ (newsletter) cháº¥t lÆ°á»£ng cao Ä‘á»ƒ tá»± chá»§ tÃ i chÃ­nh mÃ  khÃ´ng cáº§n cÃ y cuá»‘c Ä‘iÃªn cuá»“ng, hÃ£y ghÃ© thÄƒm <a href="https://gapgiang.com" style="color: #60a5fa; text-decoration: underline;">Gapgiang.com</a>. ChÃ¬a khÃ³a Ä‘Ã£ náº±m sáºµn trong tay báº¡n rá»“i.</p>
    `
  },
  "sleep": {
    title: "Cháº¥t lÆ°á»£ng giáº¥c ngá»§ vs. CÆ¡n má»‡t má»i rÃ£ rá»i má»—i sÃ¡ng: Thu háº¹p khoáº£ng cÃ¡ch phá»¥c há»“i thá»±c cháº¥t",
    tag: "Phá»¥c há»“i thá»ƒ cháº¥t",
    date: "22 ThÃ¡ng 5, 2026",
    content: `
      <p>CÃ³ má»™t sá»± tháº­t tháº¿ nÃ y: Nhá»¯ng ngÆ°á»i hay bá»‹ kiá»‡t sá»©c nháº¥t, thÆ°á»ng láº¡i lÃ  nhá»¯ng ngÆ°á»i cÃ³ trÃ¡ch nhiá»‡m vÃ  lÃ m viá»‡c chÄƒm chá»‰ nháº¥t.</p>
      
      <p>Báº¡n khÃ´ng á»‘m vÃ¬ báº¡n yáº¿u. Báº¡n á»‘m vÃ¬ báº¡n luÃ´n Ä‘áº·t cÃ´ng viá»‡c, dá»± Ã¡n vÃ  sá»± ká»³ vá»ng cá»§a ngÆ°á»i khÃ¡c lÃªn trÃªn giá»›i háº¡n chá»‹u Ä‘á»±ng cá»§a báº£n thÃ¢n. Báº¡n lÃ  má»™t ngÆ°á»i khao khÃ¡t thÃ nh cÃ´ng, vÃ  Ä‘Ã³ lÃ  má»™t Ä‘iá»u cá»±c ká»³ Ä‘Ã¡ng tá»± hÃ o.</p>
      
      <p>NhÆ°ng Ä‘Ã´i khi, chÃ­nh sá»± ná»— lá»±c phi thÆ°á»ng áº¥y láº¡i bá»‹ thá»‹ trÆ°á»ng Ä‘Ã¡nh cáº¯p. Chá»‰ vÃ¬ chÃºng ta thiáº¿u Ä‘i má»™t chÃºt khoáº£ng cÃ¡ch thÃ´ng tin (Gap) vá» chÃ­nh sinh má»‡nh cá»§a mÃ¬nh. HÃ´m nay, Giang muá»‘n chia sáº» vá»›i báº¡n má»™t "chiáº¿c la bÃ n" vÃ´ cÃ¹ng Ä‘Æ¡n giáº£n Ä‘á»ƒ báº¡n báº£o vá»‡ trá»n váº¹n thÃ nh quáº£ lao Ä‘á»™ng cá»§a mÃ¬nh, Ä‘á»ƒ báº¡n lÃºc nÃ o cÅ©ng á»Ÿ tháº¿ chá»§ Ä‘á»™ng.</p>
      
      <h3>1. Tráº¡m thu phÃ­ mang tÃªn "Sá»± cá»‘ cháº¥p"</h3>
      <p>SÃ¡ng nay thá»©c dáº­y, báº¡n tháº¥y ngÆ°á»i hÆ¡i hÃ¢m háº¥p, Ä‘áº§u náº·ng trÄ©u. Trá»±c giÃ¡c bÃ¡o cho báº¡n biáº¿t cÆ¡ thá»ƒ Ä‘ang báº¥t á»•n. NhÆ°ng vÃ¬ hÃ´m nay cÃ³ má»™t cuá»™c há»p quan trá»ng, hoáº·c má»™t há»£p Ä‘á»“ng cáº§n kÃ½, báº¡n tá»± nhá»§: "Uá»‘ng cá»‘c cafe rá»“i cá»‘ lÃ m ná»‘t". ÄÃ³ lÃ  báº£n nÄƒng cá»§a nhá»¯ng ngÆ°á»i giá»i: KhÃ´ng bao giá» chá»‹u lÃ¹i bÆ°á»›c.</p>
      
      <p>NhÆ°ng cuá»™c chÆ¡i láº¡i tÃ n khá»‘c á»Ÿ chá»—: Cuá»™c há»p hÃ´m Ä‘Ã³ báº¡n khÃ´ng chá»‘t Ä‘Æ°á»£c há»£p Ä‘á»“ng (deal) vÃ¬ nÄƒng lÆ°á»£ng cáº¡n kiá»‡t. VÃ  sÃ¡ng hÃ´m sau, báº¡n chÃ­nh thá»©c "sáº­p nguá»“n", sá»‘t cao, náº±m báº¹p trÃªn giÆ°á»ng máº¥t trÃ²n má»™t tuáº§n. Báº¡n máº¥t 1 tuáº§n cÆ¡ há»™i, máº¥t Ä‘i nhá»‹p Ä‘á»™ cÃ´ng viá»‡c, vÃ  quan trá»ng nháº¥t, sá»± váº¥t váº£ cá»§a báº¡n khÃ´ng Ä‘Æ°á»£c Ä‘á»n Ä‘Ã¡p xá»©ng Ä‘Ã¡ng.</p>
      
      <blockquote>
        "ChÃºng ta hoÃ n toÃ n xá»©ng Ä‘Ã¡ng vá»›i má»™t káº¿t quáº£ tá»‘t hÆ¡n tháº¿ ráº¥t nhiá»u. Báº¡n cÃ³ nÄƒng lá»±c, you chá»‰ Ä‘ang thiáº¿u má»™t cÃ´ng cá»¥ Ä‘á»ƒ biáº¿t chÃ­nh xÃ¡c khi nÃ o cáº§n Ä‘áº¡p phanh."
      </blockquote>
      
      <h3>2. Dá»¯ liá»‡u sinh há»c: Chiáº¿c la bÃ n cá»§a ngÆ°á»i lÃ m chá»§</h3>
      <p>Giang cÅ©ng tá»«ng quen vá»›i viá»‡c tá»± Ã©p mÃ¬nh "cá»‘ thÃªm chÃºt ná»¯a", cho Ä‘áº¿n khi Giang tÃ¬m ra cÃ¡ch lÃ m chá»§ luá»“ng thÃ´ng tin nÃ y. Gáº§n Ä‘Ã¢y, cÃ³ má»™t buá»•i sÃ¡ng Giang thá»©c dáº­y vá»›i cáº£m giÃ¡c uá»ƒ oáº£i vÃ  muá»‘n lá»‹m Ä‘i. Theo thÃ³i quen cÅ©, Giang Ä‘á»‹nh pha má»™t áº¥m trÃ  Ä‘áº·c Ä‘á»ƒ tiáº¿p tá»¥c cÃ y cuá»‘c. NhÆ°ng khi nhÃ¬n xuá»‘ng chiáº¿c Ä‘á»“ng há»“ thÃ´ng minh trÃªn tay, Giang tháº¥y má»™t tÃ­n hiá»‡u thÃº vá»‹: Chá»‰ sá»‘ phá»¥c há»“i cÆ¡ thá»ƒ (HRV - biáº¿n thiÃªn nhá»‹p tim) Ä‘ang tá»¥t dá»‘c, vÃ  nÄƒng lÆ°á»£ng cháº¡m Ä‘Ã¡y.</p>
      
      <p>Thay vÃ¬ cá»‘ cháº¥p, Giang má»‰m cÆ°á»i nháº­n ra cÆ¡ thá»ƒ Ä‘ang gá»­i má»™t thÃ´ng Ä‘iá»‡p ráº¥t chÃ¢n thÃ nh: "Náº¿u tiáº¿p tá»¥c, cáº­u sáº½ pháº£i tráº£ giÃ¡ Ä‘áº¯t". Giang gá»i Ä‘iá»‡n dá»i lá»‹ch há»p, uá»‘ng má»™t cá»‘c nÆ°á»›c Ã©p, táº¯t Ä‘iá»‡n thoáº¡i vÃ  ngá»§ sÃ¢u thÃªm 2 tiáº¿ng Ä‘á»“ng há»“. Tháº­t tuyá»‡t vá»i, buá»•i chiá»u tá»‰nh dáº­y, nÄƒng lÆ°á»£ng cá»§a Giang Ä‘Ã£ quay trá»Ÿ láº¡i. Giang Ä‘Ã£ nháº¹ nhÃ ng láº­t ngÆ°á»£c tháº¿ cá», nÃ© Ä‘Æ°á»£c má»™t cÆ¡n báº¡o bá»‡nh cÃ³ thá»ƒ cÆ°á»›p Ä‘i 1 tuáº§n lÃ m viá»‡c, chá»‰ nhá» viá»‡c biáº¿t cÃ¡ch Ä‘á»c thÃ´ng tin cÆ¡ thá»ƒ trÆ°á»›c 24 giá».</p>
      
      <div style="margin: 32px 0; text-align: center; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.2); box-shadow: 0 4px 30px rgba(0,0,0,0.3); max-width: 480px; margin: 32px auto;">
        <video src="/media/giang-transformation-1.mp4" autoplay loop muted playsinline controls style="width: 100%; display: block;" poster="/media/giang-after-2.jpg"></video>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid rgba(255,255,255,0.05);">
          Minh chá»©ng thá»±c táº¿: Táº­p luyá»‡n ká»· luáº­t káº¿t há»£p tá»‘i Æ°u sinh há»c (Bio-hacking) giÃºp Giang giá»¯ nÄƒng lÆ°á»£ng luÃ´n á»Ÿ Ä‘á»‰nh cao mÃ  khÃ´ng sáº­p nguá»“n.
        </div>
      </div>
      
      <blockquote>
        "Quáº£n trá»‹ Ä‘Æ°á»£c dÃ²ng tiá»n lÃ  má»™t ká»¹ nÄƒng xuáº¥t sáº¯c, nhÆ°ng quáº£n trá»‹ Ä‘Æ°á»£c nÄƒng lÆ°á»£ng sinh tá»“n má»›i lÃ  chÃ¬a khÃ³a Ä‘á»ƒ báº¡n Ä‘i Ä‘Æ°á»ng dÃ i."
      </blockquote>
      
      <h3>3. Chiáº¿c chÃ¬a khÃ³a luÃ´n náº±m trong tay báº¡n</h3>
      <p>Chiáº¿c Ä‘á»“ng há»“ thÃ´ng minh thá»±c ra chá»‰ lÃ  cÃ´ng cá»¥. Váº¥n Ä‘á» cá»‘t lÃµi náº±m á»Ÿ tÆ° duy tuyá»‡t vá»i cá»§a báº¡n. Báº¡n Ä‘Ã£ Ä‘á»§ thÃ´ng minh Ä‘á»ƒ giáº£i quyáº¿t hÃ ng tÃ¡ váº¥n Ä‘á» phá»©c táº¡p ngoÃ i thÆ°Æ¡ng trÆ°á»ng, thÃ¬ viá»‡c Ä‘á»c má»™t chá»‰ sá»‘ cÆ¡ thá»ƒ Ä‘á»ƒ báº¥m nÃºt dá»«ng Ä‘Ãºng lÃºc hoÃ n toÃ n náº±m trong táº§m tay báº¡n. Khoáº£ng cÃ¡ch giá»¯a viá»‡c biáº¿t trÆ°á»›c Ä‘á»ƒ dá»«ng láº¡i, vÃ  viá»‡c cá»‘ cháº¥p Ä‘á»ƒ rá»“i kiá»‡t sá»©c... chÃ­nh lÃ  khoáº£ng thá»i gian quÃ½ bÃ¡u mÃ  báº¡n cÃ³ thá»ƒ dÃ¹ng Ä‘á»ƒ táº¡o ra nhá»¯ng bÆ°á»›c nháº£y vá»t má»›i.</p>
      
      <p>HÃ£y láº¯ng nghe cÆ¡ thá»ƒ. Khá»Ÿi Ä‘áº§u tá»« viá»‡c nhá» nháº¥t: Cho phÃ©p mÃ¬nh Ä‘Æ°á»£c nghá»‰ ngÆ¡i ngay khi cÆ¡ thá»ƒ phÃ¡t ra tÃ­n hiá»‡u Ä‘áº§u tiÃªn. Äá»«ng Ä‘á»ƒ nÄƒng lÆ°á»£ng bá»‹ sáº­p nguá»“n. HÃ£y báº¯t Ä‘áº§u giÃ nh láº¡i quyá»n chá»§ Ä‘á»™ng ngay hÃ´m nay nhÃ©, Giang tin lÃ  báº¡n lÃ m Ä‘Æ°á»£c!</p>
    `
  },
  "builder": {
    title: "Thá»£ xÃ¢y cÃ´ng nghá»‡ vs. Kiáº¿n trÃºc sÆ° cuá»™c Ä‘á»i",
    tag: "Quy trÃ¬nh há»‡ thá»‘ng",
    date: "17 ThÃ¡ng 5, 2026",
    content: `
      <p>CÃ³ má»™t nghá»‹ch lÃ½ tháº¿ nÃ y: Báº¡n bá» ra hÃ ng triá»‡u Ä‘á»“ng mua cÃ¡c á»©ng dá»¥ng quáº£n lÃ½ cÃ´ng viá»‡c Ä‘áº¯t tiá»n, dÃ nh cáº£ tuáº§n trá»i Ä‘á»ƒ thiáº¿t láº­p (set-up) cÃ¡c á»©ng dá»¥ng quáº£n lÃ½ cÃ´ng viá»‡c (Notion) vÃ  ghi chÃº (Obsidian), rá»“i táº£i vá» hÃ ng tÃ¡ cÃ´ng cá»¥ trÃ­ tuá»‡ nhÃ¢n táº¡o (AI) má»›i nháº¥t vá»›i hi vá»ng chÃºng sáº½ thay Ä‘á»•i hiá»‡u suáº¥t cá»§a báº¡n. Äá»ƒ rá»“i cuá»‘i cÃ¹ng, báº¡n nháº­n ra mÃ¬nh váº«n trÃ¬ hoÃ£n, ngáº­p Ä‘áº§u trong Ä‘á»‘ng viá»‡c dá»Ÿ dang vÃ  Ä‘áº§u Ã³c hoÃ n toÃ n há»—n loáº¡n.</p>
      
      <p>Báº¡n khÃ´ng há» lÆ°á»i biáº¿ng. Báº¡n chá»‰ Ä‘ang rÆ¡i vÃ o cÃ¡i báº«y cá»§a má»™t <strong>thá»£ xÃ¢y cÃ´ng nghá»‡</strong> â€” cá»‘ gáº¯ng nháº·t nháº¡nh tháº­t nhiá»u gáº¡ch Ä‘Ã¡ (cÃ´ng cá»¥) mÃ  hoÃ n toÃ n thiáº¿u Ä‘i má»™t báº£n thiáº¿t káº¿ quy trÃ¬nh lÃµi cho ngÃ´i nhÃ  cuá»™c Ä‘á»i mÃ¬nh. Khoáº£ng cÃ¡ch (Gap - khoáº£ng trá»‘ng) á»Ÿ Ä‘Ã¢y chÃ­nh lÃ  sá»± lá»‡ch pha giá»¯a sá»± hÃ o nhoÃ¡ng cá»§a cÃ´ng cá»¥ ngoÃ i kia vÃ  nÄƒng lá»±c thá»±c thi tá»‘i giáº£n thá»±c táº¿ cá»§a báº¡n.</p>
      
      <blockquote>
        "NÄƒng lÆ°á»£ng cá»§a chÃºng ta lÃ  há»¯u háº¡n, trong khi cÃ´ng cá»¥ ngoÃ i kia lÃ  vÃ´ háº¡n. Muá»‘n lÃ m chá»§ hiá»‡u suáº¥t, báº¡n pháº£i lÃ m kiáº¿n trÃºc sÆ° thiáº¿t káº¿ quy trÃ¬nh trÆ°á»›c khi mua gáº¡ch."
      </blockquote>
      
      <p>TÃ´i tá»«ng lÃ  má»™t thá»£ xÃ¢y nhÆ° tháº¿. CÃ y cuá»‘c thÃ¢u Ä‘Ãªm suá»‘t sÃ¡ng, thá»­ nghiá»‡m hÃ ng chá»¥c á»©ng dá»¥ng (app) má»›i, nhÃ©t Ä‘áº§y rÃ¡c dá»¯ liá»‡u vÃ o Ä‘áº§u Ä‘á»ƒ rá»“i Ä‘á»•i láº¡i chá»‰ lÃ  sá»± trá»‘ng rá»—ng vÃ  báº¿ táº¯c. Thay vÃ¬ tiáº¿p tá»¥c cháº¡y Ä‘ua nhá»“i nhÃ©t cÃ´ng nghá»‡ má»™t cÃ¡ch vÃ´ thá»©c vá»›i áº£o tÆ°á»Ÿng gia tÄƒng nÄƒng suáº¥t tá»©c thá»i, tÃ´i há»c cÃ¡ch ngá»“i xuá»‘ng vÃ  tá»‘i giáº£n hÃ³a.</p>
      
      <div style="margin: 32px 0; text-align: center; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.2); box-shadow: 0 4px 30px rgba(0,0,0,0.3); max-width: 480px; margin: 32px auto;">
        <video src="/media/7855350892184.mp4" muted controls playsinline style="width: 100%; display: block;" poster="/media/z7855351717574_2eb223785ddfc4c5f4a8677f56c076fb.jpg"></video>
        <div style="padding: 12px; background: rgba(255,255,255,0.02); font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid rgba(255,255,255,0.05);">
          Nháº­t kÃ½ thá»±c táº¿: Giang ngá»“i thÃ¢u Ä‘Ãªm lÃ m viá»‡c trÆ°á»›c mÃ¡y tÃ­nh, kiá»‡t sá»©c vÃ  báº¿ táº¯c trÆ°á»›c khi tá»± thiáº¿t láº­p cÃ¡c quy trÃ¬nh tá»± váº­n hÃ nh.
        </div>
      </div>
      
      <p><strong>Giáº£i phÃ¡p tá»‘i giáº£n:</strong> HÃ£y ngá»«ng Ä‘Äƒng kÃ½ á»©ng dá»¥ng (app) má»›i ngay hÃ´m nay. Báº¯t Ä‘áº§u báº±ng má»™t cÃ¢y bÃºt vÃ  tá» giáº¥y tráº¯ng: Váº½ ra Ä‘Ãºng 3 quy trÃ¬nh lÃµi báº¡n cáº§n lÃ m má»—i ngÃ y Ä‘á»ƒ táº¡o ra 80% káº¿t quáº£ cÃ´ng viá»‡c. Khi quy trÃ¬nh trÃªn giáº¥y Ä‘Ã£ cháº¡y mÆ°á»£t mÃ , lÃºc Ä‘Ã³ má»›i Ä‘Æ°a cÃ´ng nghá»‡ vÃ o Ä‘á»ƒ tá»± Ä‘á»™ng hÃ³a. HÃ£y Ä‘Æ°a cÃ´ng cá»¥ vá» Ä‘Ãºng vá»‹ trÃ­ lÃ m thá»£ xÃ¢y gÃµ gáº¡ch cho báº£n thiáº¿t káº¿ cá»§a báº¡n.</p>
    `
  },
  "ikigai": {
    title: "Tá»‘i Æ°u hÃ³a Ä‘á»‹nh vá»‹: Thu háº¹p khoáº£ng cÃ¡ch giÃ¡ bÃ¡n sáº£n pháº©m",
    tag: "Äá»‹nh vá»‹ giÃ¡ trá»‹",
    date: "8 ThÃ¡ng 5, 2026",
    content: `
      <p>Báº¡n cÃ³ má»™t sáº£n pháº©m hoáº·c dá»‹ch vá»¥ cá»±c ká»³ tá»‘t, Ä‘Æ°á»£c Ä‘áº§u tÆ° tá»‰ má»‰ tá»«ng chi tiáº¿t, nhÆ°ng khi mang ra thá»‹ trÆ°á»ng, báº¡n luÃ´n pháº£i <strong>bÃ¡n vá»›i giÃ¡ ráº» máº¡t</strong> hoáº·c cháº­t váº­t tÃ¬m kiáº¿m nhá»¯ng khÃ¡ch hÃ ng thá»±c sá»± hiá»ƒu giÃ¡ trá»‹ cá»§a nÃ³. Trong khi Ä‘Ã³, Ä‘á»‘i thá»§ cÃ³ sáº£n pháº©m bÃ¬nh thÆ°á»ng hÆ¡n láº¡i Ä‘Æ°á»£c sÄƒn Ä‘Ã³n vá»›i giÃ¡ cao ngáº¥t ngÆ°á»Ÿng. Báº¡n tá»± há»i táº¡i sao sáº£n pháº©m tá»‘t cá»§a mÃ¬nh láº¡i bá»‹ thá»‹ trÆ°á»ng ngÃ³ lÆ¡?</p>
      
      <p>Nhiá»u ngÆ°á»i vá»™i vÃ ng Ä‘á»• lá»—i cho thá»‹ trÆ°á»ng suy thoÃ¡i hay Ä‘á»‘i thá»§ phÃ¡ giÃ¡. NhÆ°ng khoáº£ng cÃ¡ch thá»±c táº¿ (Gap) á»Ÿ Ä‘Ã¢y láº¡i náº±m á»Ÿ Ä‘á»‹nh vá»‹ giÃ¡ trá»‹ vÃ  Ä‘á»©t gÃ£y káº¿t ná»‘i truyá»n thÃ´ng. Báº¡n quÃ¡ táº­p trung vÃ o mÃ´ táº£ tÃ­nh nÄƒng ká»¹ thuáº­t mÃ  quÃªn máº¥t viá»‡c Ä‘Ã³ng gÃ³i giÃ¡ trá»‹ Ä‘á»ƒ khÃ¡ch hÃ ng hiá»ƒu Ä‘Æ°á»£c sáº£n pháº©m sáº½ giáº£i quyáº¿t ná»—i Ä‘au cá»‘t lÃµi cá»§a há» nhÆ° tháº¿ nÃ o.</p>
      
      <blockquote>
        "KhÃ¡ch hÃ ng khÃ´ng mua tÃ­nh nÄƒng cá»§a sáº£n pháº©m. Há» mua phiÃªn báº£n tá»‘t hÆ¡n cá»§a chÃ­nh há» sau khi sá»­ dá»¥ng sáº£n pháº©m cá»§a báº¡n."
      </blockquote>
      
      <p>Äá»‹nh vá»‹ sáº¯c bÃ©n khÃ´ng Ä‘áº¿n tá»« viá»‡c báº¡n cá»‘ hÃ©t to hÆ¡n trÃªn máº¡ng xÃ£ há»™i, mÃ  Ä‘áº¿n tá»« thiáº¿t káº¿ há»‡ thá»‘ng Ä‘Ã³ng gÃ³i giÃ¡ trá»‹ khá»›p khÃ­t vá»›i nhu cáº§u thá»±c táº¿ cá»§a Ä‘á»™c giáº£. Khi báº¡n nÃ³i ngÃ´n ngá»¯ ká»¹ thuáº­t cao siÃªu, báº¡n Ä‘ang Ä‘áº©y ngÆ°á»i Ä‘á»c ra xa. Khi báº¡n nÃ³i ngÃ´n ngá»¯ giáº£i quyáº¿t ná»—i Ä‘au Ä‘á»i thÆ°á»ng cá»§a há», báº¡n kÃ©o há» láº¡i gáº§n.</p>
      
      <p><strong>Giáº£i phÃ¡p tá»‘i giáº£n:</strong> HÃ£y Ä‘Æ¡n giáº£n hÃ³a thÃ´ng Ä‘iá»‡p bÃ¡n hÃ ng cá»§a báº¡n. Loáº¡i bá» má»i danh má»¥c (menu) rÆ°á»m rÃ , táº­p trung truyá»n thÃ´ng chÃ­nh xÃ¡c 1 ná»—i Ä‘au duy nháº¥t mÃ  sáº£n pháº©m cá»§a báº¡n giáº£i quyáº¿t xuáº¥t sáº¯c nháº¥t. ÄÃ³ng gÃ³i láº¡i giÃ¡ trá»‹ dá»±a trÃªn hiá»‡u quáº£ thá»±c táº¿ Ä‘em láº¡i cho khÃ¡ch hÃ ng thay vÃ¬ Ä‘á» giÃ¡ theo kiá»ƒu cÆ¡ báº¯p.</p>
    `
  },
  "trading": {
    title: "Há»‡ thá»‘ng cáº£m xÃºc: Giáº£i phÃ¡p khi thu khÃ´ng Ä‘á»§ chi",
    tag: "Quáº£n trá»‹ hÃ nh vi",
    date: "1 ThÃ¡ng 5, 2026",
    content: `
      <p>Táº¡i sao cÃ³ nhá»¯ng thÃ¡ng báº¡n lÃ m lá»¥ng cáº­t lá»±c, cÃ y cuá»‘c thÃ¢u Ä‘Ãªm suá»‘t sÃ¡ng vÃ  kiáº¿m Ä‘Æ°á»£c dÃ²ng tiá»n ráº¥t khÃ¡, nhÆ°ng cuá»‘i cÃ¹ng tÃ i khoáº£n váº«n rÆ¡i vÃ o tráº¡ng thÃ¡i <strong>thu khÃ´ng Ä‘á»§ chi</strong>? Hoáº·c khi Ä‘á»‘i máº·t vá»›i cÃ¡c quyáº¿t Ä‘á»‹nh chi tiÃªu vÃ  Ä‘áº§u tÆ° tÃ i chÃ­nh, báº¡n thÆ°á»ng xuyÃªn bá»‹ cuá»‘n vÃ o vÃ²ng xoÃ¡y cá»§a lÃ²ng tham vÃ  sá»± sá»£ hÃ£i nháº¥t thá»i?</p>
      
      <p>Cá»‘ gáº¯ng kiá»ƒm soÃ¡t tiá»n báº¡c hay thá»‹ trÆ°á»ng báº±ng má»™t tÃ¢m trÃ­ há»—n loáº¡n cáº£m xÃºc lÃ  con Ä‘Æ°á»ng nhanh nháº¥t dáº«n tá»›i sá»± Ä‘á»• vá»¡. Khoáº£ng cÃ¡ch thá»±c táº¿ (Gap) á»Ÿ Ä‘Ã¢y lÃ  khoáº£ng cÃ¡ch lá»›n giá»¯a mong muá»‘n tá»± do tÃ i chÃ­nh dÃ i háº¡n vÃ  sá»± thiáº¿u thá»‘n cá»§a má»™t há»‡ thá»‘ng ranh giá»›i váº­n hÃ nh khÃ¡ch quan.</p>
      
      <blockquote>
        "Ká»· luáº­t tÃ i chÃ­nh thá»±c cháº¥t khÃ´ng pháº£i lÃ  sá»± kÃ¬m káº¹p báº£n thÃ¢n, mÃ  lÃ  thiáº¿t láº­p má»™t há»‡ thá»‘ng ranh giá»›i tá»± Ä‘á»™ng Ä‘á»ƒ cáº£m xÃºc bá»‘c Ä‘á»“ng khÃ´ng cÃ³ cÆ¡ há»™i can thiá»‡p."
      </blockquote>
      
      <p>Con ngÆ°á»i lÃ  sinh váº­t bá»‹ chi phá»‘i bá»Ÿi cáº£m xÃºc nháº¥t thá»i. Náº¿u báº¡n chá»‰ dá»±a vÃ o "Ã½ chÃ­" hay sá»± quyáº¿t tÃ¢m Ä‘á»ƒ tiáº¿t kiá»‡m vÃ  Ä‘áº§u tÆ°, báº¡n cháº¯c cháº¯n sáº½ tháº¥t báº¡i trÆ°á»›c cÃ¡c cÃ¡m dá»— tiÃªu dÃ¹ng. Äá»ƒ giáº£i quyáº¿t, báº¡n cáº§n lÆ°á»£ng hÃ³a vÃ  tá»± Ä‘á»™ng hÃ³a.</p>
      
      <p><strong>Giáº£i phÃ¡p tá»‘i giáº£n:</strong> Ãp dá»¥ng nguyÃªn lÃ½ 'Giá»›i' (thiáº¿t láº­p ranh giá»›i cá»©ng). HÃ£y tá»± Ä‘á»™ng hÃ³a hoÃ n toÃ n dÃ²ng tiá»n ngay khi nháº­n thu nháº­p: Tá»± Ä‘á»™ng trÃ­ch 20% vÃ o tÃ i khoáº£n tÃ­ch lÅ©y khÃ´ng rÃºt Ä‘Æ°á»£c, Ä‘áº·t háº¡n má»©c cá»©ng cho tÃ i khoáº£n chi tiÃªu hÃ ng ngÃ y. Khi báº¡n ngáº¯t káº¿t ná»‘i cáº£m xÃºc khá»i quyá»n truy cáº­p tiá»n báº¡c bá»‘c Ä‘á»“ng, tÃ i khoáº£n cá»§a báº¡n sáº½ ngá»«ng rÃ² rá»‰.</p>
    `
  },
  "kieu-toc": {
    title: "Chuyá»‡n cÃ¡i tÃ³c vÃ  cÆ¡n Ä‘á»™c thoáº¡i cá»§a má»™t gÃ£ sá»£ \"mÃ²n\"",
    tag: "LÃ m má»›i báº£n thÃ¢n",
    date: "26 ThÃ¡ng 5, 2026",
    content: `
      <p>Má»™t buá»•i sÃ¡ng soi gÆ°Æ¡ng cháº£i Ä‘áº§u, tÃ´i giáº­t mÃ¬nh nhÃ¬n gÃ£ trong gÆ°Æ¡ng: Ã” hay, cÃ¡i quáº£ Ä‘áº§u ráº½ ngÃ´i Ä‘Ã³ng bÄƒng suá»‘t 5 nÄƒm rÃ²ng rÃ£ khÃ´ng há» xÃª dá»‹ch má»™t milimet!</p>
      
      <p>TÃ´i chá»£t nháº­n ra má»™t sá»± tháº­t tráº§n trá»¥i: ÄÃ n Ã´ng chÃºng ta thÆ°á»ng ráº¥t giá»i "hÆ°á»›ng ngoáº¡i". Ra Ä‘Æ°á»ng thÃ¬ chÃ©m giÃ³ vÄ© mÃ´ kinh táº¿ toÃ n cáº§u oai phong láº«m liá»‡t, Ä‘Ã m phÃ¡n thÆ°Æ¡ng vá»¥ nghÃ¬n Ä‘Ã´, thiáº¿t láº­p quan há»‡ ngoáº¡i giao xa gáº§n... Tháº¿ mÃ  ngoáº£nh Ä‘i ngoáº£nh láº¡i, cÃ¡i Ä‘áº§u tÃ³c cá»§a chÃ­nh mÃ¬nh láº¡i má»c rÃªu phong tá»« lÃºc nÃ o khÃ´ng biáº¿t. ChÃºng ta báº­n rá»™n chÄƒm lo cho cáº£ tháº¿ giá»›i, nhÆ°ng láº¡i quÃªn máº¥t viá»‡c "báº£o dÆ°á»¡ng" cho chÃ­nh phiÃªn báº£n Ä‘á»i thá»±c cá»§a mÃ¬nh.</p>
      
      <p>Äá»ƒ mÃ£i má»™t kiá»ƒu tÃ³c cÅ© mÃ¨m thá»±c cháº¥t khÃ´ng pháº£i lÃ  sá»± á»•n Ä‘á»‹nh, mÃ  lÃ  má»™t sá»± Ä‘áº§u hÃ ng tháº§m láº·ng trÆ°á»›c cÃ¡i sá»± táº» nháº¡t cá»§a quÃ¡n tÃ­nh cuá»™c sá»‘ng!</p>
      
      <p>Tháº¿ lÃ  tá»‘i qua, tÃ´i quyáº¿t Ä‘á»‹nh lÃ m má»™t cuá»™c "ná»•i loáº¡n Ã´n hÃ²a" vá»›i chi phÃ­ 0 Ä‘á»“ng. TÃ´i chá»¥p ngay quáº£ áº£nh chÃ¢n dung tháº³ng tháº¯n cá»§a mÃ¬nh, náº¡p tháº³ng vÃ o AI vÃ  ra lá»‡nh cho nÃ³ F5 diá»‡n máº¡o vá»›i 15 kiá»ƒu tÃ³c hot trend nam tá»« Trung sang HÃ n.</p>
      
      <p>LÃºc nháº­n káº¿t quáº£ tá»« AI, tÃ´i suÃ½t sáº·c ngá»¥m nÆ°á»›c vÃ¬ cÆ°á»i bÃ². CÃ³ nhá»¯ng quáº£ tÃ³c AI ghÃ©p trÃ´ng tháº£m há»a khÃ´ng chá»‹u ná»•i: kiá»ƒu "mÃ¡i dÃ i Ã©p tháº³ng" trÃ´ng cháº£ khÃ¡c gÃ¬ cÃ¡i gÃ¡o dá»«a Ãºp ngÆ°á»£c lÃªn Ä‘áº§u, cÃ²n kiá»ƒu "xoÄƒn xÃ¹ mÃ¬" thÃ¬ y há»‡t nhÆ° Ãºp vá»™i bÃ¡t mÃ¬ tÃ´m Háº£o Háº£o lÃªn Ä‘áº§u váº­y! NhÆ°ng bÃ¹ láº¡i, cÅ©ng cÃ³ nhá»¯ng quáº£ side part 7/3 hay textured crop nhÃ¬n cÅ©ng báº£nh tá»n, ra dÃ¡ng tá»•ng tÃ i pháº¿t.</p>
      
      <p>Tá»« cÃ¡i báº£ng ghÃ©p tÃ³c dá»Ÿ khÃ³c dá»Ÿ cÆ°á»i Ä‘Ã³, tÃ´i ngá»™ ra má»™t chÃ¢n lÃ½ cá»±c ká»³ sÃ¢u sáº¯c: 
      Thay Ä‘á»•i kiá»ƒu tÃ³c thá»±c ra khÃ´ng Ä‘Æ¡n thuáº§n lÃ  chuyá»‡n cáº¯t bá»›t vÃ i cá»ng tÃ³c. ÄÃ³ lÃ  má»™t nguá»“n cáº£m há»©ng, lÃ  nghi thá»©c "yÃªu báº£n thÃ¢n" cá»±c ká»³ Ä‘Ãºng cÃ¡ch vÃ  thá»±c táº¿. ChÃºng ta cá»© máº£i mÃª tÃ¬m kiáº¿m nhá»¯ng nguá»“n Ä‘á»™ng lá»±c to tÃ¡t á»Ÿ Ä‘Ã¢u xa, trong khi viá»‡c F5 láº¡i diá»‡n máº¡o chÃ­nh lÃ  cÃ¡ch Ä‘Æ¡n giáº£n nháº¥t, tá»‘n Ã­t tiá»n nháº¥t mÃ  hiá»‡u quáº£ kÃ­ch hoáº¡t láº¡i sinh khÃ­ láº¡i cá»±c ká»³ cao!</p>
      
      <p>ÄÃ´i khi, Ä‘á»ƒ cuá»™c sá»‘ng bá»›t nhÃ m chÃ¡n, chÃºng ta chá»‰ cáº§n dÃ¡m "bá»›t oai" Ä‘i má»™t chÃºt, dÃ¡m tá»± trÃ o trÆ°á»›c nhá»¯ng phiÃªn báº£n má»›i láº¡ (vÃ  Ä‘Ã´i khi lÃ  táº¥u hÃ i) cá»§a chÃ­nh mÃ¬nh. Náº¿u báº¡n cÅ©ng Ä‘ang tháº¥y cuá»™c sá»‘ng hÆ¡i "lÃ¬", Ä‘áº§u Ã³c hÆ¡i "mÃ²n", hÃ£y thá»­ F5 báº£n thÃ¢n ngay Ä‘i. Biáº¿t Ä‘Ã¢u báº¡n sáº½ tÃ¬m tháº¥y má»™t phiÃªn báº£n cá»±c ká»³ thÃº vá»‹ cá»§a mÃ¬nh thÃ¬ sao?</p>
      
      <p>ðŸ‘‰ Xem vÃ  tháº£o luáº­n cÃ¹ng Giang trÃªn Facebook: <a href="https://www.facebook.com/123321avc/" target="_blank" rel="noopener noreferrer">123321avc</a></p>
      
      <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 32px 0;" />
      
      <h3>HÆ¯á»šNG DáºªN Táº O áº¢NH INFOGRAPHIC 15 KIá»‚U TÃ“C Báº°NG GPT</h3>
      <p>Äá»ƒ táº¡o Ä‘Æ°á»£c bá»©c áº£nh phÃ¢n tÃ­ch kiá»ƒu tÃ³c hot trend cá»±c ká»³ nháº¥t quÃ¡n vÃ  hÃ i hÆ°á»›c nhÆ° trÃªn, báº¡n chá»‰ cáº§n sá»­ dá»¥ng ChatGPT (phiÃªn báº£n GPT-4o hoáº·c Claude 3.5 Sonnet) vÃ  thá»±c hiá»‡n theo hÆ°á»›ng dáº«n siÃªu Ä‘Æ¡n giáº£n dÆ°á»›i Ä‘Ã¢y:</p>
      
      <p><strong>BÆ°á»›c 1: Chuáº©n bá»‹ áº£nh gá»‘c</strong></p>
      <ul>
        <li>Chá»n má»™t bá»©c áº£nh chÃ¢n dung nhÃ¬n tháº³ng, rÃµ máº·t, Ã¡nh sÃ¡ng tá»‘t, biá»ƒu cáº£m tá»± nhiÃªn nháº¥t cá»§a báº¡n.</li>
      </ul>
      
      <p><strong>BÆ°á»›c 2: Táº£i áº£nh lÃªn GPT vÃ  cháº¡y Prompt máº«u</strong></p>
      <p>Táº£i bá»©c áº£nh cá»§a báº¡n lÃªn khung chat cá»§a GPT, sau Ä‘Ã³ copy prompt bÃªn dÆ°á»›i dÃ¡n vÃ o Ä‘á»ƒ AI tá»± Ä‘á»™ng hoÃ¡n Ä‘á»•i kiá»ƒu tÃ³c trÃªn gÆ°Æ¡ng máº·t báº¡n nhÃ©:</p>
      
      <!-- Há»˜P CHá»¨A PROMPT CAO Cáº¤P Vá»šI NÃšT COPY -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; margin: 24px 0; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
        <!-- Header cá»§a code block -->
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
        <!-- Ná»™i dung code block -->
        <div id="kieu-toc-prompt-text" style="padding: 16px 20px; font-family: 'Fira Code', 'Courier New', Courier, monospace; font-size: 0.85rem; line-height: 1.6; color: #cbd5e1; max-height: 400px; overflow-y: auto; white-space: pre-wrap; word-break: break-word; background: rgba(15, 23, 42, 0.4);">Create a high-quality â€œAI hairstyle analysis boardâ€ infographic using the uploaded face photo.

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
â€œsame person trying different hairstylesâ€
NOT:
â€œdifferent people with similar facesâ€.

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
  â€œPHÃ‚N TÃCH KIá»‚U TÃ“C HOT TREND NAM TRUNG QUá»Câ€

Three sections:

1. KIá»‚U HOT & PHÃ™ Há»¢P
2. KIá»‚U ÄÃNG THá»¬
3. KHÃ”NG PHÃ™ Há»¢P

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
* quiff HÃ n Quá»‘c
* french crop
* middle part
* undercut vuá»‘t ngÆ°á»£c
* mÃ¡i dÃ i Ã©p tháº³ng
* xoÄƒn xÃ¹ mÃ¬
* mohican quÃ¡ cao

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
      
      <p><strong>BÆ°á»›c 3: Táº£i áº£nh káº¿t quáº£ vá» vÃ  chia sáº»</strong></p>
      <p>GPT sáº½ tá»± Ä‘á»™ng xá»­ lÃ½ vÃ  tráº£ vá» cho báº¡n má»™t táº¥m báº£ng infographic phÃ¢n tÃ­ch kiá»ƒu tÃ³c cá»±c kÃ¬ báº£nh bao nhÆ°ng cÅ©ng khÃ´ng kÃ©m pháº§n hÃ i hÆ°á»›c, giá»¯ nguyÃªn váº¹n 100% gÆ°Æ¡ng máº·t thá»±c cá»§a báº¡n. Báº¡n chá»‰ cáº§n táº£i vá» Ä‘em Ä‘i F5 báº£n thÃ¢n hoáº·c Ä‘i khoe vá»›i báº¡n bÃ¨ thÃ´i!</p>
    `
  }
}

// â”€â”€â”€ DYNAMIC COPY PROMPT LOGIC â”€â”€â”€
window.copyKieuTocPrompt = function(btn) {
  const text = document.getElementById('kieu-toc-prompt-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = `<svg style="width:14px;height:14px;fill:#10b981;vertical-align:middle;margin-right:4px;" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> ÄÃ£ copy!`;
    btn.style.color = '#10b981';
    btn.style.borderColor = '#10b981';
    setTimeout(() => {
      btn.innerHTML = `<svg style="width:14px;height:14px;fill:currentColor;vertical-align:middle;margin-right:4px;" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> Copy Prompt`;
      btn.style.color = '#94a3b8';
      btn.style.borderColor = 'rgba(255,255,255,0.15)';
    }, 2000);
  }).catch(err => {
    console.error('Lá»—i copy:', err);
    // Fallback: select and let the user copy manually
    const range = document.createRange();
    range.selectNode(document.getElementById('kieu-toc-prompt-text'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    alert('KhÃ´ng thá»ƒ copy tá»± Ä‘á»™ng. Há»‡ thá»‘ng Ä‘Ã£ bÃ´i Ä‘en Ä‘oáº¡n Prompt, báº¡n chá»‰ cáº§n nháº¥n Ctrl+C Ä‘á»ƒ copy nhÃ©!');
  });
}


// â”€â”€â”€ DYNAMIC ESSAY READER LOGIC â”€â”€â”€
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

// â”€â”€â”€ ZALO MODAL CLOSE LOGIC â”€â”€â”€
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

// â”€â”€â”€ AUTO-OPEN ESSAY FROM URL (PARAMETER OR HASH) â”€â”€â”€
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


