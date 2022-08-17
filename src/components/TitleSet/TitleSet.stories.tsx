import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TitleSet } from ".";

export default {
  title: "component/TitleSet",
  component: TitleSet,
} as ComponentMeta<typeof TitleSet>;

const Template: ComponentStory<typeof TitleSet> = (args) => <TitleSet {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "무엇이 다른가요?",
  subtitle: "코드스쿼드는",
};

export const BigSubtitle = Template.bind({});
BigSubtitle.args = {
  title: "무엇이 다른가요?",
  subtitle: "코드스쿼드는",
  bigSubtitle: true,
};

export const SubtitleOnly = Template.bind({});
SubtitleOnly.args = {
  subtitle: "코드스쿼드 과정 바로 보기",
};
