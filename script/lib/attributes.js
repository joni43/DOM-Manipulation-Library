export const val = function (newVal) {
  return newVal !== undefined
    ? (this.element.value = newVal)
    : this.element.value;
};
