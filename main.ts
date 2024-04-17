input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showString("Testing")
    music.play(music.stringPlayable("- A - A - A - A ", 100), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("! Hi !")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showString("Testing")
    music.play(music.stringPlayable("- A - A - A - A ", 100), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("! Lo !")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Yes)
    basic.showString("Test Complete")
    Data = "Test"
    datalogger.log(datalogger.createCV(timeanddate.dateTime(), Data))
})
input.onGesture(Gesture.Shake, function () {
    PowerStatus = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    PowerStatus = 0
})
let SeccondsOFF = 0
let Data = ""
let PowerStatus = 0
PowerStatus = 1
loops.everyInterval(1000, function () {
    SeccondsOFF += 1
})
loops.everyInterval(10000, function () {
    basic.showString("" + (input.temperature()))
})
basic.forever(function () {
    if (PowerStatus == 0) {
        for (let index = 0; index < SeccondsOFF; index++) {
            music.stopAllSounds()
            music.stopMelody(MelodyStopOptions.All)
            basic.clearScreen()
        }
    }
})
loops.everyInterval(1010, function () {
    SeccondsOFF = 0
})
loops.everyInterval(30000, function () {
    if (27 < input.temperature()) {
        music.play(music.stringPlayable("- A - A - A - A ", 100), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.showString("! Hi !")
        Data = "High Tempeture"
        datalogger.log(datalogger.createCV(timeanddate.dateTime(), Data))
    }
})
