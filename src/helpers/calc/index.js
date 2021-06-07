import discountINSS from './discountINSS.js';
import discountIRRF from './discountIRRF.js';
import discountDependents from './discountDependents.js';

function sum(...summation) {
  return summation.reduce((acc, currentValue) => acc + currentValue, 0);
}

function subtraction(amount, ...subtrations) {
  let result = amount;

  subtrations.forEach(value => {
    result -= value;
  });

  return result;
}

function percentageOf(totalValue, fractionValue) {
  if (totalValue === 0) {
    return 0;
  }
  return fractionValue * 100 / totalValue;
}

export default function calcSalary(grossSalary = 0, nDependents = 0, otherDiscounts = 0) {
  const dependentsCost = discountDependents(nDependents);

  const inss = discountINSS(grossSalary);
  const irrf = discountIRRF(subtraction(grossSalary, inss, dependentsCost));
  const totalDiscount = sum(inss, irrf, otherDiscounts);
  const netSalary = subtraction(grossSalary, totalDiscount);

  const inssPercent = percentageOf(grossSalary, inss);
  const irrfPercent = percentageOf(grossSalary, irrf);
  const otherDiscountsPercent = percentageOf(grossSalary, otherDiscounts);
  const totalDiscountPercent = percentageOf(grossSalary, totalDiscount);
  const netSalaryPercent = percentageOf(grossSalary, netSalary);

  return {
    inss, irrf, otherDiscounts, totalDiscount, netSalary,
    inssPercent, irrfPercent, otherDiscountsPercent, totalDiscountPercent, netSalaryPercent
  }
}
