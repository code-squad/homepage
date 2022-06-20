import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { MButton } from ".";

export default {
  title: "component/MButton",
  component: MButton,
} as ComponentMeta<typeof MButton>;

const Template: ComponentStory<typeof MButton> = (args) => <MButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  accent: false,
  disabled: false,
  to: "/masters",
};

export const Accent = Template.bind({});
Accent.args = {
  children: "Button",
  accent: true,
  disabled: false,
  to: "/masters",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  accent: false,
  disabled: true,
  to: "/masters",
};
