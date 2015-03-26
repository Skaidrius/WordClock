(function () {

'use strict';

function classChanger() {
    
    // this.change = function() {
    //     if (this.showClassName != "active"){
    //         this.showClassName = "active";
    //         this.hiddenClassName = "passive";
    //       } else {
    //         this.showClassName = "visible";
    //         this.hiddenClassName = "hidden";
    //       }
    //     };
    // return this.change;
    // }
    
    var showClassName = '',
    hiddenClassName = '';
    var service = {
        change: change,
        showClassName: showClassName,
        hiddenClassName: hiddenClassName
    };
    return service;

    function change(){
        if (this.showClassName != "active"){
            this.showClassName = "active";
            this.hiddenClassName = "passive";
          } else {
            this.showClassName = "visible";
            this.hiddenClassName = "hidden";
          }
    }
}

})();

//http://toddmotto.com/minimal-angular-module-syntax-approach-using-an-iife/
//https://github.com/johnpapa/angular-styleguide#services
//http://www.ng-newsletter.com/posts/building-games-with-angular.html