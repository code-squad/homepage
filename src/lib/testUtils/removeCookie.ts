function removeCookie(name: string) {
  document.cookie = `name=${name}; expires=1 Jan 1970 00:00:00 GMT;`;
}

export default removeCookie;
