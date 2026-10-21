const IMAGE_PATH = "assets/images/";
const ICON_PATH = "assets/icons/";
const WHATSAPP_ADMIN = "6285343728200";
const CONTACT_EMAIL = "ifrozenfoodnusantara@gmail.com";
const mobileViewport = window.matchMedia("(max-width: 767px)");

const packages = [
  {
    id: "produk_bahan_baku",
    name: "Paket Bahan Baku",
    subtitle: "Cocok untuk Pemula & Pengembangan Usaha",
    productCount: "150 Bungkus Produk",
    price: "Rp1.000.000",
    image: "08-s600-4.paket-bahan-baku.webp",
    equipment: ["Mesin Kasir", "Genset", "Alat Penunjang Usaha"],
  },
  {
    id: "seblak",
    name: "Paket Seblak iFrozen",
    subtitle: "Usaha Seblak Prasmanan & Frozen Food",
    productCount: "135 Bungkus Toping",
    price: "Rp1.200.000",
    image: "09-s1600-seblak-1-2juta.webp",
    equipment: ["Freezer Kaca 1 Pintu", "Genset", "Mesin Kasir / POS", "Banner Usaha"],
  },
  {
    id: "promo",
    name: "Paket Promo",
    subtitle: "Modal Terjangkau, Usaha Menguntungkan!",
    productCount: "135 Bungkus Produk",
    price: "Rp1.200.000",
    image: "10-s1600-paket-1-2juta.webp",
    equipment: ["Freezer Kaca 1 Pintu", "Genset", "Mesin Kasir / POS"],
  },
  {
    id: "supplier",
    name: "Paket Supplier",
    subtitle: "Modal Kecil Untung Maksimal",
    productCount: "270 Bungkus Produk",
    price: "Rp2.300.000",
    image: "11-s1600-paket-2-3juta.webp",
    equipment: ["Freezer Kaca 2 Pintu", "Genset", "Mesin Kasir"],
    popular: true,
  },
  {
    id: "distributor",
    name: "Paket Distributor",
    subtitle: "Keamanan Toko Lengkap dengan CCTV",
    productCount: "405 Bungkus Produk",
    price: "Rp3.500.000",
    image: "12-s1600-paket-3-5juta.webp",
    equipment: ["Freezer 3 Pintu", "Paket CCTV 4 Channel", "Genset", "Mesin Kasir"],
  },
  {
    id: "komplit",
    name: "Paket Komplit",
    subtitle: "3 Unit Freezer (1, 2, & 3 Pintu)",
    productCount: "810 Bungkus Produk",
    price: "Rp6.500.000",
    image: "13-s1600-paket-6-5juta.webp",
    equipment: ["Freezer 1 Pintu", "Freezer 2 Pintu", "Freezer 3 Pintu", "Paket CCTV 4 Channel", "Genset", "Mesin Kasir"],
  },
  {
    id: "super_komplit",
    name: "Paket Super Komplit",
    subtitle: "Kapasitas Terbesar — Total 4 Unit Freezer",
    productCount: "1.620 Bungkus Produk",
    price: "Rp10.000.000",
    image: "14-s1600-paket-10juta.webp",
    equipment: ["Freezer Kaca 1 Pintu", "Freezer Kaca 2 Pintu", "Freezer 3 Pintu (2 Unit)", "Paket CCTV 4 Channel", "Genset", "Mesin Kasir"],
  },
];

const packageFeatures = [
  "Produk dapat dijual eceran (siap saji) maupun sebagai stok/suplai produk.",
  "Seluruh fasilitas usaha diterima sesuai paket yang dipilih (sesuai gambar) dan menjadi hak milik mitra setelah masa kemitraan berjalan 6 bulan.",
];

const priceRows = [
  ["Kanzler", "Nugget Ayam Kanzler 500gr", 12500, 30000],
  ["Kanzler", "Sosis Sapi Kanzler 500gr", 10400, 27000],
  ["Fiesta", "Chicken Nugget 500gr", 40500, 70500],
  ["Fiesta", "Spicy Wing 400gr", 30000, 54000],
  ["So Good", "Chicken Nugget Original 400gr", 21600, 41000],
  ["So Good", "Sosis Premium Original 400gr", 21600, 41000],
  ["Champ", "Chicken Nugget 500gr", 17050, 34500],
  ["Champ", "Sosis Sapi 6pcs", 3750, 14000],
  ["Belfoods", "Favorite Chicken Nugget 500gr", 21950, 41390],
  ["Cedea", "Baso Ikan 500gr", 12500, 28500],
];

const steps = [
  ["01", "Baca dan pelajari prosedur", "Baca dan pelajari prosedur kemitraan yang berlaku secara lengkap."],
  ["02", "Pengisian formulir", "Isi formulir pendaftaran kemitraan dengan data diri dan usaha yang valid."],
  ["03", "Approve dan verifikasi tim marketing", "Data pendaftaran diverifikasi dan disetujui oleh tim marketing pusat."],
  ["04", "Penerbitan MOU serta invoice tagihan", "Penerbitan surat perjanjian kerja sama (MOU) dan invoice tagihan resmi."],
  ["05", "Pembayaran sesuai paket program", "Pembayaran sesuai paket program kemitraan yang dipilih ke rekening resmi."],
  ["06", "Invoice kepemilikan terbit", "Penerbitan invoice resmi bukti kepemilikan paket usaha dan peralatan."],
  ["07", "Tim marketing menghubungi untuk konfirmasi program", "Tim marketing menghubungi mitra untuk konfirmasi jadwal program dan pengiriman."],
  ["08", "Pengiriman alat dan produk", "Pengiriman seluruh peralatan usaha dan produk frozen food ke alamat mitra."],
  ["09", "Instalasi dan training", "Proses instalasi peralatan dan training operasional usaha hingga siap buka."],
];

const terms = [
  "Pendaftaran wajib mengisi formulir & menyerahkan dokumen pendukung.",
  "Setiap kabupaten dibatasi maks. 50 mitra (sistem zonasi).",
  "Pembayaran bukan COD, dilakukan ke rekening resmi perusahaan.",
  "Pengiriman Dioptimalkan dihari yang sama pada saat pendaftaran.",
  "Mitra mendapatkan alat & stok sesuai paket yang dipilih.",
  "Alat penunjang wajib dirawat & dikembalikan jika berhenti operasi sebelum 6 bulan.",
  "Restock dilakukan melalui admin pusat sesuai ketentuan wilayah.",
  "Mitra wajib mengikuti SOP penyimpanan & aturan zonasi.",
  "Pindah lokasi usaha diperbolehkan, tetapi harus lapor ke pusat.",
  "Semua legalitas dapat dicek di profil WhatsApp bisnis centang biru.",
];

