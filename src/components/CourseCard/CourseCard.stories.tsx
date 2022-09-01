import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { CourseCard } from ".";
// Assets
import thumbnail from "assets/img/illusts/thumbnail";

export default {
  title: "component/CourseCard",
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>;

const Template: ComponentStory<typeof CourseCard> = (args) => <CourseCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: "프론트엔드",
  title: "자바스크립트",
  cost: "300,000원",
  img: thumbnail.mediumJavascript,
  path: "/code-together/javascript",
  tags: ["대기자 모집중"],
};
