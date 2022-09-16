import React from "react";
// Type
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Story-Component
import { Registration } from ".";
import RegistrationDocs from "./Registration.docs.mdx";

export default {
  title: "pagecomponent/pre-course/Registration",
  component: Registration,
  parameters: {
    docs: {
      page: RegistrationDocs,
    },
  },
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = () => <Registration />;

export const Default = Template.bind({});
