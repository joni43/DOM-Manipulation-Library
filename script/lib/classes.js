/**
 * Module Dependencies
 */

/**
 * Add the given class `name`.
 *
 * @param {String} name
 *
 */

export const addClass = function (className) {
  this.each(function (item) {
    item.classList.add(className);
  });
  return this;
};

/**
 * Remove the given class `name`.
 *
 * @param {String|RegExp} name
 *
 */

export const removeClass = function (className) {
  this.each(function (item) {
    item.classList.remove(className);
  });
  return this;
};
