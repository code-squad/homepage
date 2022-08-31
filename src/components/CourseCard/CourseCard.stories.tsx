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

const listArr = [...Array(3).keys()];
const ListTemplate: ComponentStory<typeof CourseCard> = (args) => (
  <div>
    {listArr.map((v: any) => (
      <div key={v} style={{ margin: "2rem" }}>
        <CourseCard {...args} />
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  category: "프론트엔드",
  title: "자바스크립트",
  cost: "300,000원",
  img: thumbnail.mediumJavascript,
  path: "/code-together/javascript",
  tags: ["대기자 모집중"],
};

export const List = ListTemplate.bind({});
List.args = {
  category: "프론트엔드",
  title: "자바스크립트",
  cost: "300,000원",
  img: thumbnail.mediumJavascript,
  path: "/code-together/javascript",
  tags: ["대기자 모집중"],
};
