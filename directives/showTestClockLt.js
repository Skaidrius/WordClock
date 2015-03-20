(function () {

'use strict';

angular
    .module('clockApp')
    .directive('showTestClockLt', testLt);

function testLt() {

    var directive = {
        restrict: 'E',
        templateUrl: 'directives/clockTestLt.html',
        controller: "TestTimeControllerLt",
        controllerAs: "testLt"
    };
    return directive;

}

})();