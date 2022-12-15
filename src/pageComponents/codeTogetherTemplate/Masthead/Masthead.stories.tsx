import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Masthead } from ".";
import MastheadDocs from "./Masthead.docs.mdx";

export default {
  title: "pagecomponent/template/code-together/Masthead",
  component: Masthead,
  parameters: {
    docs: {
      page: MastheadDocs,
    },
  },
} as ComponentMeta<typeof Masthead>;

const Template: ComponentStory<typeof Masthead> = (args) => <Masthead {...args} />;

export const Default = Template.bind({});
Default.args = {
  mastheadInfo: {
    title: "클린 프론트엔드 개발",
    description:
      "클린 자바스크립트 개발 패턴을 익힙니다.\n다양한 웹 프론트엔드 지식을 바닐라 자바스크립트로 익혀 FrontEnd Framework에 필요한 개념을 이해합니다.",
    targets: [
      "프론트엔드 주니어 개발자(1년차 ~ 3년차 수준)",
      "웹 프론트엔드 자바스크립트의 다양한 개발 패턴을 배우고 싶은 분",
    ],
    courseInfos: [
      {
        title: "4주",
        content: "",
        img: "calendar",
      },
      {
        title: "매주 월•화•수, 오후 7시~10시",
        content: "",
        img: "clock",
      },
      {
        title: "파트 당 44만원",
        content: "",
        img: "coin",
      },
    ],
  },
};
