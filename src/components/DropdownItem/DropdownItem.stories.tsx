import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { DropdownItem } from ".";

export default {
  title: "component/DropdownItem",
  component: DropdownItem,
} as ComponentMeta<typeof DropdownItem>;

const Template: ComponentStory<typeof DropdownItem> = (args) => <DropdownItem {...args} />;

const listArr = [...Array(3).keys()];
const ListTemplate: ComponentStory<typeof DropdownItem> = (args) => (
  <div>
    {listArr.map((v: any) => (
      <div key={v} style={{ margin: "2rem" }}>
        <DropdownItem {...args} />
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  category: "교육과정",
  title: "코드스쿼드는 온라인 수업만 진행하나요?",
  content: "마스터즈 코스는 온오프라인 공간을 모두 활용해 학습하는 것을 지향합니다.",
  editDate: "2019-05-04",
};

export const Link = Template.bind({});
Link.args = {
  category: "교육과정",
  title: "코드스쿼드는 온라인 수업만 진행하나요?",
  link: "https://codesquad.kr",
};

export const List = ListTemplate.bind({});
List.args = {
  category: "교육과정",
  title: "코드스쿼드는 온라인 수업만 진행하나요?",
  content: "마스터즈 코스는 온오프라인 공간을 모두 활용해 학습하는 것을 지향합니다.",
  editDate: "2019-05-04",
};

export const Short = Template.bind({});
Short.args = {
  category: "교육과정",
  title: "코드스쿼드는 온라인 수업만 진행하나요?",
  content: "마스터즈 코스는 온오프라인 공간을 모두 활용해 학습하는 것을 지향합니다.",
  editDate: "2019-05-04",
  short: true,
};
