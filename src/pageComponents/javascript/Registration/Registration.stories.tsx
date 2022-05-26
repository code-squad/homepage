import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Registration } from ".";

export default {
  title: "pagecomponent/code-together/javascript/Registration",
  component: Registration,
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = () => <Registration />;

export const Default = Template.bind({});
