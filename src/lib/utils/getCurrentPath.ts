function getCurrentPath() {
  if (typeof window !== "undefined") return window.location.pathname;
  return "";
}

export default getCurrentPath;
