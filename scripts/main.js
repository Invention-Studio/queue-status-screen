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

  inventionStudioApi.getQueue(function(response) {
    console.log(response);
    var entryArray = Object.keys(response);

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
    queueWaterjet.updateQueue(entriesLaserCutters);
    queueWaterjet.updateQueue(entriesWaterjet);
  });

}) (window);
