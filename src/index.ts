
/* DETECT EOL */

function detectEOL ( str: string, fallback: string = '\n' ): string {

  const index = str.indexOf ( '\n' );

  if ( index === -1 ) return str.indexOf ( '\r' ) >= 0 ? '\r' : fallback;

  return str[index - 1] === '\r' ? '\r\n' : '\n';

}

/* EXPORT */

export default detectEOL;
