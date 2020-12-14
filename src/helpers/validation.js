export const required = (value) => {
  return value.trim() !== "" && value.trim() !== null;
};

export const fullname = (value) => {
  const regex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  return regex.test(value);
};

export const email = (value) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const number = (value) => {
  const regex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
  return regex.test(value);
};
