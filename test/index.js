
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
      [['foo\r\nbar\n'], '\r\n'],
      [['foo\rbar\n'], '\n'],
      [['foo\rbar\r\nn'], '\r\n'],
      /* FALLBACK */
      [[''], '\n'],
      [['', 'foo'], 'foo']
    ];

    tests.forEach ( ([ args, result ]) => {

      t.is ( detect ( ...args ), result );

    });

  });

});
