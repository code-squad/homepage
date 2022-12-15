import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Components
import { Avatar } from "components";
// Assets
import pictures from "assets/img/picture";
// Libs
import { useResponsive } from "lib/hooks";
import { MasterInfoType } from "@type/Master";

const MasterInfo: React.FC<{ masterInfo: MasterInfoType }> = ({ masterInfo }) => {
  const { isMobile } = useResponsive();
  const { name, position, nutshell, picture, introduce } = masterInfo;

  return (
    <MasterInfoWrapper>
      <AvatarWrapper>
        <Avatar
          key={pictures[picture]}
          width={isMobile ? "8rem" : "12rem"}
          height={isMobile ? "8rem" : "12rem"}
          src={pictures[picture]}
        />
      </AvatarWrapper>
      <InfoWrapper>
        <NameWrapper>
          <Typography type={isMobile ? "SHLBold" : "HLBold"}>{name}</Typography>
          <PositionWrapper>
            <Typography type="SBody">{position}</Typography>
          </PositionWrapper>
        </NameWrapper>
        <NutshellWrapper>
          <Typography type="SHLBold">{nutshell}</Typography>
        </NutshellWrapper>
        <IntroduceWrapper>
          <Typography type="MBody">{introduce}</Typography>
        </IntroduceWrapper>
      </InfoWrapper>
    </MasterInfoWrapper>
  );
};

const MasterInfoWrapper = styled.li`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;
const AvatarWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    width: 8rem;
    height: 8rem;
    position: absolute;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 12rem;
    height: 12rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 12rem;
    height: 12rem;
  }
`;
const InfoWrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-left: 4rem;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    height: 8rem;
    margin-left: 9.8rem;
    flex-direction: column;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: auto;
    align-items: flex-end;
  }
  @media ${({ theme }) => theme.device.desktop} {
    height: auto;
    align-items: flex-end;
  }
`;
const PositionWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 0.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding-left: 0.8rem;
  }
`;
const NutshellWrapper = styled.div`
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 1.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 1.6rem;
  }
`;
const IntroduceWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 1.6rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 0.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 0.8rem;
  }
`;

export default MasterInfo;
