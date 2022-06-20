import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Culture } from ".";
import CultureDocs from "./Culture.docs.mdx";

export default {
  title: "pagecomponent/main/Culture",
  component: Culture,
  parameters: {
    docs: {
      page: CultureDocs,
    },
  },
} as ComponentMeta<typeof Culture>;

const Template: ComponentStory<typeof Culture> = () => <Culture />;

export const Default = Template.bind({});
