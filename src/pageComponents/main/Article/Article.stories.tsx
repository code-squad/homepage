import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Article } from ".";

export default {
  title: "pagecomponent/main/Article",
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = () => <Article />;

export const Default = Template.bind({});
