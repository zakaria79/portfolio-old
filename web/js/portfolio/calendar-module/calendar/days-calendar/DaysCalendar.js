import MultipleDaysCalendar from './../MultipleDaysCalendar';

export default class DaysCalendar extends MultipleDaysCalendar {

  constructor(app) {
    super(app, 'days', '4 Jours', ['#days th', '#days td'], ['#days', '#days_calendar_button', '#calendar .date_to_string']);
    this.thElts = this.Es.daysthElts;
    this.tdElts = this.Es.daystdElts;
    this.date_to_stringElt = this.Es.calendardate_to_stringElt;
    this.dates = Array();
    this.today = false;
    this.dateArrayLength = 3;
    this.todayDatesIndex = 0;
  }

  setDates() {
    this.currentDate = this.app.currentDate.date;
    super.setDates();
  }

  initializeCalendar() {
    super.initializeCalendar();
  }

  fillCalendar() {
    super.fillCalendar();
  }
}
