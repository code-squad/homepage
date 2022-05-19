import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { EducationFeatures } from ".";

export default {
  title: "pagecomponent/masters/EducationFeatures",
  component: EducationFeatures,
} as ComponentMeta<typeof EducationFeatures>;

const Template: ComponentStory<typeof EducationFeatures> = () => <EducationFeatures />;

export const Default = Template.bind({});
