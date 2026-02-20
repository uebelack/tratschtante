import emoji from "../emoji.js";

describe("emoji formatter", () => {
  it("should format", () => {
    expect(
      emoji({
        timestamp: new Date(1642452298000),
        level: "debug",
        message:
          "Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.",
      }),
    ).toEqual(
      "2022-01-17T20:44:58.000Z \u{1F41B} Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.",
    );
    expect(
      emoji({
        timestamp: new Date(1642452298000),
        category: "test",
        level: "error",
        message:
          "Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.",
        stack: "\nStacktrace",
      }),
    ).toEqual(
      "2022-01-17T20:44:58.000Z \u{274C} test - Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.\nStacktrace",
    );
  });
});
