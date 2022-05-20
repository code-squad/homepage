import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Welfare } from ".";

export default {
  title: "pagecomponent/team-culture/Welfare",
  component: Welfare,
} as ComponentMeta<typeof Welfare>;

const Template: ComponentStory<typeof Welfare> = () => <Welfare />;

export const Default = Template.bind({});
