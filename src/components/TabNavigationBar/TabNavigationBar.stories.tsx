import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { TabNavigationBar } from ".";

export default {
  title: "TabNavigationBar",
  component: TabNavigationBar,
} as ComponentMeta<typeof TabNavigationBar>;

const Template: ComponentStory<typeof TabNavigationBar> = (args) => <TabNavigationBar {...args} />;

export const Cooperate = Template.bind({});
Cooperate.args = {
  titles: ["웹 프론트엔드", "웹 백엔드", "모바일 안드로이드", "모바일 iOS"],
  onIndexChanged: action("onIndexChanged"),
};
