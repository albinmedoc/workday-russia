# Workday-russia
This is a website that lets you see which days are Russian working days. You can easily click on a day in the calendar, this will immediately show whether this is a working day or not.

## Installation
1. Download the project from github
    * `git clone https://github.com/albinmedoc/workday-russia`
2. Make sure you have node.js & npm installed on your machine.
    * You can find the download link [here](https://nodejs.org/en/download/).
3. Install dependencies.
    * Run `npm install` when you are in the root directory of the project.
4. Build the project
    * Run `node_modules/webpack-cli/bin/cli.js` if you are on Windows.
    * Run `webpack` on other OS.
    
## Usage
When the project has been built, you are all set. Open up the index.html file in the dist directory, choose your favorite browser.

A calendar will be shown on the screen. When you click on a date in the calendar you will get feedback if that is a russian workday or not. You can change month with the buttons on the top right. If you ever want to go back to today's date, you can click on the button that says "Idag".

## Built with
* [Node.js](https://nodejs.org/) - JavaScript runtime
* [FullCalendar](https://fullcalendar.io/) - JavaScript library to render and manipulate calendars.
* [Axios](https://github.com/axios/axios) - JavaScript library to send HTTP requests.
* [work_calendar](https://github.com/egno/work-calendar) - API to get russian workdays.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
