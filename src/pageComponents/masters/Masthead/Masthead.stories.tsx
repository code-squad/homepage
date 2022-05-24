import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Masthead } from ".";
import MastheadDoc from "./Masthead.mdx";

export default {
  title: "pagecomponent/masters/Masthead",
  component: Masthead,
  parameters: {
    docs: {
      page: MastheadDoc,
    },
  },
} as ComponentMeta<typeof Masthead>;

const Template: ComponentStory<typeof Masthead> = () => <Masthead />;

export const Default = Template.bind({});
