import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav
        className={`navbar navbar-v2 fixed-top navbar-expand-lg  navbar-tansparent text-white  mx-0`}
      >
        <div className="container-fluid ">
          <a className="navbar-brand ms-0.5" href="/v2">
            <img className="logo h-50 w-50 text-subito" src="https://mysubito.net/assets/logo-texte2-mysubito%201-740c9d1an.png" alt="Subito" />
          </a>
          <a
            href="/"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </a>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 text-subito mx-5 me-8`}>
              <li className="mx-2    nav-item">
                <a href="/" className={`nav-link  fw-semi-bold`} aria-current="page">
                  Acceuil
                </a>
              </li>
              <li className="mx-2    nav-item">
                <Link to="/v2/aeroport_transfer" className={`nav-link  fw-semi-bold`} aria-current="page">
                  Transfert Aeroport
                </Link>
              </li>
              <li className="mx-2    nav-item dropdown">
                <a
                  className={`nav-link  fw-bold dropdown-toggle`}
                  href="/"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mobilite
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/vehicule">
                      Location Voiture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Chauffeur Privé
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Inter ville
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mx-2    nav-item dropdown">
                <a
                  className={`nav-link  fw-bold dropdown-toggle`}
                  href="/"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Activite
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Circuit Touristique
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Evenements
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="mx-2    nav-item icon-language">
                        <div className="vr"></div>
                        <a className={`nav-link  fw-semi-bold`} href="/">
                        <div className="theme-control-toggle fa-icon-wait px-2 ">
                            <a  href = "/" className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span className="fas fa-sun fs-0 "></span></label>
                            <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span className="fas fa-moon fs-0 "></span></label></div>

                            </a>
                        <div className="vr"></div>
                    </li> */}
              <li className="mx-2    nav-item">
                <a href="/" className={`nav-link  fw-semi-bold`} aria-current="page">
                  FR
                </a>
              </li>
              <li className="mx-2    nav-item">
                <a className={`nav-link  fw-semi-bold`} href="/">
                  <i className="fas fa-user-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
