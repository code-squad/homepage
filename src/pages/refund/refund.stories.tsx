import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import RefundPage from ".";

export default {
  title: "page/refund",
  component: RefundPage,
} as ComponentMeta<typeof RefundPage>;

const Template: ComponentStory<typeof RefundPage> = () => <RefundPage />;

export const Default = Template.bind({});
