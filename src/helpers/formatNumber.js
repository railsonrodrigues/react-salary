const { format } = new Intl.NumberFormat([], {
  style: 'currency',
  currency: 'BRL',
});

export default function formatNumber(value) {
  return format(value);
}
