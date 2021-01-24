import React, { useState } from 'react';
import styled from 'styled-components';

const SignleTag = ({
  children,
  onClick,
  tagName,
}) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
    onClick(tagName);
  };

  return (
    <TagContent isActive={isActive} onClick={handleClick}>
      {tagName}
      {children}
    </TagContent>
  );
};

const TagContent = styled.span`
  display: flex;
  position: relative;
  flex: 0;
  padding: 5px 16px;
  margin: 3px;
  background: ${({ isActive }) => (isActive ? '#82dbff' : '#ea8fff')};
  align-items: flex-start;
  justify-content: flex-start;
  filter: blur(0.5px);
  border: 2px solid #6e0096;
  height: fit-content;
  border-radius: 15px;
  opacity: 0.5;
  transition: all 0.1s ease-in;
  &:hover {
    cursor: pointer;
    opacity: 1;
    border: 2px solid ${({ isActive }) => (isActive ? '#82dbff' : '#ea8fff')};
    filter: blur(0);
  }
`;
export default SignleTag;
