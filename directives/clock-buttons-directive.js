(function () {

'use strict';

function clockButtons() {
    
    var directive = {
        restrict: 'E',
        templateURL: 'directives/clock-buttons.html'
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clockButtons', clockButtons);
})();