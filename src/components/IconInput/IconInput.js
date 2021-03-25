import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: { padding: 4, iconSize: 16, stroke: 1, fontSize: 16 },
  large: { padding: 8, iconSize: 24, stroke: 2, fontSize: 18 },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      style={{
        "--iconSize": styles.iconSize + "px",
        "--fontSize": styles.fontSize / 16 + "rem",
        "--verticalPadding": styles.padding + "px",
        "--width": width + "px",
        "--stroke": styles.stroke + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon size={styles.iconSize} strokeWidth={styles.stroke} id={icon} />
      </IconWrapper>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--iconSize);
`;
const Input = styled.input`
  background-color: transparent;
  padding: var(--verticalPadding) 0;
  padding-left: calc(var(--iconSize) + 8px);
  font-size: var(--fontSize);
  border: none;
  color: ${COLORS.gray700};
  width: var(--width);
  border-bottom: var(--stroke) solid ${COLORS.black};

  :hover {
    color: ${COLORS.black};
  }

  ::placeholder {
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
