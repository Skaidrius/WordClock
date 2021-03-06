(function () {

'use strict';

function clockLt() {
    
    var directive = {
        restrict: 'AE',
        templateUrl: 'directives/clock-lt.html',
        controller: "TimeController",
        controllerAs: "clock"
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clockLt', clockLt);
})();