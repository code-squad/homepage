import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { MasterInfo } from ".";
// Assets
import images from "assets/images";
// lib
import { TestProvider } from "lib/testUtils";

describe("<MasterInfo>", () => {
  const masterInfo = {
    avatar: "jk" as keyof typeof images,
    introduce: "매력적인 애플 플랫폼에서 함께 성장할 개발자를 기다립니다.",
    name: "JK",
    nutshell: "“나와 지인들에게 필요한 iOS 앱을 직접 만들고 출시까지 도전해보세요”",
    position: "모바일 iOS 마스터",
  };

  const renderMasterInfo = () =>
    render(
      <TestProvider>
        <MasterInfo {...{ masterInfo }} />
      </TestProvider>
    );
  it("마스터의 이미지가 보여진다.", async () => {
    const { getByAltText, debug } = renderMasterInfo();
    const { avatar } = masterInfo;

    const masterAvatar = getByAltText("avatar");
    expect(masterAvatar.getAttribute("src")).toBe(images[avatar]);
  });
  it("마스터의 이름, 직책이 보여진다.", async () => {
    const { getByText } = renderMasterInfo();
    const { name, position } = masterInfo;

    getByText(name);
    getByText(position);
  });
  it("마스터의 한마디와 간략한 소개가 보여진다.", async () => {
    const { getByText } = renderMasterInfo();
    const { introduce, nutshell } = masterInfo;

    getByText(introduce);
    getByText(nutshell);
  });
});
