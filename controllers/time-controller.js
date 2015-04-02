(function () {

'use strict';

function TimeController($interval, $filter, ClassChanger){
    
    var vm = this;

//Initialization of clock formats 
//  Lithuanian clock format 24:00:00
    vm.initLt = $interval(function(){
        vm.input = new Date();
        vm.currHours = $filter('date')(vm.input, 'HH');
        vm.currMins = $filter('date')(vm.input, 'mm');
        vm.currSecs = $filter('date')(vm.input, 'ss');
    },100 );
    
//  English clock format 12:00:00 PM
    vm.initEn = $interval(function(){
        vm.input = new Date();
        vm.currHours = $filter('date')(vm.input, 'h');
        vm.currMins = $filter('date')(vm.input, 'mm');
        vm.currSecs = $filter('date')(vm.input, 'ss');
        vm.currAP = $filter('date')(vm.input, 'a');
    },100 );

//  getting clock hours and mins names from data.json
    vm.data = [
        {
            "languageLt" : {
                "hoursPastHalf" : [ {"value":   1,   "name": "Pirma"    }, 
                                {"value":   2,     "name": "Dvi"        }, 
                                {"value":   3,     "name": "Trys"       }, 
                                {"value":   4,     "name": "Keturios"   }, 
                                {"value":   6,     "name": "Šešios"     }, 
                                {"value":   7,     "name": "Septynios"  }, 
                                {"value":   8,     "name": "Aštuonios"  },
                                {"value":   9,     "name": "Devynios"   },
                                {"value":  11,     "name": "Vienuolika" },
                                {"value":  12,     "name": "Dvylika"    },
                                {"value":  13,     "name": "Pirma"      } ],
                "hoursPastZero" : [ {"value":  1,    "name": "Pirmos"   }, 
                                {"value":  2,      "name": "Dviejų"     }, 
                                {"value":  3,      "name": "Trijų"      }, 
                                {"value":  4,      "name": "Keturių"    }, 
                                {"value":  5,      "name": "Penkių"     },  
                                {"value":  6,      "name": "Šešių"      }, 
                                {"value":  7,      "name": "Septynių"   }, 
                                {"value":  8,      "name": "Aštuonių"   },
                                {"value":  9,      "name": "Devynių"    },
                                {"value":  11,     "name": "Vienuolikos"},
                                {"value":  12,     "name": "Dvylikos"   },
                                {"value":  13,     "name": "Pirmos"     } ],  
                                
                "tenHours" :      "Dešimt",
                "till" :          "Be",
                "after" :         "Po",
                "fivetill" :      "Penkių",
                "five" :          "Penkios",
                "ten" :           "Dešimt",
                "quarter" :       "Penkiolikos",
                "fifteen" :       "Penkiolika",
                "twenty" :        "Dvidešimt",
                "half" :          "Pusė",
                "afterhalf" :     "Pusės",
                "hour" :          "Valanda",
                "hours" :         "Valandos",
                "morehour" :      "Valandų"
            }  
        },
        {
            "languageEn" : {
                "hoursArray" : [   {"value":   1,     "name": "One" }, 
                                {"value":   2,     "name": "Two"    }, 
                                {"value":   3,     "name": "Three"  }, 
                                {"value":   4,     "name": "Four"   },
                                {"value":   5,     "name": "Five"   },
                                {"value":   6,     "name": "Six"    }, 
                                {"value":   7,     "name": "Seven"  }, 
                                {"value":   8,     "name": "Eight"  },
                                {"value":   9,     "name": "Nine"   },
                                {"value":  11,     "name": "Eleven" },
                                {"value":  12,     "name": "Twelve" },
                                {"value":  13,     "name": "One"    } ],

                "till" :        "Till",
                "after" :       "Past",
                "five" :        "Five",
                "ten" :         "Ten",
                "tenHours" :    "Ten",
                "fifteen" :     "Quarter",
                "twenty" :      "Twenty",
                "half" :        "Half Of",
                "hour" :        "O'Clock"
            }
        }
    ];
    vm.datalt = vm.data[0].languageLt;
    vm.dataen = vm.data[1].languageEn;

//classes
    vm.showClassName = 'actual';
    vm.hiddenClassName = 'neutral';
    vm.changeClass = function(){
        if (vm.showClassName != "actual"){
            vm.showClassName = "actual";
            vm.hiddenClassName = "neutral";
          } else {
            vm.showClassName = "visible";
            vm.hiddenClassName = "hidden";
          }
    };
}

angular
    .module('clockApp')
    .controller('TimeController', ['$interval', '$filter', TimeController]);
})();