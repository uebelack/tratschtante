<div id="top"></div>

[![Build][build-shield]][build-url]
[![Coverage][coverage-shield]][coverage-url]
[![Language][language-shield]][language-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/uebelack/tratschtante">
    <img src="./screenshot.png" alt="Logo" style="max-width: 906px;">
  </a>

<h1 align="center">tratschtante</h1>
  <p align="center">
    Just another logging library for node.js.
  </p>
</div>

## About

`tratschtante` is just another simple logging library for node.js, that just works.

Every time I wanted to add logging to my node.js application, I didn't know which library to use or everything I found was too cumbersome and too incomprehensive. I just want to write logs with timestamp log level and maybe with some color to the console.

If you are looking for something simple like this, try this library, if you are looking for something extensive super great, then you should have a look at: [winston](https://github.com/winstonjs/winston).

## Quick Start

Requires Node.js 24 or newer.

```bash
npm install tratschtante / pnpm add tratschtante
```

```javascript
import tratschtante from "tratschtante";

const log = tratschtante();
log.info("Hello World!");
```

Type declarations are included, so TypeScript users get typed options and logger methods out of the box.

## Options

You can pass following options as function parameter or set them via environment variable:

| name      | environment                            | default   | possibilities                                                                   |
| --------- | -------------------------------------- | --------- | ------------------------------------------------------------------------------- |
| formatter | TRATSCHTANTE_FORMATTER                 | 'modern'  | 'modern', 'classic', 'json', 'lambda', 'emoji' or custom formatter as function. |
| printer   | TRATSCHTANTE_PRINTER                   | 'console' | 'console' or custom printer as function.                                        |
| category  |                                        | undefined | any string                                                                      |
| level     | TRATSCHTANTE_LOG_LEVEL, NODE_LOG_LEVEL | 'info'    | 'trace', 'debug', 'info', 'warning', 'error', 'critical',                       |

Example:

```javascript
import tratschtante from "tratschtante";

const log = tratschtante({
  category: "api",
  printer: "console",
  formatter: "json",
});

log.info("Hello World!");
```

## Usage

Some code to just see how it works:

```javascript
import tratschtante from "tratschtante";

const log = tratschtante({
  category: "api",
  printer: (entry) => axios.post("http://localhost:3000/log", entry),
  formatter: (entry) => JSON.stringify(entry),
});

log.info("Hello World!");

log.debug(() => JSON.stringify({ key: "value" }));

try {
  throw new Error("Something went wrong");
} catch (error) {
  log.error(error);
}
```

## License

MIT License. See `LICENSE.txt` for more information.

[build-shield]: https://img.shields.io/github/actions/workflow/status/uebelack/tratschtante/ci.yml?branch=main&style=for-the-badge
[build-url]: https://github.com/uebelack/tratschtante/actions/workflows/ci.yml
[language-shield]: https://img.shields.io/github/languages/top/uebelack/tratschtante.svg?style=for-the-badge
[language-url]: https://github.com/uebelack/tratschtante
[coverage-shield]: https://img.shields.io/coveralls/github/uebelack/tratschtante.svg?style=for-the-badge
[coverage-url]: https://coveralls.io/github/uebelack/tratschtante
[license-shield]: https://img.shields.io/github/license/uebelack/tratschtante.svg?style=for-the-badge
[license-url]: https://github.com/uebelack/tratschtante/blob/main/LICENSE.txt
