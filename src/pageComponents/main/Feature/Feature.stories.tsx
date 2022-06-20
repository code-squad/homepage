import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Feature } from ".";
import FeatureDocs from "./Feature.docs.mdx";

export default {
  title: "pagecomponent/main/Feature",
  component: Feature,
  parameters: {
    docs: {
      page: FeatureDocs,
    },
  },
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = () => <Feature />;

export const Default = Template.bind({});
