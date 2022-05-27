import React from "react";
import styled from "styled-components";
// Type
import { Meta } from "@storybook/react";
// Typography
import { XSBody } from "typography";
// Story-Image
import avatars from "assets/img/avatars";
import icons from "assets/img/icons";
import illusts from "assets/img/illusts";
import pictures from "assets/img/picture";

export default {
  title: "Home/assets/img",
} as Meta;

const avatarKeys = Object.keys(avatars);
const iconKeys = Object.keys(icons);
const illustKeys = Object.keys(illusts);
const pictureKeys = Object.keys(pictures);

const ImgList: React.FC<{ imgObj: any; imageKeys: string[] }> = ({ imgObj, imageKeys }) => {
  return (
    <ImgWrapper>
      {imageKeys.map((img: string) => (
        <div key={img} style={{ padding: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img style={{ border: "1px solid #000" }} src={imgObj[img]} />
          </div>
          <XSBody>{img}</XSBody>
        </div>
      ))}
    </ImgWrapper>
  );
};

export const Avatars = () => <ImgList imgObj={avatars} imageKeys={avatarKeys} />;

export const Icons = () => <ImgList imgObj={icons} imageKeys={iconKeys} />;

export const Illusts = () => <ImgList imgObj={illusts} imageKeys={illustKeys} />;

export const picture = () => <ImgList imgObj={pictures} imageKeys={pictureKeys} />;

const ImgWrapper = styled.div`
  display: flex;
  width: 120rem;
  flex-wrap: wrap;
`;
