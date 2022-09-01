import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography/";

interface IImageCard {
  description?: string;
  descriptions?: string[];
  title: string;
  img: string;
}

const VerticalImageCard: React.FC<IImageCard> = ({ img, title, description, descriptions }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <CardWrapper
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <CardImg alt={`card-img-${title}`} src={img} />
        <Title>
          <Typography type="SHLBold">{title}</Typography>
        </Title>
      </div>
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
        <Description {...{ open }}>
          <Typography type="MBody">{description}</Typography>
        </Description>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 100%;
  cursor: pointer;
  border-bottom: ${({ theme: { color } }) => `0.1rem solid ${color.greyScale.grey4}`};
`;

const CardImg = styled.img`
  width: 7rem;
  height: 5.1rem;
`;
const Title = styled.h4`
  margin-left: 1.2rem;
  vertical-align: middle;
  color: ${({ theme: { color } }) => color.black};
`;
const Description = styled.div<{ open?: boolean }>`
  margin-top: ${({ open }) => (open ? "2rem" : "0")};
  max-height: ${({ open }) => (open ? "fit-content" : "0")};
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  overflow: hidden;
`;

const DescriptionList = styled.ul<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ open }) => (open ? "2rem" : "0")};
  max-height: ${({ open }) => (open ? "fit-content" : "0")};
  overflow: hidden;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: inside;
  margin-left: 1.3rem;
  & > li {
    text-indent: -1.35rem;
    padding-left: 1.35rem;
  }
`;

export default VerticalImageCard;
