import flatpickr from "flatpickr";
    import "flatpickr/dist/flatpickr.min.css";

    const myInput = document.querySelector("#datetime-picker");
    const options = {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate <= new Date()) {
          window.alert("Please choose a date in the future");
        } else {
          const startButton = document.querySelector('[data-start]');
          startButton.removeAttribute('disabled');
        }
      },
    };

    const flatpickrInstance = flatpickr(myInput, options);

    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }

    function addLeadingZero(value) {
      return value.toString().padStart(2, '0');
    }

    const startButton = document.querySelector('[data-start]');
    const timer = document.querySelector('.timer');
const timerStyles = `

  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
`;


timer.setAttribute('style', timerStyles);

    startButton.addEventListener('click', () => {
      const selectedDate = flatpickrInstance.selectedDates[0];

      const timerInterval = setInterval(() => {
        const currentDate = new Date();
        const timeDiff = selectedDate - currentDate;

        if (selectedDate <= currentDate) {
          window.alert("Please choose a date in the future");
          clearInterval(timerInterval);
        } else {
          const timeObj = convertMs(timeDiff);

          document.querySelector('[data-days]').textContent = addLeadingZero(timeObj.days);
          document.querySelector('[data-hours]').textContent = addLeadingZero(timeObj.hours);
          document.querySelector('[data-minutes]').textContent = addLeadingZero(timeObj.minutes);
          document.querySelector('[data-seconds]').textContent = addLeadingZero(timeObj.seconds);

          if (timeDiff <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time's up!";
          }
        }
      }, 1000);
    });
    
