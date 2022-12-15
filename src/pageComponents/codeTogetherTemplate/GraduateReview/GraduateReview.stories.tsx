import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { GraduateReview } from ".";
import GraduateReviewDocs from "./GraduateReview.docs.mdx";

export default {
  title: "pagecomponent/template/code-together/GraduateReview",
  component: GraduateReview,
  parameters: {
    docs: {
      page: GraduateReviewDocs,
    },
  },
} as ComponentMeta<typeof GraduateReview>;

const Template: ComponentStory<typeof GraduateReview> = (arg) => <GraduateReview {...arg} />;

export const Default = Template.bind({});
Default.args = {
  graduateReviewInfo: {
    interviews: [
      {
        writerPhoto: "smallJk",
        nutshell: "원리 파악",
        content:
          "원리를 모르고 사용했던 기능들의 원리를 생각해보고 구현해볼 수 있는 좋은 시간이었습니다",
        writer: "",
        writerInfo: "",
      },
      {
        writerPhoto: "smallCrong",
        nutshell: "협업의 중요성",
        content:
          "다른 팀 분들과 만나서 얘기하는게 즐거웠습니다. 바닐라로 프론트 코드 짜면서 나의 부족한 점도 알게되어서 좋았습니다.",
        writer: "",
        writerInfo: "",
      },
      {
        writerPhoto: "smallHonux",
        nutshell: "코드 리뷰",
        content:
          "프론트엔드 개발자들과 만날 수 있는 시간을 가져서 좋았고, 1:1 코드리뷰와 피드백도 좋았습니다!",
        writer: "",
        writerInfo: "",
      },
    ],
  },
};
