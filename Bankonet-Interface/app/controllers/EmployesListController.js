"use strict"

angular.module("client-rest")
.controller("EmployesListController", function(EmployesService) {
	var employesList = this;

	employesList.fetchEmployes = function() {
		EmployesService.getEmployes()
		.then(function(employes) {
			employesList.list = employes;
		})
	}
	})