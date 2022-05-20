import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { BackgroundLink } from ".";

export default {
  title: "component/BackgroundLink",
  component: BackgroundLink,
} as ComponentMeta<typeof BackgroundLink>;

const Template: ComponentStory<typeof BackgroundLink> = (args) => <BackgroundLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#C7E8EF",
  title: "채용 소식 알아보기",
  subtitle: "코드스쿼드의",
  to: "/recurit",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "#B4E791",
  title: "코드스쿼드 소식 받아보기",
  subtitle: "원하는 코스의 오픈 소식을 가장 먼저 알고 싶다면?",
  to: "/recurit",
};

export const OnlyTitle = Template.bind({});
Green.args = {
  backgroundColor: "#B4E791",
  title: "코드스쿼드 채용정보 알아보기",
  to: "/recurit",
};
