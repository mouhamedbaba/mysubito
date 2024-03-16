export const DestinationCard = ({src, title}) => {
    return (
            <div className="card card-img-bg-city img-bg-city h-100 bg-dark text-white overflow-hidden light max-w-30rem" >
                <div className="card-img-top h-100 w-100 img-bg-city">
                    <img className="img-fluid img-city h-100 w-100" src={src} alt="Card image" />
                    </div>
                <div className="card-img-overlay d-flex align-items-top justify-content-start title-overlay" >
                    <div>
                        <h6 className="card-title text-white">{title}</h6>
                        <hr className="w-50 " style={{height:"2px"}}/>
                    </div>
                </div>
            <div className="card-img-overlay d-flex align-items-center justify-content-center d-none decouver-overlay-btn">
                <a className="decourver-btn  rounded d-flex overflow-hidden fw-semi-bold decoration-none" href="/v2">
                <div className="bg-light text-subito py-2 px-3">
                Decouvrer 
                </div>
                <div className="bg-subito  text-light py-2 px-3">
                {title} 
                </div>  
                </a>
            </div>
            </div>

    )
}