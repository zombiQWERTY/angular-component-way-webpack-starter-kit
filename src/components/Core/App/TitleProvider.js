import angular from 'angular';

const Provider = () => {
  const defaults = {
    defaultTitle: 'Angular Webpack Starter Kit',
    devider:       ' –– '
  };

  return {
    title: null,
    setTitle(params = {}) {
      const defaultTitle = params.defaultTitle || defaults.defaultTitle;
      const newTitle     = params.newTitle     || '';
      const devider      = params.devider      || defaults.devider;

      this.title     = { defaultTitle, newTitle, devider };
      document.title = newTitle + (newTitle ? devider : '') + defaultTitle;
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
