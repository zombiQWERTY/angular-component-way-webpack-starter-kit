import angular from 'angular';

const PointerEvents = ($timeout, $window) => {
  'ngInject';

  return {
    restrict: 'A',
    link(scope) {
      let timeout;
      scope.isHover = false;
      $window.addEventListener('scroll', () => {
        $timeout.cancel(timeout);
        if (!scope.isHover) {
          scope.isHover = true;
          return;
        }
        timeout = $timeout(() => scope.isHover = false, 500);
        scope.$apply();
      });
    }
  };
};

export default angular.module('app.core.PointerEvents', []).directive('pointerEvents', PointerEvents).name;
