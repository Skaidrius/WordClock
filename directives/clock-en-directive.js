(function () {

'use strict';

angular
    .module('clockApp')
    .directive('clockEn', clockEn);

function clockEn() {
    
    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clock-en.html',
        controller: "TimeEnController",
        controllerAs: "timeEn"
    };
    return directive;

    }

})();