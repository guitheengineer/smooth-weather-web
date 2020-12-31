export const capitalize = (word: string | null | unknown) => {
  if (typeof word !== 'string') {
    return '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};
