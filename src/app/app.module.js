/* global document */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Routes from './app.routes';
import Bootstrap from './app.bootstrap';
import AppComponent from './app.component';
// import 'normalize.css';

angular.module('app', [uiRouter, Common, Components, Services])
  .component('app', AppComponent)
  .config(Routes)
  .run(Bootstrap);

document.addEventListener('DOMContentLoaded', (event) => {
  angular.bootstrap(document, ['app']);
});
