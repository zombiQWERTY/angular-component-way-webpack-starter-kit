import angular             from 'angular';
import homeStyles          from './HomeStyles.scss';

import PostListComponent   from '../../shared/Posts/PostList/PostListComponent';
import PostDetailComponent from '../../shared/Posts/PostDetail/PostDetailComponent';

const TITLE = new WeakMap();

class controller {
  constructor(title) { 'ngInject';
    TITLE.set(this, title);

    this.$routerOnActivate = () => {
      TITLE.get(this).setTitle({
        newTitle: 'Home'
      });
    };
  }
}


const Component = {
  template: require('./HomeView.jade')(homeStyles),
  controllerAs: 'Home',
  controller,
  $routeConfig: [
    {
      path: '/',
      name: 'PostList',
      component: 'postList'
    },
    {
      path: '/:postID',
      name: 'PostDetail',
      component: 'postDetail'
    }
  ]
};


export default angular.module('App.pages.home', [
  PostListComponent, PostDetailComponent
]).component('home', Component).name;
