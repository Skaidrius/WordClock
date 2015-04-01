(function () {

'use strict';

function testLt() {

    var directive = {
        restrict: 'E',
        templateUrl: 'directives/test/clock-lt-test.html',
        controller: "TimeLtTestController",
        controllerAs: "testLt"
    };
    return directive;
}

angular
    .module('clockApp')
    .directive('clockLtTest', testLt);
})();