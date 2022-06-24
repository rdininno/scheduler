import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"), //days - id, name of day, appointments array, interviewers array
      axios.get("/api/appointments"), //appointments id, time, interview object with interviewer id and student name
      axios.get("/api/interviewers"), // interviewers id, name, avatar
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = (day) => setState({ ...state, day });

  function updateSpots(isBooking, isEditting) {
    const updatedDays = state.days.map((day) => {
      const spots = isBooking ? day.spots - 1 : day.spots + 1;

      return {
        ...day,
        spots: day.name === state.day && !isEditting ? spots : day.spots,
      };
    });

    return updatedDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const isEditting = state.appointments[id].interview !== null;
      const days = updateSpots(true, isEditting);

      setState({
        ...state,
        appointments,
        days,
      });
    });
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const days = updateSpots();

      setState({
        ...state,
        days,
      });
    });
  }

  

  const dataObject = {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };

  return dataObject;
}
