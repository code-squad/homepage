import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { ImageCard } from ".";
// assets
import missionAndCooperate from "assets/images/mission-and-cooperate.svg";
// lib
import { TestProvider } from "lib/testUtils";

describe("<ImageCard>", () => {
  const props = {
    title: "미션과 협력 중심의 학습",
    description:
      "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
    img: missionAndCooperate,
  };
  const renderImageCard = () =>
    render(
      <TestProvider>
        <ImageCard {...props} />
      </TestProvider>
    );
  it("제목이 보여진다.", () => {
    const { getByText } = renderImageCard();
    const { title } = props;

    getByText(title);
  });
  it("설명이 보여진다.", () => {
    const { getByText } = renderImageCard();
    const { description } = props;

    getByText(description);
  });
  it("img를 통해 받아온 이미지가 보여진다.", () => {
    const { getByAltText } = renderImageCard();
    const { img } = props;

    const cardImg = getByAltText("card-img");
    expect(cardImg.getAttribute("src")).toBe(img);
  });
});
