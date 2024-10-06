function loopGame() {
    if (menu == false) {
        if (state === '') {
            gameTick()
        }
    }

    displayGame()
}

function displayGame() {
    drawSceneInit()
    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3])

    drawField()
    drawLower()

    if (state === 'Ready') {
        drawReady()
    }

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                menu = true
            }
            if (state === 'Ready') {
                if (pointInsideRectArray(x, y, UI.game.ready.buttonStart)) {
                    state = ''
                    gameInit()
                }
            }

            if (state === '') {
                if (pointInsideRectArray(x, y, UI.game.lower.buttonGenerator)) {
                    upgradeGenerator()
                }
            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                scene = 'Title'
                state = ''
                menu = false
            }
        }
    }
}
