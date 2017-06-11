import angular from 'angular';

const Interpolate = (version) => {
  return (text) => {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
};

Interpolate.$inject = ['version'];

const interpolateFilter = angular.module('version.interpolate.filter', [])
  .filter('interpolate', Interpolate)
  .name;

export default interpolateFilter;
