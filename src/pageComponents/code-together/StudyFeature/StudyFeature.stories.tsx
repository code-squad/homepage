import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { StudyFeature } from ".";

export default {
  title: "pagecomponent/code-together/StudyFeature",
  component: StudyFeature,
} as ComponentMeta<typeof StudyFeature>;

const Template: ComponentStory<typeof StudyFeature> = () => <StudyFeature />;

export const Default = Template.bind({});
