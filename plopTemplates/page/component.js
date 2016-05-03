import angular from 'angular';

import {{ componentName }}Styles from './{{ name }}Styles.scss';

const $TITLE = new WeakMap();

class controller {
  constructor($title) { 'ngInject';
    $TITLE.set(this, $title);

    this.$routerOnActivate = () => {
      $TITLE.get(this).setTitle({ newTitle: '{{ name }}' });
    };
  }
}


const Component = {
  template:     require('./{{ name }}View.jade')({{ componentName }}Styles),
  controllerAs: '{{ name }}',
  controller
};


export default angular.module('App.pages.{{ componentName }}', [
]).component('{{ componentName }}', Component).name;
