import angular from 'angular';
import Interpolate from './version.interpolate.filter';
import Version from './version.directive';

const versionModule = angular.module('version', [Interpolate, Version])
  .value('version', '1.0.0')
  .name;

export default versionModule;
