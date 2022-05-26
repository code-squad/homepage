import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { StudyMethod } from ".";

export default {
  title: "pagecomponent/code-together/StudyMethod",
  component: StudyMethod,
} as ComponentMeta<typeof StudyMethod>;

const Template: ComponentStory<typeof StudyMethod> = () => <StudyMethod />;

export const Default = Template.bind({});
