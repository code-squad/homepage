function strainMdxInfo(data: any) {
  const { mdx } = data;
  const { frontmatter } = mdx;

  return frontmatter;
}

export default strainMdxInfo;
