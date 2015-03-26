(function () {

'use strict';

function getDataEn($scope, $http) {
    return function getData(){
        $http.get('data/data-en.json')
        .success(function(data, status, headers, config) {
            $scope.data = data;
        })
        .error(function(data, status, headers, config) {
        // log error
        });
    };
}

angular
    .module('clockApp')
    .factory('getDataEn', getDataEn);

})();