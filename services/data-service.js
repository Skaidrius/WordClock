(function () {

'use strict';

function DataService($resource) {
    
    this.service = {};

    this.getData = function () {
        return $resource('services/clock-names.json').data;
    };
    this.reptile = "strong";
    return service;
}

angular
    .module('clockApp')
    .service('DataService', DataService);
})();

