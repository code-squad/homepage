function strainMdxInfoBody(data: any) {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return { ...frontmatter, body };
}

export default strainMdxInfoBody;
