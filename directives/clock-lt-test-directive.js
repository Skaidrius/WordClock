(function () {

'use strict';

angular
    .module('clockApp')
    .directive('clockLtTest', testLt);

function testLt() {

    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clock-lt-test.html',
        controller: "TimeLtTestController",
        controllerAs: "testLt"
    };
    return directive;

}

})();