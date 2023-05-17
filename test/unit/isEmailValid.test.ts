import { describe, expect, it } from "vitest";
import { isEmailValid } from "../../src/utils/isEmailValid";

describe("Email Validation", () => {
  it("should return true for a valid email address", () => {
    const validEmail = "test@example.com";
    const isValid = isEmailValid(validEmail);
    expect(isValid).toBe(true);
  });

  it("should return false for an invalid email address", () => {
    const invalidEmail = "notanemail";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it("should return false for an invalid email address", () => {
    const invalidEmail = "notanemail@";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it("should return false for an invalid email address", () => {
    const invalidEmail = "test@example";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it("should return false for an invalid email address", () => {
    const invalidEmail = "testexample.com";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });
});
