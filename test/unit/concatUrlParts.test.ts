import { describe, expect, it } from "vitest";
import { concatUrlParts } from "../../src/utils/concatUrlParts";

describe("Test concat url fuction", () => {
  const baseUrl = "http://localhost/";
  it("", () => {
    expect(concatUrlParts(baseUrl, "1", "2", "3")).toBe(
      "http://localhost/1/2/3"
    );
  });
  it("", () => {
    expect(concatUrlParts(baseUrl, "string")).toBe("http://localhost/string");
  });
  it("", () => {
    expect(concatUrlParts(baseUrl)).toBe(baseUrl);
  });
  it("", () => {
    expect(concatUrlParts(baseUrl, 1, "2", 3)).toBe("http://localhost/1/2/3");
  });
});
