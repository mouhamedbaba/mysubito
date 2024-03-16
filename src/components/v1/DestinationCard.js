export const DestinationCard = ({src, title}) => {
    return (
            <div className="card card-img-bg-city img-bg-city h-100 bg-dark text-white overflow-hidden light max-w-30rem" >
                <div className="card-img-top h-100 w-100 img-bg-city">
                    <img className="img-fluid img-city h-100 w-100" src={src} alt={title} />
                    </div>
                <div className="card-img-overlay d-flex align-items-top justify-content-start">
                    <div>
                        <h5 className="card-title text-white">{title}</h5>
                    </div>
                </div>
            </div>

    )
}