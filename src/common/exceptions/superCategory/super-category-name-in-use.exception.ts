import { BadRequestException } from '@nestjs/common';

/** Throws HTTP status 400. Used when the user inputs
 * a super category name that is already registered in the system
 */
export class SuperCategoryNameInUseException extends BadRequestException {
  /** Throws HTTP status 400 with message
   * 'Super category name already in use'. Used when the user inputs
   * a super category name that is already registered in the system
   */
  constructor() {
    super('Super category name already in use');
  }
}