const testimonials = [
  {
    image: "testimonials/Foto_iFrozen_Food_Indonesia/01_toko_frozen_food.webp",
    quote: "Paket promo isinya lengkap dan produknya selalu laris. Untungnya stabil, pelanggan pun puas!",
    name: "Dimas Pratama",
    packageName: "Mitra Paket Promo iFrozen",
  },
  {
    image: "testimonials/Foto_iFrozen_Food_Indonesia/02_pemilik_toko.webp",
    quote: "Modal terjangkau, untungnya terasa! Freezer menjadi hak milik dan produk frozen food disukai pelanggan setiap hari. Terima kasih iFrozen.",
    name: "Ibu Siti Rahma",
    packageName: "Mitra Paket Supplier iFrozen",
  },
  {
    image: "testimonials/Foto_iFrozen_Food_Indonesia/03_mitra_motor.webp",
    quote: "Alhamdulillah, jualan jadi lebih mudah dan praktis untuk berkeliling. Pembeli senang, omzet naik setiap hari!",
    name: "Mas Arif Setiawan",
    packageName: "Mitra Usaha Keliling iFrozen",
  },
  {
    image: "testimonials/Foto_iFrozen_Food_Indonesia/kios_frozen_food_indonesia_hijau_ceria.webp",
    quote: "Kios saya sekarang terlihat lebih profesional dan lengkap. Pelanggan makin percaya, produk juga lebih cepat terjual.",
    name: "Ibu Nur Aisyah",
    packageName: "Mitra Kios iFrozen",
  },
  {
    image: "testimonials/Foto_iFrozen_Food_Indonesia/toko_frozen_food_ifrozen_indonesia.webp",
    quote: "Stok produk lengkap dan freezer sudah siap digunakan. Saya bisa langsung fokus berjualan dan melayani pelanggan.",
    name: "Raka Mahendra",
    packageName: "Mitra Paket Komplit iFrozen",
  },
  {
    image: "testimonials/Foto_iFrozen_Food_Indonesia/toko_frozen_food_ifrozen_yang_ramah.webp",
    quote: "Kami bisa membangun usaha frozen food bersama dari rumah. Dukungan perlengkapannya membuat semuanya lebih mudah dijalankan.",
    name: "Andi & Rina",
    packageName: "Mitra Toko Keluarga iFrozen",
  },
];

