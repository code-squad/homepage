import React from "react";
import * as Gatsby from "gatsby";
import { render, fireEvent, RenderResult } from "@testing-library/react";
// Type
import { MasterType } from "@type/Master";
// Testing-Component
import { Master } from ".";
// Mocks
import { MasterResult } from "./Master.test.mock";
// Assets
import { TITLE, SUBTITLE, DESCRIPTION } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<Master>", () => {
  const renderMaster = () =>
    render(
      <TestProvider>
        <Master />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...MasterResult }));
  it("제목과 부제목 및 설명이 보여진다.", async () => {
    const { getByText } = renderMaster();

    getByText(TITLE.MASTER);
    getByText(SUBTITLE.MASTER);
    getByText(DESCRIPTION.MASTER);
  });
  it("마스터들의 분야에 대한 탭이 보여진다.", async () => {
    const { getByText } = renderMaster();
    const { masters } = strainMdxInfo(MasterResult);

    masters.forEach(({ field }: MasterType) => {
      getByText(field);
    });
  });
  const testMasterRendering = (
    { name, introduce, nutshell, careers, schedules }: MasterType,
    utils: RenderResult
  ) => {
    const { getByAltText, getAllByAltText, getByText } = utils;
    getByAltText("profile");
    getByText(name);
    getByText(introduce);
    getByText(nutshell);
    careers.forEach((career: string) => {
      getByText(career);
    });

    if (schedules?.length) {
      const courseImages = getAllByAltText("course");
      expect(courseImages.length).toEqual(schedules.length);
      schedules.forEach(({ title, subtitle }) => {
        getByText(title);
        getByText(subtitle);
      });
    }
  };
  it("최초 렌더링시 첫번째 마스터에 대한 내용들이 보여진다.", async () => {
    const utils = renderMaster();
    const { masters } = strainMdxInfo(MasterResult);
    const [firstMaster] = masters;

    testMasterRendering(firstMaster, utils);
  });
  it("각 탭을 클릭하면 해당되는 마스터에 대한 내용들이 보여진다.", async () => {
    const utils = renderMaster();
    const { masters } = strainMdxInfo(MasterResult);
    const fields = masters.map(({ field }: MasterType) => field);

    masters.forEach((master: MasterType, index: number) => {
      const { getByText } = utils;

      fireEvent.click(getByText(fields[index]));
      testMasterRendering(master, utils);
    });
  });
});
