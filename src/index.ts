
/* MAIN */

//TODO: Maybe don't assume consistent newlines in the string, and return the most prominent newline in the first 1k of it or something

const detectEOL = ( string: string, fallback: string = '\n' ): string => {

  const index = string.indexOf ( '\n' );

  if ( index === -1 ) {

    return string.indexOf ( '\r' ) >= 0 ? '\r' : fallback;

  } else {

    return string[index - 1] === '\r' ? '\r\n' : '\n';

  }

};

/* EXPORT */

export default detectEOL;
