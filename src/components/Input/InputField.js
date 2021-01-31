import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import Separator from "../Separator";

const InputField = ({ label, handleValue, type = 'text', className }) => {
  const [value, setValue] = useState("");
  const [isActive, setActive] = useState(false);

  const handleInputClick = () => {
    setActive(true);
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    handleValue(e.currentTarget.value);
  };

  return (
    <FieldWrapper className={className}>
      <InputLabel isActive={isActive}>
        <InputLabelText>{label}</InputLabelText>
        <FormInputStyled
          type={type}
          onChange={handleChange}
          value={value}
          onClick={handleInputClick}
        />
      </InputLabel>
      <Separator />
    </FieldWrapper>
  );
};

export default InputField;

const FieldWrapper = styled.label`
  display: inline-flex;
  position: relative;
  background: var(--form-input-background);
  height: 40px;
  width: 247px;
`;

const FormInputStyled = styled(Input)`
  margin-left: 0.5em;
  margin-bottom: 5px;
`;

const InputLabel = styled.label`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  margin-left: 8px;
`;
const InputLabelText = styled.p`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  flex-grow: 1;
`;
