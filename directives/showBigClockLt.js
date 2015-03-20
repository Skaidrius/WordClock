(function () {

'use strict';

angular
    .module('clockApp')
    .directive('showBigClockLt', clockLt);

function clockLt() {
    
    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clockLt.html',
        controller: "TimeControllerLt",
        controllerAs: "timeLt"
    };
    return directive;
}

})();