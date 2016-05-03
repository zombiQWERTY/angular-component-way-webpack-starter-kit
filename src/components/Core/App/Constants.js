import angular                from 'angular';
import propByString           from '../../../vendor/PropByString';
import APIStore               from './API';

export default angular.module('App.constants', [])
  .constant('propByString', propByString)
  .constant('API_STORE', APIStore)
  .name;
