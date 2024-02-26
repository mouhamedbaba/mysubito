import React from 'react'
import { Navbar } from "../sections/Navbar"
import { VehiculesContainer } from '../sections/vehiculesContainer'

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
