const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const monthYear = document.getElementById('monthYear');
const calendarDays = document.querySelector('.calendar-days');

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function updateCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  
  monthYear.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${currentYear}`;

  calendarDays.innerHTML = '';

  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('calendar-day');
    calendarDays.appendChild(emptyDay);
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const calendarDay = document.createElement('div');
    calendarDay.classList.add('calendar-day');
    calendarDay.textContent = i;
    calendarDays.appendChild(calendarDay);
  }
}

prevBtn.addEventListener('click', () => {
  if (currentMonth > 0) {
    currentMonth--;
  } else {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

nextBtn.addEventListener('click', () => {
  if (currentMonth < 11) {
    currentMonth++;
  } else {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
});

updateCalendar();
