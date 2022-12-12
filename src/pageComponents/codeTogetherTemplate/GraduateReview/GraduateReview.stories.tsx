import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { GraduateReview } from ".";
import GraduateReviewDocs from "./GraduateReview.docs.mdx";

export default {
  title: "pagecomponent/code-together/javascript/GraduateReview",
  component: GraduateReview,
  parameters: {
    docs: {
      page: GraduateReviewDocs,
    },
  },
} as ComponentMeta<typeof GraduateReview>;

const Template: ComponentStory<typeof GraduateReview> = () => <GraduateReview />;

export const Default = Template.bind({});
