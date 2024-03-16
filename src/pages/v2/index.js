import React from "react";
import { Navbar } from "../../components/v2/sections/navbar";
import { Hero } from "../../components/v2/sections/hero";
import { Destination } from "../../components/v2/sections/destination";
import { Blog } from "../../sections/v1/Blog";
import { Promo } from "../../sections/v1/Promo";
import { Testimonials } from "../../sections/v1/Testimonials";
import { AppPub } from "../../sections/v1/AppBup";
import { Footer } from "../../sections/v1/Footer";

export const Index = () => {
  return (
    <>
      <Navbar />
      <Hero sous_message={"Sélectionnez votre destination et embarquez pour un voyage exceptionnel."} />
      <Destination />
      <Blog />
      <Promo />
      <Testimonials />
      <AppPub />
      <Footer />
    </>
  );
};
