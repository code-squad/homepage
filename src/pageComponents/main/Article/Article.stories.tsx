import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Article } from ".";
import ArticleDocs from "./Article.docs.mdx";

export default {
  title: "pagecomponent/main/Article",
  component: Article,
  parameters: {
    docs: {
      page: ArticleDocs,
    },
  },
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = () => <Article />;

export const Default = Template.bind({});
