export const currencyFormatter = (val: number, sign: string) =>
  sign + ' ' + val.toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace('.', ',');
