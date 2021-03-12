export const currencyToNumber = (currency) => parseInt(currency.replace(/[^0-9,]+/g, '').replace(',', '.'), 10);
