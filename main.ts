input.onButtonPressed(Button.A, function () {
    simplePixels.effectSpin(strip, simplePixels.randomColor())
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
basic.forever(function () {
	
})
