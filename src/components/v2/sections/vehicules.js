import React, { useState } from 'react'
import { VehiculeCard } from '../items/vehiculeCard'

export const Vehicules = () => {
    const [vehicules, setVehicules] = useState([
        
            {
                "id": 1,
                "marque": "Dacia",
                "model": "Logan",
                "suitcase_capacity": "2",
                "sits": "4",
                "box_type": "auto",
                "fuel_type": "diesel",
                "img": "https://api.mysubito.net/images/voitures/voiture_1702401313431.png",
                "price": "5000",
                "currency": "XOF"
            },
            {
                "id": 2,
                "marque": "Dacia",
                "model": "Logan",
                "suitcase_capacity": "2",
                "sits": "4",
                "box_type": "auto",
                "fuel_type": "diesel",
                "img": "https://api.mysubito.net/images/voitures/voiture_1702401313431.png",
                "price": "5000",
                "currency": "XOF"
            },
            {
                "id": 3,
                "marque": "Dacia",
                "model": "Logan",
                "suitcase_capacity": "2",
                "sits": "4",
                "box_type": "auto",
                "fuel_type": "diesel",
                "img": "https://api.mysubito.net/images/voitures/voiture_1702401313431.png",
                "price": "5000",
                "currency": "XOF"
            },
            {
                "id": 4,
                "marque": "Dacia",
                "model": "Logan",
                "suitcase_capacity": "2",
                "sits": "4",
                "box_type": "auto",
                "fuel_type": "diesel",
                "img": "https://api.mysubito.net/images/voitures/voiture_1702401313431.png",
                "price": "5000",
                "currency": "XOF"
            }
        
    ])
  return (
    <section>
        <div className='container-fluid'>
            <div className='row'>
                {
                    vehicules.map((item) => {
                        return (
                            <VehiculeCard item={item} key={item.id} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
