import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
// Type
import { MasterType } from "@type/Master";
// Typography
import { MBody, SBody, XLBody, XSBody, HLBold, MBold, SBold } from "typography";
// Components
import { TitleSet, TabNavigationBar } from "components";
// Assets
import thumbnails from "assets/img/illusts/thumbnail";
import picture from "assets/img/picture";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const Master: React.FC = () => {
  const theme = useTheme();

  const { masters }: { masters: MasterType[] } = strainMdxInfo(useStaticQuery(MasterQuery));

  const fields = masters.map((master) => master.field);

  const [masterIntroduce, setMasterIntroduce] = React.useState<MasterType>(masters[0]);

  const handleTabClick = (index: number) => {
    setMasterIntroduce(masters[index]);
  };

  return (
    <MasterWrapper>
      <div style={{ width: "106.2rem", padding: "0 18.9rem", margin: "0 auto" }}>
        <TitleSet subtitle={SUBTITLE.MASTER} title={TITLE.MASTER} />
        <MBody
          style={{
            color: theme.color.greyScale.grey2,
            paddingTop: "2.4rem",
            paddingBottom: "4rem",
          }}
        >
          {DESCRIPTION.MASTER}
        </MBody>
        <TabNavigationBar titles={fields} onIndexChanged={handleTabClick} />
      </div>
      <div style={{ backgroundColor: theme.color.surface.offWhite1 }}>
        <MasterInformationWrapper>
          <MasterImg alt="profile" src={picture[masterIntroduce.image]} />
          <IntroduceWrapper>
            <Introduce>
              <NicknameWrapper>
                <HLBold>{masterIntroduce.name}</HLBold>
                <XSBody style={{ color: `${theme.color.greyScale.grey2}`, paddingLeft: "0.8rem" }}>
                  {masterIntroduce.introduce}
                </XSBody>
              </NicknameWrapper>
              <MBold>{masterIntroduce.nutshell}</MBold>
              <CareerWrapper>
                {masterIntroduce.careers?.map((career) => (
                  <li key={career}>
                    <SBody
                      style={{
                        display: "inline",
                        verticalAlign: "middle",
                        color: theme.color.greyScale.grey1,
                      }}
                    >
                      {career}
                    </SBody>
                  </li>
                ))}
              </CareerWrapper>
            </Introduce>
            {masterIntroduce.schedules && (
              <ScheduleWrapper>
                <MBold style={{ padding: "3.2rem 0 2.4rem 0" }}>{TITLE.SCHEDULE}</MBold>
                <ScheduleList>
                  {masterIntroduce.schedules.map(({ image, title, subtitle, path }) => (
                    <li key={title}>
                      <Schedule to={path}>
                        <CourseImage src={thumbnails[image]} alt="course" />
                        <CourseTitleWrapper>
                          <TitleWrapper>
                            <XSBody>{title}</XSBody>
                          </TitleWrapper>
                          <SubtitleWrapper>
                            <SBold>{subtitle}</SBold>
                          </SubtitleWrapper>
                        </CourseTitleWrapper>
                      </Schedule>
                    </li>
                  ))}
                </ScheduleList>
              </ScheduleWrapper>
            )}
          </IntroduceWrapper>
        </MasterInformationWrapper>
      </div>
    </MasterWrapper>
  );
};

const MasterWrapper = styled.div`
  width: 100%;
  padding-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;

const MasterInformationWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  padding: 5.6rem 18.9rem;
  margin: 0 auto;
  & > *:not(:last-child) {
    margin-right: 7.8rem;
  }
`;

const IntroduceWrapper = styled.div`
  height: 43.6rem;
  min-height: 0;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const NicknameWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MasterImg = styled.img`
  width: 41rem;
  height: 41rem;
  border-radius: 1.6rem;
`;

const CareerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  list-style-position: inside;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const ScheduleWrapper = styled.div`
  width: 52rem;
  border-top: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
`;

const ScheduleList = styled.ul`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const Schedule = styled(Link)`
  width: 24.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
  &:hover {
    cursor: pointer;
    & > *:last-child {
      & > *:first-child {
        height: 1.7rem;
        line-height: 1.7rem;
        border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey1};
      }
      & > *:last-child {
        height: 2.5rem;
        line-height: 2.5rem;
        border-bottom: 0.1rem solid ${({ theme: { color } }) => color.blackAndWhite.black};
      }
    }
  }
`;

const CourseImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const CourseTitleWrapper = styled.div`
  display: flex;
  height: 4.2rem;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: fit-content;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const SubtitleWrapper = styled.div`
  width: fit-content;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;

const MasterQuery = graphql`
  query MasterQuery {
    mdx(frontmatter: { templateKey: { eq: "main_masters" } }) {
      frontmatter {
        masters {
          image
          field
          name
          introduce
          nutshell
          careers
          schedules {
            title
            subtitle
            image
            path
          }
        }
      }
    }
  }
`;

export default Master;
