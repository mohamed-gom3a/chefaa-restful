import { NotFoundException } from '@nestjs/common';

/** Throws HTTP status 404. Used when the user inputs
 * a super category that is not registered in the system
 */
export class SuperCategoryNotFoundException extends NotFoundException {
  /** Throws HTTP status 404 with message
   * 'Super category not found'. Used when the user inputs
   * a super category that is not registered in the system
   */
  constructor() {
    super('Super category not found');
  }
}
