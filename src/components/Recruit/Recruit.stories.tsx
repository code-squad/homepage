import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Recruit } from ".";

export default {
  title: "Recruit",
  component: Recruit,
} as ComponentMeta<typeof Recruit>;

const Template: ComponentStory<typeof Recruit> = (args) => <Recruit {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#C7E8EF",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "#B4E791",
};
