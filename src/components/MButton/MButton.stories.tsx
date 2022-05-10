import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { MButton } from ".";

export default {
  title: "MButton",
  component: MButton,
} as ComponentMeta<typeof MButton>;

const Template: ComponentStory<typeof MButton> = (args) => <MButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "소식 받아보기",
  accent: false,
  disabled: false,
  to: "/subscribe",
};

export const Accent = Template.bind({});
Accent.args = {
  children: "소식 받아보기",
  accent: true,
  disabled: false,
  to: "/subscribe",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "소식 받아보기",
  accent: false,
  disabled: true,
  to: "/subscribe",
};
