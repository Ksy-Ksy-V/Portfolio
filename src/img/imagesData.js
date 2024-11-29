import projectPrev01 from './../img/projectPrev01.jpg'
import projectPrev02 from './../img/projectPrev02.png'
import projectPrev03 from './../img/projectPrev03.png'

import descKito01 from './../img/kito/descKito01.png'
import descKito02 from './../img/kito/descKito02.png'
import descKito03 from './../img/kito/descKito03.png'
import descKito04 from './../img/kito/descKito04.png'

import tabKito01 from './../img/kito/tabKito01.png'
import tabKito02 from './../img/kito/tabKito02.png'

import mobKito01 from './../img/kito/mobKito01.png'
import mobKito02 from './../img/kito/mobKito02.png'

import descCine01 from './../img/cine/descCine01.png'
import descCine02 from './../img/cine/descCine02.png'
import descCine03 from './../img/cine/descCine03.png'

import tabCine01 from './../img/cine/tabCine01.png'
import tabCine02 from './../img/cine/tabCine02.png'

import mobCine01 from './../img/cine/mobCine01.png'
import mobCine02 from './../img/cine/mobCine02.png'

const sliderData = {
    1: projectPrev01,
    2: projectPrev02,
    3: projectPrev03,
}

const projectImages = {
    kito: {
        desc: [descKito01, descKito02, descKito03, descKito04],
        tab: [tabKito01, tabKito02],
        mob: [mobKito01, mobKito02],
    },
    cine: {
        desc: [descCine01, descCine02, descCine03],
        tab: [tabCine01, tabCine02],
        mob: [mobCine01, mobCine02],
    },
}

const Kito = {
    desc: [descKito01, descKito02, descKito03, descKito04],
    tab: [tabKito01, tabKito02],
    mob: [mobKito01, mobKito02],
}

const CinePeek = {
    desc: [descCine01, descCine02, descCine03],
    tab: [tabCine01, tabCine02],
    mob: [mobCine01, mobCine02],
}

export { sliderData, Kito, CinePeek }
