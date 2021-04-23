import { Component, OnInit } from '@angular/core';
import { SelectBusService } from '../../services/get-bus.service';
import { BusSelectService } from '../../services/bus-select.service';
import { SelectSeatService } from '../../services/select-seat.service';
import { buses } from '../../interface/buses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-search-result',
  templateUrl: './bus-search-result.component.html',
  styleUrls: ['./bus-search-result.component.css']
})
export class BusSearchResultComponent implements OnInit {
  bus: any;
  flag: number = 0;
  filteredBusData: any = [];
  leave: string = '';
  going: string = '';
  fare: string = "";
  coach: string = "";
  time: string = "";
  busName: string = "";

  constructor(private _selectBusService: SelectBusService, private _busSelectService: BusSelectService, private router: Router, private _selectSeatService: SelectSeatService) {
  }

  ngOnInit(): void {
    this.refreshBuses();
    // this.checkFilter();
  }
  refreshBuses() {
    this._selectBusService.getBus().subscribe(data => {
      this.bus = data;
      // logic to filter buses 
      this.leave = this._busSelectService.getLeave();
      this.going = this._busSelectService.getGoing();
      //console.log(this.leave, this.going);
      this.filteredBusData = this.bus
        .filter((i: any) => i.leavingFrom === this.leave)
        .filter((j: any) => j.goingTo === this.going);
        this.flag=this.filteredBusData.length
    })
    console.log(" the details of bus", this.filteredBusData);
  }

  // checkFilter() {
  //   console.log(this.filteredBusData.length);
  //   if (this.filteredBusData.length > 0) {
  //     this.flag = true;
  //   }
  //   else {
  //     this.flag = false;
  //   }
  // }

  getData() {
    this.leave = this._busSelectService.getLeave();
    this.going = this._busSelectService.getGoing();
    //console.log("We r in another componnets ", this.leave, this.going);
  }
  view(fare: string, coach: string, time: string, busName: string) {
    console.log(fare);
    console.log(coach);
    this.fare = fare;

    this.coach = coach;
    this.time = time;
    this.busName = busName;
    this._selectSeatService.setSeat(this.fare, this.coach, this.time, this.busName);
    this.router.navigate(['./seatSearch']);
  }

}

