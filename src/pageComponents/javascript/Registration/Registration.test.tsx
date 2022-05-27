import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { Registration } from ".";
// Mocks
import { RegistrationResult } from "./Registration.test.mock";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";
import { RegistrationType } from "@type/Registration";

describe("<Registration>", () => {
  const renderRegistration = () =>
    render(
      <TestProvider>
        <Registration />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...RegistrationResult }));
  const { registrations } = strainMdxInfo(RegistrationResult);
  it("참여자 모집중인 과정이 보여진다.", async () => {
    const { getByText, getAllByText } = renderRegistration();

    registrations.forEach(({ title, description, caption }: RegistrationType) => {
      getByText(title);
      getAllByText(description);
      getByText(caption);
    });
  });
});
