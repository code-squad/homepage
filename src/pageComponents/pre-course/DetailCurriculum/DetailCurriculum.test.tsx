import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Type
import {
  CodeTogetherCurriculumType,
  CodeTogetherSubjectInfoType,
} from "@type/CodeTogetherCurriculum";
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
  const curriculumInfo: CodeTogetherCurriculumType[] = strainAllMdxInfo(
    DetailCurriculumQueryResult
  );
  const titles = curriculumInfo.map(({ tabName }) => tabName);
  const masters = curriculumInfo.map(({ masterInfoList }) => masterInfoList);
  const subjectList = curriculumInfo.map(({ subjectList }) => subjectList);
  it("각 탭들이 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();

    titles.forEach((title: string) => {
      getByText(title);
    });
  });
  it("각 탭들을 클릭하면 클락한 탭에대한 내용들이 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();

    titles.forEach((title, i) => {
      const tabTitle = getByText(title);
      fireEvent.click(tabTitle);

      subjectList[i].forEach(({ name }: CodeTogetherSubjectInfoType) => {
        getByText(name);
      });
    });
  });
  it("각 탭들을 클릭하면 탭에 맞는 마스터의 정보가 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();

    titles.forEach((title, i) => {
      const tabTitle = getByText(title);
      fireEvent.click(tabTitle);

      const { name } = masters[i][0];

      getByText(name);
    });
  });
  it("여러명의 마스터가 있다면 여러명의 정보가 보여진다.", async () => {
    const { getByText } = renderDetailCurriculum();

    titles.forEach((title, i) => {
      const tabTitle = getByText(title);
      fireEvent.click(tabTitle);

      const { name } = masters[i][0];
      const { name: name2 } = masters[i][1];

      getByText(name);
      getByText(name2);
    });
  });
});
