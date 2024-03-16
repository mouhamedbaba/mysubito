import TestimonialCard from "../../components/v1/TestimonialCard";
import { SliderGrid } from "../../utils/Slider";



export const Testimonials = () => {
    const data = [
      {
        src: "assets/img/testimonials/Yorick_Herman.jpg",
        name: "Yorick Herman",
        comment:
          "Service de qualité, avec un chauffeur très sympa... Très respectueux du code de la route, comme si c'est LeCab sur Dakar... Hâte d'être de nouveau à bord.",
      },
      {
        src: "assets/img/testimonials/Nadine_Soyez.jpg",
        name: "Nadine soyez",
        comment:
        "Je recommande. Ponctuels et sympathiques, les chauffeurs ont assuré notre trajet aller et retour Dakar _ Saly. Voiture adaptée à notre besoin. Merci.",
      },
      {
        src: "assets/img/testimonials/Yorick_Herman.jpg",
        name: "Yorick Herman",
        comment:
          "Service de qualité, avec un chauffeur très sympa... Très respectueux du code de la route, comme si c'est LeCab sur Dakar... Hâte d'être de nouveau à bord.",
      },
      // {
      //    src: "assets/img/testimonials/Marjolaine_Blanc.jpg",
      //    name: "Marjolaine Blanc",
      //    comment:
      //    "J'ai utilisé les services de Subito plusiers fois entre 2021 et 2023 vers ou de AIDB,  chaque le processus de réservation est fluide, le chauffeur arrive en avance pour le transfert , la conduite est prudente , les véhicules sont propres et confortables."
      // },
      {
        src: "assets/img/testimonials/Nadine_Soyez.jpg",
        name: "Nadine soyez",
        comment:
          "Je recommande. Ponctuels et sympathiques, les chauffeurs ont assuré notre trajet aller et retour Dakar _ Saly. Voiture adaptée à notre besoin. Merci.",
      }
    ]
    return (
      <>
        <hr />
  
        <div className="container-fluid py-4">
          <div className="text-Destination-container text-center">
            <h2 className="text-subito">Ce que disent les client</h2>
            <div className="divider my-3"></div>
          </div>
          <div className="testimonials-container mt-4 ">
          < SliderGrid  data={data} CardComponent={TestimonialCard} />
          </div>
        </div>
        <hr />
      </>
    );
  };