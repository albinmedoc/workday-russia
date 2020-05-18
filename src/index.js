import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

document.addEventListener("DOMContentLoaded", function() {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ]
  });

  calendar.render();
});