# Interview Scheduler
A single page scheduler app by Robert Di Ninno at Lighthouse Labs - June 2022.
Book an appointment between 12pm and 5pm Monday to Friday with this handy app. Select from a range of interviewers for the appointment. User can book, edit, and delete their own appointments.

Built using React, Node, Sass, Javascript

## Setup

Install dependencies with `npm install`.
    "axios": "^0.27.2",
    "chokidar": "^3.5.3",
    "classnames": "^2.2.6",
    "fsevents": "^1.2.11",
    "node-sass": "npm:sass@^1.52.3",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.0.0"

## Running Webpack Development Server


connect to postgreSQL data base with psql -U development. username: development, pass: development.

```sh
npm start
```
on your server
## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots

!['appointment home'](https://github.com/rdininno/scheduler/blob/main/docs/appointment_home_page.png)
!['appointment hover'](https://github.com/rdininno/scheduler/blob/main/docs/appointment_hover.png)
!['add new appointment'](https://github.com/rdininno/scheduler/blob/main/docs/add_new_appointment.png)
!['appointment added'](https://github.com/rdininno/scheduler/blob/main/docs/appointment_added.png)
!['appointment delete confirm'](https://github.com/rdininno/scheduler/blob/main/docs/appointment_delete_confirmation.png)