describe('Component: {{ name }}', () => {
  let $componentController;

  beforeEach(angular.mock.module('App.pages.{{ componentName }}'));

  beforeEach(angular.mock.inject(( _$componentController_) => {
    $componentController =  _$componentController_;
  }));
});
