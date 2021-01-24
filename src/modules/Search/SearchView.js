import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';

const SearchView = ({ value, onChange }) => (
  <Wrapper>
    <CustomInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Wyszukaj pytanie"
    />
  </Wrapper>
);

const CustomInput = styled(Input)`
  border: 0;
  border-bottom: 1px solid #dddddd;
  outline: none;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
  max-width: 400px;
  width: 100%;
  padding: 5px;
`;

export default SearchView;
