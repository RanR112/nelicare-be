/*
  Warnings:

  - Added the required column `tanggal` to the `JanjiTemu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JanjiTemu" ADD COLUMN     "tanggal" TIMESTAMP(3) NOT NULL;
