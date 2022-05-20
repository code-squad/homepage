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
