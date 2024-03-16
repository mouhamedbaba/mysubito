import { DestinationCard } from "../items/detinationCard"


export const Destination = () => {
    return (
        <div className="container-fluid mx-0 px-4 py-4">
            <div className="text-Destination-container text-center">
                <h2 className="text-Destination text-subito">
                    Nos meilleurs destinations
                </h2>
                <div className="divider my-3"></div>
            </div>
            <div className="destination-row gy-3">
                <div className="row gy-3">
                    <div className="col-12 col-md-6 ">
                        <DestinationCard src="https://api.mysubito.net/destinations/mysubito_1706294340648.jpeg" title="Caps Skirring" />
                    </div>
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="https://api.mysubito.net/destinations/mysubito_1706285210728.jpeg" title="Dakar" />
                    </div>
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="assets/img/hotel/hotel3.png" title="Kédougou" />
                    </div>
                </div>
                <div className="row gy-3 mt-3">
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="https://api.mysubito.net/destinations/mysubito_1706290913811.jpeg" title="Saly" />
                    </div>
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="https://api.mysubito.net/destinations/mysubito_1706291507199.jpeg" title="Saint-Louis" />
                    </div>
                    <div className="col-12 col-md-6 ">
                        <DestinationCard src="https://api.mysubito.net/destinations/mysubito_1706292317022.jpeg" title="Lac rose" />
                    </div>
                </div>
            </div>
        </div>
    )
}