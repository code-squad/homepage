import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import RecruitPage from ".";

export default {
  title: "page/recruit",
  component: RecruitPage,
} as ComponentMeta<typeof RecruitPage>;

const Template: ComponentStory<typeof RecruitPage> = () => <RecruitPage />;

export const Default = Template.bind({});
