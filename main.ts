/**
 * a-My father
 * 
 * b-My mother
 * 
 * a+b-Me
 * 
 * logo-My Family
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("BV")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Dhruva")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Sri")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("My Family")
})
