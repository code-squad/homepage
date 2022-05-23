import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { RefundPolicy } from ".";

export default {
  title: "pagecomponent/refund/RefundPolicy",
  component: RefundPolicy,
} as ComponentMeta<typeof RefundPolicy>;

const Template: ComponentStory<typeof RefundPolicy> = () => <RefundPolicy />;

export const Default = Template.bind({});
