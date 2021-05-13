import discountINSS from './discountINSS.js';
import discountIRRF from './discountIRRF.js';
import discountDependents from './discountDependents.js';

export default function calcSalary(grossSalary = 0, nDependents = 0, otherDiscounts = 0) {
  const inss = discountINSS(grossSalary);
  const dependentsCost = discountDependents(nDependents);
  const irrf = discountIRRF(grossSalary - inss - dependentsCost);

  const totalDiscount = inss + irrf + otherDiscounts;
  const netSalary = grossSalary - totalDiscount;

  return {
    discountINSS: inss,
    discountIRRF: irrf,
    otherDiscounts: otherDiscounts,
    totalDiscount,
    netSalary,
    // netSalary: grossSalary - this.totalDiscount,
    // discountINSSpercent: ,
    // discountIRRFpercent: ,
    // otherDiscountspercent: ,
    // totalDiscountPercent: ,
    // netSalaryPercent: ,
  }
}
