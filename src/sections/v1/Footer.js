export const Footer = () => {
    return (
            <footer className="row mx-0 bg-footer p-5 light">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                       <h2 className="fw-bold text-subito ">MYSUBITO</h2>
                    </a>
                    <h6 className="text-muted ">
                    La plateforme de réservation simplifiée offrant une sélection étendue d'hébergements. Bénéficiez d'une confirmation instantanée, d'évaluations authentiques, d'une assistance 24/7, et d'offres exclusives. Notre engagement : une réservation sans stress avec suivi en temps réel. Mysubito, où simplicité rime avec sérénité.</h6>
                </div>
                <div className="col-md-4 col-lg-3">
                    <h5 className=" fw-bold text-subito">BESOIN D'AIDE ?</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mt-2 mb-2"><a href="/" className="nav-link p-0 ">Contactez-nous</a></li>
                        <li className="nav-item mt-3 mb-2"><a href="/" className="nav-link p-0  fw-bold"><span className="fas fa-phone text-subito mx-2"></span>+221 78 136 36 35</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold"><span className="fas fa-fax text-subito mx-2"></span>+221 78 136 36 35</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold"><span className="fas fa-envelope text-subito mx-2"></span>contact@subito.net</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-lg-3 d-none d-md-block">
                    <h5 className=" fw-bold text-subito">SERVICES</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Voyage</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Tourisme</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Hébergement</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Chauffeur Privée</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Transfert Aéroport</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Location de véhicule</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-lg-3 light">
                <h5 className=" fw-bold mt-3 mt-md-0 text-subito light">SUIVEZ-NOUS</h5>
                    <div className="rounded-social-buttons mt-3">
                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                </div>
                <hr className="text-subito mt-2" />
                <div className="footer-bottom" >
                <ul className="nav flex-wrap justify-content-between">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">FAQ</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Termes d'utilisateur</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0  fw-bold">Politique de confidentialité</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">&copy; 2018-2023 <span className="fw-bold">Subito International</span></a></li>
                    </ul>
                </div>
            </footer>
    )
}