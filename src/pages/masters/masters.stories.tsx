import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import MasterPage from ".";

export default {
  title: "page/master",
  component: MasterPage,
} as ComponentMeta<typeof MasterPage>;

const Template: ComponentStory<typeof MasterPage> = () => <MasterPage />;

export const Default = Template.bind({});
