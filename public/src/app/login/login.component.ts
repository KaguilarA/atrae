import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {
  ErrorStateMatcher
} from '@angular/material/core';
import { LoginService } from '../services/login/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  async onSubmit(pEmail, pPassword) {
    let dataToLogin = {
      email: pEmail,
      password: pPassword
    };
    let loginUser = await this._loginService.logIn(dataToLogin);
    console.log('loginUser: ', loginUser);
    if (loginUser === true) {
      this.router.navigate(['/home/main']);
    } else {
      alert(`No podes entrar mamador`);
    }
    
  }

  

  

  matcher = new MyErrorStateMatcher();

}
