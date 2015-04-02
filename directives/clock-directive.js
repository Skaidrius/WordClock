(function () {

'use strict';

function clock() {
    
    var directive = {
        restrict: 'AE',
        // templateUrl: 'directives/clock-en.html',
        templateUrl: function(element, attr){
            return 'directives/clock-'+attr.clock+'.html'},
        controller: "TimeController",
        controllerAs: "clock"
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clock', clock);
})();