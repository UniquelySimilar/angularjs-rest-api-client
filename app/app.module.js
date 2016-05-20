var restApiClientApp = angular.module('restApiClientApp', ['ngRoute']);

// add an http interceptor
restApiClientApp.config(function($httpProvider) {
    $httpProvider.interceptors.push('http401interceptor');
});

