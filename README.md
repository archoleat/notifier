# Notifier

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fnotifier)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fnotifier)
![ESM](https://img.shields.io/badge/ESM-fe0)
![Provenance](https://img.shields.io/badge/Provenance-fo0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/codeql.yaml?label=CodeQL)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/notifier/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

A small, simple and customizable notifier for your projects.

## Installation

```shell
bun i -D @archoleat/notifier
```

## Usage

```js
import { error, info, success, warning, debug } from '@archoleat/notifier';

// In the debug function you can only specify the message and its length.
// Only work in console mode.
await debug({
  message: ['your message'] | 'your message',
});

await info({
  message: [
    'your message',

    // Truncates the message after a specified number of characters.
    /** @default Infinity */
    { length: Infinity },
  ] | 'your message',

  // Enable/disable time, not work in desktop mode.
  /** @default true */
  hasTime: true,

  /** @default 'console' */
  notificationMode: 'console' | 'desktop' | 'multiple',
});
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
