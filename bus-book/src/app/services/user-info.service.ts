import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userName: string = '';
  email: string = '';
  mobileNo: number = 0;

  constructor() { }
  setUserInfo(userName: string, email: string, mobileNo: number) {
    this.userName = userName;
    this.email = email;
    this.mobileNo = mobileNo;
  }
  getUserName() {
    return this.userName;
  }
  getUserEmail() {
    return this.email;
  }
  getUserMobile() {
    return this.mobileNo;
  }
}
