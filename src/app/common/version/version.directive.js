import angular from 'angular';

const Version = (version) => {
  return (scope, elm, attrs) => {
    elm.text(version);
  };
};

Version.$inject = ['version'];

const versionDirective = angular.module('version.directive', [])
  .directive('appVersion', Version)
  .name;

export default versionDirective;
