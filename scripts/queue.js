(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function Queue(selector) {
    if (!selector) {
        throw new Error('No selector provided');
      }

      this.$element = $(selector);
      if (this.$element.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
      }
  };

  Queue.prototype.updateQueue = function(queue) {
    this.$element.find('.queue-entry').remove();

    if (queue.length > 0) {
      queue.sort(function (a, b) {
        return a.position - b.position;
      });
      queue.forEach(function(entry) {
        var $newEntry = new Entry(entry).$element;
        this.$element.append($newEntry);
      }.bind(this));
    } else {
      var $div = $('<div></div>', {
        'class': 'queue-entry'
      });
      $div.append("No Queue");
      this.$element.append($div);
    }
  };

  function Entry(queueEntry) {
    var $div = $('<div></div>', {
      'class': 'queue-entry'
    });

    var description = queueEntry.position + ". " + queueEntry.userName;
    $div.append(description);

    this.$element = $div;
  };

  App.Queue = Queue;
  window.App = App;

}) (window);
