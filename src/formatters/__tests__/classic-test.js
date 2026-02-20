import classic from "../classic.js";

describe("classic formatter", () => {
  it("should format", () => {
    expect(
      classic({
        timestamp: new Date(1642452298000),
        level: "debug",
        message:
          "Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.",
      }),
    ).toEqual(
      "[2022-01-17T20:44:58.000Z][debug   ] Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.",
    );
    expect(
      classic({
        timestamp: new Date(1642452298000),
        category: "test",
        level: "info",
        message:
          "Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.",
        stack: "\nStacktrace",
      }),
    ).toEqual(
      "[2022-01-17T20:44:58.000Z][info    ] test - Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.\nStacktrace",
    );
  });
});
