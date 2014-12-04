/**
 * Created by Iulian.Pelin on 11/26/2014.
 */
var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/shop',{
                templateUrl:'templates/shop.html',
                controller: 'shopController'
            })
            .otherwise({
                redirectTo : '/shop'
            })

    }]);
