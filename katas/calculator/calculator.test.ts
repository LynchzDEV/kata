import { describe, it, expect } from "vitest";
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
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => calc.divide(10, 0)).toThrow("Division by zero");
    });
  });
});

describe("factorial", () => {
  it("should calculate factorial of positive numbers", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("should throw error for negative numbers", () => {
    expect(() => factorial(-1)).toThrow("Factorial of negative number");
  });
});