const notifications = [
  ["Ibu Ratna W.", "Surabaya, Jawa Timur", "Paket Promo (Rp 1.200.000)", "Baru saja", "👩"],
  ["Pak Hendra K.", "Bandung, Jawa Barat", "Paket Distributor (Rp 3.500.000)", "1 menit yang lalu", "👨"],
  ["Ibu Siti Aminah", "Semarang, Jawa Tengah", "Paket Komplit (Rp 6.500.000)", "2 menit yang lalu", "🧕"],
  ["Pak Joko P.", "Sidoarjo, Jawa Timur", "Paket Seblak iFrozen (Rp 1.200.000)", "3 menit yang lalu", "👨"],
  ["Ibu Maya Lestari", "Bekasi, Jawa Barat", "Paket Supplier (Rp 2.300.000)", "4 menit yang lalu", "👩"],
  ["Pak Faisal R.", "Makassar, Sulawesi Selatan", "Paket Super Komplit (Rp 10.000.000)", "5 menit yang lalu", "👨"],
  ["Ibu Dewi Kurnia", "Medan, Sumatera Utara", "Paket Promo (Rp 1.200.000)", "6 menit yang lalu", "👩"],
  ["Pak Agus Supriyadi", "Depok, Jawa Barat", "Paket Bahan Baku (Rp 1.000.000)", "7 menit yang lalu", "👨"],
  ["Ibu Rina Anggraini", "Denpasar, Bali", "Paket Distributor (Rp 3.500.000)", "8 menit yang lalu", "👩"],
  ["Pak Bambang S.", "Malang, Jawa Timur", "Paket Komplit (Rp 6.500.000)", "9 menit yang lalu", "👨"],
  ["Ibu Nurul Hidayah", "Banjarmasin, Kalimantan Selatan", "Paket Promo (Rp 1.200.000)", "11 menit yang lalu", "🧕"],
  ["Pak Budi Santoso", "Tangerang, Banten", "Paket Super Komplit (Rp 10.000.000)", "13 menit yang lalu", "👨"],
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="ambient" aria-hidden="true">
    <span class="orb orb-teal"></span><span class="orb orb-blue"></span>
    <span class="orb orb-purple"></span><span class="orb orb-cyan"></span>
    <span class="ambient-shade"></span>
  </div>

  <nav class="navbar" id="navbar">
    <div class="container nav-inner">
      <button class="brand" type="button" data-scroll="home" aria-label="Kembali ke Beranda">
        <img src="${IMAGE_PATH}01-s1600-logo-new.webp" alt="Logo iFrozen Food Nusantara" />
        <span>iFrozen Food<br class="desktop-break" /> <b>Nusantara</b></span>
      </button>
      <div class="desktop-nav">
        <button type="button" data-scroll="home">Beranda</button>
        <button type="button" data-scroll="about">Tentang</button>
        <button type="button" data-scroll="packages">Paket</button>
        <button type="button" data-scroll="terms">Syarat</button>
        <button type="button" data-scroll="register">Daftar</button>
        <button type="button" data-scroll="feedback">Saran & Pengaduan</button>
      </div>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-sidebar" aria-label="Buka menu navigasi">
        <img src="${ICON_PATH}menu.svg" alt="" />
      </button>
    </div>
  </nav>

  <div class="mobile-sidebar" id="mobile-sidebar" aria-hidden="true">
    <button class="sidebar-backdrop" type="button" data-close-menu aria-label="Tutup menu navigasi"></button>
    <aside class="sidebar-panel" role="dialog" aria-modal="true" aria-label="Menu navigasi" tabindex="-1">
      <div class="sidebar-head">
        <div class="sidebar-brand">
          <img src="${IMAGE_PATH}01-s1600-logo-new.webp" alt="" />
          <span><b>iFrozen Food</b><small>Nusantara</small></span>
        </div>
        <button class="sidebar-close" type="button" data-close-menu aria-label="Tutup menu">
          <img src="${ICON_PATH}close.svg" alt="" />
        </button>
      </div>
      <div class="sidebar-intro"><span>Mitra resmi & terpercaya</span><p>Temukan paket, pelajari program, lalu daftar langsung melalui WhatsApp.</p></div>
      <div class="sidebar-links">
        <button type="button" data-scroll="home"><span>01</span><b>Beranda</b><small>Ringkasan program</small></button>
        <button type="button" data-scroll="about"><span>02</span><b>Tentang</b><small>Kenali iFrozen Food</small></button>
        <button type="button" data-scroll="packages"><span>03</span><b>Paket Kemitraan</b><small>Pilih skala usahamu</small></button>
        <button type="button" data-scroll="terms"><span>04</span><b>Syarat & Ketentuan</b><small>Informasi sebelum daftar</small></button>
        <button type="button" data-scroll="register"><span>05</span><b>Formulir Daftar</b><small>Mulai kemitraan</small></button>
        <button type="button" data-scroll="feedback"><span>06</span><b>Saran & Pengaduan</b><small>Hubungi layanan mitra</small></button>
      </div>
    </aside>
  </div>

  <nav class="bottom-nav" aria-label="Navigasi cepat">
    <button type="button" data-scroll="home" data-bottom-nav="home"><span class="bottom-icon icon-home" aria-hidden="true"></span><span class="bottom-label">Beranda</span></button>
    <button type="button" data-scroll="packages" data-bottom-nav="packages"><span class="bottom-icon icon-package" aria-hidden="true"></span><span class="bottom-label">Paket</span></button>
    <button class="bottom-register" type="button" data-scroll="register" data-bottom-nav="register"><span class="bottom-primary-icon"><i class="bottom-icon icon-register" aria-hidden="true"></i></span><span class="bottom-label">Daftar</span></button>
    <button type="button" data-scroll="terms" data-bottom-nav="terms"><span class="bottom-icon icon-terms" aria-hidden="true"></span><span class="bottom-label">Syarat</span></button>
    <button class="bottom-menu" type="button" data-menu-open aria-expanded="false" aria-controls="mobile-sidebar"><span class="bottom-icon icon-menu" aria-hidden="true"></span><span class="bottom-label">Menu</span></button>
  </nav>

  <main>
    <section class="hero section" id="home">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="hero-pill">KEMITRAAN OFFICIAL IFROZEN<br class="mobile-break" /> NUSANTARA</p>
            <h1>"Bukan mau instan kaya, <br class="hero-break" /><span>cuma mau hidup lebih tenang."</span></h1>
            <p class="hero-lead">Kalau itu yang kamu cari, kemitraan usaha ini bisa jadi langkah awal. Wujudkan usaha naik level, kami buka kemitraan dengan sistem siap jalan.</p>
            <div class="hero-actions">
              <button class="btn btn-primary" type="button" data-scroll="register">🚀 <span>Ambil Paketnya Sekarang</span></button>
              <button class="btn btn-outline" type="button" data-scroll="packages">Lihat Katalog Paket</button>
            </div>
            <div class="hero-trust" aria-label="Keunggulan program">
              <span><b>Resmi</b><small>Program terverifikasi</small></span>
              <span><b>Lengkap</b><small>Produk siap jual</small></span>
              <span><b>Praktis</b><small>Daftar via WhatsApp</small></span>
            </div>
          </div>
          <div class="hero-visual glass-card">
            <img src="${IMAGE_PATH}02-s1600-1.webp" alt="Kemitraan Official iFrozen Nusantara" fetchpriority="high" decoding="async" />
            <div class="visual-caption"><strong>RESMI & TERPERCAYA</strong><span>Mulai Bisnismu Dari Sekarang!</span></div>
          </div>
        </div>
        <div class="brand-showcase">
          <p>Menyediakan Produk Dari Brand Ternama</p>
          <div class="glass-card brand-image"><img src="${IMAGE_PATH}04-s1600-2.webp" alt="Brand Partners: So Good, Champ, Fiesta, Belfoods, dll" decoding="async" /></div>
        </div>
      </div>
    </section>

    <section class="benefits section-sm">
      <div class="container">
        <header class="section-heading compact"><h2>Yang Kamu Peroleh Dari Kami</h2><span class="heading-line"></span></header>
        <div class="benefit-grid">
          <article class="glass-card benefit-card yellow"><span class="round-icon">📈</span><h3>Koneksi Bisnis</h3><p>Bergabung dengan jaringan distributor nasional yang luas dan terpercaya.</p></article>
          <article class="glass-card benefit-card teal"><span class="round-icon">💰</span><h3>Menaikan Laba</h3><p>Margin keuntungan tinggi dengan harga langsung dari pabrik (Grosir).</p></article>
          <article class="glass-card benefit-card blue"><span class="round-icon">🤝</span><h3>Meningkatkan Bisnis</h3><p>Sistem pendampingan dan support marketing agar usaha Anda cepat berkembang.</p></article>
        </div>
      </div>
    </section>

    <section class="about section" id="about">
      <div class="container">
        <header class="section-heading"><h2>Peluang Bisnis Frozen Food</h2><span class="heading-line gradient"></span></header>
        <div class="about-grid">
          <div class="about-picture glass-card"><img src="${IMAGE_PATH}06-s600-3.peluang.webp" alt="Apa Itu Frozen Food? Praktis, Tahan Lama" loading="lazy" decoding="async" /></div>
          <article class="glass-card about-copy">
            <h3>Praktis • Tahan Lama • Kebutuhan Harian</h3>
            <p>Frozen food bukan sekadar makanan beku. Ini adalah solusi bagi keluarga modern yang membutuhkan kepraktisan tanpa mengorbankan nutrisi. Dengan teknologi pembekuan cepat, kesegaran dan gizi terjaga lebih lama.</p>
            <div class="facts">
              <div><span>🕒</span><p><strong>Praktis</strong><small>Siap saji dalam hitungan menit.</small></p></div>
              <div><span>❄️</span><p><strong>Tahan Lama</strong><small>Awet berbulan-bulan di freezer.</small></p></div>
              <div><span>💰</span><p><strong>Laba Tinggi</strong><small>Margin profit retail & grosir besar.</small></p></div>
              <div><span>🔁</span><p><strong>Repeat Order</strong><small>Produk habis pakai harian.</small></p></div>
            </div>
            <button class="btn btn-small" type="button" data-scroll="packages">Lihat Paket Usaha →</button>
          </article>
        </div>
      </div>
    </section>

    <section class="packages section section-tint" id="packages">
      <div class="container">
        <header class="section-heading wide">
          <span class="eyebrow pill">Katalog Paket Kemitraan Resmi</span>
          <h2>Investasi Sekali, Untung Berkali-kali</h2>
          <p>Semua paket sudah termasuk peralatan usaha lengkap dan produk siap jualan langsung dari pabrik. Barang menjadi hak milik mitra 100%.<br /><b>Klik pada gambar brosur untuk memperbesar detail flyer.</b></p>
        </header>
        <div class="package-slider-shell">
          <div class="package-grid" id="package-grid"></div>
          <div class="package-swipe-hint" id="package-scroll-hint" aria-hidden="true"><span>Geser paket</span><img src="${ICON_PATH}chevron-right.svg" alt="" /></div>
        </div>
      </div>
    </section>

    <section class="profit section section-tint-soft">
      <div class="container">
        <header class="section-heading wide">
          <span class="eyebrow">Potensi Keuntungan</span>
          <h2>Pricelist & Margin Profit</h2>
          <p>Keuntungan grosir vs eceran yang nyata. Cek simulasi di bawah ini atau lihat katalog pricelist lengkap kami.</p>
        </header>
        <div class="glass-card table-card">
          <div class="table-scroll-shell">
            <div class="table-scroll" id="price-table-scroll" tabindex="0" aria-label="Tabel harga dapat digeser ke samping"><table><thead><tr><th>Brand</th><th>Nama Produk</th><th>Harga Grosir (Modal)</th><th>Harga Eceran (Jual)</th><th>Profit/Pcs</th></tr></thead><tbody id="price-body"></tbody></table></div>
            <div class="table-swipe-hint" id="price-scroll-hint" aria-hidden="true"><span>Geser</span><img src="${ICON_PATH}chevron-right.svg" alt="" /></div>
          </div>
          <p class="table-note">*Harga pada tabel adalah simulasi. Harga real mengikuti update pricelist pabrik terbaru di bawah ini.</p>
        </div>
        <header class="subheading"><h3>Katalog Pricelist Resmi</h3><p>Geser untuk melihat brand lain. Klik gambar untuk Zoom.</p></header>
        <div class="carousel price-carousel" data-carousel="price">
          <div class="glass-card carousel-card portrait-card">
            <a id="price-zoom" target="_blank" rel="noreferrer"><img id="price-image" alt="Halaman 1" loading="lazy" decoding="async" /></a>
            <div class="carousel-caption"><strong id="price-title">Halaman 1</strong><span id="price-count">1 / 10</span></div>
          </div>
          <button class="carousel-arrow prev" type="button" data-price-dir="-1" aria-label="Previous Slide"><img src="${ICON_PATH}chevron-left.svg" alt="" /></button>
          <button class="carousel-arrow next" type="button" data-price-dir="1" aria-label="Next Slide"><img src="${ICON_PATH}chevron-right.svg" alt="" /></button>
        </div>
      </div>
    </section>

    <section class="flow section">
      <div class="container">
        <header class="section-heading"><h2>Alur Pendaftaran Mitra</h2><p>Proses cepat, transparan, dan resmi.</p></header>
        <div class="glass-card flow-image"><img src="${IMAGE_PATH}25-s1600-21.webp" alt="Diagram Alur Pendaftaran" loading="lazy" decoding="async" /></div>
        <div class="step-grid" id="step-grid"></div>
        <div class="support-note glass-card">Semua proses ini didampingi langsung oleh <strong>Tim Marketing Resmi</strong> kami.</div>
      </div>
    </section>

    <section class="testimonials section section-tint-soft" id="testimonials">
      <div class="container">
        <header class="section-heading"><span class="eyebrow">Cerita Para Mitra</span><h2>Apa Kata Mitra Kami?</h2><p>Pengalaman nyata saat memulai dan menjalankan usaha bersama iFrozen Food Nusantara.</p></header>
        <div class="story-slider" id="testimonial-slider" role="region" aria-roledescription="carousel" aria-label="Cerita mitra iFrozen" tabindex="0">
          <div class="story-viewport">
            <div class="story-track" id="testimonial-track" aria-live="polite"></div>
          </div>
          <button class="story-arrow story-prev" type="button" data-testimonial-dir="-1" aria-label="Lihat testimoni sebelumnya"><img src="${ICON_PATH}chevron-left.svg" alt="" /></button>
          <button class="story-arrow story-next" type="button" data-testimonial-dir="1" aria-label="Lihat testimoni berikutnya"><img src="${ICON_PATH}chevron-right.svg" alt="" /></button>
          <div class="story-controls"><div class="carousel-dots" id="testimonial-dots"></div><span id="testimonial-count">01 / 06</span></div>
        </div>
      </div>
    </section>

    <section class="program section" id="program">
      <div class="container">
        <div class="program-grid">
          <div>
            <h2>Program Pemberdayaan <br /><span>UMKM Naik Kelas</span></h2>
            <div class="program-copy">
              <p>Ini adalah bagian dari inisiatif pemerintah seperti KUR, UMi, dan Program Kemitraan UMKM Binaan BUMN. Melalui kerja sama dengan iFrozen Food Nusantara, pelaku UMKM mendapatkan subsidi khusus.</p>
              <blockquote class="glass-card">"Biaya kemitraan kami jauh lebih terjangkau karena sebagian besar fasilitas usaha sudah termasuk dalam subsidi program pemerintah."</blockquote>
              <p>Program ini dipantau langsung oleh pihak terkait. Pembayaran dilakukan langsung ke <strong>Rekening Perusahaan</strong> (bukan perorangan) demi keamanan dan transparansi.</p>
            </div>
          </div>
          <article class="glass-card government-card"><span>🏛️</span><h3>Didukung Pemerintah</h3><p>Sinergi antara sektor swasta dan kementerian untuk memajukan ekonomi kerakyatan melalui sektor pangan.</p><div><b>Verifikasi Resmi</b><b>Pembayaran Aman</b></div></article>
        </div>
        <div class="terms" id="terms">
          <header class="section-heading compact"><h2>Syarat & Ketentuan</h2><p>Harap dibaca dengan seksama sebelum mendaftar</p></header>
          <div class="term-grid" id="term-grid"></div>
          <p class="important"><strong>PENTING:</strong> Kami belum melayani COD. Pembayaran hanya ke rekening resmi Perusahaan. Pengiriman bebas ongkos kirim seluruh Indonesia.</p>
        </div>
      </div>
    </section>

    <section class="registration section" id="register">
      <div class="container narrow registration-container">
        <header class="section-heading"><h2>Formulir Pendaftaran</h2><p>Daftar hari ini, diproses hari ini. Ambil kesempatan emas ini sekarang!</p></header>
        <div class="registration-layout">
          <aside class="registration-aside">
            <div class="glass-card register-image"><img src="${IMAGE_PATH}56-s1600-22.webp" alt="Ayo Daftar Kemitraan iFrozen Food Indonesia" loading="lazy" decoding="async" /></div>
            <div class="glass-card registration-map">
              <div class="map-copy"><span>Lokasi Resmi</span><h3>Kantor Administrasi</h3><p>Treasury Tower, District 8 SCBD, Jakarta Selatan.</p></div>
              <iframe title="Peta kantor administrasi iFrozen Food Nusantara" src="https://www.google.com/maps?q=Treasury%20Tower%20District%208%20SCBD%20Jakarta&output=embed" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <a href="https://www.google.com/maps/search/?api=1&query=Treasury+Tower+District+8+SCBD+Jakarta" target="_blank" rel="noreferrer">Buka di Google Maps ↗</a>
            </div>
            <div class="registration-assurance"><b>Data Anda tetap aman</b><span>Data formulir hanya diteruskan ke WhatsApp Admin resmi setelah Anda menekan tombol kirim.</span></div>
          </aside>
          <div class="glass-card form-card registration-card">
          <div class="form-card-head"><div><span>Formulir Calon Mitra</span><h3>Lengkapi data utama</h3></div><small>* Wajib diisi</small></div>
          <form id="registration-form">
            <fieldset><legend>👤 Data Pendaftar & Tempat Usaha</legend><div class="form-grid">
              <label>Nama Lengkap Pendaftar *<input type="text" name="fullName" placeholder="Masukkan nama lengkap pendaftar" required /></label>
              <label>Nama Calon Tempat Usaha *<input type="text" name="businessName" placeholder="Contoh: Frozen Food Berkah" required /></label>
            </div></fieldset>
            <fieldset><legend>📍 Alamat Lokasi Usaha</legend><div class="form-grid">
              <label class="span-2">Patokan Alamat *<input type="text" name="addressLandmark" placeholder="Contoh: Depan Masjid Agung / Samping Toko Serba Ada" required /></label>
              <label>Kelurahan/Desa *<input type="text" name="village" placeholder="Nama Kelurahan / Desa" required /></label>
              <label>Kecamatan *<input type="text" name="district" placeholder="Nama Kecamatan" required /></label>
              <label>Kabupaten/Kota *<input type="text" name="city" placeholder="Nama Kabupaten / Kota" required /></label>
              <label>Provinsi *<input type="text" name="province" placeholder="Nama Provinsi" required /></label>
              <label>Kode Pos *<input type="text" name="postalCode" placeholder="Kode Pos" required /></label>
              <label>Kapasitas Listrik *<input type="text" name="electricity" placeholder="Contoh: 1300 Watt / 2200 Watt" required /></label>
            </div></fieldset>
            <fieldset><legend>📞 Kontak</legend><div class="form-grid">
              <label>Nomor HP (Spanduk) *<input type="tel" name="phoneSpanduk" placeholder="Contoh: 081234567890" required /></label>
              <label>Nomor HP Cadangan *<input type="tel" name="phoneActive" placeholder="Contoh: 089876543210" required /></label>
            </div></fieldset>
            <fieldset><legend>📦 Pilihan Paket & Metode Pembayaran</legend><div class="form-grid">
              <label>Pilihan Paket *<select name="packageSelection" id="package-select" required><option value="">Pilih Paket...</option></select></label>
              <label>Pembayaran Transfer (Nama Bank) *<select name="bank" id="bank-select" required><option value="">Pilih Bank Transfer...</option></select></label>
              <label class="span-2 custom-bank" id="custom-bank-wrap">Nama Bank Lainnya *<input type="text" name="customBank" placeholder="Masukkan nama bank" /></label>
            </div></fieldset>
            <fieldset><legend>📝 Persetujuan</legend><div class="agreement-box">
              <label><input type="checkbox" name="agreeDataCorrect" /> <span>Data yang saya berikan benar.</span></label>
              <label><input type="checkbox" name="agreeTerms" /> <span>Saya bersedia mengikuti ketentuan program kemitraan yang berlaku.</span></label>
              <label><input type="checkbox" name="agreeShippingProcedure" /> <span>Saya memahami bahwa proses pengiriman dilakukan setelah administrasi dan pembayaran sesuai prosedur perusahaan.</span></label>
            </div></fieldset>
            <div class="documents"><h4>Dokumen Pendukung</h4><p><b>Catatan:</b> Untuk dokumen pendukung seperti Foto KTP dan Foto Lokasi Usaha, silakan kirimkan menyusul melalui chat WhatsApp setelah Anda menekan tombol "Kirim Pendaftaran" di bawah ini.</p></div>
            <button class="btn btn-primary submit-button" type="submit">Kirim Pendaftaran via WhatsApp</button>
            <p class="form-footnote">Dengan mengklik tombol di atas, Anda akan diarahkan ke WhatsApp Admin untuk mengirim data pendaftaran.</p>
          </form>
          </div>
        </div>
      </div>
    </section>

    <section class="feedback section-sm" id="feedback">
      <div class="container feedback-width">
        <header class="section-heading"><span class="eyebrow">Layanan Pelanggan & Mitra</span><h2>Form Saran & Pengaduan</h2><p>Masukan Anda sangat berharga bagi kami. Sampaikan saran, pengaduan, atau pertanyaan Anda langsung kepada Admin iFrozen Food Nusantara.</p></header>
        <div class="glass-card form-card feedback-card"><form id="feedback-form">
          <div class="form-grid"><label>Nama Lengkap *<input type="text" name="name" placeholder="Masukkan nama Anda" required /></label><label>Nomor HP / WhatsApp *<input type="tel" name="phone" placeholder="Contoh: 081234567890" required /></label></div>
          <label>Kategori Pesan *<select name="category" required><option value="Saran">Saran</option><option value="Pengaduan">Pengaduan</option><option value="Pertanyaan">Pertanyaan Kemitraan</option><option value="Lainnya">Lainnya</option></select></label>
          <label>Isi Saran / Pengaduan *<textarea name="message" rows="4" placeholder="Tuliskan saran, pengaduan, atau pertanyaan Anda secara detail di sini..." required></textarea></label>
          <button class="btn feedback-submit" type="submit">Kirim Saran & Pengaduan via WhatsApp</button>
        </form></div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-grid">
      <div><div class="footer-brand"><img src="${IMAGE_PATH}01-s1600-logo-new.webp" alt="Logo iFrozen Food Nusantara" /><strong>iFrozen Food Nusantara</strong></div><p>Mitra resmi pemerintah dalam memajukan UMKM Indonesia melalui sektor Frozen Food. Terpercaya, Lengkap, dan Terjangkau.</p><div class="legal"><b>Legalitas</b><span>Terverifikasi oleh Kementerian UMKM dan didukung oleh sistem perbankan nasional.</span></div></div>
      <div><h4>Alamat Resmi</h4><div class="address"><b>Alamat Administrasi</b><p>SCBD, Gedung Treasury Tower, Kawasan District 8 LOT 28, Jl. Tulodong Atas 2 No.28, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190</p><b>Alamat Gudang Pusat</b><p>Jl. Raya St. Cakung No.20, RT.10/RW.3, Pulo Gebang, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13950</p></div></div>
      <div><h4>Hubungi Kami</h4><ul class="contact-list"><li>📱 <span><b>WhatsApp Admin</b><a href="https://wa.me/${WHATSAPP_ADMIN}" target="_blank" rel="noreferrer">0853-4372-8200</a></span></li><li>📧 <span><b>Email</b><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></span></li><li>💬 <span><a class="feedback-link" href="#feedback">Form Saran & Pengaduan</a></span></li></ul><h5>Ikuti Kami</h5><div class="socials"><a href="https://www.facebook.com/share/19QXnBmoU5/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.tiktok.com/@pusatbisnisifrozenfood?_r=1&_t=ZS-99E9Fa6858m" target="_blank" rel="noreferrer">TikTok</a><a href="https://www.instagram.com/ifrozenfoodindo?igsi=eGo0M2I3YTdkbWpi" target="_blank" rel="noreferrer">Instagram</a></div></div>
    </div>
    <p class="copyright">© 2026 iFrozen Food Nusantara. Hak Cipta Dilindungi Undang-Undang.</p>
  </footer>

  <a class="whatsapp-float" href="#chat" aria-label="Chat WhatsApp Admin"><span></span><img src="${ICON_PATH}whatsapp.svg" alt="" /><b>Chat Admin</b></a>
  <div class="social-proof" id="social-proof" role="button" tabindex="0" aria-label="Lihat detail pendaftar terbaru"><div class="proof-card"><span class="proof-line"></span><div class="proof-main"><div class="proof-avatar"><span id="proof-avatar">👩</span><i></i></div><div class="proof-copy"><div><b>Pendaftar baru</b><time id="proof-time">Baru saja</time></div><strong id="proof-name">Ibu Ratna W.</strong><span id="proof-city">Surabaya, Jawa Timur</span></div><span class="proof-detail-label">Detail</span><button id="close-proof" type="button" aria-label="Tutup notifikasi">✕</button></div></div></div>

  <div class="proof-detail-modal" id="proof-detail-modal" aria-hidden="true">
    <button class="proof-detail-backdrop" type="button" data-close-proof-detail aria-label="Tutup detail pendaftar"></button>
    <div class="proof-detail-panel" role="dialog" aria-modal="true" aria-labelledby="proof-detail-title">
      <header><div class="proof-detail-avatar"><span id="proof-detail-avatar">👩</span><i></i></div><div><span>Pendaftaran terbaru</span><h3 id="proof-detail-title">Detail Calon Mitra</h3></div><button class="proof-detail-close" type="button" data-close-proof-detail aria-label="Tutup popup"><img src="${ICON_PATH}close.svg" alt="" /></button></header>
      <div class="proof-detail-body">
        <div class="proof-detail-person"><small>Nama calon mitra</small><strong id="proof-detail-name">Ibu Ratna W.</strong><span id="proof-detail-city">Surabaya, Jawa Timur</span></div>
        <div class="proof-detail-package"><small>Paket yang dipilih</small><strong id="proof-detail-package">Paket Promo (Rp 1.200.000)</strong><span id="proof-detail-time">Didaftarkan baru saja</span></div>
        <p><span></span> Data ditampilkan sebagai aktivitas terbaru kemitraan.</p>
      </div>
      <footer><button class="btn btn-primary" id="proof-detail-register" type="button">Saya Juga Ingin Daftar</button></footer>
    </div>
  </div>

  <div class="modal" id="flyer-modal" aria-hidden="true"><div class="modal-backdrop"></div><div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header><span>📄</span><div><h3 id="modal-title"></h3><p id="modal-subtitle"></p></div><button id="modal-close" type="button" aria-label="Tutup modal"><img src="${ICON_PATH}close.svg" alt="" /></button></header><div class="modal-image-wrap"><img id="modal-image" alt="" /></div><footer><p><b id="modal-product"></b> Termasuk semua perlengkapan usaha & stok siap jualan.</p><div><a id="modal-open-image" class="btn btn-outline" target="_blank" rel="noreferrer">Buka di Tab Baru ↗</a><button id="modal-select" class="btn btn-primary" type="button">Pilih Paket Ini & Daftar Sekarang →</button></div></footer></div></div>
`;

const formatCurrency = (value) => `Rp ${value.toLocaleString("en-US")}`;

document.querySelector("#package-grid").innerHTML = packages.map((item) => `
  <article class="glass-card package-card ${item.popular ? "popular" : ""}" data-package="${item.id}">
    ${item.popular ? '<span class="popular-badge">★ BEST SELLER</span>' : ""}
    <button class="package-picture" type="button" data-open-flyer="${item.id}" title="Klik untuk memperbesar flyer">
      <img src="${IMAGE_PATH}${item.image}" alt="Flyer ${item.name}" loading="lazy" decoding="async" />
      <span class="zoom-label">🔍 Perbesar</span>
      <span class="package-title"><b>${item.name}</b><strong>${item.price}</strong></span>
    </button>
    <div class="package-meta"><p>${item.subtitle}</p><strong>📦 ${item.productCount}</strong><div>${item.equipment.map((equipment) => `<span>${equipment}</span>`).join("")}</div></div>
    <div class="package-features"><p>Fasilitas & Keuntungan:</p><ul>${packageFeatures.map((feature) => `<li><span>✓</span>${feature}</li>`).join("")}</ul></div>
    <div class="package-actions"><button class="select-package" type="button" data-select-package="${item.id}">🚀 Pilih Paket Ini</button><button class="detail-package" type="button" data-open-flyer="${item.id}">🔍 Lihat Detail Flyer</button></div>
  </article>
`).join("");

document.querySelector("#price-body").innerHTML = priceRows.map(([brand, product, wholesale, retail]) => `<tr><td>${brand}</td><td>${product}</td><td>${formatCurrency(wholesale)}</td><td>${formatCurrency(retail)}</td><td>+ ${formatCurrency(retail - wholesale)}</td></tr>`).join("");
document.querySelector("#step-grid").innerHTML = steps.map(([number, title, description]) => `<article><span>${number}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join("");
document.querySelector("#term-grid").innerHTML = terms.map((term, index) => `<article><span>${index + 1}</span><p>${term}</p></article>`).join("");

const packageSelect = document.querySelector("#package-select");
packageSelect.insertAdjacentHTML("beforeend", packages.map((item) => `<option value="${item.id}">${item.name} (${item.price})</option>`).join(""));
const banks = ["BCA", "BRI", "Mandiri", "BNI", "CIMB Niaga", "BTN", "Bank Syariah Indonesia (BSI)", "SeaBank", "Bank Jago", "Permata Bank", "Danamon", "Lainnya"];
document.querySelector("#bank-select").insertAdjacentHTML("beforeend", banks.map((bank) => `<option value="${bank}">${bank}</option>`).join(""));

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll]");
  if (!trigger) return;
  closeMobileMenu();
  scrollToSection(trigger.dataset.scroll);
});

