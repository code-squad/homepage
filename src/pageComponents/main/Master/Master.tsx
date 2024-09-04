import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
// Type
import type { MasterType } from "@type/Master";
// Typography
import { Typography } from "typography";
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
  const { color } = useTheme();
  const { isMobile } = useResponsive();

  const { masters }: { masters: MasterType[] } = strainMdxInfo(useStaticQuery(MasterQuery));

  const fields = masters.map((master) => master.field);

  const [masterIntroduce, setMasterIntroduce] = React.useState<MasterType>(masters[0]);

  const handleTabClick = (index: number) => {
    setMasterIntroduce(masters[index]);
  };

  const dangleCareers: MasterType["careers"] = [
    "전 Amazon Web Services Technical Trainer",
    "전 카카오 Backend engineer",
    "전 NHN NEXT UI/Web programming 전공 졸업",
  ];

  return (
    <MasterWrapper>
      <MasterCourseIntroduceWrapper>
        <TitleSet subtitle={SUBTITLE.MASTER} title={TITLE.MASTER} />
        <CourseIntroduceWrapper>
          <Typography type="MBody">{DESCRIPTION.MASTER}</Typography>
        </CourseIntroduceWrapper>
      </MasterCourseIntroduceWrapper>
      <TabNavigationWrapper>
        <TabNavigationBar titles={fields} onIndexChanged={handleTabClick} />
      </TabNavigationWrapper>
      <div style={{ backgroundColor: color.surface.offWhite1 }}>
        <MasterInformationWrapper>
          <MasterImg alt="profile" src={picture[masterIntroduce.image]} />
          <IntroduceWrapper>
            <Introduce>
              <NicknameWrapper>
                <Typography type={isMobile ? "SHLBold" : "HLBold"}>
                  {masterIntroduce.name}
                </Typography>
                <MasterIntroduceWrapper>
                  <Typography type={isMobile ? "XSBody" : "SBody"}>
                    {masterIntroduce.introduce}
                  </Typography>
                </MasterIntroduceWrapper>
              </NicknameWrapper>
              <MasterNutshellWrapper>
                <Typography type={isMobile ? "SHLBold" : "MBold"}>
                  {masterIntroduce.nutshell}
                </Typography>
              </MasterNutshellWrapper>
              <CareerWrapper>
                {masterIntroduce.careers?.map((career) => (
                  <li key={career}>
                    <Typography
                      type={isMobile ? "XSBody" : "SBody"}
                      style={{
                        display: "inline",
                        verticalAlign: "middle",
                        color: color.greyScale.grey1,
                      }}
                    >
                      {career}
                    </Typography>
                  </li>
                ))}
              </CareerWrapper>
            </Introduce>
            {masterIntroduce.schedules && (
              <ScheduleWrapper>
                <ScheduleTitleWrapper>
                  <Typography type="MBold">{TITLE.SCHEDULE}</Typography>
                </ScheduleTitleWrapper>
                <ScheduleList>
                  {masterIntroduce.schedules.map(({ image, title, subtitle, path }) => (
                    <li key={title}>
                      <Schedule to={path}>
                        <CourseImage src={thumbnails[image]} alt="course" />
                        <CourseTitleWrapper>
                          <TitleWrapper>
                            <Typography type="XSBody">{title}</Typography>
                          </TitleWrapper>
                          <SubtitleWrapper>
                            <Typography type="SBold">{subtitle}</Typography>
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

        {/* 하드코딩 */}
        {masterIntroduce.name === "호눅스" && (
          <MasterInformationWrapper>
            <MasterImg alt="profile" src={picture["dangle"]} />
            <IntroduceWrapper>
              <Introduce>
                <NicknameWrapper>
                  <Typography type={isMobile ? "SHLBold" : "HLBold"}>Dangle</Typography>
                  <MasterIntroduceWrapper>
                    <Typography type={isMobile ? "XSBody" : "SBody"}>
                      당글, 웹 백엔드 마스터
                    </Typography>
                  </MasterIntroduceWrapper>
                </NicknameWrapper>
                <MasterNutshellWrapper>
                  <Typography type={isMobile ? "SHLBold" : "MBold"}>
                    “개발에 정답은 없다고 생각합니다. 현재 상황에서 최선의 답을 찾을 뿐."
                  </Typography>
                </MasterNutshellWrapper>
                <CareerWrapper>
                  {dangleCareers?.map((career) => (
                    <li key={career}>
                      <Typography
                        type={isMobile ? "XSBody" : "SBody"}
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          color: color.greyScale.grey1,
                        }}
                      >
                        {career}
                      </Typography>
                    </li>
                  ))}
                </CareerWrapper>
              </Introduce>
            </IntroduceWrapper>
          </MasterInformationWrapper>
          /* 하드코딩 */
        )}
      </div>
    </MasterWrapper>
  );
};

const MasterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    padding-bottom: 12rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding-bottom: 18rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding-bottom: 18rem;
  }
`;

const MasterCourseIntroduceWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
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
    padding-bottom: 4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding-bottom: 3rem;
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
  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 8.2rem;
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
  @media ${({ theme }) => theme.device.tablet} {
    padding: 3.2rem 8rem;
    margin: 0 auto;
    & > *:not(:last-child) {
      margin-right: 2.4rem;
    }
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
  @media ${({ theme }) => theme.device.tablet} {
    width: 21.3rem;
    height: 21.3rem;
    border-radius: 1.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 41rem;
    height: 41rem;
    border-radius: 1.6rem;
  }
`;

const IntroduceWrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
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
  @media ${({ theme }) => theme.device.tablet} {
    & > *:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
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
  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
    align-items: flex-end;
    justify-content: flex-start;
  }
  @media ${({ theme }) => theme.device.desktop} {
    height: auto;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

const MasterIntroduceWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 0.8rem;
  }
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
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 0.8rem;
    list-style-position: inside;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-left: 0.8rem;
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
`;

const ScheduleTitleWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 2.4rem 0 1.6rem 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 3.2rem 0 2.4rem 0;
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
  @media ${({ theme }) => theme.device.tablet} {
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
        border-bottom: 0.1rem solid ${({ theme: { color } }) => color.black};
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
  color: ${({ theme: { color } }) => color.black};
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
