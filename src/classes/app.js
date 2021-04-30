import {fleet} from '../fleet-data.js';
import {FleetDataService} from '../services/fleet-data-service.js';

/**
 * The main application class.
 */
export default class App {
  
  constructor() {
    this.dataService = new FleetDataService();
  }
  
  init() {
    this.initData();
    this.initEvents();
    console.log('App initialized!');
  }
  
  initData() {
    this.dataService.loadData(fleet);
  }
  
  initEvents() {
    
  }
  
}