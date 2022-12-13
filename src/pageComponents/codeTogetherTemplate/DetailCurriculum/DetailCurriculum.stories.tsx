import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { DetailCurriculum } from ".";
import DetailCurriculumDocs from "./DetailCurriculum.docs.mdx";

export default {
  title: "pagecomponent/template/code-together/DetailCurriculum",
  component: DetailCurriculum,
  parameters: {
    docs: {
      page: DetailCurriculumDocs,
    },
  },
} as ComponentMeta<typeof DetailCurriculum>;

export interface CodeTogetherSubjectInfoType {
  details: string[];
  name: string;
}

const Template: ComponentStory<typeof DetailCurriculum> = (args) => <DetailCurriculum {...args} />;

export const Default = Template.bind({});
Default.args = {
  curriculumInfo: [
    {
      tabName: "주제",
      subjectList: [
        {
          details: ["함수 역할과 함수 나누기", "고차함수", "클로저, 커링", "immutable"],
          name: "함수로 만드는 애플리케이션",
        },
        {
          details: ["class, prototype, this", "OOP, 상속", "뷰-모델 바인딩"],
          name: "객체로 만드는 애플리케이션",
        },
        {
          details: ["서버와 동기화", "캐시", "에러핸들링, 요청취소"],
          name: "네트워크 통신 핸들링 (최적화와 에러처리)",
        },
        {
          details: [""],
          name: "리팩토링과 UI테스팅",
        },
      ],
      masterInfoList: [
        {
          picture: "crong",
          introduce:
            "복잡하고 다양한 프론트엔드 개발 세계에 필요한 다양한 패턴과 개념을 배워보세요. 열정이 넘치는 동료와 함께 즐거움을 느끼면서 프로그래밍을 배울 수 있습니다.\\n 이 과정은 2022년 카카오(주) 프론트엔드 개발자들이 배우며 매우 좋은 평가를 받은 과정입니다",
          name: "크롱",
          nutshell: "“코드스쿼드만의 협력, 배려, 즐거움을 느끼면서 프로그래밍을 시작해 보세요”",
          position: "Crong, 웹 프론트엔드 마스터",
        },
      ],
    },
  ],
};
