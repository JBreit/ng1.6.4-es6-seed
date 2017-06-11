import angular from 'angular';
import Masthead from './masthead/masthead'; 
import Navbar from './navbar/navbar.module';
import Version from './version/version.module';

const CommonModule = angular.module('app.common', [Masthead, Navbar, Version]).name;

export default CommonModule;
