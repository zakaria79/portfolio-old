import Calendar from './../Calendar';

export default class DayCalendar extends Calendar {

  constructor(app) {
    super(app, 'day', 'Jour', ['#day .tdDay', '.currentDate'], ['#day', '#day_calendar_button', '#is_today', '#calendar .date_to_string']);
    this.tdElts = this.Es.daytdDayElts;
  }

  setCalendar() {
    this.setCurrentDateText();
    this.fillCalendar();
  }

  setDates() {}

  goToNext() {
    this.app.currentDate.date.setDate(this.app.currentDate.day + 1);
    this.app.setCurrentDate(this.app.currentDate.date);
  }

  goToPrevious() {
    this.app.currentDate.date.setDate(this.app.currentDate.day - 1);
    this.app.setCurrentDate(this.app.currentDate.date);
  }

  setCurrentDateText() {
    let dateText = this.app.currentDate.weekDayToString + ' ' + this.app.currentDate.day + ' ' + this.app.currentDate.monthToString + ' ' + this.app.currentDate.year;
    this.Es.calendardate_to_stringElt.textContent = dateText;
  }

  fillCalendar() {
    super.fillCalendar();
    let app = this.app,
      i;
    for (i = 0; i < this.Es.daytdDayElts.length; i++) {
      this.Es.daytdDayElts[i].dataset.date = app.currentDate.dateStandard;
      this.Es.daytdDayElts[i].dataset.weekday = app.currentDate.weekDay;
    }
  }

  initializeCalendar() {
    let tdElt, countEvents, countEvent;
    super.initializeCalendar();
    if (this.app.currentDate.dateStandard === this.app.dateToday.dateStandard) {
      for (tdElt of this.Es.daytdDayElts) {
        tdElt.classList.add('today');
      }
    }
  }
}
