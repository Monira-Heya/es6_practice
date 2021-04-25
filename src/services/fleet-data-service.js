/**
 * Manage cars and drones data.
*/

import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';

export class FleetDataService {
  
  constructor() {
    this.drones = [];
    this.cars = [];
  }
  
  loadData(fleet) {
    for (let item of fleet) {
      switch (item.type) {
        case 'drone':
          let d = this.loadDrone(item);
          this.drones.push(d);
          break;
        case 'car':
          let c = this.loadCar(item)
          this.cars.push(c);
          break;
      }
    }
  }
  
  loadCar(item) {
    let c = new Car(item.license, item.model, item.latLng);
    c.make = item.make;
    c.miles = item.miles;
    return c;
  }
  
  loadDrone(item) {
    let d = new Drone(item.license, item.model, item.latLng);
    d.airTimeHours = item.airTimeHours;
    d.base = item.base;
    return d;
  }
  
  getCarByLicense(license) {
    return this.cars.find(car => car.license === license);
  }
  
  getCarsSortedByLicense() {
    return this.cars.sort( ({license: lic1}, {license: lic2}) => lic1 < lic2 ? -1 : (lic1 > lic2 ? 1 : 0) );
  }
  
}