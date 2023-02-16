
/* IMPORT */

import {describe} from 'fava';
import detect from '../dist/index.js';

/* MAIN */

describe ( 'Detect EOL', it => {

  it ( 'works', t => {

    const tests = [
      /* SIMPLE */
      [['foo\nbar'], '\n'],
      [['foo\r\nbar'], '\r\n'],
      [['foo\rbar'], '\r'],
      /* START */
      [['\nbar'], '\n'],
      [['\r\nbar'], '\r\n'],
      [['\rbar'], '\r'],
      /* END */
      [['foo\n'], '\n'],
      [['foo\r\n'], '\r\n'],
      [['foo\r'], '\r'],
      /* MIXED */
      [['foo\nbar\r\n'], '\n'],
      [['foo\nbar\r'], '\n'],
      [['foo\r\nbar\r'], '\r\n'],
      [['foo\r\nbar\n'], '\n'],
      [['foo\rbar\n'], '\n'],
      [['foo\rbar\r\nn'], '\r\n'],
      /* STATISTICAL */
      [['foo\nbar\rbaz\r\nqux\r\n'], '\r\n'],
      [['foo\r\nbar\nbaz\rqux\r'], '\r'],
      [['foo\r\nbar\rbaz\nqux\n'], '\n'],
      /* FALLBACK */
      [[''], '\n'],
      [['', { fallback: 'foo' }], 'foo'],
      /* WINDOW */
      [['\r\n', { window: 0 }], '\r\n'],
      [['\r\n', { window: 1 }], '\r\n']
    ];

    tests.forEach ( ([ args, result ]) => {

      t.is ( detect ( ...args ), result );

    });

  });

});
