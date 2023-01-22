/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--dataHeight": 8 + "px",
    "--wrapperPadding": 0,
    "--borderRadius": 4 + "px"
  },
  medium: {
    "--dataHeight": 12 + "px",
    "--wrapperPadding": 0,
    "--borderRadius": 4 + "px"
  },
  large: {
    "--dataHeight": 16 + "px",
    "--wrapperPadding": 4 + "px",
    "--borderRadius": 8 + "px"
  }
};

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper style={ SIZES[size] }>
      <ProgressProof max={ 100 } value={ value }></ProgressProof>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--wrapperPadding);
  border-radius: var(--borderRadius);
`;

const ProgressProof = styled.progress`
  display: block;

  &[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--dataHeight);
  }

  &[value]::-webkit-progress-bar {
    background-color: transparent;
    border-radius: 4px;
    overflow: hidden
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }

`;

export default ProgressBar;
