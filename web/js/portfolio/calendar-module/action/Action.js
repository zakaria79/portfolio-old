export default class Action {

  constructor(app) {
    this.app = app;
    this.dem = app.dem;
    this.dem.setElement( [ '#current_date', '#next_button', '#previous_button' ]);
    this.dem.setElements( ['.calendar td', '.change_calendar_button' ]);
  }

  addEventListeners (elts,action,fun) {
    let i;
    for (i = 0; i < elts.length; i++) {
      elts[i].addEventListener(action,fun);
    }
  }

  start () {
    let app = this.app, Es = this.dem.getElements();
    // Affichage du calendrier précédent
    Es.previous_buttonElt.addEventListener('click',app.cm.changeTime.bind(app.cm));
    // Affichage du calendrier suivant
    Es.next_buttonElt.addEventListener('click',app.cm.changeTime.bind(app.cm));
    // Retour à la date d'aujourd'hui dans le calendrier courant
    Es.current_dateElt.addEventListener('click',app.cm.backToTodayDate.bind(app.cm));
    // Changement de vue du calendrier (mois, semaine, 4 jours, jour)
    this.addEventListeners(Es.change_calendar_buttonElts,'click',app.cm.changeCalendar.bind(app.cm));
  }
}
