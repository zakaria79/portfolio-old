import MonthCalendar from './month-calendar/MonthCalendar';
import WeekCalendar from './week-calendar/WeekCalendar';
import DaysCalendar from './days-calendar/DaysCalendar';
import DayCalendar from './day-calendar/DayCalendar';

export default class CalendarManager {

  constructor(app) {
    this.app = app;
    this.dem = app.dem;
    this.dem.setElement(['#calendar', '#current_date_to_string', '#current_date', '#date_today', '#date_today_to_string', '#dropdownMenu3']);
    this.Es = this.dem.getElements();
    this.monthCalendar = new MonthCalendar(app);
    this.weekCalendar = new WeekCalendar(app);
    this.daysCalendar = new DaysCalendar(app);
    this.dayCalendar = new DayCalendar(app);
  }

  start() {
    this.currentCalendarName = 'monthCalendar';
    this.currentCalendar = this.monthCalendar;
    this.Es.current_dateElt.textContent = this.app.dateToday.dateText;
    this.setCalendar();
  }

  setCalendar() {
    this.currentCalendar.setDates();
    this.currentCalendar.setCurrentDateText();
    this.currentCalendar.fillCalendar();
  }

  backToTodayDate() {
    this.app.setCurrentDate(new Date());
    this.Es.current_dateElt.classList.add('active');
    this.setCalendar();
  }

  changeTime(e) {
    e.preventDefault();
    this.Es.current_dateElt.classList.remove('active');
    this.currentCalendar[e.currentTarget.dataset.action]();
    this.setCalendar();
  }

  changeCalendar(e) {
    e.preventDefault();
    this.currentCalendar.calendarElt.hidden = true;
    this.currentCalendar = this[e.currentTarget.dataset.calendar];
    this.currentCalendar.calendarElt.hidden = false;
    this.setCalendar();
  }
}
