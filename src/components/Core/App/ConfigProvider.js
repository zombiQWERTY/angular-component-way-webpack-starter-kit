import angular from 'angular';

const Provider = () => { 'ngInject';
  return {
    settings: {
      isHTML5: true,
      title: {
        defaultTitle: 'Angular Webpack Starter Kit',
        divider:      ' –– '
      },
      API: {
        domain:  'api.mysite.com',
        ssl:     false,
        version: 1
      }
    },
    config($params) {
      const settings = this.settings;
      const version = $params.API.version !== settings.API.version ? $params.API.version : settings.API.version;

      settings.isHTML5            = $params.isHTML5            || settings.isHTML5;
      settings.title.defaultTitle = $params.title.defaultTitle || settings.title.defaultTitle;
      settings.title.divider      = $params.title.divider      || settings.title.divider;
      settings.API.domain         = $params.API.domain         || settings.API.domain;
      settings.API.ssl            = $params.API.ssl            || settings.API.ssl;
      settings.API.version        = version;
    },
    $get() {
      return this.settings;
    }
  };
};


export default angular.module('app.configProvider', []).provider('$config', Provider).name;
