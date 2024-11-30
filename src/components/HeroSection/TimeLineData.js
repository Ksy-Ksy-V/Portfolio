import cinePeek from '../../img/icons/cinePeekSM.png'
import portfolio from '../../img/icons/portfolioSM.png'
import catGame from '../../img/icons/catSM.png'
import kito from '../../img/icons/kitoSM.png'

import cinePeekImg from '../../img/projectPrev01.jpg'
import catGameImg from '../../img/projectPrev02.png'
import kitoImg from '../../img/projectPrev03.png'

const projects = [
    {
        id: '1',
        title: 'CinePeek',
        date: 'April',
        icon: cinePeek,
        img: cinePeekImg,
        description:
            'This is a dynamic web application designed for movie and TV show enthusiasts.',
    },
    {
        title: 'Personal Page',
        date: 'July',
        icon: portfolio,

        description: 'This is portfolio site you are currently on.',
    },
    {
        id: '2',
        title: 'Cat Game',
        date: 'August',
        icon: catGame,
        img: catGameImg,
        description:
            'This is a 2D retro-style platformer with pixelated graphics reminiscent of classic arcade games.',
    },
    {
        id: '3',
        title: 'Kito',
        date: 'September - December',
        icon: kito,
        img: kitoImg,
        description:
            'This is a web app for anime fans to explore, organize, and track their favorite shows.',
    },
]

export { projects }
