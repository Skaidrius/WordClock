(function () {

'use strict';

function data() {
    
    return {

        hoursArray : [ {value:   1,     name: "One" }, 
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
                            {value:  13,     name: "One"      } ],
            
        tenHours : {value:  10,     name: "Ten"   },
        five :  {value:  5,     name:  "Five"    },
    
        till : "Till",
        after : "Past",
        
        ten : "Ten",
        fifteen : "Quarter",
        twenty : "Twenty",
        half : "Half Of",
        afterhalf : "Half Of",
    
        hour : "O'Clock"
    
    
    };  

    }

angular
    .module('clockApp')
    .factory('dataEn', data);

})();