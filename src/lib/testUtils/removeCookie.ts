function removeCookie(name: string) {
  document.cookie = `${name}=1; expires=1 Jan 1970 00:00:00 GMT;`;
}

export default removeCookie;
