import styled from "styled-components";
import React from "react";

export const Button = ({ iconComponent = null, children, center = false, onClick, type = 'button', className }) => (
  <ButtonWrapper onClick={onClick} type={type} className={className}>
    {iconComponent}
    <ButtonText center={center} iconComponent={!!iconComponent}>{children}</ButtonText>
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  display: inline-flex;
  position: relative;
  flex-wrap: nowrap;
  justify-content: flex-start;
  height: 30px;
  background: var(--button-grey);
  outline: none;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
`;

const ButtonText = styled.p`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-left: ${props => props.iconComponent ? -20 : 0}px;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  width: 100%;
`;
