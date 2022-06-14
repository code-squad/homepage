function strainAllMdxInfoBody(data: any) {
  const { allMdx } = data;
  const { edges } = allMdx;
  return edges.map(({ node }: any) => ({ ...node.frontmatter, body: node.body }));
}

export default strainAllMdxInfoBody;
