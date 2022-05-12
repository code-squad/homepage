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

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  to: "/subscription",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  to: "/subscription",
  disabled: true,
};
