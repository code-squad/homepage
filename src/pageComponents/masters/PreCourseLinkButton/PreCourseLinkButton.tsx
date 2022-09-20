import React from "react";
import styled from "styled-components";
// Components
import { Registration } from "components";

const PreCourseLinkButton: React.FC = () => {
  const registrations = [
    {
      title: "프리코스 알아보기",
      description: "프로그래밍 기초를 다지며 마스터즈를 준비할 수 있는 과정",
      caption: "",
      path: "/pre-course",
    },
  ];

  return (
    <PreCourseLinkBurronWrapper>
      <Registration {...{ registrations }} />;
    </PreCourseLinkBurronWrapper>
  );
};

const PreCourseLinkBurronWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: -4rem;
  }
`;

export default PreCourseLinkButton;
