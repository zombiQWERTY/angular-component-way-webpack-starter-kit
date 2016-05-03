import angular      from 'angular';
import headerStyles from './HeaderStyles.scss';

class controller {
  constructor() { 'ngInject';

  }
}

const Component = {
  template:     require('./HeaderView.jade')(headerStyles),
  controllerAs: 'Header',
  controller
};


export default angular.module('App.core.Header', []).component('appHeader', Component).name;
