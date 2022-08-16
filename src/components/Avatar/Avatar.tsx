import React from "react";
import styled from "styled-components";
// Assets
import avatars from "assets/img/avatars";

interface IAvatarProps {
  src: string;
  width?: string;
  height?: string;
}

const Avatar: React.FC<IAvatarProps> = ({ src, width, height }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <ImgProfile
      {...{ width, height }}
      src={imgSrc}
      alt="avatar"
      onError={() => setImgSrc(avatars.profileBlank)}
    />
  );
};

const ImgProfile = styled.img<{ width?: string; height?: string }>`
  border: ${({ theme: { color } }) => `.2rem solid ${color.blackAndWhite.black}`};
  border-radius: 50%;
  width: ${({ width }) => (width ? width : "8rem")};
  height: ${({ height }) => (height ? height : "8rem")};
`;

export default Avatar;
