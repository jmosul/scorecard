'use strict';

let demoApp = angular.module( 'ticketWidgetDemo', [
  'ngDMN.DmnUtils',
  'ngDMN.EnvironmentConfig',
]);

demoApp.service('APIInterceptor', [function() {
  this.request = (config) => {
    config.headers['X-DMN-APP-NAME'] = 'tonic_widget_demo';

    return config;
  };
}]);

demoApp.config([ '$httpProvider', function( $httpProvider ) {
  $httpProvider.interceptors.push( 'APIInterceptor' );
}]);

demoApp.config([ 'TonicWidgetConfig', function( TonicWidgetConfig ) {
  //TonicWidgetConfig.eventId = '5829f269d5c588302d207797'; // Hot Gin (qa)
  //TonicWidgetConfig.eventId = '57fe4f2fd5c5886d54b6e240'; // Ballie
  TonicWidgetConfig.eventId = '56a8e42d426ba14b0636419d'; // Canal
  // TonicWidgetConfig.eventId = '58789042c71620081a468c78'; // Six Nations
  TonicWidgetConfig.occurrence = '2017-03-05';
}]);

demoApp.controller( 'TicketWidgetDemoController', function( $scope, EnvironmentConfig ){
  EnvironmentConfig.setEnvironment( 'dev' );
});