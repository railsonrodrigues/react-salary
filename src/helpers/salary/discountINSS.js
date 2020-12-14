export default function discountINSS (valueBase) {
  function isRange (value, [ limitValue ]) {
    return value >= limitValue;
  }

  let totalDiscount = 0;
  let percentDiscount = 0;

  const ranges = [
    [1045.00, 0.09],
    [2089.60, 0.12],
    [3134.40, 0.14],
  ];

  if (valueBase > 6101.06) {
    totalDiscount = 713.10;
  } else {
    let index = 0;

    while (ranges[index] && isRange(valueBase, ranges[index])) {
      if (index === 0) {
        totalDiscount += 78.38;
      }

      const [ range, rate ] = ranges[index];
      const [ nextRange ] = ranges[index + 1] ? ranges[index + 1] : [ 6101.06 ];

      totalDiscount += valueBase < nextRange ? (valueBase - range) * rate : (nextRange - range) * rate;
      index++;
    }
  }
  
  return {
    discount: totalDiscount.toFixed(2),
    baseValue: valueBase,
    liquidValue: (valueBase - totalDiscount).toFixed(2)
  };
}