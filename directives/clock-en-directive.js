(function () {

'use strict';

function clockEn() {
    
    var directive = {
        restrict: 'AE',
        templateUrl: 'directives/clock-en.html',
        controller: "TimeControllerEn",
        controllerAs: "timeEn"
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clockEn', clockEn);
})();