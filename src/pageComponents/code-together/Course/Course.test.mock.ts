export const CourseQueryResult = {
  mdx: {
    frontmatter: {
      courses: [
        {
          category: "프론트엔드",
          title: "자바스크립트",
          cost: "300,000원",
          img: "mediumJavascript",
          path: "/code-together/javascript",
          tags: ["대기자 모집중"],
        },
        {
          category: "프론트엔드",
          title: "자바스크립트1",
          cost: "300,000원",
          img: "mediumJavascript",
          path: "/code-together/javascript",
          tags: ["대기자 모집중"],
        },
        {
          category: "프론트엔드",
          title: "자바스크립트2",
          cost: "300,000원",
          img: "mediumJavascript",
          path: "/code-together/javascript",
          tags: ["대기자 모집중"],
        },
      ],
    },
  },
};

const makeCourse = (index: number) => ({
  index,
  category: "프론트엔드",
  title: `자바스크립트 ${index}`,
  cost: `${index}00,000원`,
  img: `mediumJavascript${index}`,
  path: "/code-together/javascript",
  tags: ["대기자 모집중"],
});
const makeCourses = (count: number) => {
  const courses = [];
  for (let i = 0; i < count; i++) courses.push(makeCourse(i + 1));

  return courses;
};

export const CourseQueryResult_ForMoreButton = {
  mdx: {
    frontmatter: {
      courses: makeCourses(20),
    },
  },
};
