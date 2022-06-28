import React from 'react';
import styled from "styled-components";

const H6Styled = styled.h6`
  position: absolute;
  color: #bebebe;
  font-size: 1em;
`;

interface IH6Props {
  content: string;
};

const H6 = ({ content }: IH6Props): React.ReactElement => {
  return (
    <H6Styled>
      {content}
    </H6Styled>
    
  );
};

export default H6;
