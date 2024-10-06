let img = {
    icon : {
        energy : new Image(),
        life : new Image()
    },

    button : {
        generator : new Image(),
    }
}

function imageLoad() {
    img.icon.energy.src = 'Image/Icon/IconEnergy.png'
    img.icon.life.src = 'Image/Icon/IconLife.png'

    img.button.generator.src = 'Image/Button/ButtonGenerator.png'
}
