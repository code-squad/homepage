import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Type
import { CurriculumType } from "@type/Curriculum";
// Testing-Component
import { DetailCurriculum } from ".";
// Mock
import { DetailCurriculumQueryResult } from "./DetailCurriculum.test.mock";
// lib
import { TestProvider } from "lib/testUtils";
import { strainAllMdxInfo } from "lib/utils";

describe("<DetailCurriculum>", () => {
  const renderDetailCurriculum = () =>
    render(
      <TestProvider>
        <DetailCurriculum />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => DetailCurriculumQueryResult);
  it("각 탭들이 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();
    const curriculumInfo: CurriculumType[] = strainAllMdxInfo(DetailCurriculumQueryResult);
    const titles = curriculumInfo.map(({ tabName }) => tabName);

    titles.forEach((title: string) => {
      getByText(title);
    });
  });
  it("각 탭들을 클릭하면 클락한 탭에대한 내용들이 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();
    const curriculumInfo: CurriculumType[] = strainAllMdxInfo(DetailCurriculumQueryResult);
    const titles = curriculumInfo.map(({ tabName }) => tabName);
    const curriculums = curriculumInfo.map(({ curriculum }) => curriculum);

    titles.forEach((title, i) => {
      const tabTitle = getByText(title);
      fireEvent.click(tabTitle);

      const currentCurriculum = curriculums[i];

      currentCurriculum[0].subjectList.forEach(({ detail }) => {
        getByText(detail);
      });
    });
  });
  it("각 탭들을 클릭하면 탭에 맞는 마스터의 정보가 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();
    const curriculumInfo: CurriculumType[] = strainAllMdxInfo(DetailCurriculumQueryResult);
    const titles = curriculumInfo.map(({ tabName }) => tabName);
    const masters = curriculumInfo.map(({ masterInfoList }) => masterInfoList);

    titles.forEach((title, i) => {
      const tabTitle = getByText(title);
      fireEvent.click(tabTitle);

      const { name, position, introduce, nutshell } = masters[i][0];

      getByText(name);
      getByText(position);
      getByText(introduce);
      getByText(nutshell);
    });
  });
});
