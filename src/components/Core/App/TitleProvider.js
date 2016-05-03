import angular from 'angular';

const Provider = ($configProvider) => { 'ngInject';
  const CONFIG_TITLE = $configProvider.settings.title;
  return {
    title: null,
    setTitle(params = {}) {
      this.title = {
        defaultTitle: params.defaultTitle || CONFIG_TITLE.defaultTitle,
        newTitle:     params.newTitle     || '',
        divider:      params.divider      || CONFIG_TITLE.divider
      };
      const divider  = this.title.newTitle ? this.title.divider : '';
      document.title = this.title.newTitle + divider + this.title.defaultTitle;
    },

    getTitle() { return this.title; },

    $get() {
      return {
        setTitle: this.setTitle,
        getTitle: this.getTitle
      };
    }
  };
};


export default angular.module('app.titleProvider', []).provider('$title', Provider).name;
