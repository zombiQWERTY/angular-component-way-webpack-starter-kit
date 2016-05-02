import angular from 'angular';

/*-- APPEND PROVIDER HERE --*/

/*-- APPEND FACTORY HERE --*/

/*-- APPEND DIRECTIVE HERE --*/

/*-- APPEND SERVICE HERE --*/

/*-- APPEND FILTER HERE --*/

import footerStyles from './FooterStyles.scss';

class controller {
  constructor(
    /*-- CALL PROVIDER HERE --*/
    /*-- CALL FACTORY HERE --*/
    /*-- CALL DIRECTIVE HERE --*/
    /*-- CALL SERVICE HERE --*/
    /*-- CALL FILTER HERE --*/
  ) { 'ngInject';

  }
}

const Component = {
  template:     require('./FooterView.jade')(footerStyles),
  controllerAs: 'Footer',
  controller
};


export default angular.module('App.core.Footer', [
  /*-- SET PROVIDER HERE --*/
  /*-- SET FACTORY HERE --*/
  /*-- SET DIRECTIVE HERE --*/
  /*-- SET SERVICE HERE --*/
  /*-- SET FILTER HERE --*/
]).component('appFooter', Component).name;
