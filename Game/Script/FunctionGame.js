function gameInit() {
    varPlayer.energy = 4
    varPlayer.energyMax = 6
    varPlayer.energyGen = 1
    varPlayer.generatorLevel = 1
    varPlayer.life = 20
}

function gameTick() {
    playerEnergyGen()
}

function playerEnergyGen() {
    if (varPlayer.energy + varPlayer.energyGen * delta / 1000 < varPlayer.energyMax) {
        varPlayer.energy += varPlayer.energyGen * delta / 1000
    } else {
        varPlayer.energy = varPlayer.energyMax
    }
}

function upgradeGenerator() {
    if (varPlayer.generatorLevel < 5) {
        if (varPlayer.energy > varPlayer.generatorEnergy[varPlayer.generatorLevel]) {
            varPlayer.energy -= varPlayer.generatorEnergy[varPlayer.generatorLevel]
            varPlayer.generatorLevel += 1
            varPlayer.energyMax += 3
            varPlayer.energyGen += 0.25
        }
    }
}
