# HR Store - Kalkulator Transaksi Mobile App

Aplikasi mobile untuk kalkulator transaksi HR Store yang telah dikonversi dari HTML ke format Cordova untuk build APK.

## 📱 Fitur Aplikasi

- **Kalkulator Transaksi Profesional**: Menghitung subtotal dan total transaksi secara real-time
- **Integrasi WhatsApp**: Kirim rekapan transaksi langsung ke WhatsApp
- **Desain Modern**: UI/UX yang menarik dengan gradien dan animasi smooth
- **Responsif**: Tampilan optimal di berbagai ukuran layar
- **Stats Dashboard**: Menampilkan total item, transaksi, dan pendapatan
- **Reset Form**: Fitur untuk mengosongkan semua input dengan sekali klik

## 🛠️ Cara Build APK

### Prasyarat

1. **Node.js** (versi 14 atau lebih baru)
2. **Java JDK 8** atau lebih baru
3. **Android SDK** dengan Android Studio
4. **Gradle** (biasanya sudah termasuk dengan Android Studio)

### Langkah-langkah Build

1. **Install Dependencies**
   ```bash
   npm install -g cordova
   ```

2. **Setup Environment Variables**
   ```bash
   export ANDROID_HOME=/path/to/your/android-sdk
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   ```

3. **Install Android SDK Requirements**
   - Buka Android Studio
   - Install Android SDK Platform 35 (atau sesuai target di config.xml)
   - Install Android SDK Build-Tools
   - Install Android SDK Platform-Tools

4. **Build APK**
   ```bash
   cd hr-store-app
   cordova build android
   ```

5. **Build APK Release (untuk distribusi)**
   ```bash
   cordova build android --release
   ```

### Lokasi APK

Setelah build berhasil, APK akan tersedia di:
- **Debug APK**: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
- **Release APK**: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`

## 📁 Struktur Project

```
hr-store-app/
├── www/                    # Web assets
│   ├── index.html         # Main HTML file (dipercantik)
│   └── res/               # Resources
│       └── icon/          # App icons
├── platforms/             # Platform-specific code
├── config.xml            # Cordova configuration
└── package.json          # Node.js dependencies
```

## 🎨 Customization

### Mengubah Icon Aplikasi
Ganti file-file icon di folder `www/res/icon/android/` dengan icon custom Anda.

### Mengubah Nama Aplikasi
Edit file `config.xml`:
```xml
<name>Nama Aplikasi Baru</name>
```

### Mengubah Package ID
Edit file `config.xml`:
```xml
<widget id="com.yourcompany.yourapp" ...>
```

## 🔧 Troubleshooting

### Error: Java JDK not found
- Install Java JDK 8 atau lebih baru
- Set JAVA_HOME environment variable

### Error: Android SDK not found
- Install Android Studio
- Set ANDROID_HOME environment variable
- Tambahkan SDK tools ke PATH

### Error: Gradle not found
- Install Android Studio (Gradle biasanya included)
- Atau install Gradle secara manual

## 📱 Testing

### Test di Browser
```bash
cordova serve
```
Kemudian buka http://localhost:8000

### Test di Device/Emulator
```bash
cordova run android
```

## 🚀 Deployment

### Google Play Store
1. Build release APK
2. Sign APK dengan keystore
3. Upload ke Google Play Console

### Direct Installation
1. Enable "Unknown Sources" di Android device
2. Transfer APK file ke device
3. Install APK

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- Email: admin@hrstore.com
- Website: https://hrstore.com

---

**Catatan**: Project ini sudah dikonfigurasi dengan optimal untuk HR Store. Semua file HTML, CSS, dan JavaScript sudah dioptimasi untuk performa mobile yang baik.

