import CalendarModule from './calendar-module/CalendarModule';
import ContactForm from './contact-module/ContactForm';
import RouteManager from './route/RouteManager';

document.addEventListener('DOMContentLoaded', function() {
  let routeManager = new RouteManager(),
    contactForm = new ContactForm(),
    calendarModule = new CalendarModule();

  routeManager.run();
  contactForm.run();
  calendarModule.run();
});
