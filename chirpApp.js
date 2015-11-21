var app = angular.module('chirpApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html', 
		controller: 'mainController'
	}).when('/login', { 
		templateUrl: 'login.html',
		controller: 'authController'
	}).when('/register', {
		templateUrl: 'register.html', 
		controller: 'authController'
	});
});

app.controller('mainController', function($scope) {
	$scope.posts = [];
	$scope.newPost = {criadoPor: '', texto: '', criadoEm: ''};
	
	$scope.post = function() {
		$scope.newPost.criadoEm = Date.now();	
		console.log($scope.newPost);
		$scope.posts.push($scope.newPost);
		console.log($scope.posts);
		$scope.newPost = {criadoPor: '', texto: '', criadoEm: ''};
	};
});

app.controller('authController', function($scope) {
	$scope.user = {nomeusuario: '', senha: ''};
	$scope.error_message='';
	
	$scope.login = function() {
		$scope.error_message = 'login request for '+ $scope.user.nomeusuario;
	};
	
	$scope.register = function() {
		$scope.error_message = 'registeration request for ' + $scope.user.nomeusuario;
	};
});