import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { InterviewBox } from ".";

export default {
  title: "InterviewBox",
  component: InterviewBox,
} as ComponentMeta<typeof InterviewBox>;

const Template: ComponentStory<typeof InterviewBox> = (args) => <InterviewBox {...args} />;

export const Chloe = Template.bind({});
Chloe.args = {
  writerPhoto: "assets/images/blank-profile.svg",
  nutshell:
    "자율적으로 업무를 보는 문화가 자율성을 추구하는 교육관과 동일하다는 점에서 코드스쿼드가 지향하는 가치에 대한 진심을 느낄 수 있다.",
  content:
    "자율적인 환경이 마련되니 자연스럽게 다른 가치들도 실천하게 된다. 서로가 하는 업무에 관심을 기울여주고 피드백을 주면, 그걸 받으면서 내가 받은 만큼 더 잘해서 돌려줘야겠다는 생각이 드니까.",
  writer: "클로이",
  writerInfo: "Chloe, 커뮤니티 매니저",
};