const navbar = document.querySelector("#navbar");
const mobileMenu = document.querySelector(".mobile-sidebar");
const sidebarPanel = document.querySelector(".sidebar-panel");
const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = menuToggle.querySelector("img");
const bottomMenuToggle = document.querySelector("[data-menu-open]");

const closeMobileMenu = () => {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  bottomMenuToggle.setAttribute("aria-expanded", "false");
  menuIcon.src = `${ICON_PATH}menu.svg`;
  document.body.classList.remove("nav-open");
};

const openMobileMenu = () => {
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  bottomMenuToggle.setAttribute("aria-expanded", "true");
  menuIcon.src = `${ICON_PATH}close.svg`;
  document.body.classList.add("nav-open");
  window.setTimeout(() => sidebarPanel.focus(), 180);
};

const toggleMobileMenu = () => mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();

menuToggle.addEventListener("click", toggleMobileMenu);
bottomMenuToggle.addEventListener("click", toggleMobileMenu);
document.querySelectorAll("[data-close-menu]").forEach((button) => button.addEventListener("click", closeMobileMenu));

const trackedSections = ["home", "about", "packages", "terms", "register", "feedback"];
const bottomNavButtons = document.querySelectorAll("[data-bottom-nav]");
const desktopNavButtons = document.querySelectorAll(".desktop-nav [data-scroll]");
let activeSection = "";

