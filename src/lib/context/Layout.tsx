import React from "react";
import { MDXProvider } from "@mdx-js/react";
// CSS
import "./Layout.css";

const MarkdownLink: React.FC<{ href: string }> = ({ href, ...rest }) => {
  return (
    <a
      data-link-external
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  );
};

const Layout: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <MDXProvider components={{ a: (props) => <MarkdownLink {...props} /> }}>
      <article className="markdown-body">{children}</article>;
    </MDXProvider>
  );
};

export default Layout;
