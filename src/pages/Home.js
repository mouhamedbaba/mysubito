import { Navbar } from "../sections/Navbar"
import { Hotel } from "../sections/Hotel"
import {Destination } from "../sections/Destination"
import { Blog } from "../sections/Blog"
import { Promo } from "../sections/Promo"
import { Testimonials } from "../sections/Testimonials"
import { AppPub } from "../sections/AppBup"
import { Footer } from "../sections/Footer"
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

