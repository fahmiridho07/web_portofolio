# MediMate - Medicine Reminder CRUD App

MediMate adalah aplikasi mobile sederhana berbasis Flutter untuk membantu pengguna mengelola daftar obat, dosis, waktu minum, gambar obat, dan pengingat harian. Project ini dibuat sebagai final project dengan fokus pada fitur CRUD, pencarian data, form input, detail data, serta integrasi notifikasi lokal.

## Ringkasan Project

| Item | Detail |
| --- | --- |
| Nama aplikasi | MediMate |
| Jenis aplikasi | Mobile app CRUD |
| Platform utama | Android |
| Framework | Flutter |
| Bahasa | Dart |
| Package name | `ngobatyuk` |
| Versi project | `0.1.0` |
| Target pengguna | Pengguna yang ingin mencatat jadwal minum obat secara sederhana |
| Status build | Debug APK berhasil dibuat |

## Preview

### Home & Daftar Obat

![Home Screen](screenshots/01-home.png)

### Form Tambah Obat

![Add Medicine Screen](screenshots/02-add-medicine.png)

### Detail Obat

![Detail Medicine Screen](screenshots/03-detail-medicine.png)

## Deskripsi Singkat untuk Portofolio

MediMate adalah aplikasi Flutter CRUD sederhana untuk mengelola jadwal minum obat. Aplikasi ini menyediakan daftar obat, fitur pencarian, form tambah dan edit data obat, detail informasi dosis dan waktu minum, pilihan gambar obat dari galeri, serta pengaturan pengingat minum obat berbasis local notification. UI aplikasi menggunakan gaya modern berbasis Material 3 dengan kartu informatif, warna yang ramah, ikon yang mudah dipahami, dan action button yang jelas. Project ini menunjukkan implementasi dasar mobile development dengan Flutter, pengelolaan state lokal, validasi form, navigasi antar halaman, dan integrasi plugin native Android.

## Fitur Utama

- Menampilkan daftar obat dengan nama, waktu minum, dosis, dan ikon atau gambar obat.
- Mencari obat berdasarkan nama melalui search field di halaman utama.
- Menambahkan data obat baru melalui form input.
- Mengedit data obat yang sudah ada, termasuk nama, dosis, waktu, dan gambar.
- Menghapus data obat melalui halaman detail dengan dialog konfirmasi.
- Melihat detail obat dalam halaman khusus.
- Memilih gambar obat dari galeri menggunakan `image_picker`.
- Mengatur pengingat minum obat harian melalui local notification.
- Menyimpan data reminder notifikasi ke file lokal dalam format JSON.
- Meminta izin notifikasi Android melalui `permission_handler`.

## Alur Pengguna

1. Pengguna membuka halaman utama dan melihat daftar obat.
2. Pengguna dapat mencari obat lewat kolom pencarian.
3. Pengguna menekan tombol tambah untuk membuka form tambah obat.
4. Pengguna mengisi nama obat, dosis, waktu minum, dan opsional gambar obat.
5. Setelah disimpan, obat baru muncul di daftar utama.
6. Pengguna dapat membuka detail obat untuk melihat informasi lengkap.
7. Dari halaman detail, pengguna dapat mengedit atau menghapus obat.
8. Pengguna dapat membuka halaman notifikasi untuk menambah, mengubah, menyalakan, mematikan, atau menghapus jadwal pengingat.

## Spesifikasi Teknis

### Environment

| Komponen | Versi / Konfigurasi |
| --- | --- |
| Flutter | 3.24.4 |
| Dart | 3.5.4 |
| Dart SDK constraint | `^3.5.4` |
| Android build | Gradle debug build |
| Material Design | `uses-material-design: true` |

### Dependencies

| Package | Fungsi |
| --- | --- |
| `flutter_local_notifications` | Membuat dan menjadwalkan local notification |
| `timezone` | Mengelola jadwal notifikasi berbasis zona waktu |
| `permission_handler` | Meminta izin notifikasi Android |
| `path_provider` | Mengambil direktori penyimpanan dokumen aplikasi |
| `image_picker` | Memilih gambar obat dari galeri |
| `flutter_lints` | Menjaga kualitas kode melalui lint rules |

## Struktur Project

```text
lib/
  main.dart
  screens/
    home_page.dart
    add_medicine_page.dart
    detail_medicine_page.dart
    notification_page.dart
  utils/
    notification_helper.dart
  widgets/
    medicine_card.dart

portfolio/
  medimate-project-spec.md
  screenshots/
    01-home.png
    02-add-medicine.png
    03-detail-medicine.png

test/
  portfolio_screenshots_test.dart
```

