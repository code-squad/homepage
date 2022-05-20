import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TeamCulture } from ".";

export default {
  title: "pagecomponent/team-culture/TeamCulture",
  component: TeamCulture,
} as ComponentMeta<typeof TeamCulture>;

const Template: ComponentStory<typeof TeamCulture> = () => <TeamCulture />;

export const Default = Template.bind({});
