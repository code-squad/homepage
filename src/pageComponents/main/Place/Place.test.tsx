import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { Place } from ".";
// Mocks
import { PlaceResult } from "./Place.test.mock";
// Assets
import { TITLE, SUBTITLE, DESCRIPTION } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<Place>", () => {
  const renderlace = () =>
    render(
      <TestProvider>
        <Place />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...PlaceResult }));
  it("제목과 부제목 및 설명이 보여진다.", async () => {
    const { getByText, getAllByText } = renderlace();

    getAllByText(TITLE.PLACE);
    getAllByText(SUBTITLE.PLACE);
    getByText(DESCRIPTION.PLACE);
  });
  it("코드스쿼드 장소 이미지들이 보여진다.", async () => {
    const { getAllByAltText } = renderlace();

    getAllByAltText("codesquad-place");
  });
  it("좌우 화살표 버튼들이 보여진다.", async () => {
    const { getByAltText } = renderlace();

    getByAltText("arrow-left");
    getByAltText("arrow-right");
  });
});
