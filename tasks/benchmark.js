
/* IMPORT */

import benchmark from 'benchloop';
import detectEOL from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100_000,
});

benchmark ({
  name: 'detect-eol',
  fn: () => {
    detectEOL ( 'foo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\r' );
  }
});
