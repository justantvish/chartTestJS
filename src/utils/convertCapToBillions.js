export const convertCapToBillions = (currencyCap) => {
    return Number((currencyCap / 1000000000).toFixed(2));
};