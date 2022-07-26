const inputEl = document.getElementById('input')
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

let meterTofeet = 3.281
let feetTometer = 0.3048
let literTogallon = 0.264
let gallonToliter = 3.785411784
let kiloTopound = 2.204
let poundToKilo = 0.4535924
function renderValue() {
  let baseVal = inputEl.value
  lengthEl.textContent = `${baseVal} meter = ${
    baseVal * meterTofeet
  }feet | ${baseVal} meter =${baseVal * feetTometer}feet `

  volumeEl.textContent = `${baseVal} liters = ${
    baseVal * literTogallon
  }gallons | ${baseVal} gallons =${baseVal * gallonToliter}liters `

  massEl.textContent = `${baseVal} kilo = ${
    baseVal * kiloTopound
  }pounds | ${baseVal} pounds =${baseVal * poundToKilo}kilo `
}
convertBtn.addEventListener('click', renderValue)
