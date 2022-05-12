import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Interview } from ".";

export default {
  title: "Interview",
  component: Interview,
} as ComponentMeta<typeof Interview>;

const Template: ComponentStory<typeof Interview> = (args) => <Interview {...args} />;

export const Default = Template.bind({});
Default.args = {
  subtitle: "코드스쿼드의 교육을 경험한",
  title: "졸업생 후기",
  interviews: [
    {
      writerPhoto: "assets/images/blank-profile.svg",
      nutshell: "내가 선택한 자율에 대한 책임을 키우는 곳",
      content:
        "코드스쿼드의 모든 배움은 선택에 의해 이루어집니다. 정해진 기간 내에 어떤 규칙을 따를지, 무엇을 학습할지 스스로 선택하고 이행하기 때문에 그 결과에 대한 책임 또한 자신이 지게 됩니다. 이는 과정을 수행하는 동안 굉장한 몰입감과 만족감을 주었고 후회없는 경험을 선물로 받았습니다.",
      writer: "작성자",
      writerInfo: "Tami, 중고나라",
    },
    {
      writerPhoto: "assets/images/blank-profile.svg",
      nutshell:
        "누구도 강요하지 않고 엄격한 규칙도 없기에 서로를 향한 존중을 바탕으로 성장할 수 있는 문화를 만들어나가는 것이 중요합니다",
      content:
        "코드스쿼드는 이런 걸 해낼 수 있는 사람들이 모인 집단이기에 저 또한 자율, 책임, 존중 이 세 가지를 실천할 수 있었고, 어떤 개발자가 되어야겠다는 그림을 그릴 수 있었습니다.",
      writer: "작성자",
      writerInfo: "Jane, 네이버 웹툰",
    },
    {
      writerPhoto: "assets/images/blank-profile.svg",
      nutshell:
        "마스터즈 코스의 미션들을 통해 개발 지식뿐만 아니라 자율적으로 학습하는 방법과 동료를 존중하며 함께 자라는 방법을 배울 수 있습니다.",
      content:
        "같이 일하고 싶은 개발자가 되고 싶으신 예비 개발자들 분들께 코드스쿼드 마스터즈 코스를 추천합니다",
      writer: "작성자",
      writerInfo: "Daisy, 11번가",
    },
  ],
};
