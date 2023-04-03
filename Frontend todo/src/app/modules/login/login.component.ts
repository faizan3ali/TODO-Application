import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TosterService } from 'src/app/services/toster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'turingtest';
  name=''
  passwrod=''
  public form: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private TosterService: TosterService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    const { value, touched } = this.form;

    if ( touched) {
      this.authService.login(value).subscribe((response:any) => {
        if (response) {
          this.TosterService.showSuccess(
            'Login Successfully'
          );
             this.router.navigate(['/dashboard']);
          }
         else if (!response) {
          this.TosterService.showError(
            'Email and password are not correct'
          );
        console.log("error",response)
        }
      },(Error=>{
        this.TosterService.showError(
          'Email and password are not correct'
        );
      }));
    }
  }
}
