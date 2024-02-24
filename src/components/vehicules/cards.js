import React from 'react'

export const Cards = () => {
    

  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
        <div className='card'>
            <div className='card-img-top h-50'>
                <img className='h-100 w-100 object-contain' src='assets/img/vehicule/car_1.jpg' alt='img'></img>
            </div>
            <div className='card-body'>
            <h6>model : York nelson</h6>
            <h6>Year : 2022</h6>
            <h6>Fuel tupe : hybrid</h6>
            <h6>Price per day : 5000f</h6>
            <input type='checkbox' checked /> <span>Avialable</span>
            </div>
        </div>
    </div>
  )
}
