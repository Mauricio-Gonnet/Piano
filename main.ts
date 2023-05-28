basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        music.playTone(440, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.playTone(494, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
