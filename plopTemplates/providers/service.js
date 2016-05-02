import angular from 'angular';

const Service = () => { 'ngInject';

};

export default angular.module('app.{{ modulename }}.{{ name }}', []).service('{{ name }}', Service).name;
