# Spesifikasi Portfolio Website - Predictive Machine Learning Projects

Dokumen ini merangkum dua project predictive machine learning yang ada di folder ini agar siap dimasukkan ke portfolio website. Fokusnya adalah membuat narasi yang rapi, kredibel, dan mudah dipindahkan ke halaman portfolio modern.

## Ringkasan Paket

Folder output:

`portfolio_website_package/`

Isi utama:

| File | Fungsi |
|---|---|
| `portfolio_specification.md` | Dokumen spesifikasi lengkap untuk halaman portfolio |
| `portfolio_content.id.json` | Konten terstruktur siap dipakai di website |
| `portfolio_data_summary.json` | Ringkasan data dan metrik hasil generate otomatis |
| `assets/portfolio_project_cards.svg` | Visual kartu pembuka untuk dua project |
| `assets/ml_workflow_diagram.svg` | Diagram workflow machine learning |
| `assets/juanda_airport_forecasting_dashboard.svg` | Visual overview project Juanda |
| `assets/juanda_model_comparison.svg` | Visual perbandingan model forecasting |
| `assets/la_crime_prediction_dashboard.svg` | Visual overview project LA Crime |
| `assets/la_model_comparison.svg` | Visual perbandingan model klasifikasi |
| `scripts/generate_portfolio_assets.py` | Generator SVG dan summary JSON |

## Struktur Website Yang Disarankan

Gunakan struktur ini agar halaman portfolio terasa seperti case study, bukan sekadar daftar tugas kuliah.

1. Portfolio grid
   - Judul section: `Predictive Machine Learning Case Studies`
   - Subtitle: `Dua studi kasus dari mata kuliah Predictive Analytics and Prediction: forecasting deret waktu dan klasifikasi non-time-series.`
   - Visual: `assets/portfolio_project_cards.svg`
   - CTA tiap card: `View case study`

2. Detail page per project
   - Hero: judul, kategori, 3-4 metrik utama, visual dashboard
   - Problem statement
   - Dataset and preprocessing
   - Methodology pipeline
   - Model experiments
   - Results and model selection
   - Insights
   - Limitations and next improvements
   - Links: notebook, dataset, repository, presentation/video jika tersedia

3. Shared methodology section
   - Visual: `assets/ml_workflow_diagram.svg`
   - Cocok diletakkan sebelum atau setelah dua card project.

## Project 1 - Juanda Airport Visitor Forecasting

### Portfolio Metadata

| Field | Isi |
|---|---|
| Title | Juanda Airport Visitor Forecasting |
| Category | Time Series Forecasting |
| Domain | Transportation analytics, airport demand forecasting |
| Dataset | Data bulanan kunjungan Bandara Juanda |
| Period | 2014-2023 |
| Records | 120 observasi bulanan |
| Target | Jumlah Kunjungan Domestik + Internasional |
| Best Model | Random Forest Regressor |
| Best Split | 80-20 |
| Best R2 | 0.868918 |
| Best MAE | 48.156 pengunjung |
| Best MSE | 4.679.125.000 |
| Main Tools | Python, pandas, scikit-learn, Keras/TensorFlow, Jupyter Notebook |
| Tags | Time Series, Forecasting, Random Forest, CNN-LSTM, EDA, Regression |

### Short Card Copy

**Juanda Airport Visitor Forecasting**

Memprediksi jumlah kunjungan bulanan Bandara Juanda menggunakan data 2014-2023, dengan eksperimen Linear Regression, Random Forest, dan CNN-LSTM untuk menemukan model forecasting paling akurat.

Stats card:

| Label | Value |
|---|---|
| Period | 2014-2023 |
| Data Points | 120 months |
| Best R2 | 0.869 |
| Best MAE | 48k visitors |

CTA:

`View forecasting case study`

### Problem Statement

Kunjungan bandara memiliki pola temporal yang dapat berubah karena tren tahunan, fluktuasi musiman, dan kejadian besar seperti penurunan mobilitas pada masa pandemi. Project ini bertujuan membangun model prediksi jumlah kunjungan bulanan Bandara Juanda agar pola historis dapat dianalisis dan digunakan sebagai dasar forecasting jangka pendek.

### Objective

Membangun dan membandingkan beberapa model forecasting untuk memprediksi jumlah kunjungan bulanan, lalu memilih model terbaik berdasarkan error dan kemampuan menjelaskan variasi data.

### Dataset and Preprocessing

Data terdiri dari kolom:

