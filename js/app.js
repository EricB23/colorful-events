'use strict';
const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach((form) => {
  form.addEventListener(
    'submit',
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    },
    false
  );
});
function submitForm() {
  alert('Form Submitted');
}

const midnightObject = {
  eventName: 'Midnight Club on Bell Road',
  eventDate: new Date('Oct 31, 2023 12:00:00').getTime(),
  timerCountDown: function () {
    const now = new Date().getTime();
    const distance = this.eventDate - now;

    if (distance < 0) {
      clearInterval(this.setTimer);
      document.getElementById('timer').innerHTML = 'Event has started';
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  },

  setTimer: setInterval(function () {}, 1000),
};
function EventDetails(name, date, time, location) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.location = location;
}
const dragRaceEvent = new EventDetails(
  'dragRaceEvent',
  '10/31/23',
  '12:00pm',
  'webex'
);
const carShowEvent = new EventDetails(
  'carShowEvent',
  '11/7/23',
  '12:00pm',
  'webex'
);
const showroomEvent = new EventDetails(
  'showroomEvent',
  '11/14/23',
  '12:00pm',
  'webex'
);
Events.push(dragRaceEvent);
Events.push(carShowEvent);
Events.push(showroomEvent);

const searchForm = document.getElementById('searchform');
searchForm.addEventListener('submit', filterByType);

function filterByType(e) {
  e.preventDefault();
  console.log(e);
  let searchTerm = document.getElementById('searchbar').value;
  console.log(searchTerm);
  console.log(Events);
  const filtered = Events.filter(function (element) {
    return element.name == searchTerm;
  });
  console.log(filtered);
  return filtered;
}
