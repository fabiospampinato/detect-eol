
/* IMPORT */

import benchmark from 'benchloop';
import detectEOL from '../dist/index.js';

/* HELPERS */

const SAMPLE = 'foo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\r'.repeat ( 1000 );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100_000,
});

benchmark ({
  name: 'detect-eol',
  fn: () => {
    detectEOL ( SAMPLE );
  }
});
