import React, {useState} from 'react';
import FormInput from "./FormInput";
import styled from "styled-components";

const InputField = ({label, handleValue}) => {
    const [value, setValue] = useState('');
    const [isActive, setActive] = useState(false);

    const handleInputClick = () => {
        setActive(true)
    }

    const handleChange = (e) => {
        setValue(e.currentTarget.value);
        handleValue(e.currentTarget.value)
    }

    return (
    <FieldWrapper>
        <FormInputStyled onChange={handleChange} value={value} onClick={handleInputClick}/>
        <InputLabel isActive={isActive}>{label}</InputLabel>
    </FieldWrapper>)
}

export default InputField;

const FieldWrapper = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
`

const FormInputStyled = styled(FormInput)`
  & + label{
    top: 0;
    transition: all 0.1s ease-in;
  }
  &:active + label, &:focus + label{
    top: -20px;
    transform-origin: left top;
    transform: scale(0.9);
  }
`

const InputLabel = styled.label`
  display: flex;
  position: absolute;
  width: 100%;
  z-index: -1;
`
