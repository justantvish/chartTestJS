import { convertCapToBillions } from "./convertCapToBillions";

export const findMaxCap = (data) => {
    let highestMarketCap = 0;
    let lowestMarketCap = 0;
    let highestMarketCapCurrency = '';

    for (let i = 0; i < data.length; i++) {
        const currentCurrency = data[i];
        highestMarketCap = Math.max(highestMarketCap, currentCurrency.market_cap);
        lowestMarketCap = currentCurrency.market_cap;
        lowestMarketCap = Math.min(lowestMarketCap, currentCurrency.market_cap);
        
        if(currentCurrency.market_cap === highestMarketCap) {
            highestMarketCapCurrency = currentCurrency.name;
        }
    }
    highestMarketCap = convertCapToBillions(highestMarketCap);
    lowestMarketCap = convertCapToBillions(lowestMarketCap);

    return {highestMarketCap, highestMarketCapCurrency, lowestMarketCap};
}