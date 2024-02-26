import { Link } from "react-router-dom";
import { Hero } from "./Hero"
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState('bg-transparent');
    const [textColor, setTextColor] = useState('text-light');
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
    
          // Changez la valeur de 100 selon la hauteur que vous souhaitez pour le changement de couleur
          if (scrollY > 100) {
            setNavbarColor('bg-light');
            setTextColor('text-dark');
          } else {
            setNavbarColor('bg-transparent');
            setTextColor('text-light');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg ${navbarColor} navbar-light`}>
                <div className="container-fluid p-0 ">
                    <Link className="navbar-brand" to="/">
                        <img className="logo h-75 w-75" src ="logo.png" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 text-subito mx-5 ${textColor}`}>
                            <li className="mx-2 nav-item">
                                <a className={`nav-link ${textColor}  fw-bold`}aria-current="page" href="#">Acceuil</a>
                            </li>
                            <li className="mx-2 nav-item dropdown">
                                <a className={`nav-link ${textColor}  fw-bold dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mobilite
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Transfert Aéroport</a></li>
                                    <li><Link  className="dropdown-item" to="/vehicule">Location Voiture</Link></li>
                                    <li><a className="dropdown-item" href="#">Chauffeur Privé</a></li>
                                    <li><a className="dropdown-item" href="#">Inter ville</a></li>
                                </ul>
                            </li>
                            <li className="mx-2 nav-item dropdown">
                                <a className={`nav-link ${textColor}  fw-bold dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hebergement
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Hotel</a></li>
                                    <li><a className="dropdown-item" href="#">Villa</a></li>
                                    <li><a className="dropdown-item" href="#">Appartement</a></li>
                                </ul>
                            </li>
                            <li className="mx-2 nav-item dropdown">
                                <a className={`nav-link ${textColor}  fw-bold dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Activite
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Tourisme</a></li>
                                    <li><a className="dropdown-item" href="#">Circuit</a></li>
                                </ul>
                            </li>
                            <li className="mx-2 nav-item">
                                <a className={`nav-link ${textColor}  fw-bold`} href="#">Assurance</a>
                            </li>
                            <li className="mx-2 nav-item">
                                <a className={`nav-link ${textColor}  fw-bold`} href="#">Blog</a>
                            </li>
                            <li className="mx-2 nav-item icon-language">
                                <div className="vr"></div>
                                <a className={`nav-link ${textColor}  fw-bold`} href="#">
                                <div className="theme-control-toggle fa-icon-wait px-2 "><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span className="fas fa-sun fs-0 fa-spin"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span className="fas fa-moon fs-0 fa-spin"></span></label></div>

                                    </a>
                                <div className="vr"></div>
                            </li>
                            <li className="mx-2 nav-item">
                                <a className={`nav-link ${textColor}  fw-bold`} href="#">Connexion</a>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
            <Hero/> 
        </div>
    )
}