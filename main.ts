input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(100, 0)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(0, 100)
})
radio.setGroup(58)
if (true) {
	
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        wuKong.setAllMotor(100, 100)
    }
})
