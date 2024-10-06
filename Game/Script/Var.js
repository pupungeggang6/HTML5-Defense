let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let varSave = {
    
}

let varLevel = {
    
}

let varField = {
    'Core' : [],
    'Spawn' : [],
    'Tile' : [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ],
    'Unit' : [],
}

let varPlayer = {
    deckOriginal : [],
    deck : [],
    hand : [],

    energy : 4,
    energyMax : 6,
    energyGen : 1,
    generatorLevel : 1,
    generatorEnergy : [0, 4, 6, 9, 12, ''],

    life : 20,
}
