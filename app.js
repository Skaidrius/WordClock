var app = angular.module('clockApp', []);
app.controller('DataController', function($scope, $interval, $filter) {

    $scope.init = $interval(function(){
        $scope.input = new Date();
        $scope.currHours = $filter('date')($scope.input, 'hh');
        $scope.currMins = $filter('date')($scope.input, 'mm');
        $scope.currSecs = $filter('date')($scope.input, 'ss');

        $scope.hoursPastHalf= [ {value:   1,     name: "Pirma" }, 
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
        
        $scope.tenHours = {value:  10,     name: "Dešimt"   };
        $scope.five =   {value:  5,     name:  "Penkios"    };

        $scope.hoursPastZero = [ {value:  1,     name: "Pirmos"     }, 
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

        $scope.till = "Be";
        $scope.after = "Po";
        
        $scope.fivetill = "Penkių";
        $scope.ten = "Dešimt";
        $scope.quarter = "Penkiolikos";
        $scope.fifteen = "Penkiolika";
        $scope.twenty = "Dvidešimt";
        $scope.half = "Pusė";
        $scope.afterhalf = "Pusės";
    
        $scope.hour = "Valanda";
        $scope.hours = "Valandos";
        $scope.morehour = "Valandų";

    },100 );
    
    $scope.showClassName = 'active';
    $scope.hiddenClassName = 'passive';
    
    $scope.changeClass = function(){
        if ($scope.showClassName != "active"){
            $scope.showClassName = "active";
            $scope.hiddenClassName = "passive";
          } else {
            $scope.showClassName = "visible";
            $scope.hiddenClassName = "hidden";
          }
    };

});

app.controller('DataControllerEn', function($scope, $interval, $filter) {

    $scope.init = $interval(function(){
        $scope.input = new Date();
        $scope.currHours = $filter('date')($scope.input, 'hh');
        $scope.currMins = $filter('date')($scope.input, 'mm');
        $scope.currSecs = $filter('date')($scope.input, 'ss');

        $scope.hoursArray= [ {value:   1,     name: "One" }, 
                        {value:   2,     name: "Two"        }, 
                        {value:   3,     name: "Three"       }, 
                        {value:   4,     name: "Four"   }, 
                        {value:   6,     name: "Six"     }, 
                        {value:   7,     name: "Seven"  }, 
                        {value:   8,     name: "Eight"  },
                        {value:   9,     name: "Nine"   },
                        {value:  11,     name: "Eleven" },
                        {value:  12,     name: "Twelve"    },
                        {value:  13,     name: ""      } ];
        
        $scope.tenHours = {value:  10,     name: "Ten"   };
        $scope.five =   {value:  5,     name:  "Five"    };

        $scope.hoursPastZero = [ {value:  1,     name: "One"     }, 
                        {value:  2,     name: "Two"      }, 
                        {value:  3,     name: "Three"       }, 
                        {value:  4,     name: "Four"     }, 
                        {value:  5,     name: "Five"      },  
                        {value:  6,     name: "Six"       }, 
                        {value:  7,     name: "Seven"    }, 
                        {value:  8,     name: "Eight"    },
                        {value:  9,     name: "Nine"     },
                        {value:  11,    name: "Eleven" },
                        {value:  12,    name: "Twelve"    },
                        {value:  13,    name: ""      }  ];  

        $scope.till = "Till";
        $scope.after = "Past";
        
        $scope.ten = "Ten";
        $scope.quarter = "Quarter";
        $scope.fifteen = "Quarter";
        $scope.twenty = "Twenty";
        $scope.half = "Half Of";
        $scope.afterhalf = "Half Of";
    
        $scope.hour = "O'Clock";

    },100 );
    
    $scope.showClassName = 'active';
    $scope.hiddenClassName = 'passive';
    
    $scope.changeClass = function(){
        if ($scope.showClassName != "active"){
            $scope.showClassName = "active";
            $scope.hiddenClassName = "passive";
          } else {
            $scope.showClassName = "visible";
            $scope.hiddenClassName = "hidden";
          }
    };

});

// tests
app.controller('TestController', function($scope, $interval) {  //clone for testing

    $scope.init = $interval(function(){

        $scope.hoursPastHalf= [ {value:   1,     name: "Pirma" }, 
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
        
        $scope.tenHours = {value:  10,  name: "Dešimt"      };
        $scope.five =   {value:  5,     name:  "Penkios"    };
                        
        $scope.hoursPastZero = [ {value:  1,     name: "Pirmos"     }, 
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

        $scope.till = "Be";
        $scope.after = "Po";
        
        $scope.fivetill = "Penkių";
        $scope.ten = "Dešimt";
        $scope.quarter = "Penkiolikos";
        $scope.fifteen = "Penkiolika";
        $scope.twenty = "Dvidešimt";
        $scope.half = "Pusė";
        $scope.afterhalf = "Pusės";
    
        $scope.hour = "Valanda";
        $scope.hours = "Valandos";
        $scope.morehour = "Valandų";

},100 );

});

app.directive('showBigClock', function(){
    return {
        templateUrl: 'clock.html'
    };
});

app.directive('showBigClockEn', function(){
    return {
        templateUrl: 'clockEn.html'
    };
});
