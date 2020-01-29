
/* IMPORT */

const {default: detectEOL} = require ( '../dist' ),
      benchmark = require ( 'benchloop' ),
      detectNewline = require ( 'detect-newline' );

/* BENCHMARK */

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
