import angular    from 'angular';
import homeStyles from './HomeStyles.scss';

const Component = {
  template: require('./HomeView.jade')(homeStyles),
  controllerAs: 'Home',
  controller(title) {
    'ngInject';
    
    title.setTitle({
      newTitle: 'Home'
    });
  }
};


export default angular.module('App.pages.home', []).component('home', Component).name;
