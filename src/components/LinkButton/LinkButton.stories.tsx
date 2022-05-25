import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { LinkButton } from ".";
// Assets
import icons from "assets/img/icons";

export default {
  title: "component/LinkButton",
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

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
  icon: icons.masters,
};
