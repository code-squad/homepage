import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { SButton } from ".";

export default {
  title: "component/SButton",
  component: SButton,
} as ComponentMeta<typeof SButton>;

const Template: ComponentStory<typeof SButton> = (args) => <SButton {...args} />;

export const Black = Template.bind({});
Black.args = {
  type: "Black",
  children: "Button",
  to: "/subscription",
};

export const Green = Template.bind({});
Green.args = {
  type: "Green",
  children: "Button",
  to: "/subscription",
};

export const Orange = Template.bind({});
Orange.args = {
  type: "Orange",
  children: "Button",
  to: "/subscription",
};
