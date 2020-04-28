import { append, prepend, html, css, toggle } from '../lib/manipulate.js';
import { on, off } from '../lib/events.js';
import { val } from '../lib/attributes.js';
import { addClass, removeClass } from '../lib/classes.js';

export let $ = function () {
  var selectElement = function (selector) {
    this.selector = selector || null; // Selector targeting
    this.element = null; // DOM Element
    switch (this.selector[0]) {
      case '<':
        var matches = this.selector.match(/<([\w-]*)>/);
        if (matches === null || matches === undefined) {
          throw 'Invalid Selector / Node';
          return false;
        }
        var nodeName = matches[0].replace('<', '').replace('>', '');
        this.element = document.createElement(nodeName);
        break;
      default:
        this.element = document.querySelector(this.selector);
    }
  };

  selectElement.prototype.init = function () {
    switch (this.selector[0]) {
      case '<':
        var matches = this.selector.match(/<([\w-]*)>/);
        if (matches === null || matches === undefined) {
          throw 'Invalid Selector / Node';
          return false;
        }
        var nodeName = matches[0].replace('<', '').replace('>', '');
        this.element = document.createElement(nodeName);
        break;
      default:
        this.element = document.querySelector(this.selector);
    }
  };
  selectElement.prototype.on = on;
  selectElement.prototype.off = off;
  selectElement.prototype.val = val;

  selectElement.prototype.append = append;
  selectElement.prototype.prepend = prepend;

  selectElement.prototype.html = html;
  selectElement.prototype.css = css;
  selectElement.prototype.toggle = toggle;

  selectElement.prototype.addClass = addClass;
  selectElement.prototype.removeClass = removeClass;

  selectElement.prototype.each = function (callback) {
    this.elems = document.querySelectorAll(this.selector);

    if (!callback || typeof callback !== 'function') return;

    for (var i = 0; i < this.elems.length; i++) {
      callback(this.elems[i], i);
    }

    return this;
  };

  /**
   *   .attr(name, val) = (class,new-div) === <div class="new-div">
   *  Set attribute
   */

  selectElement.prototype.attr = function (name, value) {
    if (!value) return this.element.getAttribute(name);

    this.element.setAttribute(name, value);
    return this;
  };

  selectElement.prototype.eventHandler = {
    events: [],
    bindEvent: function (event, callback, targetElement) {
      // remove duplicate event
      this.unbindEvent(event, targetElement);
      targetElement.addEventListener(event, callback, false);
      this.events.push({
        type: event,
        event: callback,
        target: targetElement,
      }); // push new event into our event array
    },
    findEvent: function (event) {
      return this.events.filter(function (evt) {
        return evt.type === event;
      }, event)[0];
    },
    unbindEvent: function (event, targetElement) {
      let foundEvent = this.findEvent(event);

      if (foundEvent !== undefined) {
        targetElement.removeEventListener(event, foundEvent.event, false);
      }

      // update the event array
      this.events = this.events.filter(function (evt) {
        return evt.type !== event;
      }, event);
    },
  };
  /**
   * Instantiate a new constructor
   */
  var instantiate = function (selector) {
    return new selectElement(selector);
  };

  /**
   * Return the constructor instantiation
   */
  return instantiate;
};
