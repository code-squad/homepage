import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Story-Component
import { BannerPopup } from ".";

export default {
  title: "BannerPopup",
  component: BannerPopup,
} as ComponentMeta<typeof BannerPopup>;

const Template: ComponentStory<typeof BannerPopup> = (args) => <BannerPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "마스터즈 코스 2023 대기자 접수 중!",
  description: "2022. 12. 00부터 12. 00 오후 1시까지",
  onCloseButtonClicked: action("clicked"),
};
