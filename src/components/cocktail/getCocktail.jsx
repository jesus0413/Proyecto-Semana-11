import { useEffect, useState } from 'react';
import React from 'react';
import './styleGet.css';

const DrinkDetail =()  => {
        const [cocktail, setCocktail] = useState(null)
        let idCard = localStorage.getItem("DrinkId");
        useEffect(() => {
            localStorage.setItem('userSearch', '');
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${idCard}`)
                .then((response) => response.json())
                .then((drinks) => {
                    console.log("sirve", drinks)
                    setCocktail(drinks);
                })
        }, [])

    return(
        <>
        {cocktail ? (
        <>
            <section className="drinks-detail">
                <div className="detalle-img">
                    <img src={cocktail && cocktail?.strDrinkThumb} alt=""/>
                </div>
                <div className="detalle-text">
                    <h4>Cocktail: {cocktail?.name}</h4>
                    <h4>Categoria: {cocktail?.strCategory || 0 }</h4>
                    <h4>Ingrediente 1: {cocktail?.trIngredient1 || "Ninguno"}</h4>
                    <h4>Ingrediente 2: {cocktail?.strIngredient2 || "Ninguno"}</h4>
                    <h4>Ingrediente 3: {cocktail?.strIngredient3|| "Ninguno"}</h4>
                    <h4>Ingrediente 4: {cocktail?.strIngredient4|| "Ninguno"} </h4>
                    <h4>Medidas : {cocktail?.strMeasure1}</h4>
                   <h4> Como Preparar :  {cocktail?.strInstructions}</h4>
                </div>
            </section>
         </>
        ) : <h1>Cargando...</h1>}
        </>
    )

}
export default  DrinkDetail; 