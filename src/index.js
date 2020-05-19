// Import Fullcalendar & plugins for it
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// Import CSS for Fullcalendar & plugins
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

const axios = require("axios");

// When the document has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find the calendar element
    var calendarEl = document.getElementById("calendar");

    // Create calendar
    var calendar = new Calendar(calendarEl, {
        // Assign plugins
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: function (info) {
            // Get the clicked date
            let date = new Date(info.dateStr + "T00:00:00");

            // Send request to the API
            axios({
                method: "get",
                url:
                    "https://datazen.katren.ru/calendar/day/" +
                    date.toDateString() +
                    "/",
            })
                // 200 response
                .then((res) => {
                    let isholiday = res.data.holiday;
                    calendar.addEvent({
                        title: isholiday ? "Holiday" : "Not holiday",
                        start: date,
                        allDay: true,
                    });
                })
                // Catch error and console log it
                .catch((err) => console.error(err));
        },
    });
    // Render the calendar
    calendar.render();
});
