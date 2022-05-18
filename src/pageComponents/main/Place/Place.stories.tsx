import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Place } from ".";

export default {
  title: "pagecomponent/main/Place",
  component: Place,
} as ComponentMeta<typeof Place>;

const Template: ComponentStory<typeof Place> = () => <Place />;

export const Default = Template.bind({});
