import React from "react";
import { Navbar } from "../../components/v2/sections/navbar";
import { Hero } from "../../components/v2/sections/hero";
import { Footer } from "../../sections/v1/Footer";
import { Assistance } from "../../components/v2/sections/assistance";
import { Vehicules } from "../../components/v2/sections/vehicules";

export const TransfereAeroport = () => {
  return (
    <>
      <Navbar />
      <Hero
        background="https://mysubito.net/assets/background-ba55f683.jpg"
        message="Optez pour notre Service
"
      />
      <Vehicules/>
      <Assistance />
      <Footer />
    </>
  );
};
