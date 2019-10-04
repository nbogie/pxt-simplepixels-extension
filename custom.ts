/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace simplePixels {
    //% block="make %strip spin one %color=neopixel_colors pixel"
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
    //% block="make %strip change colour according to tilt" 
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

    //% block="make %strip spin one %color=neopixel_colors pixel, quickly"
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
        strip.clear();
        strip.show();
    }
    //% block="make %strip spin three %color=neopixel_colors pixels" 
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
    //% block
    export function randomColor(): number {
        return neopixel.hsl(Math.randomRange(0, 360), 99, 50)
    }

}
