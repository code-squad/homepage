import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { ImageCard } from ".";
// Assets
import missionAndCooperate from "assets/images/mission-and-cooperate.svg";

export default {
  title: "ImageCard",
  component: ImageCard,
  argTypes: {
    img: { control: "disable" },
  },
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => <ImageCard {...args} />;

export const Cooperate = Template.bind({});
Cooperate.args = {
  title: "미션과 협력 중심의 학습",
  description:
    "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
  img: missionAndCooperate,
};
