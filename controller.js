var clockoutApp = angular.module('clockoutApp', []);

clockoutApp.controller('ClockCtrl', function ($scope) {

	$scope.calculate = function (_timeIn, _hours) {
		if(_timeIn, _hours) {
			var timeArray, hour, minutes, totalTime, timeLeft, hoursWorked; 
			
			timeLeft = 40 - _hours;

			timeArray = _timeIn.split(":");
			
			hour = timeArray[0];
			minutes = timeArray[1];

			totalTime = (hour * 60) + minutes;

			$scope.message = totalTime;
			
			alert(timeLeft);
		}
	}

	var process = function() {
		return 3;
	}
	$scope.display = function() {
		return this.message;	
	}
});
