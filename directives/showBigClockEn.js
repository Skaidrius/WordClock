(function () {

'use strict';

angular
    .module('clockApp')
    .directive('showBigClockEn', clockEn);

function clockEn() {
    
    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clockEn.html',
        controller: "TimeControllerEn",
        controllerAs: "timeEn"
    };
    return directive;

    }

})();