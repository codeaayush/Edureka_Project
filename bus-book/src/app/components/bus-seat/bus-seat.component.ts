import { Component, OnInit } from '@angular/core';
import { SelectSeatService } from '../../services/select-seat.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-seat',
  templateUrl: './bus-seat.component.html',
  styleUrls: ['./bus-seat.component.css']
})
export class BusSeatComponent implements OnInit {
  seatIDs: any = [];
  new: any = [];
  flag: boolean = false;
  count: number = 0;
  fare: string = '';
  coach: string = '';
  totalFare: number;
  val: boolean = false;
  class: string = 'Economy';

  constructor(private router: Router, private _selectSeatService: SelectSeatService) {
    this.totalFare = 0;
  }

  ngOnInit(): void {
  }


  Seat(seatId: string) {
    console.log(seatId);
    this.fare = this._selectSeatService.getFare();
    this.coach = this._selectSeatService.getCoach();
    this.count += 1;
    var seat = document.getElementById(seatId);
    var image1 = `<img src="../assets/img/bookseat.png">`;
    var image2 = `<img src="../assets/img/bseat.png">`;

    if (this.count < 7) {
      if (seat) {
        //changing the image
        seat.innerHTML = image1;

        //Checking for the value coming is exist or not.
        if (this.seatIDs.length !== 0) {
          for (var i = 0; i < this.seatIDs.length; i++) {
            if (this.seatIDs[i] === seatId) {
              this.val = true;
              console.log("we r in unchecked condition");

              break;
            }
            else {
              this.val = false;
              console.log("we r in checked condition");
            }
          }
          if (this.val == false) {
            this.seatIDs.push(seatId);//push the data
            this.totalFares(this.fare);
          }
          else {
            //remove element and image in back position
            console.log("Before", this.count);
            this.count -= 2;
            console.log("after", this.count);
            // this.seatIDs.splice(, 1);
            this.seatIDs = this.seatIDs.filter((ele: string) => ele !== seatId);
            seat.innerHTML = image2;
            this.totalFare = this.totalFare - parseInt(this.fare);
          }
        }
        else {
          this.seatIDs.push(seatId);//push the data
          this.totalFares(this.fare);
        }
        console.log(this.seatIDs);

        //this.totalFares(this.fare);
      }
    }
    else {
      this.flag = true;
    }

  }
  totalFares(fare: string) {
    this.totalFare += parseInt(fare);
  }

  confirmSeat() {
    console.log(this.seatIDs);

    this._selectSeatService.setSeatInfo(this.seatIDs, this.totalFare);
    this.router.navigate(['./confirm']);
  }
}

