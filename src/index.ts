
/* IMPORT */

import {CHAR_CR, CHAR_LF} from './constants';
import {NEWLINE_CR, NEWLINE_CRLF, NEWLINE_LF, NEWLINE_RE} from './constants';
import type {Options} from './types';

/* MAIN */

const detectEOL = ( string: string, { fallback = '\n', window = 1024 }: Options = {} ): string => {

  let CR = 0;
  let CRLF = 0;
  let LF = 0;

  for ( let i = 0, l = Math.min ( string.length, window ); i < l; i++ ) {
    const char = string.charCodeAt ( i );
    if ( char === CHAR_CR ) {
      const next = string.charCodeAt ( i + 1 );
      if ( next === CHAR_LF ) {
        CRLF += 1;
        i += 1;
      } else {
        CR += 1;
      }
    } else if ( char === CHAR_LF ) {
      LF += 1;
    }
  }

  const max = Math.max ( LF, CRLF, CR );

  if ( max ) { // Found something, returning the most common one, ordered from "good newline" to "bad newline"

    if ( max === LF ) return NEWLINE_LF;
    if ( max === CRLF ) return NEWLINE_CRLF;
    if ( max === CR ) return NEWLINE_CR;

  } else { // Nothing found, trying to find a newline after the window

    NEWLINE_RE.lastIndex = window;

    const match = NEWLINE_RE.exec ( string );

    if ( match ) return match[0];

  }

  return fallback;

};

/* EXPORT */

export default detectEOL;
export type {Options};
