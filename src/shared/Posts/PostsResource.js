import angular from 'angular';

const Resource = ($resource, API) => { 'ngInject';
  return {
    list(params = {}) {
      return $resource(API.getRoute('post.list'), {}, {
        get: {
          method:  API.getMethod('post.list'),
          cache:   true,
          isArray: true,
          params
        },
        add: {
          url:     API.getRoute('post.list.add'),
          method:  API.getMethod('post.list.add'),
          params
        }
      });
    },
    one(params = {}) {
      return $resource(API.getRoute('post.one'), { postID: '@id' }, {
        get: {
          method: API.getMethod('post.one'),
          cache:  true,
          params
        },
        getComments: {
          url:    API.getRoute('post.one.comments'),
          method: API.getMethod('post.one.comments'),
          cache:  true,
          isArray: true,
          params
        },
        update: {
          method: API.getMethod('post.one.update'),
          params
        },
        path: {
          method: API.getMethod('post.one.patch'),
          params
        },
        remove: {
          method: API.getMethod('post.one.remove'),
          params
        }
      });
    }
  };
};

export default angular.module('app.Post.Resource', []).factory('PostResource', Resource).name;
