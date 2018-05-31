(function (window) {
  'use strict';

  var SELECTOR_CLOCK_WEEKDAY = '#clock-weekday';
  var SELECTOR_CLOCK_DATE = '#clock-date';
  var SELECTOR_CLOCK_TIME = '#clock-time';
  var SELECTOR_3D_PRINTER_QUEUE = '#queue-3d-printers';
  var SELECTOR_LASER_CUTTER_QUEUE = '#queue-laser-cutters';
  var SELECTOR_WATERJET_QUEUE = '#queue-waterjet';

  var App = window.App;
  var Clock = App.Clock;
  var Queue = App.Queue;
  var InventionStudioApi = App.InventionStudioApi;

  var clock = new Clock(SELECTOR_CLOCK_WEEKDAY, SELECTOR_CLOCK_DATE, SELECTOR_CLOCK_TIME);
  var inventionStudioApi = new InventionStudioApi();
  var queue3dPrinters = new Queue(SELECTOR_3D_PRINTER_QUEUE);
  var queueLaserCutters = new Queue(SELECTOR_LASER_CUTTER_QUEUE);
  var queueWaterjet = new Queue(SELECTOR_WATERJET_QUEUE);

  updateAllQueues();

  window.setInterval(function() {
    clock.update();
  }, 1000);

  window.setInterval(function() {
    updateAllQueues();
  }, 15000);

  function updateAllQueues() {
    inventionStudioApi.getQueue(function(response) {
      var entryArray = $.parseJSON(response);

      var entries3dPrinters = [];
      var entriesLaserCutters = [];
      var entriesWaterjet = [];

      entryArray.forEach(function (entry) {
        if (entry.queueName == "3D Printers") {
          entries3queue3dPrinters.push(entry);
        } else if (entry.queueName == "Laser Cutter") {
          entriesLaserCutters.push(entry);
        } else if (entry.queueName == "Waterjet") {
          entriesWaterjet.push(entry);
        }
      });

      queue3dPrinters.updateQueue(entries3dPrinters);
      queueLaserCutters.updateQueue(entriesLaserCutters);
      queueWaterjet.updateQueue(entriesWaterjet);
    });
  }

}) (window);
