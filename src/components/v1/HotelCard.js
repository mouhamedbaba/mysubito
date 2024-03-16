import { useState } from "react";


export const CardHotel = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = (e) => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
    }
    return (
        <div>
            <div className="card p-1 card-hotel overflow-hidden" >

                <div className="card card-img-top card-img-hotel w-100 bg-dark text-white overflow-hidden light" >
                    <div className="card-img-top  w-100"><img className="img-fluid w-100" src="assets/img/hotel/hotel1.png" alt="Card image" /></div>
                    <div className="card-img-overlay d-flex align-items-top justify-content-end">
                        <a onClick={handleFavorite} type="button" role="button" href="" className={isFavorite ? "text-danger icon-heart-rate-hotel" : "icon-heart-rate-hotel text-white"}>
                            <span className="fas fa-heart puff-in-center"></span>
                        </a>
                    </div>
                    <div className="card-img-overlay d-flex align-items-end">
                        <div>
                            <span className="text-white d-flex"><h5 className="card-title text-white ms-2 mx-2">40.000 XOF</h5>par jour</span>
                        </div>
                    </div>
                </div>                <div className="card-body">
                    <h5 className="card-title">Dakar, hotel standford</h5>
                    <p className="hoter_rating mt-4">
                        <span className="fa fa-star star-checked"></span>
                        <span className="fa fa-star star-checked"></span>
                        <span className="fa fa-star star-checked"></span>
                        <span className="fa fa-star star-checked"></span>
                        <span className="fa fa-star star-unchecked"></span>
                        <span className="text-muted mx-2">(3 avis)</span>
                    </p>
                </div>
            </div>
        </div>
    )
}