import React from "react";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { Interview } from "components/Interview";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { useResponsive } from "lib/hooks";

const GraduateReview: React.FC<{
  graduateReviewInfo: { interviews: InterviewType[] };
  courseTitle: string;
}> = ({ graduateReviewInfo, courseTitle }) => {
  const { isMobile } = useResponsive();

  const { interviews } = graduateReviewInfo;

  return (
    <div style={{ marginTop: isMobile ? "12rem" : "18rem" }}>
      <Interview
        subtitle={`${courseTitle}${SUBTITLE.CODE_TOGETHER_INTERVIEW}`}
        title={TITLE.STUDENT_INTERVIEW}
        {...{ interviews }}
      />
    </div>
  );
};

export default GraduateReview;
