import { describe, expect, it } from "vitest";
import { COOKIE_NAME, ONE_YEAR_MS } from "./const";

describe("shared constants", () => {
  it("exposes the session cookie name", () => {
    expect(COOKIE_NAME).toBe("app_session_id");
  });

  it("computes one year in milliseconds", () => {
    expect(ONE_YEAR_MS).toBe(1000 * 60 * 60 * 24 * 365);
  });
});
