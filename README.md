# HR Store - Aplikasi Rekapan Penjualan

Aplikasi web sederhana untuk merekap penjualan harian HR Store yang dapat dioperasikan melalui HP. Aplikasi ini memungkinkan pengguna untuk mencatat penjualan produk dan mengirim rekapan melalui WhatsApp.

## 🚀 Fitur Utama

- ✨ **Desain Responsif**: Dioptimalkan untuk penggunaan di HP dan desktop
- 📱 **Mobile-First**: Interface yang mudah digunakan di perangkat mobile
- 🧮 **Kalkulasi Otomatis**: Menghitung subtotal dan total secara real-time
- 📤 **Kirim ke WhatsApp**: Langsung kirim rekapan ke WhatsApp dengan format yang rapi
- 💾 **Auto-Save**: Data tersimpan otomatis di browser
- 🎨 **UI Modern**: Desain dengan efek glassmorphism yang menarik

## 📦 Produk yang Didukung

### Produk Tetap:
- **JUMBO** - Produk ukuran jumbo
- **LITE** - Produk ukuran lite  
- **BIG** - Produk ukuran big
- **MINI** - Produk ukuran mini

### Produk Custom:
- **3 slot produk tambahan** yang dapat disesuaikan namanya

## 🛠️ Cara Penggunaan

### 1. Input Data Penjualan
1. Pilih **tanggal** penjualan
2. Masukkan **jumlah** produk yang terjual
3. Masukkan **harga** per unit (dalam ribuan, contoh: 15 untuk Rp 15.000)
4. **Subtotal** akan dihitung otomatis
5. Untuk produk custom, isi nama produk terlebih dahulu

### 2. Kirim Rekapan
1. Pastikan semua data sudah terisi
2. Klik tombol **"Kirim ke WhatsApp"**
3. Aplikasi akan membuka WhatsApp dengan pesan yang sudah diformat
4. Kirim pesan ke kontak yang diinginkan

### 3. Fitur Tambahan
- **Auto-Save**: Data tersimpan otomatis saat mengetik
- **Reset Form**: Gunakan Ctrl+R untuk reset semua data
- **Simpan Manual**: Gunakan Ctrl+S untuk simpan data
- **Muat Data**: Gunakan Ctrl+L untuk memuat data tersimpan

## 📱 Optimasi Mobile

### Fitur Mobile-Friendly:
- **Touch-optimized**: Tombol dan input yang mudah disentuh
- **Responsive layout**: Menyesuaikan ukuran layar
- **Keyboard mobile**: Input numerik otomatis untuk angka
- **Zoom prevention**: Mencegah zoom tidak diinginkan saat input

### Ukuran Layar yang Didukung:
- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px  
- 💻 **Desktop**: 1024px+

## 🎨 Teknologi yang Digunakan

- **HTML5** - Struktur aplikasi
- **CSS3** - Styling dengan glassmorphism effect
- **JavaScript** - Logika aplikasi dan interaktivitas
- **LocalStorage** - Penyimpanan data lokal
- **PWA Ready** - Manifest untuk Progressive Web App

## 📋 Format Pesan WhatsApp

Aplikasi akan menghasilkan pesan dengan format:

```
📆 Tanggal: Senin, 22 Juli 2024
📦 REKAPAN ORDER HR STORE:

• JUMBO: 5 x Rp 15.000 = Rp 75.000
• LITE: 3 x Rp 10.000 = Rp 30.000

💰 TOTAL: *Rp 105.000*
🧾 Total Produk Terjual: 8

💳 INFORMASI PEMBAYARAN:
🏦 SEABANK: 901516847602
💳 DANA: 082236625627
👤 A.N: AHMAD KHAIRUDIN
📱 QRIS: rebrand.ly/QRIS-HR

Terima kasih! 🙏
```

## 🚀 Instalasi dan Deployment

### Lokal Development:
1. Clone repository ini
2. Buka `index.html` di browser
3. Atau gunakan live server untuk development

### GitHub Pages:
1. Upload semua file ke repository GitHub
2. Aktifkan GitHub Pages di Settings
3. Aplikasi akan tersedia di `https://username.github.io/repository-name`

### PWA Installation:
1. Buka aplikasi di browser mobile
2. Pilih "Add to Home Screen" 
3. Aplikasi akan terinstall seperti app native

## 📂 Struktur File

```
sales-recap-app/
├── index.html          # File HTML utama
├── style.css           # Styling CSS
├── script.js           # JavaScript functionality
├── manifest.json       # PWA manifest
└── README.md          # Dokumentasi
```

## ⌨️ Keyboard Shortcuts

- **Ctrl + S**: Simpan data manual
- **Ctrl + L**: Muat data tersimpan
- **Ctrl + R**: Reset form
- **Enter**: Kirim ke WhatsApp (saat fokus pada tombol)

## 🔧 Kustomisasi

### Mengubah Informasi Pembayaran:
Edit bagian ini di `script.js`:
```javascript
pesan += `\n🏦 SEABANK: 901516847602`;
pesan += `\n💳 DANA: 082236625627`;
pesan += `\n👤 A.N: AHMAD KHAIRUDIN`;
```

### Menambah Produk Tetap:
1. Tambahkan baris di `index.html`
2. Update array `produkList` di `script.js`
3. Tambahkan nama produk di object `produkNames`

### Mengubah Tema Warna:
Edit variabel CSS di `style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🐛 Troubleshooting

### WhatsApp tidak terbuka:
- Pastikan WhatsApp terinstall di perangkat
- Coba buka di browser yang berbeda
- Periksa popup blocker browser

### Data tidak tersimpan:
- Pastikan browser mendukung localStorage
- Periksa storage quota browser
- Clear cache dan coba lagi

### Layout tidak responsif:
- Pastikan viewport meta tag ada di HTML
- Periksa CSS media queries
- Test di berbagai ukuran layar

## 📞 Support

Untuk pertanyaan atau masalah, silakan:
1. Buat issue di GitHub repository
2. Hubungi developer melalui email
3. Check dokumentasi di README

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT. Bebas digunakan dan dimodifikasi.

---

**Dibuat dengan ❤️ untuk HR Store**

*Aplikasi ini dirancang khusus untuk memudahkan pencatatan dan pelaporan penjualan harian dengan interface yang user-friendly dan optimasi mobile.*

