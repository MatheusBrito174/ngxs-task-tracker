import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrErrorHandler implements ErrorHandler {
  constructor(private readonly injector: Injector) {}

  /**
   * Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
   */
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  handleError(error: any): void {
    /**
     * Prevent scenario where error gets handled twice due to the fact
     * that NGXS always calls EventHandler when error occurs in an
     * action handler.
     */
    if (error.alreadyHandledInErrorHandler) {
      return;
    }

    error.alreadyHandledInErrorHandler = true;

    this.toastrService.error(error.message || 'An error occurred.');

    throw error;
  }
}
