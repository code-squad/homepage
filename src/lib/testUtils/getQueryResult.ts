function getQueryResultData(queryResult: any, property: string) {
  const {
    mdx: { frontmatter },
  } = queryResult;
  return frontmatter[property];
}

export default getQueryResultData;
