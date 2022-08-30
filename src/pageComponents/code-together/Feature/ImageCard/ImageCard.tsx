import React from "react";
import styled from "styled-components";
// Typography
import { MBody, HLBold } from "typography/";

interface IImageCard {
  title: string;
  img: string;
  descriptions: string[];
  medium?: boolean;
}

const ImageCard: React.FC<IImageCard> = ({ title, descriptions, img, medium }) => {
  return (
    <CardWrapper {...{ medium }}>
      <CardImg alt={`card-img-${title}`} src={img} />
      <Title>
        <HLBold>{title}</HLBold>
      </Title>
      <DescriptionList>
        {descriptions.map((description) => (
          <li key={description}>
            <MBody style={{ display: "inline" }}>{description}</MBody>
          </li>
        ))}
      </DescriptionList>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ medium?: boolean }>`
  width: ${({ medium }) => (medium ? "41rem" : "30.2rem")};
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  border-radius: 1.6rem;
  width: 18rem;
  height: 13rem;
`;
const Title = styled.h4`
  margin-top: 3.2rem;
  color: ${({ theme: { color } }) => color.black};
`;
const DescriptionList = styled.ul`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: inside;
`;

export default ImageCard;
