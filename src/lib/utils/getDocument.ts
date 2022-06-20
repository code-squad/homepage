function getDocument() {
  if (typeof document === "undefined") return null;
  return document;
}

export default getDocument;
