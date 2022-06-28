import React from 'react';
import styled from "styled-components";

const H1Styled = styled.h1`
  position: absolute;
  top: 5%;
  left: 15px;
  width: 20%;
  font-size: 2.3em;
  color: #bebebe;
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
