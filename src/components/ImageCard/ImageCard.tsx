import React from "react";
import styled from "styled-components";
// Typography
import { MBody, HLBold } from "typography/";

interface IImageCard {
  description?: string;
  descriptions?: string[];
  title: string;
  img: string;
}

const ImageCard: React.FC<IImageCard> = ({ img, title, description, descriptions }) => {
  return (
    <CardWrapper>
      <CardImg alt={`card-img-${title}`} src={img} />
      <Title>
        <HLBold>{title}</HLBold>
      </Title>
      {descriptions ? (
        <DescriptionList>
          {descriptions.map((description) => (
            <li key={description}>
              <MBody style={{ display: "inline", verticalAlign: "middle" }}>{description}</MBody>
            </li>
          ))}
        </DescriptionList>
      ) : (
        <Description>
          <MBody>{description}</MBody>
        </Description>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  max-width: 30.2rem;
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

const DescriptionList = styled.ul`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: outside;
  margin-left: 2.3rem;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export default ImageCard;
