import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Tag } from ".";

export default {
  title: "component/SButton",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Black = Template.bind({});
Black.args = {
  type: "Black",
  text: "Button",
};

export const Green = Template.bind({});
Green.args = {
  type: "Green",
  text: "Button",
};

export const Orange = Template.bind({});
Orange.args = {
  type: "Orange",
  text: "Button",
};
