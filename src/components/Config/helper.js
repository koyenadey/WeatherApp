export function getCurrentDateTime() {
  const today = new Date();
  const date = `${today.getFullYear()}-0${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const time =
    (today.getHours().toString().length === 1
      ? "0" + today.getHours()
      : today.getHours()) +
    ":" +
    (today.getMinutes().toString().length === 1
      ? "0" + today.getMinutes()
      : today.getMinutes());
  return `${date} ${time}`;
}

export function getCurrentDate() {
  const today = new Date();
  return `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`;
}

export function getCurrentDay() {
  const today = new Date();
  return today.getDate();
}

export function getCurentDayName(date){
  const day = new Date(date);
  return day.toLocaleDateString("ENG-US",{weekday:'long'});
}
