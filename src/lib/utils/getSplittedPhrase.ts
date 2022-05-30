function getSplittedPhrase(phrase: string) {
  if (!phrase) return [];
  return phrase.split("\n\n");
}

export default getSplittedPhrase;
