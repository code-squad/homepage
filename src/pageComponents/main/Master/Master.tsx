import React from "react";
import styled from "styled-components";
// Type
import { MasterType } from "@type/Master";
// Theme
import theme from "styles/theme";
// Typography
import { LBody, MBody, SDisplay, XLBody, XSBody, SBody } from "typography";
// Components
import { TabNavigationBar } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

interface IMaster {
  masters: MasterType[];
}

const Master: React.FC<IMaster> = ({ masters }) => {
  const fields = masters.map((master) => master.field!);

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
          실무 경험이 풍부하고 소프트웨어 교육을 잘 이해하는 마스터들이 여러분의 성장을 위해
          멘토링을 지원합니다.
        </MBody>
        <TabNavigationBar titles={fields} onIndexChanged={handleTabClick} />
      </div>
      <div style={{ width: "100%", backgroundColor: theme.color.greyScale.offWhite }}>
        <IntroduceWrapper>
          <MasterImg />
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
                <li key={career}>
                  <SBody style={{ display: "inline", verticalAlign: "middle" }}>{career}</SBody>
                </li>
              ))}
            </CareerWrapper>
          </Introduce>
        </IntroduceWrapper>
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
  width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const IntroduceWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  padding: 5.6rem 18.9rem;
  gap: 7.8rem;
  margin: 0 auto;
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

export default Master;
