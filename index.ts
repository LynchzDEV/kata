import { Calculator, factorial } from './katas/calculator/calculator'

const calc = new Calculator()

console.log('Calculator Demo:')
console.log('2 + 3 =', calc.add(2, 3))
console.log('10 - 4 =', calc.subtract(10, 4))
console.log('5 * 6 =', calc.multiply(5, 6))
console.log('15 / 3 =', calc.divide(15, 3))
console.log('factorial(5) =', factorial(5))