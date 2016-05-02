import angular from 'angular';

const Provider = () => { 'ngInject';
  return {



    $get() {
      return {

      };
    }
  };
};


export default angular.module('app.{{ modulename }}{{ name }}Provider', []).provider('{{ name }}', Provider).name;
