import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { TeamCulture } from ".";
import TeamCultureDocs from "./TeamCulture.doc.mdx";

export default {
  title: "pagecomponent/team-culture/TeamCulture",
  component: TeamCulture,
  parameters: {
    docs: {
      page: TeamCultureDocs,
    },
  },
} as ComponentMeta<typeof TeamCulture>;

const Template: ComponentStory<typeof TeamCulture> = () => <TeamCulture />;

export const Default = Template.bind({});
