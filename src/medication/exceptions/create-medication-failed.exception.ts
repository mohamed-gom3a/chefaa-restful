import { MedicationServiceInputException } from './medication-service-input.exception';

export class CreateMedicationFailedException extends MedicationServiceInputException {
  constructor() {
    super('Failed to create medication');
  }
}
