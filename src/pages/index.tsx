import React from "react";
// API-Calls
import GlobalTheme from "../lib/context/GlobalTheme";
import { Avatar, InterviewBox } from "components";

const IndexPage = () => {
  return (
    <GlobalTheme>
      <main>
        <Avatar src="www.naver.com" />
        <InterviewBox
          writerPhoto="www.naver.com"
          nutshell="첫 문장"
          content="내용"
          writer="작성자"
          writerInfo="작성자 정보2"
        />
      </main>
    </GlobalTheme>
  );
};

export default IndexPage;
