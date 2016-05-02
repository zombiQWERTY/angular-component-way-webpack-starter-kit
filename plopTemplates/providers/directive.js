import angular from 'angular';

const Directive = () => { 'ngInject';
  return {
    restrict: 'A',
    link() {

    }
  };
};

export default angular.module('app.{{ modulename }}.{{ name }}', []).directive('{{ name }}', Directive).name;