const setActiveNav = (activeId) => {
  if (activeId === activeSection) return;
  activeSection = activeId;
  bottomNavButtons.forEach((button) => {
    const active = button.dataset.bottomNav === activeId;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  desktopNavButtons.forEach((button) => button.classList.toggle("active", button.dataset.scroll === activeId));
};

setActiveNav("home");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const current = entries.find((entry) => entry.isIntersecting);
    if (current) setActiveNav(current.target.id);
  }, { rootMargin: "-22% 0px -67% 0px", threshold: 0 });
  trackedSections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

let navbarFrame = 0;
let navbarScrolled = false;
let mobileScrollTimer = 0;
const updateNavbar = () => {
  navbarFrame = 0;
  const shouldBeScrolled = window.scrollY > 50;
  if (shouldBeScrolled === navbarScrolled) return;
  navbarScrolled = shouldBeScrolled;
  navbar.classList.toggle("scrolled", navbarScrolled);
};
const queueNavbarUpdate = () => {
  if (!navbarFrame) navbarFrame = window.requestAnimationFrame(updateNavbar);
  if (!mobileViewport.matches) return;
  if (!document.body.classList.contains("is-scrolling")) document.body.classList.add("is-scrolling");
  window.clearTimeout(mobileScrollTimer);
  mobileScrollTimer = window.setTimeout(() => document.body.classList.remove("is-scrolling"), 140);
};
window.addEventListener("scroll", queueNavbarUpdate, { passive: true });
updateNavbar();

