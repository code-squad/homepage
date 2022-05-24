import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { WelfareType } from "@type/Welfare";
// Components
import { ImageCard, TitleSet } from "components";
// Assets
import blocks from "assets/images/blocks";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const Welfare: React.FC = ({}) => {
  const data = useStaticQuery(WelfareQuery);
  const { welfares }: { welfares: WelfareType[] } = strainMdxInfo(data);

  return (
    <WelfareWraper>
      <TitleSet subtitle={SUBTITLE.WELFARE} title={TITLE.WELFARE} />
      <WelfareListWrapper>
        <WelfareList>
          {welfares.map(({ title, content, img }) => (
            <WelfareItem key={title}>
              <ImageCard description={content} title={title} img={blocks[img]} />
            </WelfareItem>
          ))}
        </WelfareList>
      </WelfareListWrapper>
    </WelfareWraper>
  );
};

const WelfareWraper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
  margin-bottom: 16rem;
`;

const WelfareListWrapper = styled.ul`
  width: 106.2rem;
  display: flex;
  flex-direction: column;
`;

const WelfareList = styled.ul`
  flex-flow: row wrap;
  align-content: flex-start;
  & > *:not(:nth-child(3n)) {
    margin-right: 7.8rem;
  }
`;

const WelfareItem = styled.li`
  margin-top: 8rem;
  display: inline-flex;
`;

const WelfareQuery = graphql`
  query WelfareQuery {
    mdx(frontmatter: { templateKey: { eq: "team_welfares" } }) {
      frontmatter {
        welfares {
          index
          title
          content
          img
        }
      }
    }
  }
`;

export default Welfare;
