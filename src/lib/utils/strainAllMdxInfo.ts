function strainAllMdxInfo(data: any) {
  const { allMdx } = data;
  const { edges } = allMdx;
  return edges.map((v: any) => v.node.frontmatter);
}

export default strainAllMdxInfo;
