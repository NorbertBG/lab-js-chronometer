class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
  
    this.intervalId = setInterval(() => {
      this.currentTime ++;
     if (printTimeCallback) {
      printTimeCallback()
     }
    }, 1000);

  }

  getMinutes() {
    
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {

    let seconds = Math.floor(this.currentTime % 60);
    return seconds
  }

  computeTwoDigitNumber(value) {
   if (value < 10) return ('0' + value);
    return `${value}`
  };

  stop() {
    clearInterval(this.intervalId) 
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}

