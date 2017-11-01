import DOMManager from './../../dom-manager/DOMManager';
import DateManager from './date/DateManager';
import CalendarManager from './calendar/CalendarManager';
import Action from './action/Action';

export default class CalendarModule {

  constructor() {
    this.dem = new DOMManager();
    this.currentDate = {};
    this.dateToday = {};
    this.dm = new DateManager(this);
    this.cm = new CalendarManager(this);
    this.action = new Action(this);
  }

  formatNumber(nb) {
    return nb < 10 ? '0' + nb : nb;
  }

  setCurrentDate(currentDate) {
    this.currentDate = this.dm.setDate(currentDate);
  }

  setDateToday() {
    this.dateToday = this.dm.setDate(new Date());
  }

  run() {
    this.setCurrentDate(new Date());
    this.setDateToday();
    this.cm.start();
    this.action.start();
  }
}
