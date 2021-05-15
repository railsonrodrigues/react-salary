import calcSalary from "../index.js";
import {formatMoneyFn, formatPercentageFn} from "../../formatNumber.js";

function formatResult(result) {
  return {
    inss: formatMoneyFn(result.inss),
    irrf: formatMoneyFn(result.irrf),
    otherDiscounts: formatMoneyFn(result.otherDiscounts),
    totalDiscount: formatMoneyFn(result.totalDiscount),
    netSalary: formatMoneyFn(result.netSalary),
    inssPercent: formatPercentageFn(result.inssPercent),
    irrfPercent: formatPercentageFn(result.irrfPercent),
    otherDiscountsPercent: formatPercentageFn(result.otherDiscountsPercent),
    totalDiscountPercent: formatPercentageFn(result.totalDiscountPercent),
    netSalaryPercent: formatPercentageFn(result.netSalaryPercent),
  }
}

export default function getResult(grossSalary = 0, nDependents = 0, otherDiscounts = 0) {
  const result = calcSalary(grossSalary, nDependents, otherDiscounts);
  const resultFormatted = formatResult(result);

  return resultFormatted;
}
