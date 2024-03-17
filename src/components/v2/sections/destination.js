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
                        <DestinationCard src="" title="Caps Skirring" />
                    </div>
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="assets/img/hotel/hotel2.png" title="Dakar" />
                    </div>
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="assets/img/hotel/hotel3.png" title="Kédougou" />
                    </div>
                </div>
                <div className="row gy-3 mt-3">
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="g" title="Saly" />
                    </div>
                    <div className="col-6 col-md-3 ">
                        <DestinationCard src="" title="Saint-Louis" />
                    </div>
                    <div className="col-12 col-md-6 ">
                        <DestinationCard src="" title="Lac rose" />
                    </div>
                </div>
            </div>
        </div>
    )
}