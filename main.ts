basic.forever(function () {
    serial.writeValue("x", Math.map(Math.abs(input.rotation(Rotation.Roll)), 0, 124, 0, 2000))
    pins.analogWritePin(AnalogPin.P2, Math.map(Math.abs(input.rotation(Rotation.Roll)), 0, 124, 0, 1023))
    if (Math.map(input.rotation(Rotation.Roll), 0, 124, 0, 1023) < 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
