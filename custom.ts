/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace simplePixels {
    //% block="make %strip spin one %color=neopixel_colors pixel"
    //% color.shadow="random_color"
    export function effectSpin(strip: neopixel.Strip, color: number): void {
        strip.clear()
        strip.setPixelColor(0, color)
        strip.show()
        for (let i = 0; i < 20; i++) {
            strip.rotate(1)
            strip.show()
            basic.pause(50)
        }
        strip.clear()
        strip.show()
    }
    //% block="change %strip colour when tilted" 
    export function effectColorByTilt(strip: neopixel.Strip) {
        strip.clear()
        for (let i = 0; i < 100; i++) {
            strip.showColor(neopixel.hsl(pins.map(
                input.rotation(Rotation.Pitch),
                -90,
                90,
                0,
                360
            ), 99, 50))
            basic.pause(50)
        }
        strip.clear()
        strip.show()
    }

    //% block="%strip spin one %color=neopixel_colors pixel, quickly"
    //% color.shadow="random_color"
    export function effectFastSpin(strip: neopixel.Strip, color: number) {
        strip.clear()
        for (let passIx2 = 0; passIx2 <= 10; passIx2++) {
            strip.setBrightness(5 + passIx2 * 25)
            for (let ledIx2 = 0; ledIx2 <= 23; ledIx2++) {
                strip.showColor(color)
                basic.pause(50 - passIx2 * 5)
                strip.rotate(1)
                strip.show()
            }
        }
        for (let passIx3 = 0; passIx3 <= 10; passIx3++) {
            strip.setBrightness((10 - passIx3) * 25)
            for (let ledIx3 = 0; ledIx3 <= 23; ledIx3++) {
                strip.showColor(color)
                basic.pause(50 - (10 - passIx3) * 5)
                strip.rotate(-1)
                strip.show()
            }
        }
        wipe(strip)
    }

    function wipe(strip: neopixel.Strip) {
        for (let i = 0; i < 24; i++) {
            strip.shift(1)
            strip.show()
            basic.pause(10)
        }
    }
    
    //% block="%strip sparkle randomly with %color=neopixel_colors"
    //% color.shadow="random_color"
    export function effectSparkle(strip: neopixel.Strip, color: number) {
        strip.clear()
        strip.setBrightness(255)
        for (let i = 0; i < 48; i++) {
            basic.pause(50)
            strip.clear()
            strip.setPixelColor(Math.randomRange(0, strip.length() - 1), color)
        }
        wipe(strip)
    }

    //% block="Spin trio on %strip with colors %color1=neopixel_colors pixels %color2=neopixel_colors pixels"
    //% color1.shadow="random_color"
    //% color2.shadow="random_color"
    export function effectSpinTriangle2(strip: neopixel.Strip, color1: number, color2: number) {
        strip.clear()
        strip.setBrightness(255)
        strip.setPixelColor(1, color1)
        strip.setPixelColor(8, color1)
        strip.setPixelColor(16, color1)
        strip.setBrightness(30)
        strip.setPixelColor(0, color2)
        strip.setPixelColor(2, color2)
        strip.setPixelColor(7, color2)
        strip.setPixelColor(9, color2)
        strip.setPixelColor(15, color2)
        strip.setPixelColor(17, color2)
        for (let i = 0; i < 100; i++) {
            basic.pause(50)
            strip.rotate(0 - pins.map(
                input.rotation(Rotation.Roll),
                -180,
                180,
                -5,
                5
            ))
            strip.show()
        }
        wipe(strip)
    }
    //% block="make %strip spin three %color=neopixel_colors pixels" 
    //% color1.shadow="random_color"
    export function effectSpinThree(strip: neopixel.Strip, color: number): void {
        strip.clear()
        strip.setPixelColor(0, color)
        strip.setPixelColor(8, color)
        strip.setPixelColor(16, color)
        for (let i = 0; i < 100; i++) {
            basic.pause(50)
            strip.rotate(0 - pins.map(
                input.rotation(Rotation.Roll),
                -180,
                180,
                -5,
                5
            ))
            strip.show()
        }
        strip.clear()
        strip.show()
    }
    //% block="make |%strip| glow|color %color=neopixel_colors" 
    //% color.shadow="random_color"
    export function effectGlow(strip: neopixel.Strip, color: number) {
        let myBrightness = 0
        for (let i = 0; i < 2; i++) {
            for (let i = 0; i < 40; i++) {
                strip.setBrightness(myBrightness)
                strip.showColor(color)
                myBrightness += 6
                basic.pause(30)
            }
            for (let i = 0; i < 40; i++) {
                myBrightness += -6
                strip.setBrightness(myBrightness)
                strip.showColor(color)
                basic.pause(30)
            }
        }
        strip.setBrightness(255)
    }
    //% blockId="random_color" block
    export function randomColor(): number {
        return neopixel.hsl(Math.randomRange(0, 360), 99, 50)
    }

}
