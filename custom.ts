/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace simplePixels {
    //% block
    export function effectSpin(strip: neopixel.Strip, color: number):void {
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
    //% block
    export function randomColor(): number {
        return neopixel.hsl(Math.randomRange(0, 360), 0, 0)
    }

}
