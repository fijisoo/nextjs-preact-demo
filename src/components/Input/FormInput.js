import React from 'react'
import styled from 'styled-components';

const FormInput = styled.input`
  display: flex;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 3px solid deeppink;
  transition: all 0.3s ease-in;
  &:active{
    border-bottom: 3px solid aqua;
  }
`;

export default FormInput;
