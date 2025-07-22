# 🔨 Panduan Lengkap Build APK HR Store

## 📋 Checklist Persiapan

### ✅ Software yang Diperlukan

1. **Node.js** (v14+)
   - Download: https://nodejs.org/
   - Verifikasi: `node --version`

2. **Java JDK 8+**
   - Download: https://adoptopenjdk.net/
   - Set JAVA_HOME: `export JAVA_HOME=/path/to/jdk`
   - Verifikasi: `java -version`

3. **Android Studio**
   - Download: https://developer.android.com/studio
   - Install Android SDK, Build Tools, Platform Tools

4. **Cordova CLI**
   ```bash
   npm install -g cordova
   ```

### 🔧 Setup Environment

1. **Android SDK Path**
   ```bash
   # Linux/Mac
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin

   # Windows
   set ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
   set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
   ```

2. **Verifikasi Setup**
   ```bash
   cordova requirements android
   ```

## 🚀 Build Process

### Step 1: Persiapan Project
```bash
cd hr-store-app
npm install
```

### Step 2: Build Debug APK
```bash
cordova build android
```

### Step 3: Build Release APK
```bash
cordova build android --release
```

### Step 4: Lokasi APK
- **Debug**: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
- **Release**: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`

## 🔐 Signing APK (untuk Release)

### Generate Keystore
```bash
keytool -genkey -v -keystore hr-store.keystore -alias hr-store -keyalg RSA -keysize 2048 -validity 10000
```

### Sign APK
```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hr-store.keystore app-release-unsigned.apk hr-store
```

### Align APK
```bash
zipalign -v 4 app-release-unsigned.apk hr-store-release.apk
```

## 🧪 Testing

### Browser Testing
```bash
cordova serve
# Buka http://localhost:8000
```

### Device Testing
```bash
# Install ke device yang terhubung
cordova run android

# Atau install APK manual
adb install app-debug.apk
```

## ⚠️ Troubleshooting

### Error: "Java JDK not installed"
**Solusi:**
1. Install Java JDK 8+
2. Set JAVA_HOME environment variable
3. Restart terminal/command prompt

### Error: "Android SDK not installed"
**Solusi:**
1. Install Android Studio
2. Open SDK Manager dan install:
   - Android SDK Platform 35
   - Android SDK Build-Tools
   - Android SDK Platform-Tools
3. Set ANDROID_HOME environment variable

### Error: "Gradle not found"
**Solusi:**
1. Install Android Studio (Gradle included)
2. Atau download Gradle manual: https://gradle.org/install/

### Error: "Failed to find target with hash string 'android-35'"
**Solusi:**
```bash
# Install target Android API
sdkmanager "platforms;android-35"
```

### Error: Build failed dengan "AAPT2 error"
**Solusi:**
```bash
# Clean dan rebuild
cordova clean android
cordova build android
```

## 📱 Optimasi APK

### Minify dan Obfuscate
Edit `platforms/android/app/build.gradle`:
```gradle
android {
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Reduce APK Size
1. Optimize images di folder `www/`
2. Remove unused CSS/JS
3. Enable ProGuard untuk release build

## 🔄 Update Aplikasi

### Update HTML/CSS/JS
1. Edit files di folder `www/`
2. Run `cordova build android`

### Update App Version
Edit `config.xml`:
```xml
<widget id="com.hrstore.app" version="1.1.0" ...>
```

### Update App Name/Description
Edit `config.xml`:
```xml
<name>HR Store v2</name>
<description>Updated description</description>
```

## 📊 Performance Tips

1. **Optimize Images**: Compress images di `www/res/`
2. **Minify CSS/JS**: Use build tools untuk minification
3. **Enable Hardware Acceleration**: Sudah dikonfigurasi di `config.xml`
4. **Reduce HTTP Requests**: Combine CSS/JS files jika memungkinkan

## 🎯 Next Steps

1. **Test APK** di berbagai device Android
2. **Upload ke Google Play Store** untuk distribusi
3. **Setup Analytics** untuk tracking usage
4. **Implement Push Notifications** jika diperlukan

---

**💡 Tips**: Simpan keystore file dengan aman! Tanpa keystore, Anda tidak bisa update aplikasi di Play Store.

