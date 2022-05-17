import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Subscription } from ".";

export default {
  title: "Subscription",
  component: Subscription,
} as ComponentMeta<typeof Subscription>;

const Template: ComponentStory<typeof Subscription> = (args) => <Subscription {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#C7E8EF",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "#B4E791",
};
