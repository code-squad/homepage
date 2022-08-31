import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography/";
// Components
import { VerticalImageCard } from "./VerticalImageCard";

interface IImageCard {
  description?: string;
  descriptions?: string[];
  title: string;
  img: string;
  medium?: boolean;
  vertical?: boolean;
}

const ImageCard: React.FC<IImageCard> = ({
  img,
  title,
  description,
  descriptions,
  medium,
  vertical,
}) => {
  const [open, setOpen] = React.useState(true);

  if (vertical) return <VerticalImageCard {...{ img, title, description, descriptions }} />;
  return (
    <CardWrapper
      {...{ medium }}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <CardImg alt={`card-img-${title}`} src={img} />
      <Title>
        <Typography type="SHLBold">{title}</Typography>
      </Title>
      {descriptions ? (
        <DescriptionList {...{ open }}>
          {descriptions.map((description) => (
            <li key={description}>
              <Typography type="MBody" style={{ display: "inline", verticalAlign: "middle" }}>
                {description}
              </Typography>
            </li>
          ))}
        </DescriptionList>
      ) : (
        <Description>
          <Typography type="MBody">{description}</Typography>
        </Description>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ medium?: boolean }>`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: ${({ medium }) => (medium ? "41rem" : "30.2rem")};
  }
`;

const CardImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 14rem;
    height: 10.1rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 18rem;
    height: 13rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 18rem;
    height: 13rem;
  }
`;
const Title = styled.h4`
  margin-top: 3.2rem;
  color: ${({ theme: { color } }) => color.black};
`;
const Description = styled.div`
  margin-top: 1.6rem;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

const DescriptionList = styled.ul<{ open?: boolean }>`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: inside;
  margin-left: 1.3rem;
  & > li {
    text-indent: -1.35rem;
    padding-left: 1.35rem;
  }
`;

export default ImageCard;
