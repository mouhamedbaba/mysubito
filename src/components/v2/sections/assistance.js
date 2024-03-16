import React, { useState } from 'react'
import { AssistanceCard } from '../items/assistanceCard'

export const Assistance = () => {
    const [data, setData] = useState(
        [
            {   "id": 1,
                "img" : "https://mysubito.net/assets/assistante-e2528b4a.png",
                "title" : "Assistance 24/7",
                "description" : "Besoin d'aide à n'importe quelle heure? Notre équipe dévouée est disponible 24/7 pour vous assister. Voyagez l'esprit tranquille, nous sommes là pour vous, à chaque étape de votre aventure."
            },
            {
                "id": 2,
                "img" : "https://mysubito.net/assets/selection-de-meilleurs-produits-a360ae96.png",
                "title" : "Sélection des Meilleurs Produits",
                "description" : "Nous avons soigneusement sélectionné les meilleurs produits pour vous offrir une expérience de voyage exceptionnelle. Explorez notre gamme exclusive de destinations et d'options, garantissant des souvenirs mémorables à chaque étape."
            },
            {
                "id": 3,
                "img" : "https://mysubito.net/assets/avis-710f1380.png",
                "title" : "Avis de clients:",
                "description" : " Vous avez éte dans notre magasin? Vous avez étez satisfait de nos services? C'est parfait. C'est pourquoi nous avons fait un sondage pour nous aider à mieux comprendre l'avis de nos clients."
            }
    
        ]
    )

  return (
    <section className=' mt-5 py-5'>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                {
                    data.map((item) => {
                        return (
                            <AssistanceCard key={item.id} img={item.img} title={item.title} description={item.description} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
