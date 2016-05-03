import angular      from 'angular';
import footerStyles from './FooterStyles.scss';

class controller {
  constructor() { 'ngInject';

  }
}

const Component = {
  template:     require('./FooterView.jade')(footerStyles),
  controllerAs: 'Footer',
  controller
};


export default angular.module('App.core.Footer', []).component('appFooter', Component).name;
