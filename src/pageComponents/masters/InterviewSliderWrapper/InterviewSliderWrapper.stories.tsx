import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { InterviewSliderWrapper } from ".";

export default {
  title: "pagecomponent/masters/InterviewSliderWrapper",
  component: InterviewSliderWrapper,
} as ComponentMeta<typeof InterviewSliderWrapper>;

const Template: ComponentStory<typeof InterviewSliderWrapper> = () => <InterviewSliderWrapper />;

export const Default = Template.bind({});
