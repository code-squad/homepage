import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Registration } from ".";

export default {
  title: "component/Registration",
  component: Registration,
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const OneElement = Template.bind({});
OneElement.args = {
  registrations: [
    {
      title: "2023년 마스터즈 대기자 신청하기",
      description: "마스터즈 과정",
      caption: "교육 기간: 2023년 1월~6월",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
  ],
};

export const TwoElements = Template.bind({});
TwoElements.args = {
  registrations: [
    {
      title: "2023년 마스터즈 대기자 신청하기",
      description: "마스터즈 과정",
      caption: "교육 기간: 2023년 1월~6월",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
    {
      title: "2022 하반기 자바스크립트 대기자 신청하기",
      description: "코드투게더 과정",
      caption: "교육 기간: 미정",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSdjZIqBAxYHtBxFjXCUD9B5dAljmbMfuPfVTc-DF2xdn1EuCA/viewform",
    },
  ],
};
