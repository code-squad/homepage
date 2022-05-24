import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { EButton } from ".";

export default {
  title: "component/EButton",
  component: EButton,
} as ComponentMeta<typeof EButton>;

const Template: ComponentStory<typeof EButton> = (args) => <EButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  accent: false,
  disabled: false,
  onClick: action("onClick handler called."),
};

export const Accent = Template.bind({});
Accent.args = {
  children: "Button",
  accent: true,
  disabled: false,
  onClick: action("onClick handler called."),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  accent: false,
  disabled: true,
  onClick: action("onClick handler called."),
};
