(function () {

'use strict';

function TimeControllerEn ($interval, $filter) {
    
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
    vm.hoursArray = [   {value:   1,     name: "One"    }, 
                        {value:   2,     name: "Two"    }, 
                        {value:   3,     name: "Three"  }, 
                        {value:   4,     name: "Four"   },
                        {value:   5,     name: "Five"   },
                        {value:   6,     name: "Six"    }, 
                        {value:   7,     name: "Seven"  }, 
                        {value:   8,     name: "Eight"  },
                        {value:   9,     name: "Nine"   },
                        {value:  11,     name: "Eleven" },
                        {value:  12,     name: "Twelve" },
                        {value:  13,     name: "One"    } ];
        
    vm.tenHours =       {value:  10,     name: "Ten"    };
    vm.five =           {value:  5,     name:  "Five"   };

    vm.till = "Till";
    vm.after = "Past";
    
    vm.ten = "Ten";
    vm.fifteen = "Quarter";
    vm.twenty = "Twenty";
    vm.half = "Half Of";
    vm.hour = "O'Clock";

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
    .controller('TimeControllerEn', ['$interval', '$filter', TimeControllerEn]);
})();
