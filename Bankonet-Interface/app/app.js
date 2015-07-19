"use strict"
angular.module("client-rest", ["ngRoute]")

.config(function($routeProvider){
	$routeProvider
	.when("/employelist",{
		templateUrl : "views/employelist.html",
		controller: "EmployesListController",
		controllerAs : "employeslist"

	})

	.when("/employe",{
		templateUrl : "views/employe.html",
		controller: "EmployeController",
		controllerAs : "employe"

	})
	.when("/createEmploye",{
		templateUrl : "views/createEmploye.html",
		controller: "CreateEmployeController",
		controllerAs : "createEmploye"

	})
	.otherwise({
		redirectTo: "/"
	})

})