import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { FAQ } from ".";

export default {
  title: "pagecomponent/masters/FAQ",
  component: FAQ,
} as ComponentMeta<typeof FAQ>;

const Template: ComponentStory<typeof FAQ> = () => <FAQ />;

export const Default = Template.bind({});
