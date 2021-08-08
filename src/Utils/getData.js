import { useEffect, useState } from "react";
export default function GetData(cocktail) {
    const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const URL_SEARCH = `${API}${cocktail}`;
    const [drink, setdrink] =  useState([]);
    useEffect(() => {
        fetch(URL_SEARCH)
            .then((response) => response.json())
            .then((drinks) => {
                setdrink(drinks);
            });
    }, []);
    return drink;
}