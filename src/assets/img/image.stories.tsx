import React from "react";
// Type
import { Meta } from "@storybook/react";
// Story-Image
import avatars from "assets/img/avatars";
import icons from "assets/img/icons";
import illusts from "assets/img/illusts";
import pictures from "assets/img/picture";
import { XSBody } from "typography";
import styled from "styled-components";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Home/assets/img",
} as Meta;

const avatarKeys = Object.keys(avatars) as Array<keyof typeof avatars>;
const iconKeys = Object.keys(icons) as Array<keyof typeof icons>;
const illustKeys = Object.keys(illusts) as Array<keyof typeof illusts>;
const pictureKeys = Object.keys(pictures) as Array<keyof typeof picture>;

export const Avatars = () => (
  <ImgWrapper>
    {avatarKeys.map((avatar) => (
      <div style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <img style={{ border: "1px solid #000" }} src={avatars[avatar]} />
        </div>
        <XSBody>{avatar}</XSBody>
      </div>
    ))}
  </ImgWrapper>
);

export const Icons = () => (
  <ImgWrapper>
    {iconKeys.map((icon) => (
      <div style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <img style={{ border: "1px solid #000" }} src={icons[icon]} />
        </div>
        <XSBody>{icon}</XSBody>
      </div>
    ))}
  </ImgWrapper>
);

export const Illusts = () => (
  <ImgWrapper>
    {illustKeys.map((illust) => (
      <div style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <img style={{ border: "1px solid #000" }} src={illusts[illust]} />
        </div>
        <XSBody>{illust}</XSBody>
      </div>
    ))}
  </ImgWrapper>
);

export const picture = () => (
  <ImgWrapper>
    {pictureKeys.map((picture) => (
      <div style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <img style={{ border: "1px solid #000" }} src={pictures[picture]} />
        </div>
        <XSBody>{picture}</XSBody>
      </div>
    ))}
  </ImgWrapper>
);

const ImgWrapper = styled.div`
  display: flex;
  width: 120rem;
  flex-wrap: wrap;
`;
