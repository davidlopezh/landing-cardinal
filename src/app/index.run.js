(function() {
  'use strict';

  angular
    .module('landingCardinal')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
