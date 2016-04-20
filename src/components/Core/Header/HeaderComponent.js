import angular      from 'angular';

import headerStyles from './HeaderStyles.scss';

const Component = {
  template: require('./HeaderView.jade')(headerStyles),
  controllerAs: 'Header',
  controller() {
    'ngInject';

  }
};


export default angular.module('App.core.Header', []).component('appHeader', Component).name;
