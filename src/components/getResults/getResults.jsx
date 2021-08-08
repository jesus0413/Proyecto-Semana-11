
import { Link } from 'react-router-dom';
import getData from '../../Utils/getData';
import '../getResults/styleResults.css';

const constResults = () => {
    let userInput = localStorage.getItem('DrinkId');
    let result = getData(userInput);
    function GetDrinkId(id) {
                localStorage.setItem('drinkId', id);
            }
    return result.length === 0 ? <h1>Cargando...</h1> : (
            <div className="results-grid-container">
            { result.drinks.map( (results) => (
            <Link to ="/CocktailDetail/" onClick={() => GetDrinkId(results.id)} >
                <div className="container-grid">
                <h5> {results.strDrink}</h5>
                <img src={results.strDrinkThumb} alt="" />
                <h5>preparacion: {results.strInstructions}</h5>
            </div></Link>
            )
            )} 
        </div>
    );

    

}
export default constResults;