const priceTableScroll = document.querySelector("#price-table-scroll");
const priceScrollHint = document.querySelector("#price-scroll-hint");
const hidePriceScrollHint = () => priceScrollHint.classList.add("is-hidden");
priceTableScroll.addEventListener("scroll", () => {
  if (priceTableScroll.scrollLeft > 12) hidePriceScrollHint();
}, { passive: true });
priceTableScroll.addEventListener("pointerdown", hidePriceScrollHint, { once: true, passive: true });

const packageGrid = document.querySelector("#package-grid");
const packageScrollHint = document.querySelector("#package-scroll-hint");
const hidePackageScrollHint = () => packageScrollHint.classList.add("is-hidden");
packageGrid.addEventListener("scroll", () => {
  if (packageGrid.scrollLeft > 12) hidePackageScrollHint();
}, { passive: true });

const flyerModal = document.querySelector("#flyer-modal");
let activePackage = null;

const openFlyer = (id) => {
  activePackage = packages.find((item) => item.id === id);
  if (!activePackage) return;
  const imageUrl = `${IMAGE_PATH}${activePackage.image}`;
  document.querySelector("#modal-title").innerHTML = `${activePackage.name} — <span>${activePackage.price}</span>`;
  document.querySelector("#modal-subtitle").textContent = activePackage.subtitle;
  document.querySelector("#modal-image").src = imageUrl;
  document.querySelector("#modal-image").alt = `Flyer ${activePackage.name}`;
  document.querySelector("#modal-product").textContent = `📦 ${activePackage.productCount}`;
  document.querySelector("#modal-open-image").href = imageUrl;
  flyerModal.classList.add("open");
  flyerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector("#modal-close").focus();
};

