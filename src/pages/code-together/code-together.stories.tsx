import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import CodeTogetherPage from ".";

export default {
  title: "page/code-together",
  component: CodeTogetherPage,
} as ComponentMeta<typeof CodeTogetherPage>;

const Template: ComponentStory<typeof CodeTogetherPage> = () => <CodeTogetherPage />;

export const Default = Template.bind({});
