(function () {

'use strict';

angular
    .module('clockApp')
    .directive('clockLt', clockLt);

function clockLt() {
    
    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clock-lt.html',
        controller: "TimeLtController",
        controllerAs: "timeLt"
    };
    return directive;
}

})();