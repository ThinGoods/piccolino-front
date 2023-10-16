export function capitalize(str: string) {
  if (str.length == 0) {
    return ''
  }

  const upperLetter = str[0].toUpperCase();

  if (str.length == 1) {
    return upperLetter;
  }

  const restString = str.slice(1);

  return upperLetter + restString
}