## Pembagian Komponen

| File | Tanggung jawab |
| --- | --- |
| `main.dart` | Entry point aplikasi, inisialisasi timezone, route utama, dan tema aplikasi |
| `home_page.dart` | Halaman utama, daftar obat, pencarian, tambah data, edit data, hapus data |
| `add_medicine_page.dart` | Form tambah dan edit obat dengan validasi input |
| `detail_medicine_page.dart` | Menampilkan detail obat dan aksi edit/hapus |
| `notification_page.dart` | CRUD reminder notifikasi, toggle aktif/nonaktif, dan penyimpanan reminder |
| `notification_helper.dart` | Helper untuk inisialisasi dan scheduling notifikasi |
| `medicine_card.dart` | Widget kartu obat yang dipakai pada list utama |

## Model Data

Data obat disimpan secara lokal di state halaman utama menggunakan struktur map:

```dart
{
  'name': 'Paracetamol',
  'time': '08:00 AM',
  'dosage': '500mg',
  'imagePath': null,
}
```

Data reminder notifikasi disimpan ke file `reminders.txt` di direktori dokumen aplikasi dalam bentuk JSON:

```json
[
  {
    "time": "08:00 AM",
    "hour": 8,
    "minute": 0,
    "active": true
  }
]
```

## Validasi dan Perbaikan yang Dilakukan

- Memperbaiki tipe data obat agar `imagePath` dapat bernilai kosong tanpa error null-safety.
- Memindahkan `image_picker` dari `dev_dependencies` ke `dependencies` karena dipakai di kode aplikasi.
- Menghapus dependency duplikat `path_provider` dari `dev_dependencies`.
- Meng-upgrade `flutter_local_notifications` ke versi `^17.2.4` untuk mengatasi error compile Java pada Android.
- Mengganti parameter scheduling notifikasi yang deprecated ke `AndroidScheduleMode.exactAllowWhileIdle`.
- Menambahkan permission Android untuk `POST_NOTIFICATIONS` dan `SCHEDULE_EXACT_ALARM`.
- Memperbaiki flow edit agar perubahan nama obat tetap tersimpan.
- Membuat parsing waktu reminder lebih aman dengan menyimpan `hour` dan `minute` secara eksplisit.
- Merapikan layout form agar tidak overflow di viewport mobile.
- Membuat warna teks tombol lebih kontras.
- Menyamakan title aplikasi dan Android label menjadi `MediMate`.
- Menambahkan screenshot test untuk menghasilkan gambar UI portofolio.
- Mendesain ulang tampilan aplikasi dengan shared theme, dashboard home modern, kartu obat informatif, form input responsif, detail page yang lebih mudah dipindai, dan reminder screen dengan status aktif/nonaktif.

## Hasil Verifikasi

| Verifikasi | Hasil |
| --- | --- |
| `flutter analyze` | No issues found |
| `flutter test --no-pub --update-goldens test/portfolio_screenshots_test.dart` | All tests passed |
| `gradlew :app:assembleDebug` | BUILD SUCCESSFUL |
| APK debug | `build/app/outputs/flutter-apk/app-debug.apk` |

## Catatan Build

Debug APK berhasil dibuat di:

```text
build/app/outputs/flutter-apk/app-debug.apk
```

Saat build Android, Gradle menampilkan warning bahwa Android Gradle Plugin 8.1.0 diuji sampai `compileSdk 33`, sedangkan project memakai `compileSdk 34` dari Flutter. Warning ini tidak menghentikan build debug, tetapi bisa menjadi catatan jika project ingin disiapkan untuk release production.

## Potensi Pengembangan Lanjutan

- Menyimpan data obat secara permanen menggunakan SQLite, Hive, atau SharedPreferences.
- Menambahkan kategori obat dan catatan tambahan.
- Menambahkan validasi jadwal minum obat yang lebih detail.
- Menambahkan desain app icon khusus MediMate.
- Membuat release APK/AAB dengan signing config production.
- Menambahkan test interaksi untuk flow tambah, edit, hapus, dan reminder.
- Menambahkan mode dark theme.

## Command yang Digunakan

```bash
flutter pub get
flutter analyze
flutter test --no-pub --update-goldens test/portfolio_screenshots_test.dart
cd android
./gradlew :app:assembleDebug --no-daemon --console=plain
```
