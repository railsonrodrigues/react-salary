export default function discountIRRF (valueBase) {
  // IFs e ELSEs

  const ranges = [
    [0, 1903.98, 0, 0.00],
    [1903.99, 2826.65, 0.075, 142.80],
    [2826.66, 3751.05, 0.15, 354.80],
    [3751.06, 4664.68, 0.225, 636.13],
    [4664.69, 1000000, 0.275, 869.36]
  ]

  let discount = null;
  ranges.forEach(([ begin, end, rate, deduValue ]) => {
    if (valueBase >= begin && valueBase <= end) {
      discount = valueBase * rate - deduValue;
    }
  });

  return {
    discount: discount.toFixed(2),
    baseValue: valueBase,
    liquidValue: (valueBase - discount).toFixed(2)
  };
}