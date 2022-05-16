import React from "react";
import styled from "styled-components";

// Components
import { DropdownItem, SectionTitle } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const FAQ: React.FC = ({}) => {
  return (
    <FAQWrapper>
      <SectionTitle subTitle={SUBTITLE.FAQ} title={TITLE.FAQ} />
      <DropdownWrapper>
        <DropdownItem
          category="교육과정"
          title="코드스쿼드는 온라인 수업만 진행하나요?"
          content="네"
        />
        <DropdownItem
          category="교육과정"
          title="코드스쿼드는 온라인 수업만 진행하나요?"
          content="네"
        />
      </DropdownWrapper>
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div`
  margin-top: 16rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
`;
const DropdownWrapper = styled.div`
  margin-top: 8rem;
`;
export default FAQ;
