-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'superadmin');

-- CreateEnum
CREATE TYPE "StatusKunjungan" AS ENUM ('selesai', 'pending', 'batal');

-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('P', 'L');

-- CreateEnum
CREATE TYPE "StatusPasien" AS ENUM ('aktif', 'nonaktif');

-- CreateEnum
CREATE TYPE "StatusPembayaran" AS ENUM ('lunas', 'pending', 'batal');

-- CreateEnum
CREATE TYPE "StatusRekam" AS ENUM ('selesai', 'kontrol', 'rujuk');

-- CreateEnum
CREATE TYPE "TransaksiObat" AS ENUM ('masuk', 'keluar');

-- CreateEnum
CREATE TYPE "SumberTransaksi" AS ENUM ('resep', 'supplier', 'expired');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edukasi" (
    "id" SERIAL NOT NULL,
    "id_admin" INTEGER NOT NULL,
    "judul" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "layananId" INTEGER,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Edukasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JadwalImunisasi" (
    "id" SERIAL NOT NULL,
    "id_layanan" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "catatan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "JadwalImunisasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kunjungan" (
    "id" SERIAL NOT NULL,
    "id_pasien" INTEGER NOT NULL,
    "id_layanan" INTEGER NOT NULL,
    "tgl_kunjungan" TIMESTAMP(3) NOT NULL,
    "waktu_kunjungan" TIMESTAMP(3) NOT NULL,
    "status" "StatusKunjungan" NOT NULL,
    "catatan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Kunjungan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Layanan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Layanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayananEdukasi" (
    "id_edukasi" INTEGER NOT NULL,
    "id_layanan" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "LayananEdukasi_pkey" PRIMARY KEY ("id_edukasi","id_layanan")
);

-- CreateTable
CREATE TABLE "Obat" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "stok" INTEGER NOT NULL,
    "harga" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Obat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasien" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "no_reg" TEXT NOT NULL,
    "tgl_lahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "hp" TEXT NOT NULL,
    "jenisKelamin" "JenisKelamin" NOT NULL,
    "status" "StatusPasien" NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pembayaran" (
    "id" SERIAL NOT NULL,
    "id_rm" INTEGER NOT NULL,
    "tgl_bayar" TIMESTAMP(3) NOT NULL,
    "total_bayar" INTEGER NOT NULL,
    "metode" TEXT NOT NULL,
    "status" "StatusPembayaran" NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Pembayaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RekamMedis" (
    "id" SERIAL NOT NULL,
    "id_kunjungan" INTEGER NOT NULL,
    "keluhan" TEXT NOT NULL,
    "diagnosa" TEXT NOT NULL,
    "tindakan" TEXT NOT NULL,
    "catatan" TEXT NOT NULL,
    "status" "StatusRekam" NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "RekamMedis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resep" (
    "id" SERIAL NOT NULL,
    "id_rm" INTEGER NOT NULL,
    "id_obat" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "aturan_pakai" TEXT NOT NULL,
    "catatan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Resep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StokObat" (
    "id" SERIAL NOT NULL,
    "id_obat" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "transaksi" "TransaksiObat" NOT NULL,
    "sumberTransaksi" "SumberTransaksi" NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "StokObat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JanjiTemu" (
    "id" SERIAL NOT NULL,
    "id_layanan" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "umur" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "JanjiTemu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pasien_email_key" ON "Pasien"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pasien_no_reg_key" ON "Pasien"("no_reg");

-- CreateIndex
CREATE UNIQUE INDEX "JanjiTemu_email_key" ON "JanjiTemu"("email");

-- AddForeignKey
ALTER TABLE "Edukasi" ADD CONSTRAINT "Edukasi_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edukasi" ADD CONSTRAINT "Edukasi_layananId_fkey" FOREIGN KEY ("layananId") REFERENCES "Layanan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalImunisasi" ADD CONSTRAINT "JadwalImunisasi_id_layanan_fkey" FOREIGN KEY ("id_layanan") REFERENCES "Layanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kunjungan" ADD CONSTRAINT "Kunjungan_id_pasien_fkey" FOREIGN KEY ("id_pasien") REFERENCES "Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kunjungan" ADD CONSTRAINT "Kunjungan_id_layanan_fkey" FOREIGN KEY ("id_layanan") REFERENCES "Layanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananEdukasi" ADD CONSTRAINT "LayananEdukasi_id_edukasi_fkey" FOREIGN KEY ("id_edukasi") REFERENCES "Edukasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayananEdukasi" ADD CONSTRAINT "LayananEdukasi_id_layanan_fkey" FOREIGN KEY ("id_layanan") REFERENCES "Layanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pembayaran" ADD CONSTRAINT "Pembayaran_id_rm_fkey" FOREIGN KEY ("id_rm") REFERENCES "RekamMedis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RekamMedis" ADD CONSTRAINT "RekamMedis_id_kunjungan_fkey" FOREIGN KEY ("id_kunjungan") REFERENCES "Kunjungan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resep" ADD CONSTRAINT "Resep_id_rm_fkey" FOREIGN KEY ("id_rm") REFERENCES "RekamMedis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resep" ADD CONSTRAINT "Resep_id_obat_fkey" FOREIGN KEY ("id_obat") REFERENCES "Obat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StokObat" ADD CONSTRAINT "StokObat_id_obat_fkey" FOREIGN KEY ("id_obat") REFERENCES "Obat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JanjiTemu" ADD CONSTRAINT "JanjiTemu_id_layanan_fkey" FOREIGN KEY ("id_layanan") REFERENCES "Layanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
