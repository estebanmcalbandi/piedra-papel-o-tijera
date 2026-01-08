let tirada = 0
let piedras = 0
let papeles = 0
let tijeras = 0
input.onGesture(Gesture.Shake, function () {
    tirada = randint(1, 3)
    if (tirada == 1) {
        basic.showIcon(IconNames.Diamond)
        piedras = piedras + 1
    } else if (tirada == 2) {
        basic.showIcon(IconNames.Square)
        papeles = papeles + 1
    } else if (tirada == 3) {
        basic.showIcon(IconNames.Scissors)
        tijeras = tijeras + 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Piedras: " + piedras)
    basic.pause(200)
    basic.showString("Papeles: " + papeles)
    basic.pause(200)
    basic.showString("Tijeras: " + tijeras)
})
