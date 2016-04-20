import angular    from 'angular';
import homeStyles from './HomeStyles.scss';

const Component = {
  template: require('./HomeView.jade')(homeStyles),
  controllerAs: 'Home',
  controller() {
    'ngInject';

  }
};


export default angular.module('app.pages.home', []).component('pHome', Component).name;
