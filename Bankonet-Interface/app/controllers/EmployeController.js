"use strict"

angular.module("client-rest")
.controller("EmployeController", function(EmployeService){
	var employe = this;
	employe.emp = null;
	employe.id = 0;

	employe.getEmployeById = function(){
		EmployeService.getEmployeById(employe.id)
		.then(function(employeGet){
			employe.emp = employeGet;
		})
	}
})