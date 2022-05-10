import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { SButton } from ".";

export default {
  title: "SButton",
  component: SButton,
} as ComponentMeta<typeof SButton>;

const Template: ComponentStory<typeof SButton> = (args) => <SButton {...args} />;

export const Cooperate = Template.bind({});
Cooperate.args = {
  children: "소식 받아보기",
  to: "/subscribe",
  disabled: false,
};
