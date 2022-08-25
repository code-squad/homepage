import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
// Type
import { MasterType } from "@type/Master";
// Typography
import { MBody, SBody, XSBody, HLBold, SHLBold, MBold, SBold } from "typography";
// Components
import { TitleSet, TabNavigationBar } from "components";
// Assets
import thumbnails from "assets/img/illusts/thumbnail";
import picture from "assets/img/picture";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Master: React.FC = () => {
  const theme = useTheme();
  const { isMobile } = useResponsive();

  const { masters }: { masters: MasterType[] } = strainMdxInfo(useStaticQuery(MasterQuery));

  const fields = masters.map((master) => master.field);

  const [masterIntroduce, setMasterIntroduce] = React.useState<MasterType>(masters[0]);

  const handleTabClick = (index: number) => {
    setMasterIntroduce(masters[index]);
  };

  return (
    <MasterWrapper>
      <MasterCourseIntroduceWrapper>
        <TitleSet subtitle={SUBTITLE.MASTER} title={TITLE.MASTER} />
        <CourseIntroduceWrapper>
          <MBody>{DESCRIPTION.MASTER}</MBody>
        </CourseIntroduceWrapper>
      </MasterCourseIntroduceWrapper>
      <TabNavigationWrapper>
        <TabNavigationBar titles={fields} onIndexChanged={handleTabClick} />
      </TabNavigationWrapper>
      <div style={{ backgroundColor: theme.color.surface.offWhite1 }}>
        <MasterInformationWrapper>
          <MasterImg alt="profile" src={picture[masterIntroduce.image]} />
          <IntroduceWrapper>
            <Introduce>
              <NicknameWrapper>
                {isMobile ? (
                  <SHLBold>{masterIntroduce.name}</SHLBold>
                ) : (
                  <HLBold>{masterIntroduce.name}</HLBold>
                )}
                <MasterIntroduceWrapper>
                  {isMobile ? (
                    <XSBody>{masterIntroduce.introduce}</XSBody>
                  ) : (
                    <SBody>{masterIntroduce.introduce}</SBody>
                  )}
                </MasterIntroduceWrapper>
              </NicknameWrapper>
              <MasterNutshellWrapper>
                {isMobile ? (
                  <SHLBold>{masterIntroduce.nutshell}</SHLBold>
                ) : (
                  <MBold>{masterIntroduce.nutshell}</MBold>
                )}
              </MasterNutshellWrapper>
              <CareerWrapper>
                {masterIntroduce.careers?.map((career) => (
                  <li key={career}>
                    {isMobile ? (
                      <XSBody
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          color: theme.color.greyScale.grey1,
                        }}
                      >
                        {career}
                      </XSBody>
                    ) : (
                      <SBody
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          color: theme.color.greyScale.grey1,
                        }}
                      >
                        {career}
                      </SBody>
                    )}
                  </li>
                ))}
              </CareerWrapper>
            </Introduce>
            {masterIntroduce.schedules && (
              <ScheduleWrapper>
                <ScheduleTitleWrapper>
                  <MBold>{TITLE.SCHEDULE}</MBold>
                </ScheduleTitleWrapper>
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
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  @media ${({ theme }) => theme.device.mobile} {
    padding-bottom: 12rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding-bottom: 18rem;
  }
`;

const MasterCourseIntroduceWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    margin: 0 auto;
  }
`;

const CourseIntroduceWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  padding-top: 2.4rem;
  @media ${({ theme }) => theme.device.mobile} {
    padding-bottom: 4.2rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding-bottom: 5.6rem;
  }
`;

const TabNavigationWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 2.4rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    margin: 0 auto;
  }
`;

const MasterInformationWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    padding: 3.2rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 5.6rem 18.9rem;
    margin: 0 auto;
    & > *:not(:last-child) {
      margin-right: 7.8rem;
    }
  }
`;

const MasterImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 8rem;
    height: 8rem;
    border-radius: 99.9rem;
    position: absolute;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 41rem;
    height: 41rem;
    border-radius: 1.6rem;
  }
`;

const IntroduceWrapper = styled.div`
  @media ${({ theme }) => theme.device.desktop} {
    height: 43.6rem;
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.desktop} {
    & > *:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
`;

const NicknameWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    height: 8rem;
    margin-left: 9.8rem;
    flex-direction: column;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    height: auto;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

const MasterIntroduceWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  @media ${({ theme }) => theme.device.desktop} {
    padding-left: 0.8rem;
  }
`;

const MasterNutshellWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2.4rem;
  }
`;

const CareerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 1.6rem;
    list-style-position: outside;
    margin-top: 1.6rem;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    list-style-position: inside;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

const ScheduleWrapper = styled.div`
  border-top: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 52rem;
  }
`;

const ScheduleTitleWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 2.4rem 0 1.6rem 0;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 3.2rem 0 2.4rem 0;
  }
`;

const ScheduleList = styled.ul`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 1.8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > *:not(:last-child) {
      margin-right: 2.4rem;
    }
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
