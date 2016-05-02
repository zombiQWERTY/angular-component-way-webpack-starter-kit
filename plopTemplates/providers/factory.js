import angular from 'angular';

const Factory = () => { 'ngInject';



  return {

  };
};

export default angular.module('app.{{ modulename }}.{{ name }}', []).factory('{{ name }}', Factory).name;
