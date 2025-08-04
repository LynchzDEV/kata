/**
 * Validates that a value is a finite number
 * @param value - The value to validate
 * @param paramName - The parameter name for error messages
 * @throws Error if value is not a finite number
 */
function validateFiniteNumber(value: number, paramName: string): void {
  if (typeof value !== "number") {
    throw new Error(`${paramName} must be a number`);
  }
  if (Number.isNaN(value)) {
    throw new Error(`${paramName} cannot be NaN`);
  }
  if (!Number.isFinite(value)) {
    throw new Error(`${paramName} must be a finite number`);
  }
}

export class Calculator {
  add(a: number, b: number): number {
    validateFiniteNumber(a, "First parameter");
    validateFiniteNumber(b, "Second parameter");
    return a + b;
  }

  subtract(a: number, b: number): number {
    validateFiniteNumber(a, "First parameter");
    validateFiniteNumber(b, "Second parameter");
    return a - b;
  }

  multiply(a: number, b: number): number {
    validateFiniteNumber(a, "First parameter");
    validateFiniteNumber(b, "Second parameter");
    return a * b;
  }

  divide(a: number, b: number): number {
    validateFiniteNumber(a, "First parameter");
    validateFiniteNumber(b, "Second parameter");
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
}

export function factorial(n: number): number {
  validateFiniteNumber(n, "Parameter");
  if (n < 0) throw new Error("Factorial of negative number");
  if (!Number.isInteger(n)) throw new Error("Factorial requires an integer");
  if (n > 170) throw new Error("Factorial input too large (max 170)");

  if (n === 0 || n === 1) return 1;

  // Iterative implementation to prevent stack overflow
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
