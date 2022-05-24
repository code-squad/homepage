import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { CourseSchedule } from ".";
import CourseScheduleDocs from "./CourseSchedule.docs.mdx";

export default {
  title: "pagecomponent/masters/CourseSchedule",
  component: CourseSchedule,
  parameters: {
    docs: {
      page: CourseScheduleDocs,
    },
  },
} as ComponentMeta<typeof CourseSchedule>;

const Template: ComponentStory<typeof CourseSchedule> = () => <CourseSchedule />;

export const Default = Template.bind({});
