import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Welfare } from ".";
import WelfareDocs from "./Welfare.doc.mdx";

export default {
  title: "pagecomponent/team-culture/Welfare",
  component: Welfare,
  parameters: {
    docs: {
      page: WelfareDocs,
    },
  },
} as ComponentMeta<typeof Welfare>;

const Template: ComponentStory<typeof Welfare> = () => <Welfare />;

export const Default = Template.bind({});
