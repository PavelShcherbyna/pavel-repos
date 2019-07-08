/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function throttle(callback, time) {
  return function (args) {
  	let previousCall = this.lastCall;
  	this.lastCall = Date.now();
  	if (previousCall === undefined || (this.lastCall - previousCall) > time) {
  		callback(args);
  	}
  }
}

let logger = (args) => console.log('My args are ${args}');
let throttledLogger = throttle(logger, 2000);

throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);