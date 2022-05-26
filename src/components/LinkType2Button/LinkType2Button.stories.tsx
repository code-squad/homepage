import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { LinkType2Button } from ".";

export default {
  title: "component/LinkType2Button",
  component: LinkType2Button,
} as ComponentMeta<typeof LinkType2Button>;

const Template: ComponentStory<typeof LinkType2Button> = (args) => <LinkType2Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: "코드스쿼드의 정규 교육 과정",
  title: "마스터즈 코스",
  to: "https://codesquad.kr",
};

export const Icon = Template.bind({});
Icon.args = {
  description: "코드스쿼드의 정규 교육 과정",
  title: "마스터즈 코스",
  to: "https://codesquad.kr",
};
