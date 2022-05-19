import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Master } from ".";

export default {
  title: "pagecomponent/main/Master",
  component: Master,
} as ComponentMeta<typeof Master>;

const Template: ComponentStory<typeof Master> = () => <Master />;

export const Default = Template.bind({});
