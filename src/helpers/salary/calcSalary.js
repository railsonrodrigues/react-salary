import discountINSS from './discountINSS.js';
import discountIRRF from './discountIRRF.js';
import formatNumber from './../formatNumber.js'

export default function calcSalary (salBruto) {
  const inss = discountINSS(salBruto);
  const irrf = discountIRRF(inss.liquidValue);

  return {
    inss: {...inss},
    inssFormatted: {
      discount: formatNumber(inss.discount),
      baseValue: formatNumber(inss.baseValue),
      liquidValue: formatNumber(inss.liquidValue)
    },
    irrf: {...irrf},
    irrfFormatted: {
      discount: formatNumber(irrf.discount),
      baseValue: formatNumber(irrf.baseValue),
      liquidValue: formatNumber(irrf.liquidValue)
    },
    salLiquido: irrf.liquidValue,
    salLiquidoPercent: (irrf.liquidValue * 100 / salBruto).toFixed(2),
    discountPercentINSS: (inss.discount * 100 / salBruto).toFixed(2),
    discountPercentIRRF: (irrf.discount * 100 / salBruto).toFixed(2),
    salLiquidoFormatted: formatNumber(irrf.liquidValue),
  };
}
