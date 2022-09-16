import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Masthead } from ".";

export default {
  title: "pagecomponent/pre-course/Masthead",
  component: Masthead,
} as ComponentMeta<typeof Masthead>;

const Template: ComponentStory<typeof Masthead> = () => <Masthead />;

export const Default = Template.bind({});
