import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { DetailCurriculum } from ".";
import DetailCurriculumDocs from "./DetailCurriculum.docs.mdx";

export default {
  title: "pagecomponent/code-together/javascript/DetailCurriculum",
  component: DetailCurriculum,
  parameters: {
    docs: {
      page: DetailCurriculumDocs,
    },
  },
} as ComponentMeta<typeof DetailCurriculum>;

const Template: ComponentStory<typeof DetailCurriculum> = () => <DetailCurriculum />;

export const Default = Template.bind({});
