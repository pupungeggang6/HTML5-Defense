const UI = {
    title : {
        textTitle : [8, 8],
        buttonStart : [160, 160, 960, 80],
        textStart : [168, 184],
        buttonErase : [160, 240, 960, 80],
        textErase : [168, 264]
    },

    game : {
        buttonMenu : [1220, 20, 40, 40],

        ready : {
            rect : [80, 80, 1120, 560],
            tabCard : [80, 80, 80, 80],
            tabEquipment : [160, 80, 80, 80],
            deck : [],
            cardStart : [80, 160],
            cardSize : [160, 240],
            cardInterval : [160, 240],
            buttonStart : [1040, 560, 160, 80],
            textStart : [1048, 584],
        },

        field : {
            cellStart : [80, 120],
            cellSize : [120, 120],
            cellInterval : [120, 120],
        },

        lower : {
            buttonGenerator : [80, 600, 80, 80],
            textGenerator : [84, 604],
            hand : [
                [160, 600, 80, 80], [240, 600, 80, 80], [320, 600, 80, 80], [400, 600, 80, 80],
                [480, 600, 80, 80], [560, 600, 80, 80], [640, 600, 80, 80], [720, 600, 80, 80]
            ],
            cardBack : [720, 600, 80, 80],
            generatorLevelText : [84, 564],
            energyIcon : [160, 560],
            energyText : [204, 564],
            energyBar : [320, 560, 240, 40],
            lifeIcon : [560, 560],
            lifeText : [604, 564],
        }
    },

    menu : {
        rect : [320, 240, 640, 240],
        textPause : [328, 264],
        buttonResume : [320, 320, 640, 80],
        textResume : [328, 344],
        buttonExit : [320, 400, 640, 80],
        textExit : [328, 424],
    },
}
