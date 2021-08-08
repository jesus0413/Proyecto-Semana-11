import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { useEffect,useReducer } from 'react';
import Header from './components/Header/Header';
import Home from './Views/Homepage/Homepage';
import Register from './Views/register/registerForm';
import SignIn from  './Views/Login/login';
import Contact from './Views/contactView/contactView';
import CocktailDetail from './Views/cocktailDetail/cocktailDetail';
import Results from './Views/Results/results';
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './components/SignRouter/AppRouter';
import NewsPage from './Views/newsView/newsView';
import Footer from './components/Footer/Footer';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const ProyectApp = () => {
  
  const [ user, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
      localStorage.setItem( 'user', JSON.stringify(user) );
  }, [user])

  return (

      <AuthContext.Provider value={{ user, dispatch }}>
          <AppRouter />
      </AuthContext.Provider>

  )
}

 const App = () => {
   
  return (
    <div className="App">
        <Router>
        <Header/>
        <Switch>
         <Route path="/Register">
            <Register />
        </Route>
        <Route path="/signIn">  
            <SignIn/>
        </Route>
        <Route path="/cocktailDetail">
            <CocktailDetail/>
        </Route>
        <Route path="/Results">
            <Results/>
        </Route>
        <Route path="/newsLetter">
            <NewsPage/>
        </Route>
        <Route path="/Contact">
            <Contact/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>
        </Switch>
        <Footer/>
      </Router>
    
    </div>
  )
};
export default App;