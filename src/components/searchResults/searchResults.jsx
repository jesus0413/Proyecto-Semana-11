import './styleSearch.css';
import { Link } from 'react-router-dom';
import cocktail from '../Search/cocktail-solid.svg';

function Search() {
    return (
    <section className="results-search">
            <div className="input-results">
                <Link to ="/"><button type="button"><img src={cocktail} alt="Buscar"/></button></Link>
            </div>
    </section>
    );
}

export default Search;