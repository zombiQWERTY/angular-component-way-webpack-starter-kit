import angular          from 'angular';
import PostsResource    from '../PostsResource';
import postDetailStyles from './PostDetailStyles.scss';

const $TITLE        = new WeakMap();
const POST_RESOURCE = new WeakMap();

class controller {
  constructor($title, PostResource) { 'ngInject';
    $TITLE.set(this, $title);
    POST_RESOURCE.set(this, PostResource);

    this.busy = true;
    this.$routerOnActivate = (next) => {
      this.getPost(next.params.postID);
    };
    this.$onInit = () => {
      if (!this.postId) { return; }
      this.getPost(this.postId);
    };
  }

  async getPost(postID) {
    const Post = POST_RESOURCE.get(this).one();

    try {
      this.post = await Post.get({ postID });
      if (!this.postId) { this.pageTitle = this.post.title; }
      this.busy = false;
    } catch(e) {
      console.error(`Can't get a post:\n${e}`);
    }
  }

  set pageTitle(newTitle) {
    $TITLE.get(this).setTitle({ newTitle });
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
