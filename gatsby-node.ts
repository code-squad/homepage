exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query slug {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  console.log(data.allMdx.nodes.filter((v) => v.slug.match("code-together/course/")));
};
