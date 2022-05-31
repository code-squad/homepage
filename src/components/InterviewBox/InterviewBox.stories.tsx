import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { InterviewBox } from ".";

export default {
  title: "component/InterviewBox",
  component: InterviewBox,
} as ComponentMeta<typeof InterviewBox>;

const Template: ComponentStory<typeof InterviewBox> = (args) => <InterviewBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  writerPhoto: "assets/img/avatars/80-chloe.svg",
  nutshell:
    "자율적으로 업무를 보는 문화가 자율성을 추구하는 교육관과 동일하다는 점에서 코드스쿼드가 지향하는 가치에 대한 진심을 느낄 수 있다.",
  content:
    "자율적인 환경이 마련되니 자연스럽게 다른 가치들도 실천하게 된다. 서로가 하는 업무에 관심을 기울여주고 피드백을 주면, 그걸 받으면서 내가 받은 만큼 더 잘해서 돌려줘야겠다는 생각이 드니까.",
  writer: "클로이",
  writerInfo: "Chloe, 커뮤니티 매니저",
};

const ListTemplate: ComponentStory<typeof InterviewBox> = (args) => {
  const customArgs = {
    writerPhoto: "assets/img/avatars/80-chloe.svg",
    nutshell:
      "자율적으로 업무를 보는 문화가 자율성을 추구하는 교육관과 동일하다는 점에서 코드스쿼드가 지향하는 가치에 대한 진심을 느낄 수 있다.",
    content:
      "자율적인 환경이 마련되니 자연스럽게 다른 가치들도 실천하게 된다. 서로가 하는 업무에 관심을 기울여주고 피드백을 주면, 그걸 받으면서 내가 받은 만큼 더 잘해서 돌려줘야겠다는 생각이 드니까.",
    writer: "클로이",
    writerInfo: "Chloe, 커뮤니티 매니저",
  };
  return (
    <ul style={{ display: "flex", gap: "2.4rem" }}>
      <InterviewBox {...args} />
      <InterviewBox {...customArgs} />
    </ul>
  );
};

export const ListInterviewBox = ListTemplate.bind({});
ListInterviewBox.args = {
  writerPhoto: "assets/img/avatars/80-member1.svg",
  nutshell:
    "누구도 강요하지 않고 엄격한 규칙도 없기에 서로를 향한 존중을 바탕으로 성장할 수 있는 문화를 만들어나가는 것이 중요합니다",
  content:
    "코드스쿼드의 모든 배움은 선택에 의해 이루어집니다. 정해진 기간 내에 어떤 규칙을 따를지, 무엇을 학습할지 스스로 선택하고 이행하기 때문에 그 결과에 대한 책임 또한 자신이 지게 됩니다. 이는 과정을 수행하는 동안 굉장한 몰입감과 만족감을 주었고 후회없는 경험을 선물로 받았습니다.",
  writer: "작성자",
  writerInfo: "tami, 중고나라",
};
