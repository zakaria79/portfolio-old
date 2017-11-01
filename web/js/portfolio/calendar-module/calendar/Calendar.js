export default class Calendar {

  constructor(app, calendarName, titleName, elementsArray, elementArray) {
    this.app = app;
    this.dm = app.dm;
    this.dem = app.dem;
    this.calendarName = calendarName;
    this.name = calendarName + 'Calendar';
    this.titleName = titleName;
    this.dem.setElements(elementsArray);
    this.dem.setElement(elementArray);
    this.Es = this.dem.getElements();
    this.calendarElt = this.Es[calendarName + 'Elt'];
    this.buttonElt = this.Es[calendarName + '_calendar_buttonElt'];
  }

  setTodayClass() {
    if (document.querySelector('#month [data-date="' + this.app.dateToday.dateStandard + '"]')) {
      document.querySelector('#month [data-date="' + this.app.dateToday.dateStandard + '"]').classList.add('today');
    }
  }

  initializeCalendar() {
    this.dem.removeClassIfExist('today');
  }

  fillCalendar() {
    this.initializeCalendar();
  }
}
