import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { EducationFeatures } from ".";

export default {
  title: "pagecomponent/EducationFeatures",
  component: EducationFeatures,
} as ComponentMeta<typeof EducationFeatures>;

const Template: ComponentStory<typeof EducationFeatures> = (args) => <EducationFeatures />;

export const Default = Template.bind({});
