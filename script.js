(function () {
  'use strict';

  var SNOW_COUNT = 300; // # of snow
  var SIZE_COUNT = 4;
  var MAX_DURATION = 30; // max duration in seconds
  var MIN_DURATION = 5; // min duration in seconds
  var snowGroup = [];
  var $snowfall = document.getElementById('snowfall');

  for (var i=0; i<SNOW_COUNT; i++) {
    var $snow = document.createElement('div');
    var xpos = Math.round(Math.random() * 200);
    var snowSize = Math.floor(Math.random() * SIZE_COUNT) + 1;
    var speed = 1000 * (Math.random() * (MAX_DURATION / snowSize));
    speed = Math.max(speed, MIN_DURATION * 1000);
    $snow.classList.add('snow');
    $snow.classList.add('snow--' + snowSize);
    $snowfall.appendChild($snow);
    snowGroup.push(new KeyframeEffect($snow, [
      {transform: 'translate3d(' + xpos + 'vw, 0, 0)'},
      {transform: 'translate3d(' + (xpos - 100) + 'vw, 100vh, 0)'}
    ], {delay: Math.random() * -speed, duration: speed, iterations: 1000}));
  }
  var snowfallAnim = new GroupEffect(snowGroup, {iterations: Infinity});
  document.timeline.play(snowfallAnim);
})();
