import React from "react";
import { render } from "@testing-library/react";
// Theme
import theme from "styles/theme";
// Testing-Component
import { CourseInfo } from ".";
// Assets
import header from "assets/img/illusts/header";
import icons from "assets/img/icons";
// lib
import { TestProvider } from "lib/testUtils";

describe("<CourseInfo>", () => {
  const props = {
    backgroundImage: header.pattern3,
    backgroundColor: theme.color.primary.green4,
    title: "마스터즈 코스",
    description:
      "마스터즈 코스는 현장처럼 학습하며 분야별 최고의 개발자로 도약하는데 도움을 주는 풀타임 과정 입니다.",
    targets: [
      "프로그래밍 언어를 하나라도 학습해본 경험이 있는 사람",
      "6개월 이상 프로그래밍을 공부해보았고, 동료와 함께 성장하고 싶은 사람",
      "실무 프로그래머로 가는 길이 궁금한 사람",
    ],
    courseInfos: [
      { title: "6개월", content: "", img: icons.calendar },
      { title: "매달 55만원", content: "6개월 기준 총 396만원", img: icons.coin },
    ],
  };
  const renderCourseInfo = () =>
    render(
      <TestProvider>
        <CourseInfo {...props} />
      </TestProvider>
    );
  it("props로 전달된 제목이 보여진다.", async () => {
    const { getByText } = renderCourseInfo();
    const { title } = props;

    getByText(title);
  });
  it("props로 전달된 설명이 보여진다.", async () => {
    const { getByText } = renderCourseInfo();
    const { description } = props;

    getByText(description);
  });
  it("props로 전달된 코스 정보들이 보여진다.", async () => {
    const { getByText, getByAltText } = renderCourseInfo();
    const { courseInfos } = props;

    for (const { title, content } of courseInfos) {
      getByAltText(`course-info-img-${title}`);
      getByText(title + (content ? "/" : ""));
      if (content) getByText(content);
    }
  });
});
