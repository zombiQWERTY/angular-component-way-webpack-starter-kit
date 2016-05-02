import angular from 'angular';

/*-- APPEND PROVIDER HERE --*/

/*-- APPEND FACTORY HERE --*/

/*-- APPEND DIRECTIVE HERE --*/

/*-- APPEND SERVICE HERE --*/

/*-- APPEND FILTER HERE --*/

import headerStyles from './HeaderStyles.scss';

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
  template:     require('./HeaderView.jade')(headerStyles),
  controllerAs: 'Header',
  controller
};


export default angular.module('App.core.Header', [
  /*-- SET PROVIDER HERE --*/
  /*-- SET FACTORY HERE --*/
  /*-- SET DIRECTIVE HERE --*/
  /*-- SET SERVICE HERE --*/
  /*-- SET FILTER HERE --*/
]).component('appHeader', Component).name;
