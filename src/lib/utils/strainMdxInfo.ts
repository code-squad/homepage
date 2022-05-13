function strainMdxInfo(data: any, key: string) {
  const { mdx } = data;
  const { frontmatter } = mdx;

  return frontmatter[key];
}

export default strainMdxInfo;
