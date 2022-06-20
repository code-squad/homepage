import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Course } from ".";
import CourseDocs from "./Course.docs.mdx";

export default {
  title: "pagecomponent/code-together/Course",
  component: Course,
  parameters: {
    docs: {
      page: CourseDocs,
    },
  },
} as ComponentMeta<typeof Course>;

const Template: ComponentStory<typeof Course> = () => <Course />;

export const Default = Template.bind({});
