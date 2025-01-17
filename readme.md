# Detect EOL

Quickly detect the EOL used in a string.

## Features

- This returns the most common type of EOL found in the string within a given window length, or the first EOL found after that, or the fallback EOL.
- You can set the window length to 0 to just assume consistent EOLs, for maximum performance.
- You can set the window length to Infinity to scan the entire string, for maximum accuracy.

## Install

```sh
npm install detect-eol
```

## Usage

The function has the following interface:

```ts
function ( string: string, options: { fallback: string = '\n', window: number = 1024 } ): string;
```

You can use it like this:

```ts
import detectEOL from 'detect-eol';
import os from 'os';

// Let's detect the EOL used in some strings

detectEOL ( 'foo\nbar' ); // => '\n'
detectEOL ( 'foo\r\nbar' ); // => '\r\n'
detectEOL ( 'foo\rbar' ); // => '\r'
detectEOL ( '' ); // => '\n'
detectEOL ( '', { fallback: os.EOL } ); // => os.EOL
```

## License

MIT © Fabio Spampinato
