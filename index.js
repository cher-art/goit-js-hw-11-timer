let timer = document.querySelector('#timer-1');
let days = document.querySelector('.value[data-value="days"]');
let hours = document.querySelector('.value[data-value="hours"]');
let mins = document.querySelector('.value[data-value="mins"]');
let secs = document.querySelector('.value[data-value="secs"]');

class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate
  }



}








new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});





// let date = new Date('Oct 01 2020 00:00:00').getTime();
// let p = document.querySelector('.eventday');

// let currentTime = new Date().getTime();
// console.log(currentTime);

// let expirationDate = setInterval(() => {
//   let currentTime = new Date().getTime()
//   let distance = date - currentTime;

//   let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//   let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//   let seconds = Math.floor(distance %(1000 * 60) / (1000));

//   p.textContent = `${day}d, ${hours}h, ${minutes}min, ${seconds}sec`;

//   if(distance < 0){
//     clearInterval(expirationDate);
//     p.textContent = 'Потрачено'
//   };
// }, 1000);







// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

