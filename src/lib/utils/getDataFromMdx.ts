function getDataFromMdx(data: any) {
  return data.nodes.map(({ frontmatter }: any) => frontmatter);
}

export default getDataFromMdx;
