import angular from 'angular';
import InterpolateFilter from './version.interpolate.filter';
import VersionDirective from './version.directive';

const versionModule = angular.module('version', [InterpolateFilter, VersionDirective])
  .value('version', '1.0.0')
  .name;

export default versionModule;
