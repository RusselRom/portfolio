'use strict';


// Declare app level module which depends on filters, and services
angular.module('Manage', [
        'ngRoute',
        'Manage.filters',
        'Manage.services',
        'Manage.directives',
        'Manage.controllers'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/albums', {templateUrl: '/assets/templates/albums_manage.html', controller: 'AlbumsManage'});
        $routeProvider.when('/photos', {templateUrl: '/assets/templates/photos_manage.html', controller: 'PhotosManage'});
        $routeProvider.otherwise({redirectTo: '/albums'});
    }]);