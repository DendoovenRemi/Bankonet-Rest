"use strict"

angular.module("client-rest")
.controller("CreateEmployeController", function(EmployesService, $location) {
	var createEmploye = this;

	createEmploye.addEmploye = function(form) {
		if (form.$invalid) return;
		var clone = angular.copy(createEmploye.emp);
		EmployesService.addEmploye(clone)
		.then(function() {
			$location.path("/");
		})
	}
})