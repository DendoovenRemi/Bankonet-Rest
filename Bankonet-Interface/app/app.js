"use strict"

angular.module("client-rest", ["ngRoute"])
.value("version", "1.0")

.config(function($routeProvider) {
	$routeProvider
	.when("/employeslist", {
		templateUrl: "views/employeslist.html",
		controller: "EmployesListController",
		controllerAs: "employesList"
	})

	.when("/employe", {
		templateUrl: "views/employe.html",
		controller: "EmployeController",
		controllerAs: "employe"
	})

	.when("/createEmploye", {
		templateUrl: "views/createEmploye.html",
		controller: "CreateEmployeController",
		controllerAs: "createEmploye"
	})

	.otherwise({
		redirectTo: "/"
	})
})