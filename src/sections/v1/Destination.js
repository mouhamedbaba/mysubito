import { DestinationCard } from "../../components/v1/DestinationCard"

export const Destination = () => {
    return (
        <div className="container-fluid py-4">
            <div className="text-Destination-container text-center">
                <h2 className="text-Destination">
                    Nos meilleurs destinations
                </h2>
                <div className="divider my-3"></div>
            </div>
            <div className="destination-row gy-3">
                <div className="row gy-3">
                    <div className="col-12 col-md-6">
                        <DestinationCard src="assets/img/hotel/hotel-1.png" title="Dakar" />
                    </div>
                    <div className="col-6 col-md-3">
                        <DestinationCard src="assets/img/hotel/hotel2.png" title="Sine-saloum" />
                    </div>
                    <div className="col-6 col-md-3">
                        <DestinationCard src="assets/img/hotel/hotel3.png" title="Kédougou" />
                    </div>
                </div>
                <div className="row gy-3 mt-3">
                    <div className="col-6 col-md-3">
                        <DestinationCard src="assets/img/hotel/hotel4.png" title="Saint-Louis" />
                    </div>
                    <div className="col-6 col-md-3">
                        <DestinationCard src="assets/img/hotel/hotel5.png" title="Lac rose" />
                    </div>
                    <div className="col-12 col-md-6">
                        <DestinationCard src="assets/img/hotel/hotel6.png" title="Guinée" />
                    </div>
                </div>
            </div>
        </div>
    )
}