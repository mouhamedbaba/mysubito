import React from 'react'
import { Navbar } from "../../sections/v1/Navbar"
import { VehiculesContainer } from '../../sections/v1/vehiculesContainer'

export const Vehicules = () => {
  return (
    <>
    <Navbar/>
      <div className=' p-4'>
        <VehiculesContainer/>
    </div>
    </>
  )
}
