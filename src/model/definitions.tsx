// File ini berisi definisi tipe untuk data Anda.Teks untuk diterjemahkan: 
// Ini menggambarkan bentuk data, dan jenis data apa yang harus diterima oleh setiap properti.
// Untuk kesederhanaan pengajaran, kami secara manual mendefinisikan jenis-jenis ini.Teks untuk diterjemahkan: 
// Namun, tipe-tipe ini dihasilkan secara otomatis jika Anda menggunakan ORM seperti Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    image_url: string;
};

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // Dalam TypeScript, ini disebut tipe union string.
    // Ini berarti bahwa properti "status" hanya dapat berupa salah satu dari dua string: 'pending' atau 'paid'.
    status: 'pending' | 'paid';
};

export type Revenue = {
    month: string;
    revenue: number;
};

export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
};

// Basis data mengembalikan angka untuk jumlah, tetapi kemudian kami memformatnya menjadi string dengan formatFungsi mata uang
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
    amount: number;
};

export type InvoicesTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount: number;
    status: 'pending' | 'paid';
};

export type CustomersTableType = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
};

export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
};

export type CustomerField = {
    id: string;
    name: string;
};

export type InvoiceForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: 'pending' | 'paid';
};