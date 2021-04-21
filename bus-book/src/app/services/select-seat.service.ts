import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectSeatService {
  fare: string = '';
  coach: string = '';
  time: string = '';
  busName: string = '';
  seatInfo: any = [];
  totalFare: number = 0;
  constructor() { }

  setSeat(fare: string, coach: string, time: string, busName: string) {
    console.log(fare, coach);
    this.fare = fare;
    this.coach = coach;
    this.time = time;
    this.busName = busName;
  }

  getFare() {
    return this.fare;
  }

  getCoach() {
    return this.coach;
  }
  getTime() {
    return this.time;
  }
  getBusName() {
    return this.busName;
  }

  setSeatInfo(seatInfo: any, totalFare: number) {
    this.seatInfo = seatInfo;
    this.totalFare = totalFare;
  }
  getInfo() {
    return this.seatInfo;
  }
  getTotalFare() {
    return this.totalFare;
  }

}

