import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { RectangleNavigation } from ".";

export default {
  title: "component/RectangleNavigation",
  component: RectangleNavigation,
} as ComponentMeta<typeof RectangleNavigation>;

const Template: ComponentStory<typeof RectangleNavigation> = (args) => (
  <RectangleNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 3,
  index: 0,
  onIndexChanged: action("clicked"),
};
