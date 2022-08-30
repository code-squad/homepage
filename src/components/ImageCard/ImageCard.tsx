import React from "react";
import styled from "styled-components";
// Typography
import { MBody, HLBold } from "typography/";

interface IImageCard {
  description: string;
  title: string;
  img: string;
  medium?: boolean;
}

const ImageCard: React.FC<IImageCard> = ({ title, description, img, medium }) => {
  return (
    <CardWrapper {...{ medium }}>
      <CardImg alt={`card-img-${title}`} src={img} />
      <Title>
        <HLBold>{title}</HLBold>
      </Title>
      <Description>
        <MBody>{description}</MBody>
      </Description>
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
const Description = styled.div`
  margin-top: 1.6rem;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

export default ImageCard;
