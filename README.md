# Detect EOL

Quickly detect the EOL used in a string.

It assumes EOLs are used consistenly, for performance, if instead you want some kind of statistical analisys you can use [detect-newline](https://www.npmjs.com/package/detect-newline), which runs about 150 times slower than this even for short strings though.

## Install

```sh
npm install --save detect-eol
```

## Usage

The function has the following shape:

```ts
function ( str: string, fallback: string = '\n' ): string;
```

You can use it like this:

```ts
import detectEOL from 'detect-eol';
import * as OS from 'os';

detectEOL ( 'foo\nbar' ); // => '\n'
detectEOL ( 'foo\r\nbar' ); // => '\r\n'
detectEOL ( 'foo\rbar' ); // => '\r'
detectEOL ( '' ); // => '\n'
detectEOL ( '', OS.EOL ); // => OS.EOL
```

## License

MIT © Fabio Spampinato