const closeFlyer = () => {
  flyerModal.classList.remove("open");
  flyerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

document.addEventListener("click", (event) => {
  const openTrigger = event.target.closest("[data-open-flyer]");
  if (openTrigger) openFlyer(openTrigger.dataset.openFlyer);
  const selectTrigger = event.target.closest("[data-select-package]");
  if (selectTrigger) selectPackage(selectTrigger.dataset.selectPackage);
});

document.querySelector("#modal-close").addEventListener("click", closeFlyer);
document.querySelector(".modal-backdrop").addEventListener("click", closeFlyer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && flyerModal.classList.contains("open")) closeFlyer();
  if (event.key === "Escape" && mobileMenu.classList.contains("open")) closeMobileMenu();
});
document.querySelector("#modal-select").addEventListener("click", () => {
  if (activePackage) selectPackage(activePackage.id);
});

function selectPackage(id) {
  packageSelect.value = id;
  closeFlyer();
  scrollToSection("register");
}

const priceSlides = Array.from({ length: 10 }, (_, index) => `${15 + index}-s1600-PL${index + 1}.webp`);
let priceIndex = 0;
const renderPriceSlide = () => {
  const path = `${IMAGE_PATH}${priceSlides[priceIndex]}`;
  const image = document.querySelector("#price-image");
  image.src = path;
  image.alt = `Halaman ${priceIndex + 1}`;
  document.querySelector("#price-title").textContent = `Halaman ${priceIndex + 1}`;
  document.querySelector("#price-count").textContent = `${priceIndex + 1} / ${priceSlides.length}`;
  document.querySelector("#price-zoom").href = path;
};
document.querySelectorAll("[data-price-dir]").forEach((button) => button.addEventListener("click", () => {
  priceIndex = (priceIndex + Number(button.dataset.priceDir) + priceSlides.length) % priceSlides.length;
  renderPriceSlide();
}));
renderPriceSlide();

let testimonialIndex = 0;
const testimonialSlider = document.querySelector("#testimonial-slider");
const testimonialTrack = document.querySelector("#testimonial-track");
const dots = document.querySelector("#testimonial-dots");
const testimonialCount = document.querySelector("#testimonial-count");

testimonialTrack.innerHTML = testimonials.map((item, index) => `
  <article class="story-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} dari ${testimonials.length}" aria-hidden="${index === 0 ? "false" : "true"}">
    <figure class="story-portrait">
      <img src="${IMAGE_PATH}${item.image}" alt="Foto testimoni ${item.name}" width="1122" height="1402" loading="lazy" decoding="async" />
    </figure>
    <div class="story-copy">
      <div class="story-rating" aria-label="5 dari 5 bintang">
        ${Array.from({ length: 5 }, () => `<img src="${ICON_PATH}star-solid.svg" alt="" />`).join("")}
      </div>
      <div class="story-person">
        <strong>${item.name}</strong>
        <span class="story-package"><img src="${ICON_PATH}package.svg" alt="" />${item.packageName}</span>
      </div>
      <blockquote>“${item.quote}”</blockquote>
    </div>
  </article>
`).join("");
dots.innerHTML = testimonials.map((_, index) => `<button type="button" data-testimonial-index="${index}" aria-label="Lihat testimoni ${index + 1}"></button>`).join("");

