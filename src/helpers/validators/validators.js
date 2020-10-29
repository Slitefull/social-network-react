export const required = value => {
  if (value) return null;
  return "Field is required";
}

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return null;
}