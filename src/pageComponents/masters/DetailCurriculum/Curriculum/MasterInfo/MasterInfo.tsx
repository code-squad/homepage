import React from "react";
import styled from "styled-components";
// Typography
import { HLBold, SHLBold, MBody, SBody } from "typography";
// Components
import { Avatar } from "components";
// Assets
import avatars from "assets/img/avatars";

type mastersInfo = {
  avatar: keyof typeof avatars;
  name: string;
  position: string;
  introduce: string;
  nutshell: string;
};
interface IMasterInfo {
  masterInfo: mastersInfo;
}

const MasterInfo: React.FC<IMasterInfo> = ({ masterInfo }) => {
  const { name, position, nutshell, avatar, introduce } = masterInfo;

  return (
    <MasterInfoWrapper>
      <AvatarWrapper>
        <Avatar key={avatars[avatar]} width="12rem" height="12rem" src={avatars[avatar]} />
      </AvatarWrapper>
      <InfoWrapper>
        <NameWrapper>
          <HLBold>{name}</HLBold>
          <PositionWrapper>
            <SBody>{position}</SBody>
          </PositionWrapper>
        </NameWrapper>
        <NutshellWrapper>
          <SHLBold>{nutshell}</SHLBold>
        </NutshellWrapper>
        <IntroduceWrapper>
          <MBody>{introduce}</MBody>
        </IntroduceWrapper>
      </InfoWrapper>
    </MasterInfoWrapper>
  );
};

const MasterInfoWrapper = styled.li`
  display: flex;
`;
const AvatarWrapper = styled.div`
  width: 12rem;
  height: 12rem;
`;
const InfoWrapper = styled.div`
  margin-left: 4rem;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${({ theme: { color } }) => color.black};
`;
const PositionWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  padding-left: 0.8rem;
`;
const NutshellWrapper = styled.div`
  margin-top: 1.6rem;
  color: ${({ theme: { color } }) => color.black};
`;
const IntroduceWrapper = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

export default MasterInfo;
