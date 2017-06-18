import angular from 'angular';
import Authentication from './authentication/authentication.service.module';
import User from './user/user.service.module';

const ServicesModule = angular.module('services', [Authentication, User]).name;

export default ServicesModule;
