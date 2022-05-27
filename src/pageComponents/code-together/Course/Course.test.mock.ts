export const CourseQueryResult = {
  mdx: {
    frontmatter: {
      courses: [
        {
          master: "크롱・ 프론트엔드",
          title: "자바스크립트 Part.1",
          dueDate: "5월 4일 오후 2시 마감",
          cost: "100,000원",
          img: "jsPart1",
          path: "/code-together/javascript",
          tags: ["입문", "초급"],
        },
        {
          master: "크롱・ 프론트엔드",
          title: "자바스크립트 Part.2",
          dueDate: "5월 5일 오후 2시 마감",
          cost: "100,000원",
          img: "jsPart2",
          path: "/code-together/javascript",
          tags: ["입문", "초급"],
        },
        {
          master: "크롱・ 프론트엔드",
          title: "자바스크립트 Part.3",
          dueDate: "5월 6일 오후 2시 마감",
          cost: "100,000원",
          img: "jsPart3",
          path: "/code-together/javascript",
          tags: ["입문", "초급"],
        },
      ],
    },
  },
};

const makeCourse = (index: number) => ({
  index,
  master: "크롱・ 프론트엔드",
  title: `자바스크립트 Part.${index}`,
  dueDate: `5월 ${index} 일 오후 2시 마감`,
  cost: "100,000원",
  img: `jsPart${index}`,
  path: "/code-together/javascript",
  tags: ["입문", "초급"],
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
