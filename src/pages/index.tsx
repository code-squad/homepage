import React from "react";
import styled from "styled-components";
// Type
import { CultureType } from "../@type/Culture";
import { FeatureType } from "../@type/Feature";
import { MasterType } from "@type/Master";
import { MediaType } from "@type/Media";
// API-Calls
import { graphql } from "gatsby";
// Theme
import GlobalTheme from "../lib/context/GlobalTheme";
import theme from "styles/theme";
// Typography
import { LBody, MDisplay, MBody, SDisplay, XLBody, XSBody, SBody } from "typography";
// Components
import {
  DropdownItem,
  Footer,
  HomeGlobalNavigationBar,
  LinkButton,
  TabNavigationBar,
  Recruit,
} from "components";
// Assets
import codesquadFeature from "assets/images/codesquad-feature.svg";
import mastersIcon from "assets/images/icons/masters.svg";
import codeTogetherIcon from "assets/images/icons/code-together.svg";
import { LINK_DESCRIPTION, LINK, SUBTITLE, TITLE } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";

const MainPage = ({ data }: any) => {
  const { feature, culture, master, media } = data;
  const cultures: CultureType[] = culture.nodes.map(({ frontmatter }: any) => frontmatter);
  const [differ]: FeatureType[] = feature.nodes.map(({ frontmatter }: any) => frontmatter);
  const masters: MasterType[] = master.nodes.map(({ frontmatter }: any) => frontmatter);
  const medias: MediaType[] = media.nodes.map(({ frontmatter }: any) => frontmatter);

  const fields = masters.map((master) => master.field!);

  const [masterIndex, setMasterIndex] = React.useState(0);
  const masterIntroduce = masters[masterIndex];

  const handleTabClick = (index: number) => {
    setMasterIndex(index);
  };

  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        {/* <main>
      </main> */}
        <Introduce>
          <MDisplay>{`강의식 수업이 재미 없던 사람들,
여기여기 모여라!`}</MDisplay>
        </Introduce>
        <LinkButtonWrapper>
          <LinkButton
            to={INTERNAL.MASTERS}
            title={LINK.MASTERS}
            description={LINK_DESCRIPTION.MASTERS}
            icon={mastersIcon}
          />
          <LinkButton
            to={INTERNAL.CODE_TOGETHER}
            title={LINK.CODE_TOGETHER}
            description={LINK_DESCRIPTION.CODE_TOGETHER}
            icon={codeTogetherIcon}
          />
        </LinkButtonWrapper>
        <Feature>
          <TitleWrapper>
            <LBody>{SUBTITLE.FEATURE}</LBody>
            <SDisplay>{TITLE.FEATURE}</SDisplay>
          </TitleWrapper>
          <FeatureContentWrapper>
            <FeatureContent>
              <div>
                <XLBody bold>{differ.title}</XLBody>
                <MBody bold style={{ color: `${theme.color.greyScale.grey2}` }}>
                  {differ.subtitle}
                </MBody>
              </div>
              <MBody style={{ color: theme.color.greyScale.grey2 }}>
                {`${differ.description}`}
              </MBody>
            </FeatureContent>
            <FeatureImg src={codesquadFeature} />
          </FeatureContentWrapper>
        </Feature>
        <Culture>
          <TitleWrapper>
            <LBody>{SUBTITLE.CULTURE}</LBody>
            <SDisplay>{TITLE.CULTURE}</SDisplay>
          </TitleWrapper>
          <CultureContentWrapper>
            {cultures.map((culture) => (
              <CultureContent key={culture.title}>
                <CultureImg src={culture.image} />
                <div>
                  <MBody style={{ paddingBottom: "0.4rem" }}>{culture.subtitle}</MBody>
                  <XLBody>{culture.title}</XLBody>
                </div>
                <MBody style={{ color: theme.color.greyScale.grey2 }}>{culture.description}</MBody>
              </CultureContent>
            ))}
          </CultureContentWrapper>
        </Culture>
        <RecruiteLinkWrapper>
          <LinkButton
            to={INTERNAL.RECRUIT}
            title={LINK.CONFIRM_RECRUIT}
            description={LINK_DESCRIPTION.CONFIRM_RECRUIT}
          />
        </RecruiteLinkWrapper>
        <Master>
          <div style={{ width: "106.2rem", padding: "0 18.9rem", margin: "0 auto" }}>
            <TitleWrapper>
              <LBody>{SUBTITLE.MASTER}</LBody>
              <SDisplay>{TITLE.MASTER}</SDisplay>
            </TitleWrapper>
            <MBody
              style={{
                color: theme.color.greyScale.grey2,
                paddingTop: "2.4rem",
                paddingBottom: "4rem",
              }}
            >
              실무 경험이 풍부하고 소프트웨어 교육을 잘 이해하는 마스터들이 여러분의 성장을 위해
              멘토링을 지원합니다.
            </MBody>
            <TabNavigationBar titles={fields} onIndexChanged={handleTabClick} />
          </div>
          <div style={{ width: "100%", backgroundColor: theme.color.greyScale.offWhite }}>
            <MasterIntroduceWrapper>
              <MasterImg />
              <MasterIntroduce>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <XLBody>{masterIntroduce.name}</XLBody>
                  <XSBody
                    style={{ color: `${theme.color.greyScale.grey2}`, paddingLeft: "0.8rem" }}
                  >
                    {masterIntroduce.description}
                  </XSBody>
                </div>
                <MBody bold>{masterIntroduce.introduce}</MBody>
                <CareerWrapper>
                  {masterIntroduce.careers?.map((career) => (
                    <li key={career}>
                      <SBody style={{ display: "inline", verticalAlign: "middle" }}>{career}</SBody>
                    </li>
                  ))}
                </CareerWrapper>
              </MasterIntroduce>
            </MasterIntroduceWrapper>
          </div>
        </Master>
        <CodesquadInMedia>
          <TitleWrapper>
            <LBody>{SUBTITLE.CODESQUAD_IN_MEDIA}</LBody>
            <SDisplay>{TITLE.CODESQUAD_IN_MEDIA}</SDisplay>
          </TitleWrapper>
          <MediaWrapper>
            {medias.map((media) => (
              <DropdownItem
                key={media.title}
                category={media.category!}
                title={media.title!}
                link={media.link!}
              />
            ))}
          </MediaWrapper>
        </CodesquadInMedia>
        <Recruit backgroundColor={theme.color.primary.green4} />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

const Introduce = styled.div`
  min-width: 144rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.primary.green4};
  white-space: pre-line;
  text-align: center;
`;

const LinkButtonWrapper = styled.ul`
  min-width: 144rem;
  padding-top: 8rem;
  padding-bottom: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const TitleWrapper = styled.div`
  width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// 코드스쿼드는 무엇이 다른가요?
const Feature = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 5.6rem;
`;

const FeatureContentWrapper = styled.div`
  display: flex;
  gap: 13.2rem;
  white-space: pre-line;
`;

const FeatureContent = styled.div`
  width: 41.1rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FeatureImg = styled.img`
  width: 51.9rem;
  height: 44rem;
`;

// 코드스쿼드의 가치가 녹아있는 교육 및 학습 문화
const Culture = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 5.6rem;
`;

const CultureContentWrapper = styled.div`
  display: flex;
  gap: 7.8rem;
  white-space: pre-line;
`;

const CultureContent = styled.div`
  width: 30.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const CultureImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const RecruiteLinkWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  justify-content: center;
  padding: 0 18.9rem;
  padding-bottom: 20rem;
  margin: 0 auto;
`;

// 코드스쿼드의 교육 가치를 실현하는 분야별 전문 마스터
const Master = styled.div`
  width: 100%;
  padding-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const MasterIntroduceWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  padding: 5.6rem 18.9rem;
  gap: 7.8rem;
  margin: 0 auto;
`;

const MasterIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const MasterImg = styled.img`
  width: 41rem;
  height: 41rem;
`;

const CareerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style-type: disc;
  list-style-position: inside;
`;

// 언론 보도 및 매체 미디어에서 본 코드스쿼드
const CodesquadInMedia = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 8rem;
`;

const MediaWrapper = styled.ul`
  display: flex;
  gap: 4rem;
  flex-direction: column;
`;

export const query = graphql`
  query {
    feature: allMdx(filter: { frontmatter: { templateKey: { eq: "main_feature" } } }) {
      nodes {
        frontmatter {
          title
          subtitle
          description
        }
      }
    }
    culture: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_culture" } } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          description
        }
      }
    }
    master: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_master" } } }
    ) {
      nodes {
        frontmatter {
          field
          name
          description
          introduce
          careers
        }
      }
    }
    media: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_media" } } }
    ) {
      nodes {
        frontmatter {
          category
          title
          link
        }
      }
    }
  }
`;

export default MainPage;
