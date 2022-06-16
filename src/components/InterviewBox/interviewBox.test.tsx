import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { InterviewBox } from ".";
// lib
import { TestProvider } from "lib/testUtils";

describe("<InterviewBox>", () => {
  const props = {
    writerPhoto: "assets/img/avatars/80-chloe.svg",
    nutshell:
      "우리의 팀 문화가 코드스쿼드의 교육 방식과 동일하다는 점에서, 코드스쿼드가 지향하는 가치에 대해 진심을 느낄 수 있어요.",
    content:
      "자율적인 환경이 마련되니 자연스럽게 다른 가치들도 실천하게 돼요. 서로의 업무에 관심과 피드백을 나누는 과정에서, 받은 만큼 더 잘해서 팀에 기여하고 싶다는 생각이 들어요.",
    writer: "클로이",
    writerInfo: "Chloe, 커뮤니티 매니저 & 교육 기획",
  };
  const renderInterviewBox = () =>
    render(
      <TestProvider>
        <InterviewBox {...props} />
      </TestProvider>
    );
  it("writerPhoto의 이미지가 보여진다.", async () => {
    const { getByAltText } = renderInterviewBox();
    const { writerPhoto } = props;

    const avatarEle = getByAltText("avatar");
    expect(avatarEle).toHaveAttribute("src", writerPhoto);
  });
  it("컴포넌트에 props로 받은 정보를 통해 한마디, 내용, 작성자, 작성자 정보가 보여진다.", async () => {
    const { getByText } = renderInterviewBox();
    const { nutshell, content, writer, writerInfo } = props;
    const textList = [nutshell, content, writer, writerInfo];

    textList.forEach((text: string) => getByText(text));
  });
});
