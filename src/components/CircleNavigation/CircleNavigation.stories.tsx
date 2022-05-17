import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { CircleNavigation } from ".";

export default {
  title: "component/CircleNavigation",
  component: CircleNavigation,
} as ComponentMeta<typeof CircleNavigation>;

const Template: ComponentStory<typeof CircleNavigation> = (args) => <CircleNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
  index: 0,
  onIndexChanged: action("clicked"),
};
