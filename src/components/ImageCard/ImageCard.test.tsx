import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { ImageCard } from ".";
// assets
import features from "assets/img/illusts/feature";
// lib
import { TestProvider } from "lib/testUtils";

describe("<ImageCard description>", () => {
  const props = {
    title: "미션과 협력 중심의 학습",
    description:
      "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
    img: features.edu1,
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
    const { img, title } = props;

    const cardImg = getByAltText(`card-img-${title}`);
    expect(cardImg.getAttribute("src")).toBe(img);
  });
});

describe("<ImageCard descriptions>", () => {
  const props = {
    title: "미션과 협력 중심의 학습",
    descriptions: [
      "다양한 미션을 자기주도적으로 해결하면서 필요한 지식을 본인의 것으로 만들 수 있습니다.",
      "백엔드와 프론트엔드, 백엔드와 모바일 개발자가 함께 프로젝트를 진행합니다. 하나의 서비스를 만들기 위해 계획을 세우고, 배포를 위해 일정을 맞추고, 협력하기 위해 서로 소통하는 방법을 경험합니다.",
    ],
    img: features.edu1,
  };
  const renderImageCard = () =>
    render(
      <TestProvider>
        <ImageCard {...props} />
      </TestProvider>
    );
  it("설명들이 보여진다.", () => {
    const { getByText } = renderImageCard();
    const { descriptions } = props;

    for (const description of descriptions) {
      getByText(description);
    }
  });
});
