import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Feature } from ".";

export default {
  title: "pagecomponent/main/Feature",
  component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = () => <Feature />;

export const Default = Template.bind({});
