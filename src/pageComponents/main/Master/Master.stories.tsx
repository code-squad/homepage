import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Master } from ".";
import MasterDocs from "./Master.docs.mdx";

export default {
  title: "pagecomponent/main/Master",
  component: Master,
  parameters: {
    docs: {
      page: MasterDocs,
    },
  },
} as ComponentMeta<typeof Master>;

const Template: ComponentStory<typeof Master> = () => <Master />;

export const Default = Template.bind({});
