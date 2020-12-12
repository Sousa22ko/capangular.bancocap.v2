export const currencyFormatter = (val:number, sign:string) => {
    return sign + " " + val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
}