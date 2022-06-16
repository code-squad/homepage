import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { StudyFeature } from ".";
import StudyFeatureDocs from "./StudyFeature.docs.mdx";

export default {
  title: "pagecomponent/code-together/StudyFeature",
  component: StudyFeature,
  parameters: {
    docs: {
      page: StudyFeatureDocs,
    },
  },
} as ComponentMeta<typeof StudyFeature>;

const Template: ComponentStory<typeof StudyFeature> = () => <StudyFeature />;

export const Default = Template.bind({});
