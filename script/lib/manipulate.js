/**
 * The .append() method inserts the specified content as the last child of each element in the  collection
 */

export const append = function (html) {
  console.log(html);
  this.element.innerHTML = this.element.innerHTML + html;
  return this;
};

/**
 * The .prepend() method inserts the specified content as the first child of each element in the  collection
 */

export const prepend = function (html) {
  this.element.innerHTML = html + this.element.innerHTML;
};

/**
 * Return element html.
 *
 * @return {String} html
 *
 */

export const html = function (html) {
  if (html === undefined) {
    return this.element.innerHTML;
  }
  this.element.innerHTML = html;
  return this;
};

/**
 * Get and set the css value
 *
 */

export const css = function (elem) {
  let camelCaseToDash = [];
  Array.isArray(elem)
    ? elem.map((element) => {
        camelCaseToDash.push(
          element.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
        );
        this.element.setAttribute('style', camelCaseToDash.join(' '));
      })
    : this.element.setAttribute('style', elem);

  return this;
};

export const toggle = function (selected, text, element) {
  const x = document.querySelector(selected);

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }

  return this;
};
