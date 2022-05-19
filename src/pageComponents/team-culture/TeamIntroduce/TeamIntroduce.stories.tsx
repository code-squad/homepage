import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TeamIntroduce } from ".";

export default {
  title: "pagecomponent/team-culture/TeamIntroduce",
  component: TeamIntroduce,
} as ComponentMeta<typeof TeamIntroduce>;

const Template: ComponentStory<typeof TeamIntroduce> = () => <TeamIntroduce />;

export const Default = Template.bind({});
