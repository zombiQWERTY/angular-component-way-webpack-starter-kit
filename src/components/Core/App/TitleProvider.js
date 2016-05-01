import angular from 'angular';

const Provider = (Config) => { 'ngInject';
  return {
    title: null,
    setTitle(params = {}) {
      const defaultTitle = params.defaultTitle || Config.title.defaultTitle;
      const newTitle     = params.newTitle     || '';
      const divider      = params.divider      || Config.title.divider;

      this.title         = { defaultTitle, newTitle, divider };
      document.title     = newTitle + (newTitle ? divider : '') + defaultTitle;
    },

    getTitle() {
      return this.title;
    },

    $get() {
      return {
        setTitle: this.setTitle,
        getTitle: this.getTitle
      };
    }
  };
};


export default angular.module('app.titleProvider', []).provider('title', Provider).name;
