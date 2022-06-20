import * as React from "react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("gatsby-plugin-mdx", () => {
  return {
    MDXRenderer: ({ children }) => {
      return <div>{children}</div>;
    },
  };
});
