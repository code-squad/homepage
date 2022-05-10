import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TeamGlobalNavigationBar } from ".";

export default {
  title: "TeamGlobalNavigationBar",
  component: TeamGlobalNavigationBar,
} as ComponentMeta<typeof TeamGlobalNavigationBar>;

const Template: ComponentStory<typeof TeamGlobalNavigationBar> = () => <TeamGlobalNavigationBar />;

export const Default = Template.bind({});
