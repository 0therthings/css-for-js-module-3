import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  // alert(displayedValue);

  // onChange = (event) => {
  //   value = event.target.value;
  //   alert(displayedValue);
  // };

  return (
    <SelectWrapper>
      <Chevron id={'chevron-down'} size="20" strokeWidth="2"></Chevron>
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${ COLORS.gray700 };

  &:hover {
    color: revert;
  }
`;

const CustomSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  // width: 50px;
  font-size: 1rem;
  color: currentColor;
  background-color: ${ COLORS.transparentGray15 };
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  cursor: pointer;

  &:hover {
    color: ${ COLORS.black };
  }
  `;

const Chevron = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  pointer-events: none;
`;

export default Select;
