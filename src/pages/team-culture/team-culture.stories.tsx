import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import TeamCulturePage from ".";

export default {
  title: "page/team-culture",
  component: TeamCulturePage,
} as ComponentMeta<typeof TeamCulturePage>;

const Template: ComponentStory<typeof TeamCulturePage> = () => <TeamCulturePage />;

export const Default = Template.bind({});
