# Scent2Me - Intelligent Perfume Recommendation Platform

## Ringkasan Proyek

Scent2Me adalah platform rekomendasi parfum berbasis web yang membantu pengguna menemukan parfum sesuai preferensi aroma, gender, waktu penggunaan, occasion, performa aroma, dan budget. Aplikasi ini menggabungkan frontend interaktif dengan backend recommendation service yang memproses dataset parfum dan menghasilkan rekomendasi menggunakan pendekatan content-based filtering.

Proyek ini dikerjakan sebagai proyek kelompok. Dalam proyek ini, saya bertanggung jawab pada pengembangan backend, integrasi API, logika rekomendasi, autentikasi dasar, wishlist, serta deployment backend. Deployment aplikasi dipisah menjadi dua layanan: frontend di Vercel dan backend di Railway.

## Peran Saya

**Backend Developer & Deployment Engineer**

Tanggung jawab utama saya:

- Membangun REST API menggunakan FastAPI untuk melayani fitur rekomendasi parfum.
- Mengimplementasikan endpoint untuk search, trending product, random product, rekomendasi berdasarkan nama parfum, dan rekomendasi berdasarkan preferensi pengguna.
- Mengembangkan sistem scoring rekomendasi berbasis TF-IDF dan cosine similarity.
- Menangani preprocessing dan loading model artifact seperti `meta.csv`, `tfidf.pkl`, dan `X_tfidf.npz`.
- Mengatur CORS agar frontend yang dideploy di Vercel dapat berkomunikasi dengan backend di Railway.
- Mengimplementasikan autentikasi sederhana, hashing password, dan penyimpanan data user.
- Mengembangkan fitur wishlist berbasis user dengan database.
- Menyiapkan backend agar dapat berjalan di Railway dengan environment variable seperti `DATABASE_URL`, `ALLOW_ORIGINS`, dan `ART_DIR`.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel untuk deployment

### Backend

- FastAPI
- Uvicorn
- Pandas
- NumPy
- Scikit-learn
- SciPy
- Joblib
- SQLAlchemy
- PostgreSQL
- Passlib untuk password hashing
- Railway untuk deployment

### Recommendation System

- Content-based filtering
- TF-IDF vectorization
- Cosine similarity
- Preference-based filtering
- Dataset produk parfum dan atribut aroma

## Fitur Utama

- Login dan register user.
- Onboarding/preference form untuk memilih preferensi parfum.
- Rekomendasi parfum berdasarkan:
  - gender,
  - fragrance families,
  - waktu penggunaan,
  - occasion,
  - performance,
  - notes favorit,
  - budget minimum dan maksimum.
- Pencarian parfum berdasarkan nama dan brand.
- Trending perfume berdasarkan data penjualan atau rating.
- Random perfume recommendation.
- Save recommendation ke wishlist.
- Integrasi link pembelian produk.
- Frontend dan backend dideploy secara terpisah untuk memudahkan scaling dan maintenance.

## Arsitektur Aplikasi

Scent2Me menggunakan arsitektur client-server dengan pemisahan deployment antara frontend dan backend.

```text
User
  |
  v
Frontend - Next.js on Vercel
  |
  | REST API request
  v
Backend - FastAPI on Railway
  |
  | Load recommendation artifacts
  v
TF-IDF Model + Perfume Dataset
  |
  | User/auth/wishlist data
  v
PostgreSQL Database
```

Frontend bertugas menangani user interface, form preferensi, navigasi halaman, dan penyimpanan state sementara di browser. Backend bertugas memproses request, melakukan filtering data, menghitung similarity score, mengembalikan hasil rekomendasi, serta menyimpan data user dan wishlist.

## Backend API

Beberapa endpoint utama yang dikembangkan:

| Method | Endpoint | Fungsi |
|---|---|---|
| `GET` | `/health` | Mengecek status API dan jumlah item dataset |
| `GET` | `/search` | Mencari parfum berdasarkan nama atau brand |
| `GET` | `/trending` | Mengambil daftar parfum trending |
| `GET` | `/random` | Mengambil satu parfum secara acak |
| `GET` | `/brands` | Mengambil daftar brand unik |
| `GET` | `/recommend` | Memberikan rekomendasi berdasarkan parfum referensi |
| `POST` | `/recommend/preference` | Memberikan rekomendasi berdasarkan preferensi user |
| `POST` | `/auth/register` | Registrasi user |
| `POST` | `/auth/login` | Login user |
| `POST` | `/auth/wishlist/add` | Menyimpan parfum ke wishlist user |
| `GET` | `/auth/wishlist` | Mengambil wishlist user |
| `POST` | `/auth/wishlist/clear` | Menghapus wishlist user |

## Cara Kerja Rekomendasi

Sistem rekomendasi Scent2Me menggunakan pendekatan content-based filtering. Data parfum direpresentasikan dalam bentuk fitur teks seperti brand, fragrance family, accords, notes, gender, dan deskripsi aroma. Fitur tersebut diproses menggunakan TF-IDF sehingga setiap parfum memiliki representasi vektor.

