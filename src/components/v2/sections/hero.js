export const Hero = () => {
    return (
      <section className="hero ">
        <div className="position-relative filter-bg-header mt-auto d-flex flex-column content-end w-100 h-100">
          <div className=" ">
            <div className="hero-content-text text-light mx-4 ">
              <div className="max-w-md">
                <h1 className="text-5xl  fw-bold text-light">Bienvenue !</h1>
                <h3 className="text-light mt-2">
                  Ici commence l'itinéraire de vos rêves
                </h3>
                <h5 className="text-light mt-2 d-none d-md-block">
                  Sélectionnez votre destination et embarquez pour un voyage
                  exceptionnel .
                </h5>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <div className="hero-rent-container text-light ">
              <ul className="nav nav-tabs " id="myTab" role="tablist">
                <li className="nav-item nav-tab-hero-service raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <span className="fas fa-plane-departurer"></span> Transfert Aeroport
  
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-light"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    href="#tab-profile"
                    role="tab"
                    aria-controls="tab-profile"
                    aria-selected="false"
                  >
                    <span className="fas fa-globe"></span> Inter Ville
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-light"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    href="#tab-contact"
                    role="tab"
                    aria-controls="tab-contact"
                    aria-selected="false"
                  >
                    <span className="fas fa-globe"></span> Chauffeur Privé
                  </a>
                </li>
                <li className="nav-item nav-tab-hero-service raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <span className="fas fa-globe"></span> Location Voiture
  
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-light"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    href="#tab-profile"
                    role="tab"
                    aria-controls="tab-profile"
                    aria-selected="false"
                  >
                    <span className="fas fa-globe"></span> Tourisme
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-light"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    href="#tab-contact"
                    role="tab"
                    aria-controls="tab-contact"
                    aria-selected="false"
                  >
                    <span className="fas fa-globe"></span> Billet Avions
                  </a>
                </li>
              </ul>
              <div
                className="tab-content hero-card-rent-container"
                id="myTabContent"
              >
                <div
                  className="tab-pane card raduis-0 py-5 px-4 fade show active "
                  id="tab-home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row ">
                    <div className="col-md-6">
                      <h6 className="ms-1 fw-bold">Destination</h6>
                      <div className="row mt-3">
                        <div className="col-md-6 mt-3 mt-md-0">
                          <div className="custum-input d-flex align-items-center ">
                            <span className="fas fa-globe icon-input"></span>
                            <select className="w-100 input mx-2 text-dark">
                              <option value="1">Destination</option>
                              <option value="2">Destination</option>
                              <option value="3">Destination</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                          <div className="custum-input d-flex align-items-center ">
                            <span className="fas fa-globe icon-input"></span>
                            <select className="w-100 input mx-2 text-dark">
                              <option
                                className="w-100 input mx-2 text-light"
                                value="1"
                              >
                                Destination
                              </option>
                              <option
                                className="w-100 input mx-2 text-light"
                                value="2"
                              >
                                Destination
                              </option>
                              <option
                                className="w-100 input mx-2 text-light"
                                value="3"
                              >
                                Destination
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                      <h6 className="fw-bold">Date</h6>
                      <div className="row mt-3">
                        <div className="col-md-8">
                          <div className="custum-input">
                            <input
                              type="datetime-local"
                              className="w-100 input input-date bg-transparent text-dark"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                          <div className="form-check form-switch bottom-0 mb-0 mt-3 d-flex d-md-block justify-content-end">
                            <input
                              className="form-check-input shadow-none"
                              id="flexSwitchCheckDefault"
                              type="checkbox"
                              data-bs-toggle="collapse"
                              data-bs-target="#multiCollapseExample2"
                              aria-expanded="false"
                              aria-controls="multiCollapseExample2"
                            />
                            <label
                              className="form-check-label text-dark mx-2"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              Retour
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="col-md-1 mt-3 mt-md-0 d-flex d-md-block justify-content-end">
                      <button className="btn btn-hero-rechercher shadow-none text-light mb-0 mt-4 btn-danger">
                        Rechercher
                      </button>
                    </div>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <h6 className="ms-1 fw-bold">Destination</h6>
                          <div className="row mt-3">
                            <div className="col-md-6 mt-3 mt-md-0">
                              <div className="custum-input d-flex align-items-center ">
                                <span className="fas fa-globe icon-input"></span>
                                <select className="w-100 input mx-2 text-dark">
                                  <option value="1">Destination</option>
                                  <option value="2">Destination</option>
                                  <option value="3">Destination</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                              <div className="custum-input d-flex align-items-center ">
                                <span className="fas fa-globe icon-input"></span>
                                <select className="w-100 input mx-2 text-dark">
                                  <option
                                    className="w-100 input mx-2 text-light"
                                    value="1"
                                  >
                                    Destination
                                  </option>
                                  <option
                                    className="w-100 input mx-2 text-light"
                                    value="2"
                                  >
                                    Destination
                                  </option>
                                  <option
                                    className="w-100 input mx-2 text-light"
                                    value="3"
                                  >
                                    Destination
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mt-2 ">
                          <h6 className="fw-bold">Date</h6>
                          <div className="custum-input">
                            <input
                              type="datetime-local"
                              className="w-100 input input-date bg-transparent text-dark"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                  single-origin coffee squid. Exercitation +1 labore velit, blog
                  sartorial PBR leggings next level wes anderson artisan four loko
                  farm-to-table craft beer twee. Qui photo booth letterpress,
                  commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                  vinyl cillum PBR. Homo nostrud organic.{" "}
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they
                  sold out mcsweeney's organic lomo retro fanny pack lo-fi
                  farm-to-table readymade. Messenger bag gentrify pitchfork
                  tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                  Leggings gentrify squid 8-bit cred pitchfork.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  