const money = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export function formatMoneyFn(value) {
  return money.format(value);
}

export function formatPercentageFn(value) {
  return `${value.toFixed(1)}%`;
}