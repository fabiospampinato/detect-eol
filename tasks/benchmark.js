
/* IMPORT */

import benchmark from 'benchloop';
import {detectNewline} from 'detect-newline';
import detectEOL from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'detect-eol',
  fn: () => {
    detectEOL ( 'foo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\r' );
  }
});

benchmark ({
  name: 'detect-newline',
  fn: () => {
    detectNewline ( 'foo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\rfoo\nbar\r\nbaz\r' );
  }
});
