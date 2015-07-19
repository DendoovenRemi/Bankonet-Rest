"use strict"

angular.module("client-rest")
.factory("EmployesService", function($http){
	var apiUrl = "http://localhost:8080/bankonet-rest/api/employes";
	return{
		getEmployes : function(){
			return $http.get(apiUrl)
			.then(function(response){
				return response.data;
			})		
		},

		getEmployedById : function(id){
			return $http.get(apiUrl + "/" + id)
			.then (function(response){
				return response.data;
			})
		},

		addEmploye : function(employe){
			return $http.post.(apiUrl, employe)
		}
	}
})