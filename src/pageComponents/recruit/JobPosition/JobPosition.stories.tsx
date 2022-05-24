import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { JobPosition } from ".";
import JobPositionDocs from "./JobPosition.docs.mdx";

export default {
  title: "pagecomponent/recruit/JobPosition",
  component: JobPosition,
  parameters: {
    docs: {
      page: JobPositionDocs,
    },
  },
} as ComponentMeta<typeof JobPosition>;

const Template: ComponentStory<typeof JobPosition> = () => <JobPosition />;

export const Default = Template.bind({});
