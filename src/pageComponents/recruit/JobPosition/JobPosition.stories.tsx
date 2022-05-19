import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { JobPosition } from ".";

export default {
  title: "pagecomponent/recruit/JobPosition",
  component: JobPosition,
} as ComponentMeta<typeof JobPosition>;

const Template: ComponentStory<typeof JobPosition> = () => <JobPosition />;

export const Default = Template.bind({});
