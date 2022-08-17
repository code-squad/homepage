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

export const OneElementWithSubtitle = Template.bind({});
OneElementWithSubtitle.args = {
  registrations: [
    {
      title: "대기자 신청하기",
      description: "2023년 마스터즈 코스",
      caption: "",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
  ],
};

export const TwoElementsWithSubtitle = Template.bind({});
TwoElementsWithSubtitle.args = {
  registrations: [
    {
      title: "대기자 신청하기",
      description: "2023년 마스터즈 코스",
      caption: "",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
    {
      title: "2022 하반기 자바스크립트 대기자 신청하기",
      description: "코드투게더 과정",
      caption: "",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSdjZIqBAxYHtBxFjXCUD9B5dAljmbMfuPfVTc-DF2xdn1EuCA/viewform",
    },
  ],
};

export const OneElementWithCaption = Template.bind({});
OneElementWithCaption.args = {
  registrations: [
    {
      title: "대기자 신청하기",
      description: "2023년 마스터즈 코스",
      caption: "교육 기간: 2023년 1월~6월",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
  ],
};

export const TwoElementsWithCaption = Template.bind({});
TwoElementsWithCaption.args = {
  registrations: [
    {
      title: "대기자 신청하기",
      description: "",
      caption: "교육 기간: 2023년 1월~6월",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
    {
      title: "2022 하반기 자바스크립트 대기자 신청하기",
      description: "",
      caption: "교육 기간: 미정",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSdjZIqBAxYHtBxFjXCUD9B5dAljmbMfuPfVTc-DF2xdn1EuCA/viewform",
    },
  ],
};
