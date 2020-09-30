
const ref = {
  day: document.querySelector(".value[data-value='days']"),
  hour: document.querySelector(".value[data-value='hours']"),
  min: document.querySelector(".value[data-value='mins']"),
  secs: document.querySelector(".value[data-value='secs']"),
  timer: document.querySelector('#timer-1')
};

class CountdownTimer{
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;
  }

  updateClockface() {
    setInterval(() => {
      const startTime = new Date().getTime();
      let time = this.targetDate - startTime;

      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));


      ref.day.textContent = `${days}`;
      ref.hour.textContent = `${hours}`;
      ref.min.textContent = `${mins}`;
      ref.secs.textContent = `${secs}`;

      if(time < 0){
        ref.timer.textContent = "Finish";
      }
    }, 1000);
  }

   pad(value) {
    return String(value).padStart(2, "0");
  }


}


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2020'),
}).updateClockface();


