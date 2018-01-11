export function convertTimeToInt(time) {
  const hourAndMinutes = time.split(':');
  const hour = parseInt(hourAndMinutes[0], 10);
  const minute = parseInt(hourAndMinutes[1], 10);

  return minute + (hour * 60);
}

export function convertIntToValue(timeInInt) {
  const hour = Math.floor(timeInInt / 60);
  const minute = timeInInt % 60;

  const hourInString = (hour < 10) ? `0${hour}` : hour.toString();
  const minuteInString = (minute < 10) ? `0${minute}` : minute.toString();

  return `${hourInString}:${minuteInString}`;
}

export function convertIntToLabel(timeInInt, format) {
  if (format === 24) {
    return convertIntToValue(timeInInt);
  }

  let hour = Math.floor(timeInInt / 60);
  const minute = timeInInt % 60;

  const amPM = hour < 12 ? 'AM' : 'PM';

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  const hourInString = (hour < 10) ? `0${hour}` : hour.toString();
  const minuteInString = (minute < 10) ? `0${minute}` : minute.toString();

  return `${hourInString}:${minuteInString} ${amPM}`;
}
