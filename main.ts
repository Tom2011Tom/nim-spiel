input.onButtonPressed(Button.A, function () {
    SpielerB = 0
    if (AnzahlLEDs <= 1) {
        CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x000000), AnzahlLEDs - 1)
        basic.showString("B Wins!")
    } else {
        if (SpielerA < 3) {
            SpielerA += 1
            CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x000000), AnzahlLEDs - 1)
            AnzahlLEDs += -1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    SpielerA = 0
    if (AnzahlLEDs <= 1) {
        CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x000000), AnzahlLEDs - 1)
        basic.showString("A Wins!")
    } else {
        if (SpielerB < 3) {
            SpielerB += 1
            CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x000000), AnzahlLEDs - 1)
            AnzahlLEDs += -1
        }
    }
})
/**
 * NIM Spiel. Spieler A und danach Spieler B dürfen durch 
 * 
 * 1-3maliges Drücken auf Taste A bzw. Taste B bis zu 3 Streichhölzer bzw. LEDs wegnehmen. Wer die letzte LED wegnimmt hat verloren.
 */
let SpielerB = 0
let SpielerA = 0
let AnzahlLEDs = 0
AnzahlLEDs = 12
SpielerA = 0
SpielerB = 0
CalliColor.ShowColorPixel(CalliColor.CalliColorNumberPicker(0xff0000), CalliColor.CalliColorNumberPicker(0xFF7F00), CalliColor.CalliColorNumberPicker(0xFFFE00), CalliColor.CalliColorNumberPicker(0x7FFF00), CalliColor.CalliColorNumberPicker(0x00FF00), CalliColor.CalliColorNumberPicker(0x00FF7F), CalliColor.CalliColorNumberPicker(0x00FFFE), CalliColor.CalliColorNumberPicker(0x007FFF), CalliColor.CalliColorNumberPicker(0x0000FF), CalliColor.CalliColorNumberPicker(0x7F00FF), CalliColor.CalliColorNumberPicker(0xFE00FF), CalliColor.CalliColorNumberPicker(0xFF007F))
basic.showString("NIM")
