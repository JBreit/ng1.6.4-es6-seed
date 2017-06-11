import angular from 'angular';
import Authentication from './authentication/authentication.service.module';


const ServicesModule = angular.module(
  'app.services',
  [
    Authentication,
  ],
).name;

export default ServicesModule;
