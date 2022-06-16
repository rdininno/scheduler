export function getAppointmentsForDay(state, day) {
  let appointmentArray = [];

  for (let weekday of state.days) {
    if (weekday.name === day)
      for (let appointmentId of weekday.appointments) {
        if (appointmentId === state.appointments[appointmentId].id) {
          appointmentArray.push(state.appointments[appointmentId]);
        }
      }
  }
  return appointmentArray;
}
