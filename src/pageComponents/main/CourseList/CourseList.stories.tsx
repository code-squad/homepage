import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { CourseList } from ".";

export default {
  title: "pagecomponent/main/CourseList",
  component: CourseList,
} as ComponentMeta<typeof CourseList>;

const Template: ComponentStory<typeof CourseList> = () => <CourseList />;

export const Default = Template.bind({});
