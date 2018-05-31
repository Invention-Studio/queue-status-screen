(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function Clock(weekdaySelector, dateSelector, timeSelector) {
    if (!weekdaySelector) {
        throw new Error('Missing selector');
    }

    this.$weekdayElement = $(weekdaySelector);
    if (this.$weekdayElement.length === 0) {
      throw new Error('Could not find element with selector: ' + weekdaySelector);
    }

    if (!dateSelector) {
        throw new Error('Missing selector');
    }

    this.$dateElement = $(dateSelector);
    if (this.$dateElement.length === 0) {
      throw new Error('Could not find element with selector: ' + dateSelector);
    }


    if (!timeSelector) {
        throw new Error('Missing selector');
    }

    this.$timeElement = $(timeSelector);
    if (this.$timeElement.length === 0) {
      throw new Error('Could not find element with selector: ' + timeSelector);
    }
  };

  Clock.prototype.update = function() {
    console.log("update clock");
  }

  App.Clock = Clock;
  window.App = App;

}) (window);
