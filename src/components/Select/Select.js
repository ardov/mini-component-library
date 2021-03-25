import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {displayedValue}
      <Chevron id="chevron-down" />
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  &:hover {
    color: ${COLORS.black};
  }
  &:focus-within {
    outline: 5px solid blue;
  }
`;
const Chevron = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 8px;
`;
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export default Select;
