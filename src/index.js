import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

const axios = require("axios");

document.addEventListener("DOMContentLoaded", function () {

    // Create calendar
    var calendarEl = document.getElementById("calendar");
    var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: function (info) {
            // Get the clicked date
            let date = new Date(info.dateStr + 'T00:00:00');

            // Send request to the API
            axios({
                method: "get",
                url: "https://datazen.katren.ru/calendar/day/" + date.toDateString() + "/"
            })
            .then(res => {
                let isholiday = res.data.holiday;
                console.log(isholiday);
            })
            .catch(err => console.error(err));
        },
    });

    calendar.render();
});
