import React from 'react';
import styled from 'styled-components';

const CollapserHeader = ({
  background,
  children,
  onClick,
  type = 'button',
  isOpen,
}) => (
  <CollapserHeaderWrapper onClick={onClick} type={type}>
    <CollapserText background={background} isOpen={isOpen}>
      {children}
    </CollapserText>
  </CollapserHeaderWrapper>
);

const CollapserHeaderWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const CollapserText = styled.span`
  display: flex;
  align-items: center;
  text-align: start;
  border-radius: 4px;
  padding: 10px 20px;
  &:hover:before {
    box-shadow: inset 0 0 0 5px black, inset 0 0 0 10px white;
  }
  &:before {
    display: flex;
    flex-shrink: 0;
    content: '';
    margin-right: 10px;
    ${({ isOpen }) =>
      isOpen && 'box-shadow: inset 0 0 0 5px black, inset 0 0 0 10px white'};
    background: ${(props) => props.background};
    width: 20px;
    height: 20px;
  }
`;

export default CollapserHeader;
