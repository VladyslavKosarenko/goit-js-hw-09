// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');


const result = {
  days: 4,
  hours: 3,
  minutes: 12,
  seconds: 34
};


timerDays.textContent = addLeadingZero(result.days);
timerHours.textContent = addLeadingZero(result.hours);
timerMinutes.textContent = addLeadingZero(result.minutes);
timerSeconds.textContent = addLeadingZero(result.seconds);