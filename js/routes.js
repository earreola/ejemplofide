angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('clientes', {
    url: '/page1',
    templateUrl: 'templates/clientes.html',
    controller: 'clientesCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('puntos', {
    url: '/page5',
    templateUrl: 'templates/puntos.html',
    controller: 'puntosCtrl'
  })

  .state('clientes2', {
    url: '/page6',
    templateUrl: 'templates/clientes2.html',
    controller: 'clientes2Ctrl'
  })

$urlRouterProvider.otherwise('/page4')

  

});