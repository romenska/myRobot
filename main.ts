input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    IsLeg = 0
    IsFoot = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    IsLeg = 0
    IsFoot = 0
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P3, 90)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    IsLeg = 1
    IsFoot = 0
})
let IsFoot = 0
let IsLeg = 0
basic.showIcon(IconNames.Happy)
IsLeg = 1
IsFoot = 1
let Direct_foot_right = 1
let Direct_foot_left = 0
let Direct_leg_right = 0
let Direct_leg_left = -1
let Foot_left = 90
let Foot_right = 90
let Leg_left = 90
let Leg_right = 90
pins.servoWritePin(AnalogPin.P0, Foot_right)
pins.servoWritePin(AnalogPin.P1, Leg_right)
pins.servoWritePin(AnalogPin.P2, Foot_left)
pins.servoWritePin(AnalogPin.P3, Leg_left)
basic.forever(function () {
    if (IsFoot == 1) {
        Foot_right += Direct_foot_right
        Foot_left += Direct_foot_left
        pins.servoWritePin(AnalogPin.P0, Foot_right)
        pins.servoWritePin(AnalogPin.P2, Foot_left)
        if (Foot_right >= 180 || Foot_right <= 0) {
            Direct_foot_right = Direct_foot_right * -1
        }
        if (Foot_left >= 180 || Foot_left <= 0) {
            Direct_foot_left = Direct_foot_left * -1
        }
    }
    if (IsLeg == 1) {
        Leg_right += Direct_leg_right
        Leg_left += Direct_leg_left
        pins.servoWritePin(AnalogPin.P1, Leg_right)
        pins.servoWritePin(AnalogPin.P3, Leg_left)
        if (Leg_right >= 130 || Leg_right <= 40) {
            Direct_leg_right = Direct_leg_right * -1
        }
        if (Leg_left >= 130 || Leg_left <= 40) {
            Direct_leg_left = Direct_leg_left * -1
        }
    }
})
