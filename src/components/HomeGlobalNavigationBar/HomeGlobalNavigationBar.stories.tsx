import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { HomeGlobalNavigationBar } from ".";

export default {
  title: "HomeGlobalNavigationBar",
  component: HomeGlobalNavigationBar,
} as ComponentMeta<typeof HomeGlobalNavigationBar>;

const Template: ComponentStory<typeof HomeGlobalNavigationBar> = () => <HomeGlobalNavigationBar />;

export const Default = Template.bind({});