| Column | Description |
|---|---|
| `Tahun` | Tahun observasi |
| `Bulan` | Bulan observasi |
| `Periode` | Urutan periode bulanan |
| `Jumlah Kunjungan` | Total kunjungan domestik + internasional |

Langkah preprocessing:

1. Memuat dataset lokal dari CSV.
2. Mengecek missing values.
3. Mengecek duplikasi.
4. Melakukan analisis statistik deskriptif.
5. Menangani outlier rendah dengan mengganti nilai di bawah quantile 1 persen menggunakan median.
6. Melakukan normalisasi Min-Max Scaling.
7. Membentuk kolom tanggal `ds` dan target `y`.

Catatan kualitas data:

| Check | Result |
|---|---|
| Missing values | 0 |
| Duplicate rows | 0 |
| Records | 120 |
| Mean after outlier handling | 563.801 |
| Max after outlier handling | 977.793 |

### EDA Insights

Insight yang dapat ditampilkan:

1. Data menunjukkan dinamika jangka panjang dari 2014 sampai 2023.
2. Terlihat penurunan signifikan pada periode pandemi, lalu pemulihan setelahnya.
3. Rata-rata tahunan membantu memperlihatkan perubahan demand secara lebih ringkas dibanding grafik bulanan.
4. Outlier rendah perlu ditangani agar model tidak terlalu dipengaruhi nilai ekstrem.

### Modeling

Model yang dibandingkan:

| Model | Purpose |
|---|---|
| Linear Regression | Baseline sederhana untuk menangkap tren linear |
| Random Forest Regressor | Model non-linear untuk menangkap pola yang tidak sepenuhnya linear |
| CNN-LSTM | Eksperimen hybrid deep learning untuk pola sekuensial |

Skenario train-test split:

| Scenario | Train | Test |
|---|---:|---:|
| 80-20 | 80% | 20% |
| 70-30 | 70% | 30% |
| 60-40 | 60% | 40% |

Metrik evaluasi:

| Metric | Meaning |
|---|---|
| MSE | Penalti error kuadrat, sensitif terhadap error besar |
| MAE | Rata-rata selisih absolut antara prediksi dan aktual |
| MAPE | Error relatif dalam persen |
| R2 | Proporsi variasi data yang dapat dijelaskan model |

### Results

Ringkasan performa terbaik per model:

| Model | Best Split | R2 | MAE |
|---|---|---:|---:|
| Linear Regression | 80-20 | 0.415 | 114.285 |
| Random Forest | 80-20 | 0.869 | 48.156 |
| CNN-LSTM | 70-30 untuk R2, 80-20 untuk MAE | 0.697 | 54.063 |

Recommended model for portfolio:

**Random Forest Regressor pada split 80-20**

Alasan:

1. R2 tertinggi di antara eksperimen notebook.
2. MAE terendah dibanding model lain.
3. Lebih stabil dan lebih mudah dijelaskan untuk portfolio dibanding CNN-LSTM yang performanya tidak konsisten antar split.

### Visuals To Use

| Asset | Placement | Purpose | Alt Text |
|---|---|---|---|
| `assets/juanda_airport_forecasting_dashboard.svg` | Hero atau overview section | Menunjukkan tren bulanan, stats utama, dan rata-rata tahunan | Dashboard forecasting kunjungan Bandara Juanda 2014-2023 |
| `assets/juanda_model_comparison.svg` | Results section | Membandingkan R2 dan MAE model | Perbandingan performa model forecasting Juanda |
| `assets/ml_workflow_diagram.svg` | Methodology section | Menjelaskan alur kerja project | Diagram workflow machine learning untuk forecasting dan classification |

### Suggested Section Copy

#### Hero

`Juanda Airport Visitor Forecasting`

`Time series forecasting project untuk memprediksi jumlah kunjungan bulanan Bandara Juanda berdasarkan data historis 2014-2023. Project ini membandingkan model baseline, ensemble, dan hybrid deep learning untuk menemukan pendekatan forecasting yang paling akurat.`

#### Result Highlight

`Random Forest Regressor menjadi model terbaik dengan R2 0.869 dan MAE sekitar 48 ribu pengunjung pada skenario 80-20. Hasil ini menunjukkan bahwa pola non-linear dalam data kunjungan lebih cocok ditangkap oleh model ensemble dibanding baseline linear.`

#### Limitation

`Eksperimen notebook masih menggunakan train_test_split acak, sehingga untuk produksi time series sebaiknya ditingkatkan menjadi chronological split atau walk-forward validation. Model juga dapat diperbaiki dengan fitur musiman seperti bulan, libur panjang, atau event mobilitas.`

### Improvements For Future Version

