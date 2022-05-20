import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TeamInterview } from ".";

export default {
  title: "pagecomponent/team-culture/TeamInterview",
  component: TeamInterview,
} as ComponentMeta<typeof TeamInterview>;

const Template: ComponentStory<typeof TeamInterview> = () => <TeamInterview />;

export const Default = Template.bind({});
