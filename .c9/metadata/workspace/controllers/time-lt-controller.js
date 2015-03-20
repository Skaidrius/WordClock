{"filter":false,"title":"time-lt-controller.js","tooltip":"/controllers/time-lt-controller.js","undoManager":{"mark":29,"position":29,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":36},"end":{"row":6,"column":52},"action":"insert","lines":["TimeLtController"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":10},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":9},"end":{"row":4,"column":25},"action":"insert","lines":["TimeLtController"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":26},"end":{"row":4,"column":44},"action":"insert","lines":["$interval, $filter"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":54},"end":{"row":9,"column":54},"action":"remove","lines":["['$interval', '$filter',  ","                        function($interval, $filter) {"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":76,"column":6},"action":"remove","lines":["    var vm = this;","","//timelt","    vm.init = $interval(function(){","        vm.input = new Date();","        vm.currHours = $filter('date')(vm.input, 'HH');","        vm.currMins = $filter('date')(vm.input, 'mm');","        vm.currSecs = $filter('date')(vm.input, 'ss');","    },100 );","","// datalt","    vm.hoursPastHalf= [ {value:   1,     name: \"Pirma\" }, ","                        {value:   2,     name: \"Dvi\"        }, ","                        {value:   3,     name: \"Trys\"       }, ","                        {value:   4,     name: \"Keturios\"   }, ","                        {value:   6,     name: \"Šešios\"     }, ","                        {value:   7,     name: \"Septynios\"  }, ","                        {value:   8,     name: \"Aštuonios\"  },","                        {value:   9,     name: \"Devynios\"   },","                        {value:  11,     name: \"Vienuolika\" },","                        {value:  12,     name: \"Dvylika\"    },","                        {value:  13,     name: \"Pirma\"      } ];","        ","    vm.tenHours = {value:  10,     name: \"Dešimt\"   };","    vm.five =   {value:  5,     name:  \"Penkios\"    };","","    vm.hoursPastZero = [ {value:  1,     name: \"Pirmos\"     }, ","                    {value:  2,     name: \"Dviejų\"      }, ","                    {value:  3,     name: \"Trijų\"       }, ","                    {value:  4,     name: \"Keturių\"     }, ","                    {value:  5,     name: \"Penkių\"      },  ","                    {value:  6,     name: \"Šešių\"       }, ","                    {value:  7,     name: \"Septynių\"    }, ","                    {value:  8,     name: \"Aštuonių\"    },","                    {value:  9,     name: \"Devynių\"     },","                    {value:  11,    name: \"Vienuolikos\" },","                    {value:  12,    name: \"Dvylikos\"    },","                    {value:  13,    name: \"Pirmos\"      }  ];  ","","    vm.till = \"Be\";","    vm.after = \"Po\";","    ","    vm.fivetill = \"Penkių\";","    vm.ten = \"Dešimt\";","    vm.quarter = \"Penkiolikos\";","    vm.fifteen = \"Penkiolika\";","    vm.twenty = \"Dvidešimt\";","    vm.half = \"Pusė\";","    vm.afterhalf = \"Pusės\";","","    vm.hour = \"Valanda\";","    vm.hours = \"Valandos\";","    vm.morehour = \"Valandų\";","","//classes","    vm.showClassName = 'active';","    vm.hiddenClassName = 'passive';","    ","    vm.changeClass = function(){","        if (vm.showClassName != \"active\"){","            vm.showClassName = \"active\";","            vm.hiddenClassName = \"passive\";","          } else {","            vm.showClassName = \"visible\";","            vm.hiddenClassName = \"hidden\";","          }","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":1},"end":{"row":12,"column":4},"action":"remove","lines":["","","    ","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":1},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":46},"end":{"row":6,"column":0},"action":"insert","lines":["","    ",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":72,"column":6},"action":"insert","lines":["    var vm = this;","","//timelt","    vm.init = $interval(function(){","        vm.input = new Date();","        vm.currHours = $filter('date')(vm.input, 'HH');","        vm.currMins = $filter('date')(vm.input, 'mm');","        vm.currSecs = $filter('date')(vm.input, 'ss');","    },100 );","","// datalt","    vm.hoursPastHalf= [ {value:   1,     name: \"Pirma\" }, ","                        {value:   2,     name: \"Dvi\"        }, ","                        {value:   3,     name: \"Trys\"       }, ","                        {value:   4,     name: \"Keturios\"   }, ","                        {value:   6,     name: \"Šešios\"     }, ","                        {value:   7,     name: \"Septynios\"  }, ","                        {value:   8,     name: \"Aštuonios\"  },","                        {value:   9,     name: \"Devynios\"   },","                        {value:  11,     name: \"Vienuolika\" },","                        {value:  12,     name: \"Dvylika\"    },","                        {value:  13,     name: \"Pirma\"      } ];","        ","    vm.tenHours = {value:  10,     name: \"Dešimt\"   };","    vm.five =   {value:  5,     name:  \"Penkios\"    };","","    vm.hoursPastZero = [ {value:  1,     name: \"Pirmos\"     }, ","                    {value:  2,     name: \"Dviejų\"      }, ","                    {value:  3,     name: \"Trijų\"       }, ","                    {value:  4,     name: \"Keturių\"     }, ","                    {value:  5,     name: \"Penkių\"      },  ","                    {value:  6,     name: \"Šešių\"       }, ","                    {value:  7,     name: \"Septynių\"    }, ","                    {value:  8,     name: \"Aštuonių\"    },","                    {value:  9,     name: \"Devynių\"     },","                    {value:  11,    name: \"Vienuolikos\" },","                    {value:  12,    name: \"Dvylikos\"    },","                    {value:  13,    name: \"Pirmos\"      }  ];  ","","    vm.till = \"Be\";","    vm.after = \"Po\";","    ","    vm.fivetill = \"Penkių\";","    vm.ten = \"Dešimt\";","    vm.quarter = \"Penkiolikos\";","    vm.fifteen = \"Penkiolika\";","    vm.twenty = \"Dvidešimt\";","    vm.half = \"Pusė\";","    vm.afterhalf = \"Pusės\";","","    vm.hour = \"Valanda\";","    vm.hours = \"Valandos\";","    vm.morehour = \"Valandų\";","","//classes","    vm.showClassName = 'active';","    vm.hiddenClassName = 'passive';","    ","    vm.changeClass = function(){","        if (vm.showClassName != \"active\"){","            vm.showClassName = \"active\";","            vm.hiddenClassName = \"passive\";","          } else {","            vm.showClassName = \"visible\";","            vm.hiddenClassName = \"hidden\";","          }","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":53},"end":{"row":78,"column":54},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":53},"end":{"row":78,"column":54},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"remove","lines":["    "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":18},"end":{"row":6,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1426855443546,"hash":"65b279ad50d40a914d36e9843f890a0fbb95f82c"}