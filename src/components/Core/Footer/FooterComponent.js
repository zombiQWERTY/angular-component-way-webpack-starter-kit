import angular      from 'angular';

import footerStyles from './FooterStyles.scss';

const Component = {
  template: require('./FooterView.jade')(footerStyles),
  controllerAs: 'Footer',
  controller() {
    'ngInject';

  }
};


export default angular.module('App.core.Footer', []).component('appFooter', Component).name;
