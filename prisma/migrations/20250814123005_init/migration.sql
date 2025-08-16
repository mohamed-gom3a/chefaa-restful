-- DropIndex
DROP INDEX "Medication_name_key";

-- AlterTable
ALTER TABLE "Prescription" ALTER COLUMN "validUntil" SET DEFAULT now() + interval '12 hours';
