import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { TeamCultureType } from "@type/TeamCulture";
// Testing-Component
import { TeamCulture } from ".";
// Mocks
import { TeamCultureQueryResult } from "./TeamCulture.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<TeamCulture>", () => {
  const renderTeamCulture = () =>
    render(
      <TestProvider>
        <TeamCulture />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => TeamCultureQueryResult);
  const { cultures }: { cultures: TeamCultureType[] } = strainMdxInfo(TeamCultureQueryResult);
  it("제목이 보여진다.", () => {
    const { getByText } = renderTeamCulture();

    getByText(TITLE.CODESQUAD_TEAM_CULTURE);
    getByText(SUBTITLE.CODESQUAD_TEAM_CULTURE);
  });
  it("팀 문화의 주체가 보여진다.", () => {
    const { getByText } = renderTeamCulture();

    cultures.forEach(({ title }) => {
      getByText(title);
    });
  });
  it("각 팀 문화에 대한 설명들이 보여진다.", () => {
    const { getByText } = renderTeamCulture();

    cultures.forEach(({ cultureFeatures }) => {
      cultureFeatures.forEach(({ subtitle, description }) => {
        getByText(subtitle);
        getByText(description);
      });
    });
  });
  it("카테고리에 맞는 이미지가 보여진다.", async () => {
    const { getByAltText } = renderTeamCulture();

    cultures.forEach(({ title }) => {
      const featureImage = getByAltText(`team-culture-icon-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
    });
  });
});
