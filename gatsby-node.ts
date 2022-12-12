import path from "path";
import { type GatsbyNode } from "gatsby";

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql<{ allMdx: any }>(`
    query {
      allMdx {
        nodes {
          frontmatter {
            templateKey
            path
          }
        }
      }
    }
  `);

  if (!data) return;

  const pathArr = data.allMdx.nodes.filter(({ frontmatter }: { frontmatter: any }) => {
    return frontmatter?.path?.match("code-together/course/");
  });

  const onlyPathArr: string[] = pathArr.map(({ frontmatter }: { frontmatter: any }) => {
    return frontmatter.path;
  });

  const slugList: string[] = [...new Set(onlyPathArr)];

  const codeTogetherTemplate = path.resolve("src/template/codeTogetherTemplate.tsx");

  slugList.forEach((slug: string) => {
    const locationArr = slug.split("/");
    const courseName = locationArr[locationArr.length - 1];
    createPage({
      path: `/${slug}`,
      component: codeTogetherTemplate,
      context: {
        masthead: `codeTogether_${courseName}_masthead`,
        registration: `codeTogether_${courseName}_plan`,
        deatilCurriculum: `codeTogether_${courseName}_part*`,
        timetable: `codeTogether_${courseName}_plan`,
        graduateReview: `codeTogether_${courseName}_reviews`,
      },
    });
  });
};

export { createPages };