Saat user mengisi preference form, backend membuat query text dari preferensi tersebut, lalu mengubahnya menjadi vector menggunakan TF-IDF model yang sama. Sistem kemudian menghitung cosine similarity antara query vector dan seluruh perfume vector. Hasil rekomendasi dipilih dari item dengan similarity tertinggi setelah melewati filter seperti gender, fragrance family, time of day, occasion, performance, notes, dan price range.

Alur rekomendasi:

1. User mengisi preferensi parfum di frontend.
2. Frontend mengirim payload ke endpoint `/recommend/preference`.
3. Backend melakukan normalisasi input user.
4. Backend memfilter dataset berdasarkan preferensi seperti gender, family, notes, dan budget.
5. Backend menghitung similarity score menggunakan TF-IDF dan cosine similarity.
6. Backend mengembalikan daftar parfum yang paling relevan.
7. Frontend menampilkan hasil rekomendasi dan memungkinkan user menyimpan pilihan ke wishlist.

## Deployment

Deployment dilakukan secara terpisah antara frontend dan backend:

- **Frontend:** Vercel
- **Backend:** Railway
- **Database:** PostgreSQL melalui environment `DATABASE_URL`

Pemisahan deployment ini membuat frontend dan backend dapat dikembangkan, dideploy, dan di-maintain secara independen. Backend Railway menerima request dari frontend Vercel melalui REST API, dengan konfigurasi CORS menggunakan `ALLOW_ORIGINS`.

Environment variable penting pada backend:

- `DATABASE_URL` untuk koneksi PostgreSQL.
- `ALLOW_ORIGINS` untuk mengizinkan domain frontend Vercel mengakses API.
- `ART_DIR` untuk lokasi model artifact dan dataset rekomendasi.

## Tantangan dan Solusi

**Tantangan:** Frontend dan backend berada di platform deployment berbeda, sehingga perlu konfigurasi CORS yang benar.

**Solusi:** Backend dikonfigurasi menggunakan `ALLOW_ORIGINS` agar hanya origin yang dibutuhkan seperti localhost dan domain Vercel yang dapat mengakses API.

**Tantangan:** Rekomendasi harus tetap relevan meskipun input user berbentuk kombinasi preferensi yang berbeda-beda.

**Solusi:** Backend melakukan normalisasi input, filtering bertahap, dan similarity scoring menggunakan TF-IDF agar hasil rekomendasi tetap sesuai dengan preferensi user.

**Tantangan:** Data wishlist dan user perlu bertahan setelah backend restart.

**Solusi:** Backend menggunakan SQLAlchemy dan PostgreSQL sehingga data user dan wishlist tidak hanya disimpan sementara di memory.

## Highlight Kontribusi

- Mengembangkan backend service berbasis FastAPI untuk recommendation engine.
- Menghubungkan frontend Next.js dengan backend melalui REST API.
- Mengimplementasikan recommendation endpoint berbasis preference filtering dan cosine similarity.
- Menyiapkan deployment backend di Railway dan konfigurasi koneksi dengan frontend Vercel.
- Mengatur CORS dan environment variable untuk kebutuhan production.
- Menambahkan auth flow dan wishlist persistence menggunakan database.

## Versi Singkat Untuk Card Portfolio

**Scent2Me** adalah platform rekomendasi parfum berbasis web yang membantu user menemukan parfum sesuai preferensi aroma, occasion, performance, dan budget. Saya bertanggung jawab pada sisi backend, termasuk pengembangan REST API dengan FastAPI, recommendation engine berbasis TF-IDF dan cosine similarity, fitur auth/wishlist, serta deployment backend ke Railway. Frontend aplikasi dideploy terpisah di Vercel dan berkomunikasi dengan backend melalui REST API.

**Tech stack:** Next.js, TypeScript, Tailwind CSS, FastAPI, Python, Scikit-learn, SQLAlchemy, PostgreSQL, Railway, Vercel.

## Versi Bahasa Inggris Untuk Portfolio

Scent2Me is a web-based perfume recommendation platform that helps users discover perfumes based on scent preferences, occasion, performance, favorite notes, and budget. This was a group project, and I was responsible for the backend development and backend deployment.

I built the FastAPI recommendation service, implemented REST API endpoints, developed the TF-IDF and cosine similarity based recommendation flow, handled authentication and wishlist persistence, and deployed the backend to Railway. The frontend was deployed separately on Vercel, with both services connected through a REST API and configured CORS.

**Tech stack:** Next.js, TypeScript, Tailwind CSS, FastAPI, Python, Scikit-learn, SQLAlchemy, PostgreSQL, Railway, Vercel.

## Suggested Portfolio Metadata

- **Project name:** Scent2Me
- **Category:** Web Application / Recommendation System
- **Role:** Backend Developer & Deployment Engineer
- **Team:** Group Project
- **Frontend deployment:** Vercel
- **Backend deployment:** Railway
- **Main focus:** Backend API, recommendation system, deployment, auth, wishlist
- **Repository:** `denjear/scent2me`
- **Backend repository:** `fahmiridho07/scent2me-rec-service`
