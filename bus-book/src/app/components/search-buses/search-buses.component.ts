import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cities } from '../../interface/cities';
import { Router } from '@angular/router';
import { BusSelectService } from '../../services/bus-select.service'


@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.css']
})
export class SearchBusesComponent implements OnInit {
  submitted: boolean = false;
  place: cities[] = [];
  leaving: string;
  going: string;
  data = {};
  date: string = "";



  searchForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private router: Router, private _busSelectService: BusSelectService) {
    this.leaving = '';
    this.going = '';


  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      leavingFrom: ['', Validators.required],
      goingTo: ['', Validators.required],
      departuerTime: ['', Validators.required],
    });
  }
  get f() {

    return this.searchForm.controls;
  }

  SearchBus() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.searchForm.value));

    this.leaving = this.searchForm.value.leavingFrom;
    console.log("The value of leaving is", this.leaving);
    this.going = this.searchForm.value.goingTo;
    this.date = this.searchForm.value.departuerTime;
    console.log("The value of Going is", this.going);
    this.data = this.searchForm.value;
    this._busSelectService.setCity(this.leaving, this.going, this.date);

    this.router.navigate(['./search']);

  }

  leave(e: any) {

    let leavingFrom = e.target.value;
    console.log(leavingFrom);
    if (leavingFrom == 'Jaipur') {
      this.place = [
        { key: '1109001', name: 'Haryana' },
        { key: '1109004', name: 'Mumbai' },
        { key: '1109005', name: 'Pune' },
        { key: '1109007', name: 'Ahmedabad' }
      ];
    }
    else if (leavingFrom == 'Haryana') {
      this.place = [
        { key: '2209002', name: 'Pune' },
        { key: '2209001', name: 'Mumbai' },
        { key: '2209003', name: 'Jaipur' },
        { key: '2209006', name: 'Ahmedabad' },
      ];
    }
    else if (leavingFrom == 'Pune') {
      this.place = [
        { key: '3309003', name: 'Mumbai' },
        { key: '3309001', name: 'Jaipur' },
        { key: '3309002', name: 'Ahmedabad' },
        { key: '3309005', name: 'Haryana' },

      ];
    }
    else if (leavingFrom == 'Mumbai') {
      this.place = [
        { key: '3309003', name: 'Pune' },
        { key: '3309001', name: 'Jaipur' },
        { key: '3309002', name: 'Ahmedabad' },
        { key: '3309005', name: 'Haryana' },

      ];
    }
    else if (leavingFrom == 'Ahmedabad') {
      this.place = [
        { key: '3309003', name: 'Mumbai' },
        { key: '3309001', name: 'Jaipur' },
        { key: '3309002', name: 'Pune' },
        { key: '3309005', name: 'Haryana' },
      ];
    }
  }


}
