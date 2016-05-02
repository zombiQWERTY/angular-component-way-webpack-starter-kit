import angular                from 'angular';
import '@angular/router/angular1/angular_1_router';
import 'angular-resource';

import FastClick              from 'fastclick';

import Configs                from './Config';

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

const Config = ($locationProvider) => { 'ngInject';
  $locationProvider.html5Mode(Configs.isHTML5);
};

const Runners = () => { 'ngInject';

};

const TITLE = new WeakMap();

class controller {
  constructor(title) { 'ngInject';
    TITLE.set(this, title);

    this.$routerOnActivate = () => {
      new FastClick($body);
      TITLE.get(this).setTitle();
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

angular
  .module('App', ['ngComponentRouter', 'ngResource'])
  .constant('Config', Configs)
  .config(Config)
  .run(Runners)
  .value('$routerRootComponent', 'app')
  .component('app', Component);

const modules = ['App'].concat(topLevelComponents, lowLevelComponents, topLevelProviders, topLevelFactories,
                                topLevelDirectives, topLevelServices, topLevelFilters);

angular.bootstrap($body, modules);
