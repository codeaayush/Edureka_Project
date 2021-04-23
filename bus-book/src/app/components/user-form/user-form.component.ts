import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../../services/user-info.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName: string = '';
  email: string = '';
  mobileNo: number = 0;
  loginForm: FormGroup = this.fb.group({});

  submitted: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private _userInfoService: UserInfoService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]]

    })
  }

  get f() {

    return this.loginForm.controls;
  }

  loginUser() {
    this.userName = this.loginForm.value.userName;
    this.email = this.loginForm.value.email;
    this.mobileNo = this.loginForm.value.mobileNo;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
    this._userInfoService.setUserInfo(this.userName, this.email, this.mobileNo);
    this.router.navigate(['./submit']);
  }


}
