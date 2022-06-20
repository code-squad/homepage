import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import FAQPage from ".";

export default {
  title: "page/faq",
  component: FAQPage,
} as ComponentMeta<typeof FAQPage>;

const Template: ComponentStory<typeof FAQPage> = () => <FAQPage />;

export const Default = Template.bind({});
