import { describe, it, expect } from "bun:test";
import { Calculator, factorial } from "./calculator";

describe("Calculator", () => {
  const calc = new Calculator();

  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    it("should add negative numbers", () => {
      expect(calc.add(-2, -3)).toBe(-5);
    });

    it("should throw error for NaN inputs", () => {
      expect(() => calc.add(NaN, 5)).toThrow("First parameter cannot be NaN");
      expect(() => calc.add(5, NaN)).toThrow("Second parameter cannot be NaN");
    });

    it("should throw error for Infinity inputs", () => {
      expect(() => calc.add(Infinity, 5)).toThrow(
        "First parameter must be a finite number"
      );
      expect(() => calc.add(5, Infinity)).toThrow(
        "Second parameter must be a finite number"
      );
      expect(() => calc.add(-Infinity, 5)).toThrow(
        "First parameter must be a finite number"
      );
      expect(() => calc.add(5, -Infinity)).toThrow(
        "Second parameter must be a finite number"
      );
    });

    it("should throw error for non-number inputs", () => {
      expect(() => calc.add("5" as any, 3)).toThrow(
        "First parameter must be a number"
      );
      expect(() => calc.add(5, "3" as any)).toThrow(
        "Second parameter must be a number"
      );
      expect(() => calc.add(undefined as any, 3)).toThrow(
        "First parameter must be a number"
      );
      expect(() => calc.add(5, null as any)).toThrow(
        "Second parameter must be a number"
      );
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });

    it("should throw error for invalid inputs", () => {
      expect(() => calc.subtract(NaN, 3)).toThrow(
        "First parameter cannot be NaN"
      );
      expect(() => calc.subtract(5, Infinity)).toThrow(
        "Second parameter must be a finite number"
      );
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });

    it("should throw error for invalid inputs", () => {
      expect(() => calc.multiply(Infinity, 4)).toThrow(
        "First parameter must be a finite number"
      );
      expect(() => calc.multiply(3, NaN)).toThrow(
        "Second parameter cannot be NaN"
      );
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => calc.divide(10, 0)).toThrow("Division by zero");
    });

    it("should throw error for invalid inputs", () => {
      expect(() => calc.divide(NaN, 2)).toThrow(
        "First parameter cannot be NaN"
      );
      expect(() => calc.divide(10, Infinity)).toThrow(
        "Second parameter must be a finite number"
      );
      expect(() => calc.divide(-Infinity, 2)).toThrow(
        "First parameter must be a finite number"
      );
    });

    it("should validate inputs before checking division by zero", () => {
      expect(() => calc.divide(10, NaN)).toThrow(
        "Second parameter cannot be NaN"
      );
    });
  });
});

describe("factorial", () => {
  it("should calculate factorial of positive numbers", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("should calculate factorial of larger numbers without stack overflow", () => {
    expect(factorial(10)).toBe(3628800);
    expect(factorial(20)).toBe(2432902008176640000);
    // Test a value that would previously cause stack overflow
    expect(factorial(100)).toBe(9.33262154439441e157);
  });

  it("should throw error for negative numbers", () => {
    expect(() => factorial(-1)).toThrow("Factorial of negative number");
  });

  it("should throw error for non-integer inputs", () => {
    expect(() => factorial(5.5)).toThrow("Factorial requires an integer");
    expect(() => factorial(3.14)).toThrow("Factorial requires an integer");
  });

  it("should throw error for inputs too large", () => {
    expect(() => factorial(171)).toThrow("Factorial input too large (max 170)");
    expect(() => factorial(1000)).toThrow(
      "Factorial input too large (max 170)"
    );
  });

  it("should throw error for invalid inputs", () => {
    expect(() => factorial(NaN)).toThrow("Parameter cannot be NaN");
    expect(() => factorial(Infinity)).toThrow(
      "Parameter must be a finite number"
    );
    expect(() => factorial(-Infinity)).toThrow(
      "Parameter must be a finite number"
    );
    expect(() => factorial("5" as any)).toThrow("Parameter must be a number");
    expect(() => factorial(undefined as any)).toThrow(
      "Parameter must be a number"
    );
    expect(() => factorial(null as any)).toThrow("Parameter must be a number");
  });

  it("should handle edge case at maximum allowed input", () => {
    // 170! is the largest factorial that fits in a JavaScript number
    expect(factorial(170)).toBeCloseTo(7.257415615307994e306, 5);
  });
});
