import angular      from 'angular';

import headerStyles from './HeaderStyles.scss';

const Component = {
  template: require('./HeaderView.jade')(headerStyles),
  controllerAs: 'Header',
  controller() {
    'ngInject';

  }
};


export default angular.module('app.core.header', []).component('gHeader', Component).name;
