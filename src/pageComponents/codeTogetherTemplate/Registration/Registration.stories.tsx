import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Registration } from ".";
import RegistrationDocs from "./Registration.docs.mdx";

export default {
  title: "pagecomponent/template/code-together/Registration",
  component: Registration,
  parameters: {
    docs: {
      page: RegistrationDocs,
    },
  },
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const Default = Template.bind({});
Default.args = {
  registrations: [
    {
      title: "코드투게더 클린 프론트엔드 과정 대기자 신청하기",
      description: "",
      caption: "교육 기간: 2023년 1월~4월 사이",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSeMe3ql6Ifi9FpHy1yqSrasSq8lqgbhdEvrOhQEP6KB2kwTDA/viewform",
    },
  ],
};
