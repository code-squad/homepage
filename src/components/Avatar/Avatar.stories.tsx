import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import blankProfile from "assets/images/blank-profile.svg";

import { Avatar } from ".";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Primary: ComponentStory<typeof Avatar> = () => (
  <Avatar src="assets/images/blank-profile.svg" />
);
