import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { MasterType } from "@type/Master";
// Theme
import theme from "styles/theme";
// Typography
import { LBody, MBody, SBody, SDisplay, XLBody, XSBody } from "typography";
// Components
import { TabNavigationBar } from "components";
// Assets
import icons from "assets/images/icons";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";

const Master: React.FC = () => {
  const data = useStaticQuery(MasterQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { masters }: { masters: MasterType[] } = frontmatter;

  const fields = masters.map((master) => master.field);

  const [masterIntroduce, setMasterIntroduce] = React.useState<MasterType>(masters[0]);

  const handleTabClick = (index: number) => {
    setMasterIntroduce(masters[index]);
  };

  return (
    <MasterWrapper>
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
          {DESCRIPTION.MASTER}
        </MBody>
        <TabNavigationBar titles={fields} onIndexChanged={handleTabClick} />
      </div>
      <div style={{ backgroundColor: theme.color.greyScale.offWhite }}>
        <MasterInformationWrapper>
          <MasterImg />
          <IntroduceWrapper>
            <Introduce>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <XLBody>{masterIntroduce.name}</XLBody>
                <XSBody style={{ color: `${theme.color.greyScale.grey2}`, paddingLeft: "0.8rem" }}>
                  {masterIntroduce.description}
                </XSBody>
              </div>
              <MBody bold>{masterIntroduce.introduce}</MBody>
              <CareerWrapper>
                {masterIntroduce.careers?.map((career) => (
                  <li>
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
                <MBody bold style={{ padding: "3.2rem 0 2.4rem 0" }}>
                  {TITLE.SCHEDULE}
                </MBody>
                <ScheduleList>
                  {masterIntroduce.schedules.map(({ image, title, subtitle }) => (
                    <Schedule>
                      <CourseImage src={icons[image]} />
                      <CourseTitleWrapper>
                        <XSBody>{title}</XSBody>
                        <MBody>{subtitle}</MBody>
                      </CourseTitleWrapper>
                    </Schedule>
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
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const MasterInformationWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  padding: 5.6rem 18.9rem;
  gap: 7.8rem;
  margin: 0 auto;
`;

const IntroduceWrapper = styled.div`
  height: 43.6rem;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Introduce = styled.div`
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

const ScheduleWrapper = styled.div`
  width: 52rem;
  border-top: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
`;

const ScheduleList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const Schedule = styled.li`
  width: 24.8rem;
  display: flex;
  gap: 1.6rem;
`;

const CourseImage = styled.img`
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid black;
  border-radius: 0.8rem;
  border-color: ${({ theme: { color } }) => color.greyScale.grey3};
`;

const CourseTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MasterQuery = graphql`
  query MasterQuery {
    mdx(frontmatter: { templateKey: { eq: "main_masters" } }) {
      frontmatter {
        masters {
          image
          field
          name
          description
          introduce
          careers
          schedules {
            title
            subtitle
            image
          }
        }
      }
    }
  }
`;

export default Master;
