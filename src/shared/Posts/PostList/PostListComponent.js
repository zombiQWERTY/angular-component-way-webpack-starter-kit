import angular        from 'angular';
import PostsResource  from '../PostsResource';
import postListStyles from './PostListStyles.scss';

const $TITLE        = new WeakMap();
const POST_RESOURCE = new WeakMap();

class controller {
  constructor($title, PostResource) { 'ngInject';
    $TITLE.set(this, $title);
    POST_RESOURCE.set(this, PostResource);

    this.busy = true;
    this.$routerOnActivate = () => {
      $TITLE.get(this).setTitle({ newTitle: 'Post list' });

      this.getList();
    };
  }

  async getList() {
    const Posts = POST_RESOURCE.get(this).list();

    try {
      this.posts = await Posts.get();
      this.busy  = false;
    } catch(e) {
      console.error(`Can't get a post:\n${e}`);
    }
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
