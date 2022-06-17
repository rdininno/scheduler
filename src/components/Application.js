import React, { useState, useEffect } from "react";
import Axios from 'axios';

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointments";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = day => setState({ ...state, day });
  let dailyAppointments = [];

  const appointmentArray = getAppointmentsForDay(state, state.day).map(appointment => {
    const interview = getInterview(state, appointment.interview)

    return (
      <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      />
    )
  })

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"), //days - id, name of day, appointments array, interviewers array
      axios.get("/api/appointments"), //appointments id, time, interview object with interviewer id and student name
      axios.get("/api/interviewers") // interviewers id, name, avatar
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />

        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {appointmentArray}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
