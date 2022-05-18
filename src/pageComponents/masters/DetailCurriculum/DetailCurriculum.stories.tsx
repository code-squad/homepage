import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { DetailCurriculum } from ".";

export default {
  title: "pagecomponent/masters/DetailCurriculum",
  component: DetailCurriculum,
} as ComponentMeta<typeof DetailCurriculum>;

const Template: ComponentStory<typeof DetailCurriculum> = (args) => <DetailCurriculum />;

export const Default = Template.bind({});
