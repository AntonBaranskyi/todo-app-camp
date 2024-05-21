/*
  Warnings:

  - Added the required column `description` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "description" TEXT NOT NULL;
