function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'black'
    context.fillStyle = 'white'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'black'
}

function drawReady() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.ready.rect[0], UI.game.ready.rect[1], UI.game.ready.rect[2], UI.game.ready.rect[3])
    context.strokeRect(UI.game.ready.rect[0], UI.game.ready.rect[1], UI.game.ready.rect[2], UI.game.ready.rect[3])
    context.fillStyle = 'Black'

    context.strokeRect(UI.game.ready.tabCard[0], UI.game.ready.tabCard[1], UI.game.ready.tabCard[2], UI.game.ready.tabCard[3])
    context.strokeRect(UI.game.ready.tabEquipment[0], UI.game.ready.tabEquipment[1], UI.game.ready.tabEquipment[2], UI.game.ready.tabEquipment[3])

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 5; j++) {
            context.strokeRect(UI.game.ready.cardStart[0] + UI.game.ready.cardInterval[0] * j, UI.game.ready.cardStart[1] + UI.game.ready.cardInterval[1] * i, UI.game.ready.cardSize[0], UI.game.ready.cardSize[1])
        }
    }

    context.strokeRect(UI.game.ready.buttonStart[0], UI.game.ready.buttonStart[1], UI.game.ready.buttonStart[2], UI.game.ready.buttonStart[3])
    context.fillText(`Start`, UI.game.ready.textStart[0], UI.game.ready.textStart[1])
}

function drawField() {
    for (let i = 0; i < varField['Tile'].length; i++) {
        for (let j = 0; j < varField['Tile'][0].length; j++) {
            context.strokeRect(UI.game.field.cellStart[0] + UI.game.field.cellInterval[0] * j, UI.game.field.cellStart[1] + UI.game.field.cellInterval[1] * i, UI.game.field.cellStart[0], UI.game.field.cellStart[1])
        }
    }
}

function drawLower() {
    context.fillText(`Lv.${varPlayer.generatorLevel}`, UI.game.lower.generatorLevelText[0], UI.game.lower.generatorLevelText[1])
    context.fillText(`${varPlayer.energy.toFixed(1)}/${varPlayer.energyMax}`, UI.game.lower.energyText[0], UI.game.lower.energyText[1])

    context.strokeRect(UI.game.lower.buttonGenerator[0], UI.game.lower.buttonGenerator[1], UI.game.lower.buttonGenerator[2], UI.game.lower.buttonGenerator[3])

    for (let i = 0; i < 8; i++) {
        context.strokeRect(UI.game.lower.hand[i][0], UI.game.lower.hand[i][1], UI.game.lower.hand[i][2], UI.game.lower.hand[i][3])
    }

    context.strokeRect(UI.game.lower.cardBack[0], UI.game.lower.cardBack[1], UI.game.lower.cardBack[2], UI.game.lower.cardBack[3])
}