import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]= "passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)">
      </passenger-detail>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

    ngOnInit() {
      console.log('ngOnInit');
      this.passengers = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullname: 'Sara',
        checkedIn: false,
        checkInDate: 1490642000000,
        children: [{ name: 'Todd', age: 10}, { name: 'Suzi', age: 16}]
      }];
    }

    handleRemove(event: Passenger) {
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
    }

    handleEdit(event) {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    }
}