1. Gunakan chronological train-test split agar lebih sesuai dengan karakter time series.
2. Tambahkan fitur seasonality seperti bulan, kuartal, libur nasional, atau event besar.
3. Gunakan rolling forecast dan walk-forward validation.
4. Bandingkan dengan ARIMA/SARIMA, Prophet, XGBoost, atau LightGBM.
5. Tambahkan confidence interval untuk forecast.

## Project 2 - LA Crime Type Prediction

### Portfolio Metadata

| Field | Isi |
|---|---|
| Title | LA Crime Type Prediction |
| Category | Non-Time-Series Prediction, Multi-class Classification |
| Domain | Public safety analytics, crime data classification |
| Dataset | Cleaned Los Angeles crime records |
| Period | 2020-2024 |
| Raw Records | 976.232 |
| Raw Classes | 140 crime codes |
| Modeled Classes | 138 crime codes |
| Balanced Dataset | 13.800 rows |
| Target | `Crm Cd` |
| Best Baseline Model | SVM with RBF Kernel |
| Best Accuracy | 0.321256 |
| Best F1 Score | 0.302855 |
| Best AUC ROC | 0.658151 for SVM, 0.793221 for BPNN with evaluation caveat |
| Main Tools | Python, pandas, scikit-learn, imbalanced-learn, Keras/TensorFlow, Jupyter Notebook |
| Tags | Classification, Multi-class, SVM, Feature Selection, Class Balancing, Cross Validation |

### Short Card Copy

**LA Crime Type Prediction**

Memprediksi kode kriminalitas Los Angeles dari informasi waktu, lokasi, premis, status kasus, dan atribut korban menggunakan pendekatan klasifikasi multi-class dengan balancing dan cross-validation.

Stats card:

| Label | Value |
|---|---|
| Records | 976k |
| Modeled Classes | 138 |
| Balanced Data | 13.800 |
| Best Accuracy | 0.321 |

CTA:

`View classification case study`

### Problem Statement

Dataset kriminalitas memiliki banyak kelas target, distribusi kelas yang tidak seimbang, dan fitur kategorikal yang perlu diolah sebelum pemodelan. Project ini bertujuan membangun model klasifikasi multi-class untuk memprediksi kode kriminalitas berdasarkan konteks kejadian, seperti waktu, area, premis, status, zona geografis, dan atribut korban.

### Objective

Membangun pipeline klasifikasi non-time-series yang mencakup preprocessing, feature selection, data balancing, cross-validation, model comparison, dan pemilihan model terbaik berdasarkan metrik evaluasi pada test set.

### Dataset and Preprocessing

Dataset awal memiliki 976.232 baris dan 26 kolom. Beberapa kolom utama:

| Column | Description |
|---|---|
| `Crm Cd` | Target kode kriminalitas |
| `TIME OCC` | Waktu kejadian |
| `AREA` / `AREA NAME` | Area kejadian |
| `Rpt Dist No` | Reporting district |
| `Vict Age` | Usia korban |
| `Vict Sex` | Jenis kelamin korban |
| `Vict Descent` | Descent korban |
| `Premis Cd` | Kode premis |
| `Status` | Status kasus |
| `Day of Week` | Hari kejadian |
| `Month` | Bulan kejadian |
| `Day/Night` | Kategori siang/malam |
| `Geographic Zone` | Zona geografis |

Langkah preprocessing:

1. Memuat cleaned dataset.
2. Mengecek missing values.
3. Menghapus kolom yang tidak diperlukan atau redundan.
4. Melakukan encoding kategorikal manual untuk hari, bulan, status, zona, dan siang/malam.
5. Menyusun ulang kolom agar target berada di awal.
6. Melakukan correlation analysis menggunakan Spearman.
7. Menghapus `AREA` karena redundant dengan `Rpt Dist No`.
8. Menghapus kelas target dengan jumlah sampel tunggal.
9. Melakukan balancing menjadi 100 sampel per kelas.
10. Membagi data menjadi train 70% dan test 30% dengan stratified sampling.
11. Menggunakan 5-fold cross-validation.

Catatan class balancing:

| Step | Result |
|---|---|
| Raw classes | 140 |
| Removed single-instance classes | 2 |
| Modeled classes | 138 |
| Samples per class after balancing | 100 |
| Balanced records | 13.800 |

### EDA Insights

Insight yang dapat ditampilkan:

