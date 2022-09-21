import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Theme
import theme from "styles/theme";
// Story-Component
import { SubCourseInfo } from ".";
// Assets
import header from "assets/img/illusts/header";
import icons from "assets/img/icons";

export default {
  title: "component/SubCourseInfo",
  component: SubCourseInfo,
} as ComponentMeta<typeof SubCourseInfo>;

const Template: ComponentStory<typeof SubCourseInfo> = (args) => <SubCourseInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImage: header.desktopPattern3,
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
    { title: "마스터즈", content: "", img: "" as keyof typeof icons },
    { title: "6개월", content: "", img: "calendar" },
    { title: "매달 55만원", content: "6개월 기준 총 396만원", img: "coin" },
    { title: "마스터즈max", content: "", img: "" as keyof typeof icons },
    { title: "10개월", content: "온라인 과정", img: "calendar" },
    { title: "매달 66만원", content: "10개월 기준 총 660만원", img: "coin" },
  ],
};
