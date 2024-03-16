export const Hero = ({background = "https://mysubito.net/assets/banner_homepage_subito-8bb0e8da.jpg", message = "Ici commence l'itinéraire de vos rêves", sous_message}) => { 
  return (
    <section className="hero w-100  " style={{backgroundImage: `url(${background})`}}>
      <div className="mb- d-flex flex-column hero-content">
        <div className=" ">
          <div className="hero-content-text text-light mt-10 mx-4 ">
            <div className="max-w-md">
              <h1 className="text-5xl  fw-bold text-light">Bonjour !</h1>
              <h3 className="text-light mt-2">
                {message}
              </h3>
              <h5 className="text-light mt-2 d-none d-md-block">
                {sous_message}
              </h5>
            </div>
          </div>
        </div>
        <div className="mt-auto tabs-block-bottom">
          <div className="hero-rent-container text-light">
            <div className="d-flex justify-content-center items-center">
              <ul
                className="nav  nav-tabs-v2 border border-slate-100  "
                id="myTab"
                role="tablist"
              >
                <li className="nav-item border boreder-1 nav-item-start-v2 nav-tab-hero-service-v2  raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <div className="d-flex h-100 w-100 px-1 gap-2 align-items-center">
                      <div className="">
                        <span className="fas fa-plane-departure h-10 w-10"></span>
                      </div>
                      <div className="">
                        Transfert <br />{" "}
                        <span className="fw-bold">Aeroport</span>{" "}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item border boreder-1  nav-tab-hero-service-v2  raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <div className="d-flex h-100 w-100 px-1 gap-2 align-items-center">
                      <div className="">
                        <span className="fas fa-plane-departure h-10 w-10"></span>
                      </div>
                      <div className="">
                        VTC <br /> <span className="fw-bold">Inter Ville</span>{" "}
                      </div>
                    </div>
                  </a>
                </li>

                <li className="nav-item border boreder-1  nav-tab-hero-service-v2  raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <div className="d-flex h-100 w-100 px-1 gap-2 align-items-center">
                      <div className="">
                        <span className="fas fa-plane-departure h-10 w-10"></span>
                      </div>
                      <div className="">
                        Location <br /> <span className="fw-bold">Voiture</span>{" "}
                      </div>
                    </div>
                  </a>
                </li>

                <li className="nav-item border boreder-1  nav-tab-hero-service-v2  raduis-5 d-flex  justify-content-center">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <div className="d-flex h-100 w-100 px-1 gap-2 align-items-center">
                      <div className="">
                        <span className="fas fa-calendar h-10 w-10"></span>
                      </div>
                      <div className="">Evenements</div>
                    </div>
                  </a>
                </li>
                <li className="nav-item border boreder-1  nav-tab-hero-service-v2  raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    href="#tab-contact"
                    role="tab"
                    aria-controls="tab-contact"
                    aria-selected="true"
                  >
                    <div className="d-flex h-100 w-100 px-1 gap-2 align-items-center">
                      <div className="">
                        <span className="fas fa-plane-departure h-10 w-10"></span>
                      </div>
                      <div className="">
                        Circuit <br />{" "}
                        <span className="fw-bold">Touristique</span>{" "}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item border boreder-1 nav-item-end-v2 nav-tab-hero-service-v2  raduis-5">
                  <a
                    className="nav-link text-light border-0 border-none"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#tab-home"
                    role="tab"
                    aria-controls="tab-home"
                    aria-selected="true"
                  >
                    <div className="d-flex h-100 w-100 px-1 gap-2 align-items-center">
                      <div className="">
                        <span className="fas fa-billet"></span>
                      </div>
                      <div className="">
                        Billet <br /> <span className="fw-bold">Avion</span>{" "}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="tab-content hero-card-rent-container-v2"
              id="myTabContent"
            >
              <div
                className="tab-pane tab-pane-v2 card raduis-0 fade show active "
                id="tab-home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row mx-0 ">
                  <div className="col-md-6 col-lg-2 col-xl-3 p-2">
                    <div className="border-input-tabs px-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-subito">
                          <span className="fas fa-location-arrow"></span>
                        </div>
                        <div className="w-100">
                          <span className="me-2 text-subito">Depart</span>
                          <div className=" d-flex align-items-center w-100">
                            <select className="bg-transparent select-v2 border-none w-100 fw-semi-bold">
                              <option>Selectionez Aeroport ou Ville</option>
                              <option value="1">Destination</option>
                              <option value="2">Destination</option>
                              <option value="3">Destination</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2 col-xl-2 p-2 ">
                    <div className="border-input-tabs px-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-subito">
                          <span className="fas fa-location-arrow"></span>
                        </div>
                        <div className="w-100">
                          <span className="me-2 text-subito">Arrive</span>
                          <div className=" d-flex align-items-center w-100">
                            <select className="bg-transparent select-v2 border-none w-100 fw-semi-bold">
                              <option>Selectionez Aeroport ou Ville</option>
                              <option value="1">Destination</option>
                              <option value="2">Destination</option>
                              <option value="3">Destination</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2 col-xl-2 p-2 ">
                    <div className="border-input-tabs px-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-subito">
                          <span className="fas fa-location-arrow"></span>
                        </div>
                        <div className="w-100">
                          <span className="me-2 text-subito">Date</span>
                          <div className=" d-flex align-items-center w-100">
                            <input
                              type="date"
                              placeholder="2022-01-01"
                              className="bg-transparent select-v2 border-none w-100 text-black"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2 col-xl-2 p-2 ">
                    <div className="border-input-tabs px-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-subito">
                          <span className="">#</span>
                        </div>
                        <div className="w-100">
                          <span className="me-2 text-subito">
                            Numero de vol
                          </span>
                          <div className=" d-flex align-items-center w-100">
                            <input
                              type="text"
                              placeholder="numero de vol"
                              className="bg-transparent select-v2 border-none w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2 col-xl-1  ">
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
                        className="form-check-label text-black mx-2"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Retour
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2 col-xl-2 p-0 m-0">
                    <button className="w-100 h-100 btn-rechercher-v2">
                      Rechercher
                    </button>
                  </div>
                </div>

                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample2"
                >
                  <div className="row mx-0 ">
                    <div className="col-md-6 col-lg-2 col-xl-3 p-2">
                      <div className="border-input-tabs px-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="text-subito">
                            <span className="fas fa-location-arrow"></span>
                          </div>
                          <div className="w-100">
                            <span className="me-2 text-subito">Depart</span>
                            <div className=" d-flex align-items-center w-100">
                              <select className="bg-transparent select-v2 border-none w-100 fw-semi-bold">
                                <option>Selectionez Aeroport ou Ville</option>
                                <option value="1">Destination</option>
                                <option value="2">Destination</option>
                                <option value="3">Destination</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xl-2 p-2 ">
                      <div className="border-input-tabs px-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="text-subito">
                            <span className="fas fa-location-arrow"></span>
                          </div>
                          <div className="w-100">
                            <span className="me-2 text-subito">Arrive</span>
                            <div className=" d-flex align-items-center w-100">
                              <select className="bg-transparent select-v2 border-none w-100 fw-semi-bold">
                                <option>Selectionez Aeroport ou Ville</option>
                                <option value="1">Destination</option>
                                <option value="2">Destination</option>
                                <option value="3">Destination</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xl-2 p-2 ">
                      <div className="border-input-tabs px-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="text-subito">
                            <span className="fas fa-location-arrow"></span>
                          </div>
                          <div className="w-100">
                            <span className="me-2 text-subito">Date</span>
                            <div className=" d-flex align-items-center w-100">
                              <input
                                type="date"
                                placeholder="2022-01-01"
                                className="bg-transparent select-v2 border-none w-100 text-black"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-2 col-xl-2 p-2 ">

                    </div>
                    <div className="col-md-6 col-lg-2 col-xl-1  ">
                    </div>
                    <div className="col-md-6 col-lg-2 col-xl-2 p-0 m-0">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="tab-content hero-card-rent-container-v2"
              id="myTabContent"
            >
              <div
                className="tab-pane tab-pane-v2 card raduis-0 px-1 fade show active "
                id="tab-home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="d-flex  items-center">
                  <div>
                    <span className="fas fa-globe icon-input"></span>
                  </div>
                  <div>
                    <h6 className="ms-1 fw-bold">Destination</h6>
                    <div className="custum-input d-flex align-items-center ">
                          <select className="w-100 input mx-2 text-dark">
                            <option value="1">Destination</option>
                            <option value="2">Destination</option>
                            <option value="3">Destination</option>
                          </select>
                        </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <h6 className="ms-1 fw-bold">Destination</h6>
                      <div className="row mt-3">
                      <div className="col-md-6 mt-3 mt-md-0">

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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
