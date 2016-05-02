import angular        from 'angular';
import postListStyles from './PostListStyles.scss';

import PostsResource from '../PostsResource';

const TITLE         = new WeakMap();
const POST_RESOURCE = new WeakMap();

class controller {
  constructor(title, PostResource) { 'ngInject';
    TITLE.set(this, title);
    POST_RESOURCE.set(this, PostResource);

    this.busy = true;
    this.$routerOnActivate = () => {
      TITLE.get(this).setTitle({ newTitle: 'Post list' });

      this.getList.then((posts) => {
         this.posts = posts;
        this.busy   = false;
      });
    };
  }

  get getList() {
    const Posts = POST_RESOURCE.get(this).list();
    return Posts.get().$promise;
  }
}

const Component = {
  template:     require('./PostListView.jade')(postListStyles),
  controllerAs: 'PostList',
  controller
};


export default angular.module('App.shared.posts.PostList', [
  PostsResource
]).component('postList', Component).name;
