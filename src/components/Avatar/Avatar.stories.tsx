import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Avatar } from ".";
// Assets
import blankProfile from "assets/images/blank-profile.svg";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Blank = Template.bind({});
Blank.args = {
  src: blankProfile,
};
