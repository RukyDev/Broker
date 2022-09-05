var formApp = angular.module('app', []);
var tablePaceholder = '.ph-calculater';
var bType = 'lastChance';
var cmsJsonData = JSON.parse('{"bonuses":{"lastChance":[{"amount":200,"bonus":0.2},{"amount":10001,"bonus":1}]}}');
var minDeposit = 200;
var maxDeposit = 10001;

// hide calculator if FR IP
jQuery(function ($) {
    if ($(tablePaceholder).length > 0) {
        $('.dynamicBonusTable').appendTo(tablePaceholder);
    }
    try {
        regionObj.data.selectedCountryId != "74" ? $('.dynamicBonusTable').fadeIn() : "";
    }
    catch (e) {
        $('.dynamicBonusTable').fadeIn();
    }
});

(function (angular) {
    'user strict';
    formApp.controller('calculateController', ['$scope', '$http', function ($scope, $http) {
        $scope.showNextBonus = false;
        $scope.showErr = false;
        $scope.data = {};
        $scope.data.currency = "$";
        $scope.data.bonus = 0;
        $scope.data.nextBonus = 0;
        $scope.promotionEndDateTime = "";
        $scope.data.nextAmount = 0;
        $scope.getBtData = function () {
            if (typeof cmsJsonData === "object" && typeof cmsJsonData.bonuses.lastChance !== "undefined") {
                return cmsJsonData.bonuses.lastChance;
            }
        };
        $scope.bonuses = $scope.getBtData();
        $scope.showResult = function () {
            if ($scope.data.bonus > 0) { return true; }
            else { return false; }
        }
        $scope.calculate = function (e) {
            //  e.preventDefault();
            $scope.showNextBonus = false;
            $scope.showMaxBonusMess = false;   
            $scope.showErr = false;
            // Show minimum deposit error message
            if ($scope.data.amount < $scope.bonuses[0].amount || $scope.data.amount == null || $scope.data.amount == "") {
                $scope.data.bonus = 0;
                $scope.showErr = true;
                return;
            }
            // Show Max deposit  message //more then MAX
            else if ($scope.data.amount >= $scope.bonuses[$scope.bonuses.length - 1].amount) {
                $scope.showNextBonus = false;   
                $scope.showMaxBonusMess = true;   
                $scope.data.bonus = 0;
                //console.log("Max bonus " + $scope.bonuses[$scope.bonuses.length - 1].bonus + " : " + $scope.bonuses[$scope.bonuses.length - 1].amount);
                
            }
            else {
                //250 - 99,999
                var i = $scope.bonuses.length - 1
                for ( i ; i >= 0; i--) {
                    if ($scope.data.amount >= $scope.bonuses[i].amount) {
                        $scope.data.bonus =  $scope.data.amount * $scope.bonuses[i].bonus;
                        //$scope.showNextBonus = true;  
                        break;
                    }
                }
            }
        };

    }]);
})(window.angular); 