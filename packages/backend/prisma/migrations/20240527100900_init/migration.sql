/*
  Warnings:

  - Added the required column `isPrivate` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "isPrivate" BOOLEAN NOT NULL;
