import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import JavascriptPage from ".";

export default {
  title: "page/code-together/javascript",
  component: JavascriptPage,
} as ComponentMeta<typeof JavascriptPage>;

const Template: ComponentStory<typeof JavascriptPage> = () => <JavascriptPage />;

export const Default = Template.bind({});
