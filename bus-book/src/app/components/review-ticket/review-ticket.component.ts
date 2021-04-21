import { Component, OnInit } from '@angular/core';
import { BusSelectService } from '../../services/bus-select.service'
import { SelectSeatService } from '../../services/select-seat.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-ticket',
  templateUrl: './review-ticket.component.html',
  styleUrls: ['./review-ticket.component.css']
})
export class ReviewTicketComponent implements OnInit {
  leave: string = '';
  going: string = '';
  date: string = '';
  time: string = '';
  coach: string = '';
  busName: string = '';
  seatInfo: any = [];
  constructor(private router: Router, private _busSelectService: BusSelectService, private _selectSeatService: SelectSeatService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    this.leave = this._busSelectService.getLeave();
    this.going = this._busSelectService.getGoing();
    this.date = this._busSelectService.getDate();
    this.time = this._selectSeatService.getTime();
    this.coach = this._selectSeatService.getCoach();
    this.busName = this._selectSeatService.getBusName();
    this.seatInfo = this._selectSeatService.getInfo();
  }
  confirm() {
    this.router.navigate(['./confirmData']);
  }

}
