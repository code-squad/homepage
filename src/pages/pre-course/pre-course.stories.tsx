import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import PreCoursePage from ".";

export default {
  title: "page/pre-course",
  component: PreCoursePage,
} as ComponentMeta<typeof PreCoursePage>;

const Template: ComponentStory<typeof PreCoursePage> = () => <PreCoursePage />;

export const Default = Template.bind({});
