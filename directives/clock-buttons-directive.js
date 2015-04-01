(function () {

'use strict';

function clockButtons() {
    
    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clock-buttons.html'
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clockButtons', clockButtons);
})();