const TestimonialCard = ({data}) => {
    return (
      <div className="card card-testimonial h-100 text-white bg-light border-subito position-relative count-box">
        <div className="card-img-overlay position-absolute p-1 h-100" >
          <img
            src={data.src}
            className="rounded-circle img-testimonial p-1 slide-left rotate"
            alt="testimonial"
          />
        </div>
        <div className="card-body h-100 mt-4 h-100 ">
          <p className="form-text text-dark">
            <span className="fas fa-quote-left text-subito mx-2"></span>{data.comment}
          </p>
          <div className="card-title text-dark text-end">{data.name}</div>
        </div>
      </div>
    );
  };

export default TestimonialCard