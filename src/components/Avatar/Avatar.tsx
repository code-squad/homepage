import React from "react";
import blankProfile from "assets/images/blank-profile.svg";
import styled from "styled-components";

const Avatar: React.FC<{ src: string }> = ({ src }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return <ImgProfile src={imgSrc} alt="avatar" onError={() => setImgSrc(blankProfile)} />;
};

const ImgProfile = styled.img`
  border: ${({ theme: { color } }) => `.2rem solid ${color.greyScale.black}`};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
`;

export default Avatar;
