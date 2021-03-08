const incrementDate = (date, number) => {
  const d = new Date(date);
  return d.setDate(d.getDate() + number);
};

export default incrementDate;