1. Jenis kriminalitas paling banyak adalah `VEHICLE - STOLEN`.
2. Distribusi kriminalitas siang dan malam cukup berimbang, tetapi siang sedikit lebih tinggi.
3. Zona `South-West` mendominasi jumlah record.
4. Area `Central`, `77th Street`, `Pacific`, dan `Southwest` termasuk area dengan jumlah record tertinggi.
5. Masalah utama dataset adalah class imbalance dan jumlah kelas target yang sangat banyak.

### Modeling

Model yang dibandingkan:

| Model | Experiment Detail |
|---|---|
| k-NN | Uji beberapa nilai k: 3, 5, 7, 9, 11 |
| Naive Bayes | GaussianNB dengan 5-fold cross-validation |
| Logistic Regression | StandardScaler, solver saga, max_iter 2000 |
| SVM | Kernel linear dan RBF, variasi C: 0.1, 1, 10 |
| Decision Tree | Grid parameter depth, split, leaf, criterion, max features, max leaf nodes |
| BPNN | Hidden layers, neurons, learning rate, epochs, activation functions |

Metrik evaluasi:

| Metric | Meaning |
|---|---|
| Accuracy | Proporsi prediksi benar |
| Precision macro | Rata-rata precision antar kelas |
| Recall macro | Rata-rata recall antar kelas |
| F1 macro | Keseimbangan precision dan recall antar kelas |
| AUC ROC macro | Kemampuan pemisahan kelas secara agregat |

### Results

Test set performance dari notebook:

| Model | Accuracy | Precision | Recall | F1 | AUC ROC |
|---|---:|---:|---:|---:|---:|
| k-NN | 0.279 | 0.249 | 0.279 | 0.252 | 0.637 |
| Naive Bayes | 0.078 | 0.061 | 0.078 | 0.048 | 0.536 |
| Logistic Regression | 0.104 | 0.067 | 0.104 | 0.069 | 0.549 |
| SVM RBF | 0.321 | 0.291 | 0.321 | 0.303 | 0.658 |
| Decision Tree | 0.074 | 0.036 | 0.074 | 0.039 | 0.534 |
| BPNN | 0.000 | 0.000 | 0.000 | 0.000 | 0.793 |

Recommended model for portfolio:

**SVM dengan kernel RBF dan C = 10**

Alasan:

1. Accuracy tertinggi pada test set.
2. F1 score tertinggi pada test set.
3. Lebih aman ditampilkan sebagai model terbaik dibanding BPNN, karena BPNN memiliki AUC tinggi tetapi accuracy dan F1 bernilai 0.

Catatan penting:

`BPNN menunjukkan AUC ROC tinggi, tetapi accuracy/F1 test = 0. Ini perlu diaudit sebelum diklaim sebagai model terbaik. Kemungkinan perlu pemeriksaan label encoding atau inverse transform output kelas.`

### Visuals To Use

| Asset | Placement | Purpose | Alt Text |
|---|---|---|---|
| `assets/la_crime_prediction_dashboard.svg` | Hero atau data overview section | Menampilkan ukuran dataset, top crime types, day/night split, geographic zone, dan top areas | Dashboard klasifikasi jenis kriminalitas Los Angeles |
| `assets/la_model_comparison.svg` | Results section | Membandingkan accuracy, F1, dan AUC model | Perbandingan model klasifikasi LA Crime |
| `assets/ml_workflow_diagram.svg` | Methodology section | Menjelaskan alur kerja project | Diagram workflow machine learning untuk forecasting dan classification |

### Suggested Section Copy

#### Hero

`LA Crime Type Prediction`

`Multi-class classification project untuk memprediksi kode kriminalitas Los Angeles berdasarkan konteks kejadian, lokasi, waktu, premis, status kasus, dan atribut korban. Project ini menekankan feature preparation, class balancing, cross-validation, dan model comparison.`

#### Result Highlight

`SVM dengan kernel RBF menjadi baseline terbaik pada test set dengan accuracy 0.321 dan F1 score 0.303. Hasil ini cukup realistis mengingat target memiliki 138 kelas setelah balancing, sehingga project ini lebih tepat diposisikan sebagai eksperimen klasifikasi multi-class skala besar.`

#### Limitation

`Project ini tidak ditujukan untuk pengambilan keputusan otomatis di ranah penegakan hukum. Hasil model sebaiknya dipakai sebagai analisis teknis dan eksperimen akademik, karena dataset kriminalitas dapat mengandung bias pelaporan, bias lokasi, serta distribusi kelas yang kompleks.`

### Improvements For Future Version

