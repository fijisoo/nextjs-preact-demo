import React, { useState } from 'react';
import styled from 'styled-components';
import CollapserContent from './CollapserContent';
import CollapserHeader from './CollapserHeader';

const Collapser = ({
  collapserHeader,
  collapserContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapserWrapper>
      <CollapserHeader
        background={collapserContent ? '#00FF7F' : '#FF6347'}
        type="button"
        isOpen={isOpen}
        onClick={() => collapserContent && setIsOpen(!isOpen)}
      >
        {collapserHeader}
      </CollapserHeader>
      {isOpen && collapserContent && (
        <CollapserContent>{collapserContent}</CollapserContent>
      )}
    </CollapserWrapper>
  );
};

const CollapserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default Collapser;
