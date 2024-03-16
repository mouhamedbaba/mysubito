import React from "react";

export const VehiculeCard = ({item, key}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={key}>
      <div
        className="card-vehicule px-4 py-2"
        style={{
          background: "linear-gradient(to bottom, #272727, #363636, #484848)",
        }}
      >
        <h4>
          {item.marque} <span>({item.model})</span>
        </h4>
        <div className="d-flex gap-1 justify-content-between">
          <div className="box-card-vehicule-info border px-3 py-2 d-flex flex-column justify-content-center align-items-center ">
            <span className="fas fa-suitcase"></span>
            <p>{item.suitcase_capacity}</p>
          </div>
          <div className="box-card-vehicule-info border px-3 py-2 d-flex flex-column justify-content-center align-items-center">
            <span className="fas fa-suitcase"></span>
            <p> {item.sits} </p>
          </div>
          <div className="box-card-vehicule-info border px-3 py-2 d-flex flex-column justify-content-center align-items-center">
            <span className="fas fa-suitcase"></span>
            <p> {item.box_type} </p>
          </div>
          <div className="box-card-vehicule-info border px-3 py-2 d-flex flex-column justify-content-center align-items-center">
            <span className="fas fa-suitcase"></span>
            <p> {item.fuel_type}</p>
          </div>
        </div>
        <div>
          <h3>{item.price}  </h3>
        </div>
        <div>
          <img
            className="img-fluid h-100 w-100"
            src={item.img}
            alt={item.marque + "-" + item.model}
          />
        </div>
        <div>
          <button className="w-100 bg-subito text-white border-none outline-none rounded shadow-none">Button</button>
        </div>
      </div>
    </div>
  );
};
