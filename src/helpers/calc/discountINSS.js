const SALARY_RANGES = Object.freeze([
  {
    from: 1_100,
    to: 1_100,
    rate: 0.075,
    toDeduct: 0,
  },
  {
    from: 1_100.01,
    to: 2_203.48,
    rate: 0.09,
    toDeduct: 16.5,
  },
  {
    from: 2_203.49,
    to: 3_305.22,
    rate: 0.12,
    toDeduct: 82.61,
  },
  {
    from: 3_305.23,
    to: 6_433.57,
    rate: 0.14,
    toDeduct: 148.72,
  },
  {
    from: 6_433.58,
    to: 1_000_000,
    roof: 751.97,
  },
])

function checkySalaryRange (value) {
  const index = SALARY_RANGES.findIndex(({ from, to }) => value >= from && value <= to);
  return index;
}

export default function discountINSS(grossSalary) {
  const salaryRangeIndex = checkySalaryRange(grossSalary);
  const { rate, toDeduct, roof } = SALARY_RANGES[salaryRangeIndex];

  if (roof) {
    return roof;
  }

   return grossSalary * rate - toDeduct;
}
