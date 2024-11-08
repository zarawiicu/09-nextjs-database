## Jawaban soal No 1
Vercel adalah platform hosting dan deployment yang dirancang untuk aplikasi front-end, seperti proyek berbasis framework Next.js, React, Vue.js, dan Svelte. Vercel mempermudah proses deployment (penyebaran) aplikasi web dengan fitur continuous deployment, yang memungkinkan pembaruan otomatis dari perubahan di repository GitHub atau GitLab. Vercel juga menyediakan infrastruktur serverless, yang mendukung kinerja cepat dan skalabilitas tinggi.

Deploy adalah proses menyebarkan atau memindahkan aplikasi dari lingkungan pengembangan (lokal) ke server atau platform hosting, sehingga aplikasi tersebut bisa diakses secara publik melalui internet. Melalui deployment, aplikasi siap digunakan oleh pengguna, lengkap dengan konfigurasi yang diperlukan untuk berjalan dengan baik di lingkungan produksi.

## Jawaban soal No 2
Saya membelajari bagaimana cara membuat database melalui vercel postgree, konfigurasi file .env, dan region

region merujuk pada lokasi geografis pusat data (data center) tempat database PostgreSQL kamu ditempatkan. Saat kamu membuat database PostgreSQL di Vercel, kamu bisa memilih region tertentu, seperti us-east-1, eu-west-1, dan lainnya. Ini menentukan di mana data kamu akan disimpan secara fisik.

## Jawaban soal No. 3
npm run seed digunakan untuk mengisi database dengan data awal (seed data). Ini bermanfaat untuk memasukkan data dummy atau data dasar yang dibutuhkan oleh aplikasi saat tahap pengembangan atau pengujian. Pada seed.js, kita membuat table users, customers, invoices, dan revenue. Kemudian Data.js adalah file dimana kita membuat contoh data yang akan kita masukkan ke dalam tabel yang telah kita buat.

## Jawaban No 4
Saya mempelajari bagaimana menggunakan query untuk mengelola/menyeleksi data melalui vercel postgree.
** Untuk query yang saya coba
```bash
SELECT
    r.month AS revenue_month,
    r.revenue AS recorded_revenue,
    COALESCE(SUM(i.amount), 0) AS calculated_revenue_from_invoices
FROM
    revenue r
LEFT JOIN
    invoices i ON TO_CHAR(i.date, 'Mon') = r.month AND i.status = 'paid'
GROUP BY
    r.month, r.revenue
ORDER BY
    r.month;
```

 ~ PENJELASAN :
      - TO_CHAR(i.date, 'Mon') = r.month: Mengonversi tanggal di invoices menjadi format bulan (seperti Jan, Feb, dll.) agar bisa dibandingkan dengan kolom month di tabel revenue.
      - i.status = 'paid': Menyaring hanya invoice yang sudah dibayar (status = 'paid') untuk menghitung pendapatan.
      - SUM(i.amount): Menghitung total pendapatan dari invoices yang sudah dibayar untuk setiap bulan.
      - COALESCE(SUM(i.amount), 0): Mengembalikan 0 jika tidak ada invoice yang cocok di bulan tertentu, sehingga hasil tidak menjadi NULL.
      - LEFT JOIN: Menggunakan LEFT JOIN untuk memastikan semua bulan dari revenue ditampilkan, meskipun tidak ada data di invoices untuk bulan tersebut.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
