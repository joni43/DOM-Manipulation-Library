export const on = function (event, callback) {
  console.log(event);
  console.log(callback);
  let evt = this.eventHandler.bindEvent(event, callback, this.element);
  return evt;
};
export const off = (event) => {
  let evt = this.eventHandler.unbindEvent(event, callback, this.element);
};
