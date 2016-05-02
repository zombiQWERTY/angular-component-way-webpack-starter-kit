import angular from 'angular';

import {{ component }}Styles from './{{ component }}Styles.scss';

class controller {
  constructor() { 'ngInject';

    this.$routerOnActivate = () => {

    };

    this.$onInit = () => {

    };
  }
}

const Component = {
  template:     require('./{{ name }}View.jade')({{ component }}Styles),
  controllerAs: '{{ name }}',
  controller
};


export default angular.module('App.shared{{#if folder}}.{{ folder }}{{/if}}.{{ name }}', [
]).component('{{ component }}', Component).name;
