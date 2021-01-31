import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Separator from "../../components/Separator";

export default ({ value, type = "text", onChange, placeholder, className }) => (
  <Wrapper className={className}>
    <CustomInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    <SeparatorStyled />
  </Wrapper>
);

const CustomInput = styled(Input)`
  border: 0;
  outline: none;
  background: none;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  &::placeholder {
    color: black;
  }
`;

const SeparatorStyled = styled(Separator)`
  width: calc(100% - 10px);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40px;
  width: 100%;
  background: var(--form-input-background);
`;
