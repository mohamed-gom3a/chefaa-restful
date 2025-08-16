/*
  Warnings:

  - A unique constraint covering the columns `[urlName]` on the table `Medication` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Medication" ADD COLUMN     "urlName" TEXT;

-- AlterTable
ALTER TABLE "Prescription" ALTER COLUMN "validUntil" SET DEFAULT now() + interval '12 hours';

-- CreateIndex
CREATE UNIQUE INDEX "Medication_urlName_key" ON "Medication"("urlName");
