function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()
    context.strokeRect(UI.game.buttonBack[0], UI.game.buttonBack[1], UI.game.buttonBack[2], UI.game.buttonBack[3])

    drawField()
    drawLower()

    if (state === 'Ready') {
        drawReady()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === 'Ready') {
                if (pointInsideRectArray(x, y, UI.game.ready.buttonStart)) {
                    state = ''
                }
            }

            if (state === '') {
                
            }
        }
    }
}
