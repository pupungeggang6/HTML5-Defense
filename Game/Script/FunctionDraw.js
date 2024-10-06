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
            context.strokeRect(UI.game.field.cellStart[0] + UI.game.field.cellInterval[0] * j, UI.game.field.cellStart[1] + UI.game.field.cellInterval[1] * i, UI.game.field.cellSize[0], UI.game.field.cellSize[1])
        }
    }
}

function drawLower() {
    context.fillText(`Lv.${varPlayer.generatorLevel}`, UI.game.lower.generatorLevelText[0], UI.game.lower.generatorLevelText[1])
    context.drawImage(img.icon.energy, UI.game.lower.energyIcon[0], UI.game.lower.energyIcon[1])
    context.fillText(`${varPlayer.energy.toFixed(1)}/${varPlayer.energyMax}`, UI.game.lower.energyText[0], UI.game.lower.energyText[1])
    context.fillStyle = 'Orange'
    let ratio = varPlayer.energy / varPlayer.energyMax
    context.fillRect(UI.game.lower.energyBar[0], UI.game.lower.energyBar[1], Math.floor(UI.game.lower.energyBar[2] * ratio),  UI.game.lower.energyBar[3])
    context.strokeRect(UI.game.lower.energyBar[0], UI.game.lower.energyBar[1], UI.game.lower.energyBar[2], UI.game.lower.energyBar[3])
    context.fillStyle = 'Black'
    
    context.drawImage(img.icon.life, UI.game.lower.lifeIcon[0], UI.game.lower.lifeIcon[1])
    context.fillText(`${varPlayer.life}`, UI.game.lower.lifeText[0], UI.game.lower.lifeText[1])

    context.drawImage(img.button.generator, UI.game.lower.buttonGenerator[0], UI.game.lower.buttonGenerator[1])
    context.strokeRect(UI.game.lower.buttonGenerator[0], UI.game.lower.buttonGenerator[1], UI.game.lower.buttonGenerator[2], UI.game.lower.buttonGenerator[3])
    context.font = '24px neodgm'
    context.fillText(`${varPlayer.generatorEnergy[varPlayer.generatorLevel]}`, UI.game.lower.textGenerator[0], UI.game.lower.textGenerator[1])
    context.font = '32px neodgm'

    for (let i = 0; i < 8; i++) {
        context.strokeRect(UI.game.lower.hand[i][0], UI.game.lower.hand[i][1], UI.game.lower.hand[i][2], UI.game.lower.hand[i][3])
    }

    context.strokeRect(UI.game.lower.cardBack[0], UI.game.lower.cardBack[1], UI.game.lower.cardBack[2], UI.game.lower.cardBack[3])
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Paused`, UI.menu.textPause[0], UI.menu.textPause[1])

    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText(`Resume`, UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText(`Exit`, UI.menu.textExit[0], UI.menu.textExit[1])
}
