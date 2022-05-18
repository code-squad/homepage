function removeLineFeed(phrase: string) {
  return phrase.replaceAll("\n\n", " ").replaceAll("\n", " ");
}

export default removeLineFeed;