const renderTestimonial = () => {
  testimonialTrack.style.transform = `translate3d(-${testimonialIndex * 100}%, 0, 0)`;
  testimonialTrack.querySelectorAll(".story-slide").forEach((slide, index) => slide.setAttribute("aria-hidden", String(index !== testimonialIndex)));
  dots.querySelectorAll("button").forEach((dot, index) => {
    const active = index === testimonialIndex;
    dot.classList.toggle("active", active);
    if (active) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
  testimonialCount.textContent = `${String(testimonialIndex + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
};

const showTestimonial = (index) => {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  renderTestimonial();
};

document.querySelectorAll("[data-testimonial-dir]").forEach((button) => button.addEventListener("click", () => showTestimonial(testimonialIndex + Number(button.dataset.testimonialDir))));
dots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-testimonial-index]");
  if (!dot) return;
  showTestimonial(Number(dot.dataset.testimonialIndex));
});

testimonialSlider.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showTestimonial(testimonialIndex - 1);
  if (event.key === "ArrowRight") showTestimonial(testimonialIndex + 1);
});

let testimonialTouchStart = 0;
testimonialSlider.addEventListener("touchstart", (event) => {
  testimonialTouchStart = event.changedTouches[0].clientX;
}, { passive: true });
testimonialSlider.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - testimonialTouchStart;
  if (Math.abs(distance) > 48) showTestimonial(testimonialIndex + (distance < 0 ? 1 : -1));
}, { passive: true });
renderTestimonial();

const bankSelect = document.querySelector("#bank-select");
const customBankWrap = document.querySelector("#custom-bank-wrap");
const customBankInput = customBankWrap.querySelector("input");
bankSelect.addEventListener("change", () => {
  const show = bankSelect.value === "Lainnya";
  customBankWrap.classList.toggle("visible", show);
  customBankInput.required = show;
});

const openWhatsApp = (message) => window.open(`https://wa.me/${WHATSAPP_ADMIN}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

document.querySelector("#registration-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  if (!["agreeDataCorrect", "agreeTerms", "agreeShippingProcedure"].every((name) => form.elements[name].checked)) {
    window.alert("Silakan setujui ketiga poin persetujuan sebelum melanjutkan pendaftaran.");
    return;
  }
  const selected = packages.find((item) => item.id === formData.get("packageSelection"));
  const bank = formData.get("bank") === "Lainnya" ? `Lainnya (${formData.get("customBank")})` : formData.get("bank");
  const message = `Halo Admin iFrozen, saya ingin mendaftar kemitraan.\nBerikut data pendaftaran saya:\n\n*Nama Lengkap Pendaftar:* ${formData.get("fullName")}\n*Nama Calon Tempat Usaha:* ${formData.get("businessName")}\n*Patokan Alamat:* ${formData.get("addressLandmark")}\n*Kelurahan/Desa:* ${formData.get("village")}\n*Kecamatan:* ${formData.get("district")}\n*Kabupaten/Kota:* ${formData.get("city")}\n*Provinsi:* ${formData.get("province")}\n*Kode Pos:* ${formData.get("postalCode")}\n*Kapasitas Listrik:* ${formData.get("electricity")}\n*Nomor HP (Spanduk):* ${formData.get("phoneSpanduk")}\n*Nomor HP Cadangan:* ${formData.get("phoneActive")}\n*Pilihan Paket:* ${selected?.name || formData.get("packageSelection")}\n*Pembayaran Transfer (Nama Bank):* ${bank}\n\n*Persetujuan:*\n- Data yang saya berikan benar.\n- Saya bersedia mengikuti ketentuan program kemitraan yang berlaku.\n- Saya memahami bahwa proses pengiriman dilakukan setelah administrasi dan pembayaran sesuai prosedur perusahaan.\n\nMohon info selanjutnya. Terima kasih.`;
  openWhatsApp(message);
});

document.querySelector("#feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const category = formData.get("category");
  openWhatsApp(`Halo Admin iFrozen, saya ingin menyampaikan ${category.toLowerCase()}:\n\n*Nama:* ${formData.get("name")}\n*No. HP / WA:* ${formData.get("phone")}\n*Kategori:* ${category}\n\n*Isi ${category}:*\n${formData.get("message")}\n\nTerima kasih.`);
});

document.querySelector(".whatsapp-float").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Halo Admin iFrozen, saya tertarik dengan kemitraan ini.");
});

const proof = document.querySelector("#social-proof");
let proofIndex = 0;
let proofTimer;
const renderProof = () => {
  const [name, city, packageName, time, avatar] = notifications[proofIndex];
  document.querySelector("#proof-name").textContent = name;
  document.querySelector("#proof-city").textContent = city;
  document.querySelector("#proof-time").textContent = time;
  document.querySelector("#proof-avatar").textContent = avatar;
  document.querySelector("#proof-detail-name").textContent = name;
  document.querySelector("#proof-detail-city").textContent = `📍 ${city}`;
  document.querySelector("#proof-detail-package").textContent = packageName;
  document.querySelector("#proof-detail-time").textContent = `Didaftarkan ${time.toLowerCase()}`;
  document.querySelector("#proof-detail-avatar").textContent = avatar;
};
const hideProof = () => {
  proof.classList.remove("show");
  window.clearTimeout(proofTimer);
  proofTimer = window.setTimeout(() => {
    proofIndex = (proofIndex + 1) % notifications.length;
    renderProof();
    proof.classList.add("show");
    proofTimer = window.setTimeout(hideProof, 5500);
  }, 5000);
};
const proofInitialDelay = mobileViewport.matches ? 8000 : 2500;
window.setTimeout(() => {
  proof.classList.add("show");
  proofTimer = window.setTimeout(hideProof, 5500);
}, proofInitialDelay);

const proofDetailModal = document.querySelector("#proof-detail-modal");
const openProofDetail = () => {
  window.clearTimeout(proofTimer);
  proof.classList.remove("show");
  proofDetailModal.classList.add("open");
  proofDetailModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".proof-detail-close").focus();
};
const closeProofDetail = () => {
  proofDetailModal.classList.remove("open");
  proofDetailModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

proof.addEventListener("click", openProofDetail);
proof.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openProofDetail();
  }
});
document.querySelector("#close-proof").addEventListener("click", (event) => {
  event.stopPropagation();
  proof.classList.remove("show");
});
document.querySelectorAll("[data-close-proof-detail]").forEach((button) => button.addEventListener("click", closeProofDetail));
document.querySelector("#proof-detail-register").addEventListener("click", () => {
  closeProofDetail();
  scrollToSection("register");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && proofDetailModal.classList.contains("open")) closeProofDetail();
});

/* ==========================================================================
   BOOST CACHE SYSTEM - Intelligent Preloading & Service Worker
   ========================================================================== */
(() => {
  const preloaded = new Set();
  const preloadImg = (src) => {
    if (!src || preloaded.has(src)) return;
    preloaded.add(src);
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  };

  // 1. Pre-warm flyer images on hover/touch
  document.querySelectorAll("[data-open-flyer]").forEach((button) => {
    const warmFlyer = () => {
      const pkg = packages.find((p) => p.id === button.dataset.openFlyer);
      if (pkg) preloadImg(`${IMAGE_PATH}${pkg.image}`);
    };
    button.addEventListener("pointerenter", warmFlyer, { once: true, passive: true });
    button.addEventListener("touchstart", warmFlyer, { once: true, passive: true });
  });

  // 2. Register the service worker after the first page load.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => {
          console.log("[BoostCache] SW registered successfully. Scope:", reg.scope);
        })
        .catch((err) => {
          console.warn("[BoostCache] SW registration failed:", err);
        });
    });
  }
})();
