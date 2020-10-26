export default (value: string): string => {
  const pattern = /^((http|https):\/\/)/;

  if (!pattern.test(value)) {
    return (value = 'http://' + value);
  }

  return value;
};
