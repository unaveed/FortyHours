var clockoutApp = angular.module('clockoutApp', []);

clockoutApp.controller('ClockCtrl', function ($scope) {

	$scope.calculate = function (_timeIn, _hours) {
		if(_timeIn, _hours) {
			var timeArray, hour, minutes, totalTime, timeLeft, hoursWorked; 
			
			timeLeft = 40 - _hours;
			
			timeArray = _timeIn.split(":");
			
			hour = timeArray[0];
			minutes = timeArray[1];
			
			$scope.message = 'You should clock out at: ' + calculateTime(timeLeft, hour, minutes) + 'PM';
			//$scope.message = 'hahahah';
		}
	};
	
	var calculateTime = function(timeLeft, hour, minutes) {
		
		var check = timeLeft.toString().indexOf(".");

		if(check === -1) {	
			console.log('Made it here');
			hour += timeLeft;
			hour = hour % 12;
			return (hour + ':' + minutes);
		}
		else {
			var accumulatedTimeArray, hrs, tempMin,  min; 

			accumulatedTimeArray = timeLeft.toString().split('.');
			
			hrs = (accumulatedTimeArray[0]);
			tempMin = accumulatedTimeArray[1];

			tempMin = "0." + tempMin;

			min = parseFloat(tempMin);

			console.log('Tempmin: ' + tempMin);
			min = (min * 60);
			
			hour = +hour + +hrs; 
			minutes = (+minutes + +min);
			
			if(minutes > 59) {
				hour++;
				minutes = 60 - +minutes;
			}

			if(minutes < 10) {
				console.log('True statement');
				minutes = "0" + minutes;
			}
			
			return ((hour % 12) + ':' + parseInt(minutes)); 
		}
	
	};
	
	$scope.display = function() {
		return this.message;	
	};
});
