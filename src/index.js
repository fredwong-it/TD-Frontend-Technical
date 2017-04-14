import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';
import 'angular-ui-bootstrap';

import 'angular-ui-router';
import routesConfig from './routes';

import {hello} from './app/hello';
import {test01} from './test01/app';
import {test02} from './test02/app';

import {dataService} from './test01/data-service';
import {utilityFactory} from './test01/utility-factory';
import {buttonLayout} from './test01/buttonlayout-directive';
import {windowResize} from './test01/windowresize-directive';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .service('dataService', dataService)
  .factory('utilityFactory', utilityFactory)
  .directive('buttonLayout', buttonLayout)
  .directive('windowResize', windowResize)
  .component('app', hello)
  .component('test01', test01)
  .component('test02', test02);
