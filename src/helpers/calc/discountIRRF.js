const SALARY_RANGES = Object.freeze([
  {
    from: 0,
    to: 1_903.98,
    rate: 0,
    toDeduct: 0,
  },
  {
    from: 1_903.99,
    to: 2_826.65,
    rate: 0.075,
    toDeduct: 142.80,
  },
  {
    from: 2_826.66,
    to: 3_751.05,
    rate: 0.15,
    toDeduct: 354.80,
  },
  {
    from: 3_751.06,
    to: 4_664.68,
    rate: 0.225,
    toDeduct: 636.13,
  },
  {
    from: 4_664.69,
    to: 1_000_000,
    rate: 0.275,
    toDeduct: 869.36,
  },
]);

function checkySalaryRange (value) {
  const index = SALARY_RANGES.findIndex(({ from, to }) => value >= from && value <= to);
  return index;
}

export default function discountIRRF(salaryDiscountedINSS) {
  const salaryRangeIndex = checkySalaryRange(salaryDiscountedINSS);
  const { rate, toDeduct } = SALARY_RANGES[salaryRangeIndex];

   return salaryDiscountedINSS * rate - toDeduct;
}
