import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { Avatar } from ".";
// lib
import { TestProvider } from "lib/testUtils";

describe("<Avatar>", () => {
  it("아바타 컴포넌트는 props로 들어온 src의 주소를 가진 이미지가 보여진다.", async () => {
    const imgSrc = "assets/img/avatars/80-member1.svg";
    const { findByAltText } = render(
      <TestProvider>
        <Avatar src={imgSrc} />
      </TestProvider>
    );

    const avatarEle = await findByAltText("avatar");
    expect(avatarEle).toHaveAttribute("src", imgSrc);
  });
});
