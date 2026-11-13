# Changelog

## [2.0.0] - 2026-11-13

### Breaking changes

- 💥 add exports map, deep imports into src/ are no longer supported
- 💥 require Node.js 24

### Features

- ✨ ship typed declarations for options, logger, formatters and printers

### Bug fixes

- 🐛 ignore formatter and printer names inherited from Object.prototype
- 🐛 look up printer names in printers instead of formatters

### Dependencies

- ⬆️ update TypeScript to 7 and regenerate type declarations

### Documentation

- 📝 mention bundled type declarations

### Tests

- ✅ cover the console printer instead of ignoring it
- ✅ migrate from Jest to Vitest
- ✅ add assertions to smoke test of the logger

### CI

- 👷 add release workflow and git-cliff config
- 👷 run on pnpm with Node 24 and 26 and check type declarations

### Chores

- 📦 whitelist published files, complete package metadata and fix README
- 🔧 replace ESLint and Prettier with oxlint and oxfmt
- 🔧 migrate from Yarn to pnpm

## [1.0.0] - 2026-02-20

### Bug fixes

- fixed dependabot config
- fixed build url

### Chores

- 🔧 upgrade dependencies and tooling to latest versions

### Other

- :arrow_up: Bump typescript from 5.3.3 to 5.4.5
- :arrow_up: Bump eslint-plugin-jest from 27.9.0 to 28.5.0
- :arrow_up: Bump eslint from 8.56.0 to 8.57.0
- added new lambda formatter
- added typescript types
- updated to module
- :ok_hand: maintenance release

## [0.0.3] - 2022-07-15

### Other

- :ok_hand: maintenance

## [0.0.2] - 2022-01-24

### Other

- v0.0.2
- :wrench: added license file

## [0.0.1] - 2022-01-24

### Other

- :art: fixed babel config
- :ok_hand: small fixes
- :pencil: fix batch in readme
- :ok_hand: fixing ci build
- :tada: initial commit
