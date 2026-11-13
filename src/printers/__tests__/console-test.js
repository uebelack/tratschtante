import { vi } from "vitest";
import consolePrinter from "../console.js";

describe("console printer", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    ["critical", "error"],
    ["error", "error"],
    ["warning", "warn"],
    ["info", "log"],
    ["debug", "log"],
    ["trace", "log"],
  ])("should print %s messages with console.%s", (level, method) => {
    const spy = vi.spyOn(console, method).mockImplementation(() => {});
    consolePrinter(level, "message");
    expect(spy).toHaveBeenCalledWith("message");
  });
});
