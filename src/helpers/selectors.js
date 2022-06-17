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

export function getInterview(state, interview) {
  let interviewObject = null;

  if(interview){
    if(state.interviewers[interview.interviewer].id === interview.interviewer){
      interviewObject = {
        ...interview,
        interviewer: state.interviewers[interview.interviewer]
      };
    }
  }

  return interviewObject;
}

export function getInterviewersForDay(state, day) {
  let interviewerArray = [];

  for (let weekday of state.days) {
    if (weekday.name === day)
      for (let interviewerId of weekday.interviewers) {
        if(interviewerId === state.interviewers[interviewerId].id){
          interviewerArray.push(state.interviewers[interviewerId]);
        }

      }
  }
  return interviewerArray;
}