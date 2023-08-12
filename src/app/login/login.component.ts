import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(
    private router:Router,
    private auth:AuthService,
    private toastr: ToastrService){}

    title:string= 'loginForm'
    loginForm = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  submit(){
    console.log("Form Submitted");
    //console.log(this.loginForm);
    console.log(this.loginForm.value);
    //this.title='Logged in'
    if(this.loginForm.value.email == "user@gmail.com" && this.loginForm.value.password == '1234'){
      this.toastr.success("Welcome User", 'Login Successful')
      this.router.navigateByUrl('/user/home')
      this.auth.setData(this.loginForm.value.email)
    }

    else if(this.loginForm.value.email == "admin@gmail.com" && this.loginForm.value.password == '1234'){
      this.toastr.success("Welcome Admin",'Login Successful')
      this.router.navigateByUrl('/admin/dashboard')
      this.auth.setData(this.loginForm.value.email)

    }

    else{
      this.toastr.error("Invalid Credentials", 'Try Again')
    }
  }

}
