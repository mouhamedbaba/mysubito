import { CardHotel } from "../../components/v1/HotelCard"

export const Hotel = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row mt-3 gy-3">
                <div className="col-sm-6 col-lg-3">
                    <CardHotel />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <CardHotel />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <CardHotel />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <CardHotel />
                </div>
            </div>
        </div>
    )
}