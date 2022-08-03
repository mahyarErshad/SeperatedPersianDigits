const persian = (number) => {
  const persian = number.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return persian;
};
export default function separateNumber(number) {
  let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  newNumber = persian(newNumber);
  return newNumber;
}
