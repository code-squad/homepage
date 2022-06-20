import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { TagNavigationBar } from ".";

export default {
  title: "component/TagNavigationBar",
  component: TagNavigationBar,
} as ComponentMeta<typeof TagNavigationBar>;

const Template: ComponentStory<typeof TagNavigationBar> = (args) => <TagNavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  titles: ["전체", "교육과정", "결제", "취업", "기타"],
  onIndexChanged: action("clicked"),
};
