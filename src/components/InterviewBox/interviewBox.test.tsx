import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { InterviewBox } from ".";
// lib
import { TestProvider } from "lib/testUtils";

describe("<InterviewBox>", () => {
  const props = {
    writerPhoto: "assets/img/avatars/80-chloe.svg",
    nutshell: "자율적으로 업무를 보는 문화가 자율성을 추구하는 교육관과 동일하다는 점에서 코드스",
    content: "자율적인 환경이 마련되니 자연스럽게 다른 가치들도 실천하게 된다. 서로가 하는 업무",
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
