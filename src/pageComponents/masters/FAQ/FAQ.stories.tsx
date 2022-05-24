import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { FAQ } from ".";
import FAQDocs from "./FAQ.mdx";

export default {
  title: "pagecomponent/masters/FAQ",
  component: FAQ,
  parameters: {
    docs: {
      page: FAQDocs,
    },
  },
} as ComponentMeta<typeof FAQ>;

const Template: ComponentStory<typeof FAQ> = () => <FAQ />;

export const Default = Template.bind({});
