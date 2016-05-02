import angular from 'angular';

const Filter = () => { 'ngInject';
  return (input) => {

    return input;
  };
};

export default angular.module('app.{{ modulename }}.{{ name }}', []).filter('{{ name }}', Filter).name;
