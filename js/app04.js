var app = angular.module('app04',[]);

app.factory("myFirstFactory",function(){
	return{
		name: "my first angular factory"
	};
});

app.factory("secondfactory",function($http, $q){
	return loadtimeout = function(){
		 
		var defobj = $q.defer();
		$http.get("data.json").success(function(data){
			defobj.resolve({
				data:data
			})
			
		}).error(function(data){
			defobj({
				data:false
			})
			
		});
		return defobj.promise;
	}
}) 
app.controller("Controller1",function($scope,$timeout, myFirstFactory, secondfactory){
	$scope.name = myFirstFactory.name;
	
	var result = secondfactory();
	result.then(function(output){
		$scope.objectArray = output.data
		$timeout($scope.loadtimeout, 5000)
	})
});
/* 
app.controller("Controller1",function($scope, $timeout ){
	$scope.loadtimeout = function(){
			$scope.objectArray= [{
		"name":"Ali Souilhi",
		"Gender":"male", 
		"email":"siteProgali@gmail.com" ,
		"inscriptionDate": "12/01/2016" 
	}]
	}
	
	$timeout($scope.loadtimeout, 5000);
}); */