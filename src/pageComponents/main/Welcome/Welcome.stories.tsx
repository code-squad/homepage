import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Welcome } from ".";

export default {
  title: "pagecomponent/main/Welcome",
  component: Welcome,
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = () => <Welcome />;

export const Default = Template.bind({});
