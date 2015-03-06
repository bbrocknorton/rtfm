var app = angular.module('rtfmApp', []);

app.config(function($httpProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');
});