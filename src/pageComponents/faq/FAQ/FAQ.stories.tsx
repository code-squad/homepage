import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { FAQ } from ".";
import FAQDocs from "./FAQ.docs.mdx";

export default {
  title: "pagecomponent/faq/FAQ",
  component: FAQ,
  parameters: {
    docs: {
      page: FAQDocs,
    },
  },
} as ComponentMeta<typeof FAQ>;

const Template: ComponentStory<typeof FAQ> = () => <FAQ />;

export const Default = Template.bind({});
