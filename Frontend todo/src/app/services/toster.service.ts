import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class TosterService {

  constructor(private toastr: ToastrService) {}

  private title = '';
  private defaultConfig: Partial<IndividualConfig> = {
    positionClass: 'toast-top-center'
  };

  showSuccess(path:any, config: Partial<IndividualConfig> = this.defaultConfig) {
    this.toastr.success(path, this.title, config);
  }

  showError(path:any, config: Partial<IndividualConfig> = this.defaultConfig) {
    this.toastr.error(path, this.title, config);
  }

  showWarning(path:any, config: Partial<IndividualConfig> = this.defaultConfig) {
    this.toastr.warning(path, this.title, config);
  }

  showInfo(path:any, config: Partial<IndividualConfig> = this.defaultConfig) {
    this.toastr.info(path, this.title, config);
  }


}
