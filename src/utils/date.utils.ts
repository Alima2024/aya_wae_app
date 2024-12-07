import dayjs from "dayjs";
import { capitalizeFirstLetter } from "./string.utils";


export function formatDate(
  date?: string | Date,
  formater = "DD MMM YYYY HH:mm",
  local = "en"
): string {
  if (!date) return "_ _";
  return dayjs(date).locale(local).format(formater);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFormatedDate = (start: any, end: any, locale = "fr") => {
  const day1 = dayjs(start || new Date())
    .locale(locale)
    .format("DD MMM YYYY");
  const day2 = dayjs(end || new Date())
    .locale(locale)
    .format("DD MMM YYYY");
  const toDay = dayjs(new Date()).locale(locale).format("DD MMM YYYY");
  if (day1 === day2) {
    if (toDay === day1) {
      return toDay + " (" + capitalizeFirstLetter("to day");
    }
    return day1;
  }
  return `${day1} - ${day2}`;
};

export default function get_years() {
  let init = 2024;
  const arr = [init];
  while (init < 2024) {
    init = init + 1;
    arr.push(init);
  }
  return arr;
}
