import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TimeTable } from ".";

export default {
  title: "pagecomponent/code-together/javascript/TimeTable",
  component: TimeTable,
} as ComponentMeta<typeof TimeTable>;

const Template: ComponentStory<typeof TimeTable> = () => <TimeTable />;

export const Default = Template.bind({});
