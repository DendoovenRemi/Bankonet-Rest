"use strict"

angular.module("client-rest")
.controller("EmployeController", function(EmployesService) {
	var employe = this;
	employe.emp = null;
	employe.id = 0;

	employe.getEmployeById = function() {
		EmployesService.getEmployeById(employe.id)
		.then(function(employeGet) {
			employe.emp = employeGet;
		})
	}
})