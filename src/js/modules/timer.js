const timer = (id, deadline) => {
  const getTime = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date()),
      // seconds = Math.floor((time/1000) % 60),
      // minutes = Math.floor((time/1000/60) % 60),
      // hours = Math.floor((time/(1000 * 60 * 60)) % 24),
      // days = Math.floor((time/(1000 * 60 * 60 * 24)));

      seconds = Math.floor((time / 1000) % 60), //  колл. минут, остаток в секундах
      minutes = Math.floor((time / 1000 / 60) % 60), // колл. часов, остаток в минутах
      hours = Math.floor((time / 1000 / 60 / 60) % 24), // колл. суток, остаток в часах
      days = Math.floor((time / 1000 / 60 / 60) / 24); // подсчитали колл.суток полное колличество часов поделили на 24

    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  };

  const setTime = (selector, endtime) => {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTime(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      };
    };
  };

  function addZero(num) {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  setTime(id, deadline);

};

export default timer;