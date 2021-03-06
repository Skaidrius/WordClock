(function () {

'use strict';

function TimeControllerLtTest() {
    
    var vm = this;
    //data
    vm.datatest = [
        {
            "test" : {
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
        }
    ];
    vm.data = vm.datatest[0].test;

    //classes
    vm.showClassName = 'actual';
    vm.hiddenClassName = 'neutral';
}

angular
    .module('clockApp')
    .controller('TimeControllerLtTest', TimeControllerLtTest);
})();