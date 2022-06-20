import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { InterviewSliderWrapper } from ".";
import InterviewSliderWrapperDoc from "./InterviewSliderWrapper.docs.mdx";

export default {
  title: "pagecomponent/masters/InterviewSliderWrapper",
  component: InterviewSliderWrapper,
  parameters: {
    docs: {
      page: InterviewSliderWrapperDoc,
    },
  },
} as ComponentMeta<typeof InterviewSliderWrapper>;

const Template: ComponentStory<typeof InterviewSliderWrapper> = () => <InterviewSliderWrapper />;

export const Default = Template.bind({});
