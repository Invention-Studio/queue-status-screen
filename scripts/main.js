(function (window) {
  'use strict';

  var SELECTOR_3D_PRINTER_QUEUE = '#queue-3d-printers';
  var SELECTOR_LASER_CUTTER_QUEUE = '#queue-laser-cutters';
  var SELECTOR_WATERJET_QUEUE = '#queue-waterjet';

  var App = window.App;
  var Queue = App.Queue;
  var InventionStudioApi = App.InventionStudioApi;

  var inventionStudioApi = new InventionStudioApi();
  var queue3dPrinters = new Queue(SELECTOR_3D_PRINTER_QUEUE);
  var queueLaserCutters = new Queue(SELECTOR_LASER_CUTTER_QUEUE);
  var queueWaterjet = new Queue(SELECTOR_WATERJET_QUEUE);

  queue3dPrinters.updateQueue([{position: 1, userName: "Nick Rupert"}, {position: 2, userName: "George Burdell"}]);
  inventionStudioApi.getQueue(function(response) {
    console.log(response);
  });

}) (window);
