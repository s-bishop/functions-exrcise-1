"use strict"

function getAreaOfCircle (radius) {
    return (radius ** 2) * 3.14;
}

console.log (getAreaOfCircle(5))

function getCircumferenceOfCircle (radius) {
    return (radius * 2) * 3.14;
}

console.log (getCircumferenceOfCircle(8))

function getAreaOfSquare (side) {
    return side**2;
}

console.log (getAreaOfSquare(6))

function getAreaOfTriangle (base, height) {
    return (base * height) / 2
}

console.log (getAreaOfTriangle(6, 4))