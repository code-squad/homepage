import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { TeamInterview } from ".";
// Mocks
import { TeamInterviewQueryResult } from "./TeamInterview.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<TeamInterview>", () => {
  const renderTeamInterview = () =>
    render(
      <TestProvider>
        <TeamInterview />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => TeamInterviewQueryResult);
  it("제목이 보여진다.", async () => {
    const { getByText } = renderTeamInterview();

    getByText(SUBTITLE.TEAM_INTERIVIEW);
    getByText(TITLE.TEAM_INTERIVIEW);
  });
});
