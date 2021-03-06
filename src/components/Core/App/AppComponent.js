import 'babel-polyfill';

import angular                from 'angular';
import '@angular/router/angular1/angular_1_router';
import 'angular-resource';

import FastClick              from 'fastclick';

import Constants              from './Constants';
import ConfigProvider         from './ConfigProvider';

import TitleProvider          from './TitleProvider';
import APIFactory             from './APIFactory';
import PointerEventsDirective from './PointerEventsDirective';

import HomeComponent          from '../../Home/HomeComponent';

import HeaderComponent        from '../Header/HeaderComponent';
import FooterComponent        from '../Footer/FooterComponent';

import PostListComponent      from '../../../shared/Posts/PostList/PostListComponent';
import PostDetailComponent    from '../../../shared/Posts/PostDetail/PostDetailComponent';

import resetStyles            from './styles/reset.scss';
import fontStyles             from './styles/fonts.scss';
import globalStyles           from './styles/globals.scss';

import appStyles              from './AppStyles.scss';

const styles = Object.assign(resetStyles, fontStyles, globalStyles, appStyles);

const topLevelComponents = [
  HomeComponent
];

const lowLevelComponents = [
  HeaderComponent,
  FooterComponent,
  PostListComponent,
  PostDetailComponent
];

const topLevelProviders = [
  ConfigProvider,
  TitleProvider
];

const topLevelFactories = [
  APIFactory
];

const topLevelDirectives = [
  PointerEventsDirective
];

const topLevelServices = [

];

const topLevelFilters = [

];

const $body = document.body;

const Config = ($locationProvider, $configProvider) => { 'ngInject';
  $configProvider.config({
    isHTML5: true,
    API: {
      domain:  'jsonplaceholder.typicode.com',
      ssl:     false,
      version: false
    },
    title: {
      defaultTitle: 'Angular Webpack Starter Kit',
      divider:      ' –– '
    }
  });

  $locationProvider.html5Mode($configProvider.settings.isHTML5);
};

const Runners = () => { 'ngInject';

};

const $TITLE = new WeakMap();

class controller {
  constructor($title) { 'ngInject';
    $TITLE.set(this, $title);

    this.$routerOnActivate = () => {
      new FastClick($body);
      $TITLE.get(this).setTitle();
    };
  }
}

const Component = {
  template: require('./AppView.jade')(styles),
  controllerAs: 'App',
  controller,
  $routeConfig: [
    {
      path:         '/...',
      name:         'Home',
      component:    'home',
      useAsDefault: true
    }
  ]
};

const appDependencies = ['ngComponentRouter', 'ngResource'].concat(topLevelProviders);

const modules = [].concat(Constants, topLevelFactories, topLevelDirectives, topLevelServices,
                          topLevelFilters, topLevelComponents, lowLevelComponents);

angular
  .module('App', appDependencies)
  .config(Config)
  .run(Runners)
  .value('$routerRootComponent', 'app')
  .component('app', Component);


angular.bootstrap($body, ['App'].concat(modules));
