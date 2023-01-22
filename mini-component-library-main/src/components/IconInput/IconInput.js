import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  "small": {
    "--borderWidth": 1 + "px",
    "--fontSize": 14 + "px",
    "--padding": "4px 4px 2px 24px",
    "--iconWidth": 16 + "px"
  },
  "large": {
    "--borderWidth": 2 + "px",
    "--fontSize": 18 + "px",
    "--padding": "8px 8px 6px 36px",
    "--iconWidth": 24 + "px"
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder
}) => {
  return (
    <InputWrapper style={ SIZES[size] }>
      <label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type="text" placeholder={placeholder} style={{"--inputWidth": width + "px"}} />
      </label>
      <InputIcon id={icon} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: min-content;
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid black;
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};
  padding: var(--padding);
  width: var(--inputWidth);
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline-offset: 3px;
  }
  ${InputWrapper}:hover & {
    color: ${ COLORS.black };
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  color: ${COLORS.gray700};
  width: var(--iconWidth);
  height: var(--iconWidth);
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
  & svg {
    width: var(--iconWidth);
    height: var(--iconWidth);
  }
  ${InputWrapper}:hover & {
    color: ${ COLORS.black };
  }
`;

export default IconInput;
