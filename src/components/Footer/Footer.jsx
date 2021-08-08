import '../Footer/styleFooter.css';
import img1 from './facebook-brands.svg';
import img2 from './github-brands.svg';
import img3 from './linkedin-brands.svg';
import { Link } from 'react-router-dom';
export default function Footer(){
    return (
        <footer className="footer">
        <div className="suscribe" >
            <h3>Suscribete para recibir mas informacion</h3>
        
            <Link to ="/newsLetter"><span>haz click aqui!</span></Link>
        
        </div>
        <div className="social">
            <h3>siguenos en nuestras redes sociales</h3>
        
            <span><img src={img1} alt="facebook" /></span>
            <span><img src={img2} alt="github" /></span>
            <span><img src={img3} alt="linkedin" /></span>
        </div>
        </footer>
    )
}