import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TimeTable } from ".";
import TimeTableDocs from "./TimeTable.docs.mdx";

export default {
  title: "pagecomponent/pre-course/TimeTable",
  component: TimeTable,
  parameters: {
    docs: {
      page: TimeTableDocs,
    },
  },
} as ComponentMeta<typeof TimeTable>;

const Template: ComponentStory<typeof TimeTable> = () => <TimeTable />;

export const Default = Template.bind({});
