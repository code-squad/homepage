function strainFrontmatterInfoBody(data: any) {
  const { frontmatter, body } = data;

  return { ...frontmatter, body };
}

export default strainFrontmatterInfoBody;
