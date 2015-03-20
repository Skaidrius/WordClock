(function () {

'use strict';

var app = angular.module('clockApp', []);

app.controller('DataControllerLt', ['$interval', '$filter',  
                        function($interval, $filter) {
 
    var vm = this;

//timelt
    vm.init = $interval(function(){
        vm.input = new Date();
        vm.currHours = $filter('date')(vm.input, 'HH');
        vm.currMins = $filter('date')(vm.input, 'mm');
        vm.currSecs = $filter('date')(vm.input, 'ss');
    },100 );

// datalt
    vm.hoursPastHalf= [ {value:   1,     name: "Pirma" }, 
                        {value:   2,     name: "Dvi"        }, 
                        {value:   3,     name: "Trys"       }, 
                        {value:   4,     name: "Keturios"   }, 
                        {value:   6,     name: "Šešios"     }, 
                        {value:   7,     name: "Septynios"  }, 
                        {value:   8,     name: "Aštuonios"  },
                        {value:   9,     name: "Devynios"   },
                        {value:  11,     name: "Vienuolika" },
                        {value:  12,     name: "Dvylika"    },
                        {value:  13,     name: "Pirma"      } ];
        
    vm.tenHours = {value:  10,     name: "Dešimt"   };
    vm.five =   {value:  5,     name:  "Penkios"    };

    vm.hoursPastZero = [ {value:  1,     name: "Pirmos"     }, 
                    {value:  2,     name: "Dviejų"      }, 
                    {value:  3,     name: "Trijų"       }, 
                    {value:  4,     name: "Keturių"     }, 
                    {value:  5,     name: "Penkių"      },  
                    {value:  6,     name: "Šešių"       }, 
                    {value:  7,     name: "Septynių"    }, 
                    {value:  8,     name: "Aštuonių"    },
                    {value:  9,     name: "Devynių"     },
                    {value:  11,    name: "Vienuolikos" },
                    {value:  12,    name: "Dvylikos"    },
                    {value:  13,    name: "Pirmos"      }  ];  

    vm.till = "Be";
    vm.after = "Po";
    
    vm.fivetill = "Penkių";
    vm.ten = "Dešimt";
    vm.quarter = "Penkiolikos";
    vm.fifteen = "Penkiolika";
    vm.twenty = "Dvidešimt";
    vm.half = "Pusė";
    vm.afterhalf = "Pusės";

    vm.hour = "Valanda";
    vm.hours = "Valandos";
    vm.morehour = "Valandų";

//classes
    vm.showClassName = 'active';
    vm.hiddenClassName = 'passive';
    
    vm.changeClass = function(){
        if (vm.showClassName != "active"){
            vm.showClassName = "active";
            vm.hiddenClassName = "passive";
          } else {
            vm.showClassName = "visible";
            vm.hiddenClassName = "hidden";
          }
    };
    
}]);

app.controller('DataControllerEn', ['$interval', '$filter',
                        function($interval, $filter) {

    var vm = this;
//timeen
    vm.init = $interval(function(){
        vm.input = new Date();
        vm.currHours = $filter('date')(vm.input, 'h');
        vm.currMins = $filter('date')(vm.input, 'mm');
        vm.currSecs = $filter('date')(vm.input, 'ss');
        vm.currAP = $filter('date')(vm.input, 'a');
        },100 );

    
//dataen    
    vm.hoursArray= [ {value:   1,     name: "One" }, 
                        {value:   2,     name: "Two"    }, 
                        {value:   3,     name: "Three"  }, 
                        {value:   4,     name: "Four"   },
                        {value:   5,     name: "Five"   },
                        {value:   6,     name: "Six"    }, 
                        {value:   7,     name: "Seven"  }, 
                        {value:   8,     name: "Eight"  },
                        {value:   9,     name: "Nine"   },
                        {value:  11,     name: "Eleven" },
                        {value:  12,     name: "Twelve"    },
                        {value:  13,     name: "One"      } ];
        
    vm.tenHours = {value:  10,     name: "Ten"   };
    vm.five =   {value:  5,     name:  "Five"    };

    vm.till = "Till";
    vm.after = "Past";
    
    vm.ten = "Ten";
    vm.fifteen = "Quarter";
    vm.twenty = "Twenty";
    vm.half = "Half Of";
    vm.afterhalf = "Half Of";

    vm.hour = "O'Clock";
    
//classes    
    vm.showClassName = 'active';
    vm.hiddenClassName = 'passive';

    vm.changeClass = function(){
        if (vm.showClassName != "active"){
            vm.showClassName = "active";
            vm.hiddenClassName = "passive";
          } else {
            vm.showClassName = "visible";
            vm.hiddenClassName = "hidden";
          }
    };
    
    vm.changeClass();
}]);

// tests
app.controller('TestControllerLt', [ 'datalt',
                        function( datalt) {  //cloned lt version part inside of init for testing

    var vm = this;
    //data
    // vm.hoursPastHalf= [ {value:   1,     name: "Pirma" }, 
    //                 {value:   2,     name: "Dvi"        }, 
    //                 {value:   3,     name: "Trys"       }, 
    //                 {value:   4,     name: "Keturios"   }, 
    //                 {value:   6,     name: "Šešios"     }, 
    //                 {value:   7,     name: "Septynios"  }, 
    //                 {value:   8,     name: "Aštuonios"  },
    //                 {value:   9,     name: "Devynios"   },
    //                 {value:  11,     name: "Vienuolika" },
    //                 {value:  12,     name: "Dvylika"    },
    //                 {value:  13,     name: "Pirma"      } ];
    
    // vm.tenHours = {value:  10,  name: "Dešimt"      };
    // vm.five =   {value:  5,     name:  "Penkios"    };
                    
    // vm.hoursPastZero = [ {value:  1,     name: "Pirmos"     }, 
    //                 {value:  2,     name: "Dviejų"      }, 
    //                 {value:  3,     name: "Trijų"       }, 
    //                 {value:  4,     name: "Keturių"     }, 
    //                 {value:  5,     name: "Penkių"      },  
    //                 {value:  6,     name: "Šešių"       }, 
    //                 {value:  7,     name: "Septynių"    }, 
    //                 {value:  8,     name: "Aštuonių"    },
    //                 {value:  9,     name: "Devynių"     },
    //                 {value:  11,    name: "Vienuolikos" },
    //                 {value:  12,    name: "Dvylikos"    },
    //                 {value:  13,    name: "Pirmos"      }  ];  
    
    // vm.till = "Be";
    // vm.after = "Po";
    
    // vm.fivetill = "Penkių";
    // vm.ten = "Dešimt";
    // vm.quarter = "Penkiolikos";
    // vm.fifteen = "Penkiolika";
    // vm.twenty = "Dvidešimt";
    // vm.half = "Pusė";
    // vm.afterhalf = "Pusės";
    
    // vm.hour = "Valanda";
    // vm.hours = "Valandos";
    // vm.morehour = "Valandų";
    vm.datalt = datalt.getdata();
    //classes
    vm.showClassName = 'active';
    vm.hiddenClassName = 'passive';

}]);

app.directive('showBigClockEn', function(){
    return {
        restrict: 'E',
        templateUrl: 'clockEn.html',
        controller: "DataControllerEn",
        controllerAs: "dataen"
    };
});

app.directive('showBigClockLt', function(){
    return {
        restrict: 'E',
        templateUrl: 'clockLt.html',
        controller: "DataControllerLt",
        controllerAs: "datalt"
    };
});

app.directive('showTestClockLt', function(){
    return {
        restrict: 'E',
        templateUrl: 'clockTestLt.html',
        controller: "TestControllerLt",
        controllerAs: "tests"
    };
});


// need to check this out http://jsfiddle.net/pkozlowski_opensource/PxdSP/14/
// and http://www.technofattie.com/2014/03/21/five-guidelines-for-avoiding-scope-soup-in-angular.html

app.service('datalt', function(){
    this.getdata = function(){
        return {
            hoursPastHalf: [ {value:   1,     name: "Pirma"      }, 
                        {value:   2,     name: "Dvi"        }, 
                        {value:   3,     name: "Trys"       }, 
                        {value:   4,     name: "Keturios"   }, 
                        {value:   6,     name: "Šešios"     }, 
                        {value:   7,     name: "Septynios"  }, 
                        {value:   8,     name: "Aštuonios"  },
                        {value:   9,     name: "Devynios"   },
                        {value:  11,     name: "Vienuolika" },
                        {value:  12,     name: "Dvylika"    },
                        {value:  13,     name: "Pirma"      } ],
        
            tenHours :  {value:  10,     name: "Dešimt"     },
            five :      {value:  5,     name:  "Penkios"    },
        
            hoursPastZero : [ {value:  1,     name: "Pirmos"     }, 
                        {value:  2,     name: "Dviejų"      }, 
                        {value:  3,     name: "Trijų"       }, 
                        {value:  4,     name: "Keturių"     }, 
                        {value:  5,     name: "Penkių"      },  
                        {value:  6,     name: "Šešių"       }, 
                        {value:  7,     name: "Septynių"    }, 
                        {value:  8,     name: "Aštuonių"    },
                        {value:  9,     name: "Devynių"     },
                        {value:  11,    name: "Vienuolikos" },
                        {value:  12,    name: "Dvylikos"    },
                        {value:  13,    name: "Pirmos"      }  ],
        
            till : "Be",
            after : "Po",
            
            fivetill : "Penkių",
            ten : "Dešimt",
            quarter : "Penkiolikos",
            fifteen : "Penkiolika",
            twenty : "Dvidešimt",
            half : "Pusė",
            afterhalf : "Pusės",
        
            hour : "Valanda",
            hours : "Valandos",
            morehour : "Valandų"
        };
            
    };
});

})();