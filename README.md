## Jawaban soal No 1
Vercel adalah platform hosting dan deployment yang dirancang untuk aplikasi front-end, seperti proyek berbasis framework Next.js, React, Vue.js, dan Svelte. Vercel mempermudah proses deployment (penyebaran) aplikasi web dengan fitur continuous deployment, yang memungkinkan pembaruan otomatis dari perubahan di repository GitHub atau GitLab. Vercel juga menyediakan infrastruktur serverless, yang mendukung kinerja cepat dan skalabilitas tinggi.


Deploy adalah proses menyebarkan atau memindahkan aplikasi dari lingkungan pengembangan (lokal) ke server atau platform hosting, sehingga aplikasi tersebut bisa diakses secara publik melalui internet. Melalui deployment, aplikasi siap digunakan oleh pengguna, lengkap dengan konfigurasi yang diperlukan untuk berjalan dengan baik di lingkungan produksi.

## Jawaban soal No 1
Vercel adalah platform hosting dan deployment yang dirancang untuk aplikasi front-end, seperti proyek berbasis framework Next.js, React, Vue.js, dan Svelte. Vercel mempermudah proses deployment (penyebaran) aplikasi web dengan fitur continuous deployment, yang memungkinkan pembaruan otomatis dari perubahan di repository GitHub atau GitLab. Vercel juga menyediakan infrastruktur serverless, yang mendukung kinerja cepat dan skalabilitas tinggi.

Deploy adalah proses menyebarkan atau memindahkan aplikasi dari lingkungan pengembangan (lokal) ke server atau platform hosting, sehingga aplikasi tersebut bisa diakses secara publik melalui internet. Melalui deployment, aplikasi siap digunakan oleh pengguna, lengkap dengan konfigurasi yang diperlukan untuk berjalan dengan baik di lingkungan produksi.

## Jawaban soal No 2
Saya belajar tentang bagaimana menggunakan postgres di vercel, membuat database postgres di vercel, konfigurasi file .env, dan region
divercel postgres terdapat region.  region adalah lokasi geografis tempat database Anda ditempatkan secara fisik. Setiap region mewakili pusat data tertentu yang berada di berbagai lokasi di seluruh dunia, seperti Amerika Utara, Eropa, atau Asia.

## Jawaban soal No 3
Bagaimana cara membuat tabel melaluifile seed.js, terdapat tabel users, customers, invoices, dan revenue. Juga bagaimana membuat contoh data yang dapat kita masukkan ke stiap tabel melalui data.js. Agar data kita bisa terbaca dan masuk ke dalam tabel, kita perlu memodifikasi package.json dengan menambahkan "seed": "node -r dotenv/config ./src/seeder/seed.js", kemudian kita perlu menginstall menginstall module dotenv dan bycrypt, baru setelahnya kita bisa menjalankan 'npm eun seed' agar data dalam data.js terbaca.

## Jawaban soal No 4
Tabel yang sebelumnya dibuat di file seed.js dan data yang terdapat di file data.js, setalah kita melakukan 'npm run seed' maka tabel beserta data itu akan langsung tersimpan dan dapat kita lihat di vercel, dashboard projek kita, dibagian Storage>Data.
PENJELASAN QUERY (Dalam Modul)
- SELECT invoices.amount, customers.name: Memilih kolom amount dari tabel invoices dan kolom name dari tabel customers untuk ditampilkan dalam hasil.
- FROM invoices: Menetapkan tabel utama (invoices) yang menjadi dasar pengambilan data.
- JOIN customers ON invoices.customer_id = customers.id: Menghubungkan tabel invoices dengan tabel customers berdasarkan kolom customer_id di tabel invoices yang cocok dengan kolom id di tabel customers. Ini memungkinkan pengambilan data pelanggan yang terkait dengan setiap invoice.
- WHERE invoices.amount = 666: Menyaring hasil untuk hanya menampilkan invoice yang memiliki amount atau jumlah sebesar 666.
- HASIL: Query ini akan mengembalikan nama pelanggan dan jumlah invoice sebesar 666 dari tabel invoices yang terhubung dengan pelanggan terkait di tabel customers.
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
Penjelasan Query
- TO_CHAR(i.date, 'Mon') = r.month: Mengonversi tanggal di invoices menjadi format bulan (seperti Jan, Feb, dll.) agar bisa dibandingkan dengan kolom month di tabel revenue.
- i.status = 'paid': Menyaring hanya invoice yang sudah dibayar (status = 'paid') untuk menghitung pendapatan.
- SUM(i.amount): Menghitung total pendapatan dari invoices yang sudah dibayar untuk setiap bulan.
- COALESCE(SUM(i.amount), 0): Mengembalikan 0 jika tidak ada invoice yang cocok di bulan tertentu, sehingga hasil tidak menjadi NULL.
- LEFT JOIN: Menggunakan LEFT JOIN untuk memastikan semua bulan dari revenue ditampilkan, meskipun tidak ada data di invoices untuk bulan tersebut.
- HASIL : Query ini akan menghasilkan daftar bulan dengan pendapatan yang dicatat di revenue (dari kolom revenue) serta total pendapatan dari invoices yang sesuai (dari kolom calculated_revenue_from_invoices). Ini akan membantu kamu membandingkan data revenue yang tercatat dengan total pendapatan yang dihitung dari invoices.

## Jawaban soal No.5
Saya belajar mengenai bagaimana membuat model dalam ypescript ini. Pada file definitiions.tsx, digunakan untuk mendefinisikan tipe data dari setiap atribut yang ada pada setiap tabel. kemudian file query.tsx berisi  query SQL yang digunakan untuk menampilkan tabel dan menghitung jumlah data. Utils berisi Format currency (mata uang) adalah cara menampilkan angka dalam bentuk uang, yang biasanya mencakup simbol mata uang, pemisah ribuan, dan pemisah desimal. File font.tsx dimana kita mengimportkan fot yang akan kta gunakan. Kemudian membuat tampilan card, latest invoices, dan revenue chart.kemudian memanggilnya melalui file page.jsx

Aplikasi yang telah saya Deploy : [09-nextjs-database](https://09-nextjs-database-indol-nine.vercel.app/).

## Jawaban soal No 6
Disini setelah menonaktifkan comment RevenueChart, Grafik saya tampil, kemudian saya rapikan sedikit karena sebelumnya grafik saya yang bagian bulan Desember tampil dibawah grafiknya, saya ubah agar diagram bulan Desember tampil sejajar dengan yang lain. Dengan mengubah grid menjadi flex, grid col saya ubah jadi flexrow dan saya kecilkan gapnya.

## Jawaban soal No 7
Disini saya belajar menyesuaikan image_url, bagaimana cara menampilkan gambar dalam projek next js

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
