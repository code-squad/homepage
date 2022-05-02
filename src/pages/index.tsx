import React from "react";
// API-Calls
import GlobalTheme from "../lib/context/GlobalTheme";
import { Avatar, InterviewBox } from "components";
import { DropdownItem } from "components/DropdownItem";

const IndexPage = () => {
  const props = {
    category: "교육과정",
    title: "코드스쿼드는 온라인 수업만 진행하나요?",
    content: "마스터즈 코스는 온오프라인 공간을 모두 활용해 학습하는 것을 지향합니다.",
    editDate: "2019-05-04",
  };
  return (
    <GlobalTheme>
      <main>
        <DropdownItem {...props} />
      </main>
    </GlobalTheme>
  );
};

export default IndexPage;
