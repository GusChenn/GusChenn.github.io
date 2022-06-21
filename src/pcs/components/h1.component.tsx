import React from 'react';
import styled from "styled-components";

export const H1Styled = styled.h1`
  font-size: 4em;
  text-align: center;
  padding: 20px;
`;

interface IH1Props {
  content: string;
};

const H1 = ({ content }: IH1Props): React.ReactElement => {
  return (
    <H1Styled>
      {content}
    </H1Styled>
  );
};

export default H1;
