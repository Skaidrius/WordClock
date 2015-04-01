(function () {

'use strict';

function clockLt() {
    
    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clock-lt.html',
        controller: "TimeControllerlt",
        controllerAs: "timeLt"
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clockLt', clockLt);
})();