import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
import { MBody, MDisplay } from "typography";
// Components
import { MButton } from "components";
// Assets
import header from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const Masthead: React.FC = () => {
  const { title, description } = strainMdxInfo(useStaticQuery(MastheadQuery));

  return (
    <MastheadWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <MDisplay>{title}</MDisplay>
          <MBody>{description}</MBody>
        </TitleWrapper>
        <MoveLinkWrapper>
          <MButton to="#course" children={TITLE.VIEW_ENTIRE_COURSE} />
        </MoveLinkWrapper>
      </ContentWrapper>
    </MastheadWrapper>
  );
};

const MastheadWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 144rem;
  height: 56rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  background-color: ${({ theme: { color } }) => color.primary.green4};
  background-image: ${`url(${header.pattern3})`};
  background-position: top right;
  background-position: center;
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 8rem;
`;

const TitleWrapper = styled.div`
  width: 106.2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  & > *:last-child {
    width: 50%;
  }
`;

const MoveLinkWrapper = styled.div`
  width: 106.2rem;
  margin: 0 auto;
  margin-top: 5.8rem;
  display: flex;
  justify-content: space-between;
`;

const MastheadQuery = graphql`
  query CodeTogetherMastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_masthead" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

export default Masthead;
