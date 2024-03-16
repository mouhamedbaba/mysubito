import { Navbar } from "../../sections/v1/Navbar"
import { Hotel } from "../../sections/v1/Hotel"
import {Destination } from "../../sections/v1/Destination"
import { Blog } from "../../sections/v1/Blog"
import { Promo } from "../../sections/v1/Promo"
import { Testimonials } from "../../sections/v1/Testimonials"
import { AppPub } from "../../sections/v1/AppBup"
import { Footer } from "../../sections/v1/Footer"
export const HomeSubito = () =>{
    return (
        <>
        <Navbar />
        <Hotel />
        <Destination />
        <Blog />
        <Promo />
        <Testimonials/>
        <AppPub />
        <Footer/>
        </>

    )
}

