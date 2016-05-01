import angular          from 'angular';
import postDetailStyles from './PostDetailStyles.scss';

import PostsResource    from '../PostsResource';

const TITLE         = new WeakMap();
const POST_RESOURCE = new WeakMap();

class controller {
  constructor(title, PostResource) { 'ngInject';
    TITLE.set(this, title);
    POST_RESOURCE.set(this, PostResource);

    this.busy = true;
    this.$routerOnActivate = (next) => {
      this.getPost(next.params.postID);
    };
    this.$onInit = () => {
      this.getPost(this.postId);
    };
  }

  getPost(postID) {
    const Post = POST_RESOURCE.get(this).one();
    Post.get({ postID }).$promise.then((post) => {
      this.post = post;

      if (!this.postId) { this.pageTitle = this.post.title; }
      this.busy      = false;
    });
  }

  set pageTitle(newTitle) {
    TITLE.get(this).setTitle({ newTitle });
  }
}

const Component = {
  template:     require('./PostDetailView.jade')(postDetailStyles),
  controllerAs: 'PostDetail',
  bindings: {
    postId: '<'
  },
  controller
};


export default angular.module('App.shared.posts.postDetail', [
  PostsResource
]).component('postDetail', Component).name;
