import Route from './Route';

export default class RouteManager {
  constructor() {
    this.routes = {};
    this.stateObj = {};
    this.currentRouteName = window.location.pathname.replace(/.*\/([\w]*)$/, '$1');
    this.title = document.querySelector('#title');
    this.routesNames = ['home', 'realisations', 'apropos', 'contact'];
    this.routesParameters = [{
      name: 'home',
      title: 'ZAKARIA OTHMANE'
    }, {
      name: 'realisations',
      title: 'MES RÉALISATIONS'
    }, {
      name: 'apropos',
      title: 'À PROPOS'
    }, {
      name: 'contact',
      title: 'ME CONTACTER'
    }, ];
  }

  run() {
    this.makeRouteObjects();
    window.onpopstate = (e) => {
      if (e.state && e.state.pageName) {
        this.changeRoute(e.state.pageName);
      }
    };
  }

  makeRouteObjects() {
    for (var i = 0; i < this.routesParameters.length; i++) {
      this.routes[this.routesParameters[i].name] = new Route(this.routesParameters[i]);
      this.routeListener(this.routes[this.routesParameters[i].name].buttons);
    }
    if (this.routesNames.includes(this.currentRouteName)) {
      this.currentRoute = this.routes[this.currentRouteName];
    } else {
      this.currentRoute = this.routes.home;
    }
    this.currentRoute.render();
    this.currentRoute.pushState();
  }

  routeListener(buttons) {
    for (let button of buttons) {
      button.addEventListener('click', this.onChangeRoute.bind(this));
    }
  }


  changeRoute(routeName) {
    let nextRoute = this.routes[routeName],
      currentRoute = this.currentRoute;
    currentRoute.fadeOut();
    this.currentRoute = nextRoute;
    window.setTimeout(() => {
      currentRoute.changePage();
      nextRoute.render();
    }, 300);
  }

  onChangeRoute(e) {
    e.preventDefault();
    this.changeRoute(e.currentTarget.dataset.route);
    this.currentRoute.pushState();
  }
}
