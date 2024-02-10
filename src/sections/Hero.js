export const Hero = () => {
    return (
        <section class="hero ">
            <div class="position-relative filter-bg-header mt-8 w-100 h-100">
                <div class="container-fluid ">
                    <div class="hero-content-text text-light mx-4 ">
                        <div class="max-w-md">
                            <h1 class="text-5xl  fw-bold text-light">Bienvenue !</h1>
                            <h3 class="text-light mt-2">Ici commence l'itinéraire de vos rêves</h3>
                            <h5 class="text-light mt-2 d-none d-md-block">Sélectionnez votre destination et embarquez pour un voyage exceptionnel .</h5>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt-4 mt-md-5">
                    <div class="hero-rent-container text-light mx-4">
                        <ul class="nav nav-tabs " id="myTab" role="tablist">
                            <li class="nav-item nav-tab-hero-service raduis-5">
                                <a class="nav-link text-light border-0 border-none" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true">
                                    <span class="fas fa-globe" ></span> Home
                                </a></li>
                            <li class="nav-item "><a class="nav-link text-light" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false"><span class="fas fa-globe" ></span> Home</a></li>
                            <li class="nav-item "><a class="nav-link text-light" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false"><span class="fas fa-globe" ></span> Home</a></li>
                        </ul>
                        <div class="tab-content hero-card-rent-container" id="myTabContent">
                            <div class="tab-pane card raduis-0 py-5 px-4 fade show active " id="tab-home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row ">
                                    <div class="col-md-6">
                                        <h6 class="ms-1 fw-bold" >Destination</h6>
                                        <div class="row mt-3">
                                            <div class="col-md-6 mt-3 mt-md-0" >
                                                <div class="custum-input d-flex align-items-center ">
                                                    <span class="fas fa-globe icon-input"></span>
                                                    <select class="w-100 input mx-2 text-dark">
                                                        <option value="1">Destination</option>
                                                        <option value="2">Destination</option>
                                                        <option value="3">Destination</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mt-4 mt-md-0" >
                                                <div class="custum-input d-flex align-items-center ">
                                                    <span class="fas fa-globe icon-input"></span>
                                                    <select class="w-100 input mx-2 text-dark">
                                                        <option class="w-100 input mx-2 text-light" value="1">Destination</option>
                                                        <option class="w-100 input mx-2 text-light" value="2">Destination</option>
                                                        <option class="w-100 input mx-2 text-light" value="3">Destination</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3 mt-md-0">
                                        <h6 class="fw-bold" >Date</h6>
                                        <div class="row mt-3">
                                            <div class="col-md-8" >
                                                <div class="custum-input">
                                                    <input type="datetime-local" class="w-100 input input-date bg-transparent text-dark" />
                                                </div>
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0" >
                                                <div class="form-check form-switch bottom-0 mb-0 mt-3 d-flex d-md-block justify-content-end"><input class="form-check-input shadow-none" id="flexSwitchCheckDefault" type="checkbox" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" /><label class="form-check-label text-dark mx-2" htmlFor="flexSwitchCheckDefault">Retour</label></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-1 mt-3 mt-md-0 d-flex d-md-block justify-content-end">
                                        <button class="btn btn-hero-rechercher shadow-none text-light mb-0 mt-4 btn-danger">Rechercher</button>
                                    </div>
                                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="row mt-2">
                                            <div class="col-md-6">
                                                <h6 class="ms-1 fw-bold" >Destination</h6>
                                                <div class="row mt-3">
                                                    <div class="col-md-6 mt-3 mt-md-0" >
                                                        <div class="custum-input d-flex align-items-center ">
                                                            <span class="fas fa-globe icon-input"></span>
                                                            <select class="w-100 input mx-2 text-dark">
                                                                <option value="1">Destination</option>
                                                                <option value="2">Destination</option>
                                                                <option value="3">Destination</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 mt-md-0" >
                                                        <div class="custum-input d-flex align-items-center ">
                                                            <span class="fas fa-globe icon-input"></span>
                                                            <select class="w-100 input mx-2 text-dark">
                                                                <option class="w-100 input mx-2 text-light" value="1">Destination</option>
                                                                <option class="w-100 input mx-2 text-light" value="2">Destination</option>
                                                                <option class="w-100 input mx-2 text-light" value="3">Destination</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mt-2 ">
                                                <h6 class="fw-bold" >Date</h6>
                                                <div class="custum-input">
                                                    <input type="datetime-local" class="w-100 input input-date bg-transparent text-dark" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic. </div>
                            <div class="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}