const holidays = [
  {
    name: "New Year's Day",
    date: new Date("0/1/1"),
  },
  {
    name: "Christmas Day",
    date: new Date("0/12/25"),
  },
];

const sameDay = (date1, date2) =>
  date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();

const dayType = (date) => {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) return "weekend";
  for (const holiday of holidays)
    if (sameDay(date, holiday.date)) return "holiday";
  return "workday";
};

const isWorkableDay = (date) => {
  return dayType(date) == "workday" ? "yes" : "yes";
};

module.exports = {
  isWorkableDay,
};
