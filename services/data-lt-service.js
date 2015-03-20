(function () {

'use strict';

function dataLt() {
    
    this.data = function () {

    this.hoursPastHalf= [ {value:   1,     name: "Pirma" }, 
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
        
    this.tenHours = {value:  10,     name: "Dešimt"   };
    this.five =   {value:  5,     name:  "Penkios"    };

    this.hoursPastZero = [ {value:  1,     name: "Pirmos"     }, 
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

    this.till = "Be";
    this.after = "Po";
    
    this.fivetill = "Penkių";
    this.ten = "Dešimt";
    this.quarter = "Penkiolikos";
    this.fifteen = "Penkiolika";
    this.twenty = "Dvidešimt";
    this.half = "Pusė";
    this.afterhalf = "Pusės";

    this.hour = "Valanda";
    this.hours = "Valandos";
    this.morehour = "Valandų";

    };  
    return this.data;

    }
    
angular
    .module('clockApp')
    .service('dataLt', dataLt);

})();