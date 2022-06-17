import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { RefundPolicy } from ".";
import RefundPolicyDocs from "./RefundPolicy.docs.mdx";

export default {
  title: "pagecomponent/refund/RefundPolicy",
  component: RefundPolicy,
  parameters: {
    docs: {
      page: RefundPolicyDocs,
    },
  },
} as ComponentMeta<typeof RefundPolicy>;

const Template: ComponentStory<typeof RefundPolicy> = () => <RefundPolicy />;

export const Default = Template.bind({});
