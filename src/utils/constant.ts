import get_years from "./date.utils";

export const password_rules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const list_day = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
export const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const SIDEBAR_WIDTH = 270;
export const SIDEBAR_CLOSED_WIDTH = 65;
export const TOOLBAR_HEIGHT = 88;

export const LAST_YEARS = get_years();
