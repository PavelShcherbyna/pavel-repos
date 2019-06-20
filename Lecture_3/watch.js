class Watch {
  constructor() {
    this.interval = null;
  }

  start() {
    
    var timer = setInterval(function() {
      let date = new Date();
      console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }, 1000);
    
  }

  stop() {
    clearInterval();
    console.clear();
    
  }
}

const watch = new Watch();

watch.start();


setTimeout(() => {
  // Остановится через 10 секунд
  watch.stop();
}, 10000);
