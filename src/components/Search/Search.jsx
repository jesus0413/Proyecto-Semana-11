import './styleSearch.css';
import searchIcon from '../Search/cocktail-solid.svg';
import logo from '../Header/logo.png';
import { Link } from 'react-router-dom';

function Search() {
    return (
    <section className="home-search">
        <div>
            <div className="logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <div className="input-container">
                <input placeholder="Encuentra tu cocktail favorito" id="input" />
                <Link to ="/Results"> <button type="button" onClick={localStorageActivate}><img src={searchIcon} alt="Buscar" /></button> </Link>
            </div>
        </div>
    </section>
    );
}

function localStorageActivate() {
    let DrinkId = document.querySelector("#input").value;
        localStorage.setItem('DrinkId', DrinkId);
    }

export default Search;