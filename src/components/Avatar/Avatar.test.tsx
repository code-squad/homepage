import React from "react";
import { render } from "@testing-library/react";

import { Avatar } from "./";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

describe("<Avatar>", () => {
  it("아바타 컴포넌트는 props로 들어온 src의 주소를 가진 이미지가 보여진다.", async () => {
    const imgSrc = "assets/images/blank-profile.svg";
    const { findByAltText } = render(
      <ThemeProvider theme={theme}>
        <Avatar src={imgSrc} />
      </ThemeProvider>
    );

    const avatarEle = await findByAltText("avatar");
    expect(avatarEle).toHaveAttribute("src", imgSrc);
  });
});
