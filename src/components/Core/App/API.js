const API = {
  post: {
    list: {
      name:   'Get post list',
      route:  'posts/',
      method: 'GET',

      add: {
        name:   'Add post',
        route:  'posts/',
        method: 'POST'
      }
    },
    one: {
      name:   'Get one post by postID',
      route:  'posts/:postID/',
      method: 'GET',

      comments: {
        name:   'Get comments from one post by postID',
        route:  'posts/:postID/comments/',
        method: 'GET'
      },
      update: {
        name:   'Update post by postID',
        route:  'posts/:postID/',
        method: 'PUT'
      },
      patch: {
        name:   'Partial post update by postID',
        route:  'posts/:postID/',
        method: 'PATCH'
      },
      remove: {
        name:   'Delete post by postID',
        route:  'posts/:postID/',
        method: 'DELETE'
      }
    }
  },
  comment: {
    name:   'Get comment list',
    route:  'comments/',
    method: 'GET'
  }
};

export default API;
