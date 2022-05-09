function getCurrentPath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export default getCurrentPath;
