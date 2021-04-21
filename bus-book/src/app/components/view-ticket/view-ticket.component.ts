import { Component, OnInit } from '@angular/core';
import { BusSelectService } from '../../services/bus-select.service'
import { SelectSeatService } from '../../services/select-seat.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../../services/user-info.service';


@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  coach: string = '';
  busName: string = '';
  time: string = '';
  seatId: any = [];
  leave: string = '';
  going: string = '';
  totalFare: number = 0;
  date: string = '';
  ticketId: any;
  userName: string = '';
  email: string = '';
  mobileNo: number = 0;
  constructor(private _userInfoService: UserInfoService, private router: Router, private _busSelectService: BusSelectService, private _selectSeatService: SelectSeatService) {
    this.getData();
  }

  ngOnInit(): void {

  }
  getData() {

    this.coach = this._selectSeatService.getCoach();
    this.busName = this._selectSeatService.getBusName();
    this.time = this._selectSeatService.getTime();
    this.seatId = this._selectSeatService.getInfo();
    this.totalFare = this._selectSeatService.getTotalFare();
    this.leave = this._busSelectService.getLeave();
    this.going = this._busSelectService.getGoing();
    this.date = this._busSelectService.getDate();
    this.userName = this._userInfoService.getUserName();
    this.email = this._userInfoService.getUserEmail();
    this.mobileNo = this._userInfoService.getUserMobile();
    this.ticketId = Math.floor(Math.random());
    console.log(this.ticketId);
  }

}
