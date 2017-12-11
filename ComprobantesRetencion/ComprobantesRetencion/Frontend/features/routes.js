(function () {
  angular.module('lab.features')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(false).hashPrefix('');
      $routeProvider
        .when('/', {
          templateUrl: './features/emergencia/emergenciaForm.html',
          controller: 'EmergenciaCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/transfusion', {
          templateUrl: './features/transfusion/transfusionList.html',
          controller: 'TransfusionesCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/transfusion/:id', {
          templateUrl: './features/transfusion/transfusionForm.html',
          controller: 'TransfusionCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/visar', {
          templateUrl: './features/visar/visarList.html',
          controller: 'VisarListCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/visar/:id', {
          templateUrl: './features/visar/visarForm.html',
          controller: 'VisarCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/externa', {
          templateUrl: './features/externa/externaList.html',
          controller: 'ExternaListCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/externa/:id', {
          templateUrl: './features/externa/externaForm.html',
          controller: 'ExternaCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        })
        .when('/reportes', {
          templateUrl: './features/reportes/reporteForm.html',
          controller: 'ReporteCtrl',
          resolve: {
            permissions: function () {
              return true;
            }
          }
        });
    }]);
})();
