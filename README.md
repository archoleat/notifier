# Notifier

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fnotifier)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fnotifier)
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
bun i @archoleat/notifier
```

Use `bun i -D @archoleat/notifier` if only development scripts import it.

## Usage

```js
import { error, info, success, warning } from '@archoleat/notifier';

await info({ message: 'Build started.', hasTime: false });
await success({ message: 'Build finished.' });
await warning({ message: ['This message will be truncated.', { maxLength: 20 }] });
await error({ message: 'Build failed.', notificationMode: 'console' });
```

All four functions accept the same options and return a Promise. Await the
call so desktop notification failures can be handled by the caller.

Accepted options, shown separately from the executable example:

```ts
type Options = {
  message: string | [string, { maxLength: number }];
  hasTime?: boolean;
  notificationMode?: 'console' | 'desktop' | 'multiple';
};
```

- `message` is required. The tuple form truncates text to `maxLength`.

- `hasTime` defaults to `true`; it affects console output only.

- `notificationMode` defaults to `'console'`. Use `'desktop'` for operating
  system notifications or `'multiple'` for both outputs.

Desktop mode uses the operating system's notification service and requires
its notification permissions. Use console mode in CI and other environments
without a desktop session.

On macOS without Rosetta, desktop notifications fall back to the system
notification service. This fallback uses the host application's notification
permissions and does not display custom icons.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
