import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Banner } from ".";
import BannerDocs from "./Banner.docs.mdx";

export default {
  title: "pagecomponent/main/Banner",
  component: Banner,
  parameters: {
    docs: {
      page: BannerDocs,
    },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Default = Template.bind({});
