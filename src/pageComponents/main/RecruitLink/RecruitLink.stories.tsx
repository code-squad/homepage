import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { RecruitLink } from ".";

export default {
  title: "pagecomponent/main/RecruitLink",
  component: RecruitLink,
} as ComponentMeta<typeof RecruitLink>;

const Template: ComponentStory<typeof RecruitLink> = () => <RecruitLink />;

export const Default = Template.bind({});
