import { useEffect, useState } from "react";
import { convertCapToBillions } from "../utils/convertCapToBillions";


export const useFilter = (minMarketCap, data) => {
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [filteredMarketCapData, setFilteredMarketCapData] = useState([]);
    const [filteredMarketCapChangeData, setFilteredMarketCapChangeData] = useState([]);

    useEffect(() => {
        const filteredNames = [];
        const filteredMarketCapArray = [];
        const filteredMarketCap24Array = [];
        
        const filteredData = data && data.filter(cur =>
            convertCapToBillions(cur.market_cap) >= minMarketCap
        );
        filteredData && filteredData.map(cur => {
            filteredNames.push(cur.name)
            filteredMarketCapArray.push(convertCapToBillions(cur.market_cap))
            filteredMarketCap24Array.push(convertCapToBillions(cur.market_cap_change_24h))
        });
        
        setFilteredCategories(filteredNames)
        setFilteredMarketCapData(filteredMarketCapArray)
        setFilteredMarketCapChangeData(filteredMarketCap24Array)

    }, [data]);

    return {filteredCategories, filteredMarketCapData, filteredMarketCapChangeData};
};