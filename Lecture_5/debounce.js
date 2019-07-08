
/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function debounce(callback, time) {
  return function (args) {
  	let previousCall = this.lastCall;
  	this.lastCall = Date.now();
  	if (previousCall && ((this.lastCall - previousCall) <= time)) {
  		clearTimeout(this.lastCallTimer);
  	}
  	this.lastCallTimer = setTimeout(() => callback(args), time);
  }
}
let logger = (args) => console.log('My args are ${args}');
let debouncedLogger = debounce(logger, 2000);

debouncedLogger([1, 2, 3]);
debouncedLogger([4, 5, 6]);
debouncedLogger([7, 8, 9]);