1. Audit kembali evaluasi BPNN, terutama label encoding dan mapping prediksi ke kode kriminalitas asli.
2. Tambahkan confusion matrix untuk top 20 kelas terbesar.
3. Uji model tree boosting seperti XGBoost, LightGBM, atau CatBoost.
4. Gunakan encoding yang lebih kuat untuk fitur kategorikal.
5. Tambahkan geospatial feature engineering dari latitude/longitude.
6. Evaluasi macro F1 dan top-k accuracy agar lebih representatif untuk multi-class 138 kelas.
7. Buat interpretability report dengan feature importance atau SHAP.

## Website Content Architecture

### Section 1 - Intro

Title:

`Predictive Machine Learning Case Studies`

Subtitle:

`Dua project akademik yang mengeksplorasi pendekatan prediksi berbeda: forecasting deret waktu untuk demand bandara dan klasifikasi multi-class untuk data kriminalitas.`

Visual:

`assets/portfolio_project_cards.svg`

### Section 2 - Project Cards

Card fields:

| Field | Juanda | LA Crime |
|---|---|---|
| Badge | Time Series Forecasting | Multi-class Classification |
| Title | Juanda Airport Visitor Forecasting | LA Crime Type Prediction |
| One-liner | Forecast kunjungan bulanan bandara menggunakan model regression, ensemble, dan hybrid deep learning. | Prediksi kode kriminalitas dari fitur waktu, lokasi, status, dan atribut korban. |
| Metrics | 120 months, R2 0.869, MAE 48k | 976k records, 138 classes, accuracy 0.321 |
| CTA | View case study | View case study |

### Section 3 - Methodology

Use:

`assets/ml_workflow_diagram.svg`

Copy:

`Kedua project mengikuti workflow machine learning yang lengkap: data preparation, exploratory analysis, model experimentation, evaluation, dan model selection. Perbedaannya terletak pada jenis prediksi: Juanda menggunakan pendekatan forecasting, sedangkan LA Crime menggunakan klasifikasi multi-class dengan class balancing.`

### Section 4 - Individual Case Studies

Setiap case study sebaiknya memiliki urutan:

1. Hero visual
2. Problem and objective
3. Dataset details
4. Preprocessing pipeline
5. EDA insights
6. Model comparison
7. Final result
8. Limitations and next steps

## Recommended UI Treatment

### Visual Style

Gunakan tampilan yang bersih dan profesional:

| Element | Recommendation |
|---|---|
| Background | Putih atau off-white |
| Text | Dark navy atau near-black |
| Accent colors | Teal untuk forecasting, coral/orange untuk classification |
| Cards | Radius kecil 8px, border halus |
| Charts | SVG dashboard yang sudah dibuat |
| Typography | Inter, Geist, IBM Plex Sans, atau system sans |

### Layout

Desktop:

1. Hero section full width.
2. Project cards 2 kolom.
3. Case study detail dengan grid 60/40 untuk teks dan visual.
4. Model comparison full width.

Mobile:

1. Stack satu kolom.
2. SVG dibuat full width.
3. Stats cards berubah menjadi 2 kolom atau 1 kolom.
4. Tabel metrik bisa dibuat horizontal scroll.

## Image Embed Snippets

HTML:

```html
<img
  src="/portfolio_website_package/assets/juanda_airport_forecasting_dashboard.svg"
  alt="Dashboard forecasting kunjungan Bandara Juanda 2014-2023"
  width="1440"
  height="920"
/>
```

React/Next.js:

```tsx
<img
  src="/portfolio_website_package/assets/la_model_comparison.svg"
  alt="Perbandingan model klasifikasi LA Crime"
  className="w-full rounded-lg border border-slate-200"
/>
```

Markdown:

```md
![Dashboard forecasting kunjungan Bandara Juanda](assets/juanda_airport_forecasting_dashboard.svg)
```

## Credibility Notes

Gunakan bahasa yang jujur dan tidak overclaim:

1. Sebut project sebagai academic machine learning case study.
2. Untuk Juanda, jelaskan Random Forest sebagai model terbaik dari eksperimen notebook, tetapi beri catatan bahwa validasi time series idealnya chronological.
3. Untuk LA Crime, tampilkan SVM sebagai best deployable baseline berdasarkan accuracy/F1.
4. Jangan klaim BPNN sebagai model terbaik hanya karena AUC tinggi, karena accuracy/F1 test bernilai 0.
5. Jangan posisikan LA Crime sebagai alat keputusan hukum otomatis.

## Final Portfolio Tagline

`From sequential demand forecasting to large-scale multi-class classification, these projects show my ability to turn raw data into structured predictive modeling workflows, evaluate competing algorithms, and communicate model performance with clear visual evidence.`

