import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusSelectService {
  leavingFrom: string = '';
  goingTo: string = '';
  date: string = '';
  constructor() { }

  setCity(leaving: string, going: string, date: string) {
    this.leavingFrom = leaving;
    this.goingTo = going;
    this.date = date;
  }
  getLeave() {
    return this.leavingFrom;
  }
  getGoing() {
    return this.goingTo;
  }
  getDate() {
    return this.date;
  }


}
