import MultipleDaysCalendar from './../MultipleDaysCalendar';

export default class WeekCalendar extends MultipleDaysCalendar {

  constructor(app) {
    super(app, 'week', 'Semaine', ['#week td', '#week th'], ['#week', '#calendar .date_to_string']);

    this.thElts = this.Es.weekthElts;
    this.tdElts = this.Es.weektdElts;
    this.date_to_stringElt = this.Es.calendardate_to_stringElt;
    this.dates = Array();
    this.dateArrayLength = 6;
    this.todayDatesIndex = 0;
  }

  setDates() {
    this.currentDate = this.app.currentDate.date;
    this.currentDate = this.dm.setDateFirstDayInWeek(this.currentDate);
    super.setDates();
  }

  initializeCalendar() {
    super.initializeCalendar();
  }

  fillCalendar() {
    let i, j, tdElts;
    super.fillCalendar();
    for (i = 1; i <= this.dates.length; i++) {
      tdElts = this.calendarElt.querySelectorAll('[data-column="' + i + '"]');
      this.thElts[i].textContent = this.dates[i - 1].weekDayToString.substr(0, 1) + '.' + this.dates[i - 1].day;
      for (j = 0; j < tdElts.length; j++) {
        tdElts[j].dataset.date = this.dates[i - 1].dateStandard;
        tdElts[j].dataset.weekday = this.dates[i - 1].weekDay;
      }
    }
  }
}
