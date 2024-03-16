import React from "react";

export const AssistanceCard = ({ key, img, title, description }) => {
  return (
      <div className="col-md-4 col-lg-4" key={key}>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <img
            className="img-fluid"
            src={img}
            alt={title}
            style={{ width: "100%", height: "90px" }}
          />
          <div>
            <h5 className="fw-bold ">{title}</h5>
            <p className=" text-black">{description}</p>
          </div>
        </div>
      </div>
  );
};
