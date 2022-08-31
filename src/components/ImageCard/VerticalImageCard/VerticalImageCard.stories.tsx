import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { VerticalImageCard } from ".";
// Assets
import illusts from "assets/img/illusts/feature";

export default {
  title: "component/VerticalImageCard",
  component: VerticalImageCard,
  argTypes: {
    img: { control: "disable" },
  },
} as ComponentMeta<typeof VerticalImageCard>;

const Template: ComponentStory<typeof VerticalImageCard> = (args) => (
  <VerticalImageCard {...args} />
);

export const Description = Template.bind({});
Description.args = {
  title: "미션과 협력 중심의 학습",
  description:
    "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
  img: illusts.edu1,
};

export const DescriptionList = Template.bind({});
DescriptionList.args = {
  title: "미션과 협력 중심의 학습",
  descriptions: [
    "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
    "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
  ],
  img: illusts.edu1,
};
