const renderDate = (isoDate: string) => {
  // Return a formatted date string in the format of "1st January 2022"
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  if (day === 1 || day === 21 || day === 31) {
    return `${day}st ${month} ${year}`;
  }
  if (day === 2 || day === 22) {
    return `${day}nd ${month} ${year}`;
  }
  if (day === 3 || day === 23) {
    return `${day}rd ${month} ${year}`;
  }
  return `${day}th ${month} ${year}`;
};

export default renderDate;
