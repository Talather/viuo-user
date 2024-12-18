import Azurill from "@/assets/images/azurill.png"
import Chikorita from "@/assets/images/chikorita.png"
import templateThree from "@/assets/images/resumeThree.png"
import Bronzor from "@/assets/images/bronzor.png"
import Pikachu from "@/assets/images/pikachu.png"



interface Template {
    id: string
    name: string
    image: string
    popularity: 'most' | 'recommended' | null
}

export const templates: Template[] = [
    { id: '1', name: 'Azurill', image: Azurill, popularity: 'recommended' },
    { id: '2', name: 'Chikorita', image: Chikorita, popularity: "most" },
    { id: '3', name: 'Nosepass', image: templateThree, popularity: null },
    { id: '4', name: 'Onyx', image: Bronzor, popularity: null },
    { id: '5', name: 'Bronzor', image: Bronzor, popularity: null },
    { id: '6', name: 'Pikachu', image: Pikachu , popularity: null },
]